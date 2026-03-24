import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="container">
            <div className="error-container">
                <div className="error-icon">404</div>
                <h3>Сторінку не знайдено</h3>
                <p>На жаль, сторінка, яку ви шукаєте, не існує.</p>
                <Link to="/" className="home-link">
                    Повернутися на головну
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;