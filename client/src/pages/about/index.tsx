import React from 'react';
import Layout from '../../containers/layout'; // Import the Layout container

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are dedicated to providing top-notch services and products to our customers.
        </p>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality solutions that meet the needs of our clients while fostering innovation and excellence.
          </p>
        </section>
        <section className="team">
          <h2>Meet Our Team</h2>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Mike Johnson - Lead Developer</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
