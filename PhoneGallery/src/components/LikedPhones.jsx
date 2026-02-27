import React from 'react';
import '../styles/likedPhones.css';

const LikedPhones = ({ likedPhones }) => {
    if (!likedPhones || likedPhones.length === 0) {
        return null;
    }

    return (
        <section className="liked-section">
            <div className="container">
                <h2>
                    Ваші обрані телефони
                    <span className="liked-count">{likedPhones.length}</span>
                </h2>

                <div className="liked-grid">
                    {likedPhones.map(phone => (
                        <div key={phone.id} className="liked-mini-card">
                            <img
                                src={phone.image}
                                alt={phone.name}
                                onError={(e) => {
                                    e.target.src = 'https://placehold.co/100x100/cccccc/white?text=No+Image';
                                }}
                            />
                            <div className="liked-mini-info">
                                <h4>{phone.name}</h4>
                                <p className="liked-mini-price">${phone.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LikedPhones;