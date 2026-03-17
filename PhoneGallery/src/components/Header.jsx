import React, { useState } from 'react';
import '../styles/header.css';

const Header = ({ likedCount = 0, onNavigate, onOpenForm }) => {
    const [activePage, setActivePage] = useState('Головна');

    const handleNavClick = (page, e) => {
        e.preventDefault();
        setActivePage(page);
        if (onNavigate) {
            onNavigate(page);
        }
    };

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
                            <li>
                                <a
                                    href="#"
                                    className={activePage === 'Головна' ? 'active' : ''}
                                    onClick={(e) => handleNavClick('Головна', e)}
                                >
                                    Головна
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={activePage === 'Смартфони' ? 'active' : ''}
                                    onClick={(e) => handleNavClick('Смартфони', e)}
                                >
                                    Смартфони
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={activePage === 'Бренди' ? 'active' : ''}
                                    onClick={(e) => handleNavClick('Бренди', e)}
                                >
                                    Бренди
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <div className="liked-counter">
                            <span>❤️</span>
                            Обране
                            <span className={likedCount > 0 ? 'has-likes' : ''}>
                {likedCount}
              </span>
                        </div>

                        <button className="add-phone-btn" onClick={onOpenForm}>
                            Додати
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;