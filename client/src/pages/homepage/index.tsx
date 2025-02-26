import React from 'react';
import Layout from '../../containers/layout'; // Import the Layout container
import './HomePage.css'; // Import CSS for styling

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="homepage">
        <h1>Welcome to My Website</h1>
        <p>
          This is the homepage of our application. Explore our features and learn more about what we offer.
        </p>
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>Feature 1: Amazing functionality</li>
            <li>Feature 2: Easy to use</li>
            <li>Feature 3: Built with modern technologies</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
