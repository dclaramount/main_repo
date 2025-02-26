import React from 'react';
import Header from '../../components/header'; // Import your Header component
import Footer from '../../components/footer'; // Import your Footer component
import './Layout.css'; // Import CSS for styling

interface LayoutProps {
  children: React.ReactNode; // Define children as React nodes to render dynamic content
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header title="My Website" />
      <main className="content">{children}</main>
      <Footer companyName="Awesome Company" />
    </div>
  );
};

export default Layout;
