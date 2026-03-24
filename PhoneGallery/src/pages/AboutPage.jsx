import React from 'react';

const AboutPage = () => {
    return (
        <section className="container">
            <div className="about-page">
                <h2 className="section-title">Про застосунок</h2>

                <div className="about-content">
                    <div className="about-section">
                        <h3>PhoneGallery</h3>
                        <p>Це простий веб-застосунок для перегляду та управління колекцією флагманських смартфонів.</p>
                    </div>

                    <div className="about-section">
                        <h3>Основні можливості</h3>
                        <ul>
                            <li>1. Перегляд списку смартфонів</li>
                            <li>2. Додавання в обране</li>
                            <li>3. Додавання нових смартфонів</li>
                            <li>4. Видалення смартфонів</li>
                            <li>5. Фільтрація за брендами</li>
                        </ul>
                    </div>

                    <div className="about-section">
                        <h3>Технології</h3>
                        <ul>
                            <li>1. React</li>
                            <li>2. Vite</li>
                            <li>3. JavaScript</li>
                        </ul>
                    </div>

                    <div className="about-section">
                        <h3>Версія</h3>
                        <p>1.0.0</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;