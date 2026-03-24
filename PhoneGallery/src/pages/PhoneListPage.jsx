import React from 'react';
import { Link } from 'react-router-dom';
import PhoneCard from '../components/PhoneCard';

const PhoneListPage = ({ phones, onLike, onDelete }) => {
    return (
        <section className="container">
            <h2 className="section-title">Всі смартфони</h2>
            <div className="phones-grid">
                {phones.map(phone => (
                    <div key={phone.id} className="phone-list-item">
                        <PhoneCard
                            phone={phone}
                            onLike={onLike}
                            onDelete={onDelete}
                        />
                        <div className="details-link-container">
                            <Link to={`/phone/${phone.id}`} className="details-link">
                                Детальніше →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhoneListPage;