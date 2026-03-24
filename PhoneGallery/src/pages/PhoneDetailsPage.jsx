import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const PhoneDetailsPage = ({ phones }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const phone = phones.find(p => p.id === parseInt(id));

    if (!phone) {
        return (
            <div className="container">
                <div className="error-container">
                    <div className="error-icon">📱</div>
                    <h3>Смартфон не знайдено</h3>
                    <p>На жаль, смартфон з ID {id} не існує або був видалений.</p>
                    <button onClick={() => navigate('/phones')} className="back-btn">
                        Повернутися до списку
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="container">
            <button onClick={() => navigate(-1)} className="back-button">
                ← Назад
            </button>

            <div className="phone-details">
                <div className="phone-details-image">
                    <img src={phone.image} alt={phone.name} />
                </div>

                <div className="phone-details-info">
                    <h1>{phone.name}</h1>
                    <p className="phone-brand">{phone.brand}</p>
                    <div className="phone-details-specs">
                        <div className="spec-item">
                            <strong>Дисплей:</strong>
                            <span>{phone.specs.display}</span>
                        </div>
                        <div className="spec-item">
                            <strong>Процесор:</strong>
                            <span>{phone.specs.processor}</span>
                        </div>
                        <div className="spec-item">
                            <strong>Оперативна пам'ять:</strong>
                            <span>{phone.specs.ram}</span>
                        </div>
                        <div className="spec-item">
                            <strong>Внутрішня пам'ять:</strong>
                            <span>{phone.specs.storage}</span>
                        </div>
                        <div className="spec-item">
                            <strong>Камера:</strong>
                            <span>{phone.specs.camera}</span>
                        </div>
                        <div className="spec-item">
                            <strong>Акумулятор:</strong>
                            <span>{phone.specs.battery}</span>
                        </div>
                        <div className="spec-item price-item">
                            <strong>Ціна:</strong>
                            <span className="price">${phone.price}</span>
                        </div>
                    </div>
                    <Link to="/phones" className="back-to-list">
                        Повернутися до списку
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PhoneDetailsPage;