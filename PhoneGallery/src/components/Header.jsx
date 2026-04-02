import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/header.css';

const Header = ({ likedCount = 0, onOpenForm }) => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        if (onOpenForm) {
            onOpenForm();
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                        <h1>PhoneGallery</h1>
                        <p>Флагманські смартфони</p>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                                    Головна
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/phones" className={({ isActive }) => isActive ? 'active' : ''}>
                                    Смартфони
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                                    Про нас
                                </NavLink>
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

                        <button className="add-phone-btn" onClick={handleAddClick}>
                            Додати
                        </button>

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;