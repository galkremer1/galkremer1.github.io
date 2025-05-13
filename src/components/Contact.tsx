import React from 'react';

const emailAddress = 'test@example.com';


const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <div className="text-center mb-4">
        <p>
          If you'd like to get in touch, feel free to reach out via email or
          connect with me on social media!
        </p>
        <ul>
          {/* <li>
            Email:{' '}
            <a href={`mailto:${emailAddress}`} className="text-blue-500">
              {emailAddress}
            </a>
          </li> */}
          <li>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/galkremer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              My LinkedIn
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href="https://github.com/galkremer1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              My GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
