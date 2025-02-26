import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

// Define props for the Header component
interface HeaderProps {
  title?: string; // Optional: Title to display in the header
  links?: { label: string; href: string }[]; // Optional: Array of navigation links
}

// Functional Component with TypeScript
const Header: React.FC<HeaderProps> = ({ 
  title = 'My Website', 
  links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] 
}) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <nav className="header-nav">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
