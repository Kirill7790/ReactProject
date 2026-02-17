import React from 'react';
import '../styles/header.css';

const Header = ({ likedCount = 0 }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h1>PhoneGallery</h1>
                        <p>Флагманські смартфони</p>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#" className="active">Головна</a></li>
                            <li><a href="#">Смартфони</a></li>
                            <li><a href="#">Бренди</a></li>
                        </ul>
                    </nav>

                    <div className="liked-counter">
                        <span>❤️</span>
                        Обране
                        <span>{likedCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;