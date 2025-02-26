import React from 'react';

interface SocialMediaLink {
    platform: string; 
    url: string;      
}
  
interface FooterProps {
    companyName?: string;
    socialLinks?: SocialMediaLink[]; // Optional array of social media links
}
  
const Footer: React.FC<FooterProps> = ({
    companyName = 'Your Company Name',
    socialLinks = [],
}) => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact">Contact Us</a>
          </nav>
          {socialLinks.length > 0 && (
            <div className="social-media">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </footer>
    );
  };
  
  export default Footer;
  