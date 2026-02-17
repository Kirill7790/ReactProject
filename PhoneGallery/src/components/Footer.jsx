import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>PhoneGallery</h3>
                    </div>

                    <div className="footer-section">
                        <h3>Контакти</h3>
                        <ul>
                            <li>Email: info@phonegallery.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} PhoneGallery. Всі права захищені.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;