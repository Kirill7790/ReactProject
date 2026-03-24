import React, { useState, useEffect } from 'react';
import '../styles/apiPhones.css';

const ApiPhones = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        const fetchPhones = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://fakestoreapi.com/products?limit=6');

                if (!response.ok) {
                    throw new Error(`HTTP помилка! Статус: ${response.status}`);
                }

                const data = await response.json();

                const formattedPhones = data.map(item => ({
                    id: item.id,
                    name: `Флагманський смартфон ${item.id}`,
                    brand: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Sony'][item.id % 6],
                    image: `No image`,
                    specs: {
                        display: `${6.1 + (item.id % 2)}-inch AMOLED`,
                        processor: `Processor ${item.id}`,
                        ram: `${8 + (item.id % 3)}GB`,
                        storage: `${128 + (item.id % 3) * 128}GB`,
                        camera: `${48 + (item.id % 3)}MP Triple Camera`,
                        battery: `${4000 + (item.id % 2) * 500}mAh`
                    },
                    price: 699 + (item.id * 50),
                    isNew: item.id % 2 === 0,
                    isLiked: false
                }));

                setPhones(formattedPhones);
            } catch (err) {
                setError(err.message);
                console.error('Помилка при завантаженні даних:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPhones();
    }, []);

    if (loading) {
        return (
            <section className="api-section">
                <div className="container">
                    <h2 className="section-title">Смартфони з API</h2>
                    <div className="loading-container">
                        <div className="spinner"></div>
                        <p>Завантаження даних...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="api-section">
                <div className="container">
                    <h2 className="section-title">Смартфони з API</h2>
                    <div className="error-container">
                        <div className="error-icon">⚠️</div>
                        <h3>Помилка завантаження</h3>
                        <p>{error}</p>
                        <button
                            className="retry-btn"
                            onClick={() => window.location.reload()}
                        >
                            Спробувати знову
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="api-section">
            <div className="container">
                <h2 className="section-title">Смартфони з API</h2>
                <div className="api-phones-grid">
                    {phones.map(phone => (
                        <div key={phone.id} className="api-phone-card">
                            <div className="api-phone-image">
                                <img src={phone.image} alt={phone.name} />
                            </div>
                            <div className="api-phone-info">
                                <h3 className="api-phone-name">{phone.name}</h3>
                                <p className="api-phone-brand">{phone.brand}</p>
                                <div className="api-phone-specs">
                                    <span>{phone.specs.ram}</span>
                                    <span>{phone.specs.display}</span>
                                    <span>{phone.specs.camera}</span>
                                </div>
                                <div className="api-phone-price">
                                    <span className="price">${phone.price}</span>
                                    {phone.isNew && <span className="new-badge">NEW</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ApiPhones;