import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import { CSVLink, CSVDownload } from "react-csv";
import SupportModal from "./supportModal";

import "semantic-ui-css/semantic.min.css";
import { Segment, Grid, Button, Input, Checkbox } from "semantic-ui-react";

export default class DashwareHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 10,
      value: 0,
      adjustedCsvData: {},
      mappedValues: {},
      isModalOpen: false,
      useAlt: true,
    };
  }

  calculateDistance(lat2, lon2, alt2, previousObject) {
    const { lat: lat1, lon: lon1, alt: alt1 } = previousObject;
    const R = 6371000;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    // Distance in meters, rounded to an integer.
    if (this.state.useAlt) {
      const e = Math.sqrt(Math.pow(alt2 - alt1, 2) + Math.pow(d, 2));
      return Math.round(e);
    } else {
      return Math.round(d);
    }
  }

  initAdjustedCsvData(data) {
    const arr = [];
    const mappedHeaders = {};
    let previousObject, firstPosition;
    const travelDistanceArr = [];
    const homeDistanceArr = [];

    if (data[0].length > data[1].length) {
      data[0].splice(data[1].length, data[0].length - data[1].length);
    }

    function calculateTravelDistance(arr, i) {
      let sum = 0;
      arr.forEach((element, t) => {
        if (t < i) {
          sum += element;
        }
      });
      return sum;
    }

    data.forEach((element, i) => {
      if (i === 0) {
        element.forEach((header, i) => {
          mappedHeaders[header] = i;
        });
        if (mappedHeaders["GPS"]) {
          mappedHeaders["Home Distance(m)"] = element.length;
          mappedHeaders["Total Distance(m)"] = element.length + 1;
        }
        this.setState({
          mappedHeaders,
        });
      } else {
        let lat, lon;
        if (i === 1) {
          // initialTime = element[mappedHeaders["Time"]];
        } else {
          if (mappedHeaders["GPS"] && element[mappedHeaders["GPS"]]) {
            [lat, lon] = element[mappedHeaders["GPS"]].split(" ");
            if (!firstPosition) {
              firstPosition = {
                lat,
                lon,
                alt: Number(element[mappedHeaders["Alt(m)"]]),
              };
            }
          }
        }
        let distance, homeDistance;
        if (previousObject && previousObject.lon) {
          distance = this.calculateDistance(
            lat,
            lon,
            Number(element[mappedHeaders["Alt(m)"]]),
            previousObject
          );
          homeDistance = this.calculateDistance(
            lat,
            lon,
            Number(element[mappedHeaders["Alt(m)"]]),
            firstPosition
          );
        } else {
          distance = 0;
          homeDistance = 0;
        }

        const obj = {};
        travelDistanceArr.push(distance);
        homeDistanceArr.push(homeDistance);
        previousObject = {
          ...obj,
          lat,
          lon,
          alt: Number(element[mappedHeaders["Alt(m)"]]),
        };
        arr.push(obj);
      }
    });

    data[0] = data[0].concat([
      "Current Distance",
      "Total Distance",
      "Latitude",
      "Longitude",
    ]);
    const adjustedData = data.map((element, i) => {
      if (i > 0 && element[mappedHeaders["GPS"]]) {
        let lat, lon;
        [lat, lon] = element[mappedHeaders["GPS"]].split(" ");
        element.push(homeDistanceArr[i - 1]);
        element.push(calculateTravelDistance(travelDistanceArr, i));
        element.push(lat);
        element.push(lon);
      }
      return element;
    });
    data.unshift(["OpenTX Import"]);
    return arr;
  }

  calculateTimeDiff(date1, date2) {
    if (!date1 || !date2) {
      return;
    }

    function calculateTotalMs(time) {
      const timeObj = {
        hour: parseInt(time[0]),
        minute: parseInt(time[1]),
        second: Math.floor(parseFloat(time[2])),
        millisecond: parseFloat(time[2]) - Math.floor(parseFloat(time[2])),
      };
      return (
        (timeObj.hour * 60 * 60 + timeObj.minute * 60 + timeObj.second) * 1000 +
        timeObj.millisecond
      );
    }

    const diff =
      calculateTotalMs(date1.split(":")) - calculateTotalMs(date2.split(":"));
    return diff;
  }

  splitCsvData = (data) => {
    const mappedHeaders = {};
    const splittedIndexes = [];
    const splittedArrays = [];
    const headerArray = data[0];
    headerArray.forEach((header, i) => {
      mappedHeaders[header] = i;
    });
    let previousTimeDiff;
    data.forEach((element, i) => {
      if (i > 1) {
        const j = mappedHeaders["Time"];
        const timeDiff =
          Math.round(this.calculateTimeDiff(element[j], data[i - 1][j])) / 1000;
        if (previousTimeDiff && 3 * previousTimeDiff < timeDiff) {
          if (previousTimeDiff >= 1 && timeDiff >= 1) {
            splittedIndexes.push(i);
          }
        }
        previousTimeDiff = timeDiff;
      }
    });
    let previousIndex = 0;
    if (splittedIndexes.length > 0) {
      splittedIndexes.push(data.length - 1);
    }
    splittedIndexes.forEach((index, i) => {
      splittedArrays.push(data.slice(previousIndex, index));
      if (i > 0) {
        splittedArrays[i].unshift(headerArray);
      }
      previousIndex = index;
    });
    if (splittedArrays.length > 1) {
      return splittedArrays;
    } else {
      return [data];
    }
  };

  handleFileChange(data, fileInfo) {
    this.setState(
      {
        adjustedCsvData: null,
        csvFileData: null,
        useAlt: true,
      },
      () => {
        const splittedData = this.splitCsvData(data);
        this.setState({
          csvFileData: splittedData,
          adjustedCsvData: splittedData.map((data) =>
            this.initAdjustedCsvData(data)
          ),
          fileInfo,
        });
        this.toggleModal();
      }
    );
  }

  toggleModal = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  resetForm() {
    this.setState({
      adjustedCsvData: null,
      csvFileData: null,
      useAlt: true,
    });
    document.getElementById("react-csv-reader-input").value = "";
  }

  render() {
    const { csvFileData, isModalOpen, mappedHeaders } = this.state;
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h3>Dashware Helper</h3>
        <a href="https://youtu.be/T52QpFsYNMs" target="_blank">
          <h4>Need Help?</h4>
        </a>
        <Grid padded style={{ width: "100%" }}>
          <Grid.Column width={100}>
            <Segment className="opentx-header">
              <CSVReader onFileLoaded={this.handleFileChange.bind(this)} />
              <Checkbox
                onChange={(e, { checked }) => {
                  this.setState({ useAlt: checked });
                }}
                label={"Use Altitude Data To Calculate Distance"}
                checked={this.state.useAlt}
                disabled={!!csvFileData}
              />
            </Segment>
            {csvFileData && (
              <>
                <Button onClick={this.resetForm.bind(this)}>Reset</Button>
                {/* <Button onClick={this.exportToCSV.bind(this)}>
                  Export To CSV
                </Button> */}
                {csvFileData.map((data, i) => {
                  if (data.length > 3) {
                    const timeDiff =
                      Math.round(
                        this.calculateTimeDiff(
                          data[3][mappedHeaders["Time"]],
                          data[2][mappedHeaders["Time"]]
                        )
                      ) / 1000;
                    const seconds = (data.length - 1) * timeDiff;
                    return (
                      <div>
                        <CSVLink
                          filename={`${
                            this.state.fileInfo.name.split(".csv")[0]
                          }-${i}-adjusted.csv`}
                          data={data}
                        >
                          {`Download Log File - ${i} - ${seconds} Seconds`}
                        </CSVLink>
                      </div>
                    );
                  }
                })}
              </>
            )}
          </Grid.Column>
          <SupportModal
            isModalOpen={isModalOpen}
            toggleModal={this.toggleModal}
          />
        </Grid>
      </div>
    );
  }
}
