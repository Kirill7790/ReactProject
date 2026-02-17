import React from 'react';
import '../styles/phoneCard.css';

const PhoneCard = ({ phone, onLike }) => {
    const { id, name, image, specs, price, isNew, isLiked } = phone;

    return (
        <div className={`phone-card ${isLiked ? 'liked' : ''}`}>
            {isNew && <div className="phone-badge">NEW</div>}

            <div className="phone-image">
                <img src={image} alt={name} />
            </div>

            <div className="phone-info">
                <h3 className="phone-name">{name}</h3>

                <div className="phone-specs">
                    <p><strong>Дисплей:</strong> {specs.display}</p>
                    <p><strong>Процесор:</strong> {specs.processor}</p>
                    <p><strong> Оперативна пам'ять:</strong> {specs.ram}</p>
                    <p><strong> Накопичувач:</strong> {specs.storage}</p>
                    <p><strong>Камера:</strong> {specs.camera}</p>
                    <p><strong>Акумулятор:</strong> {specs.battery}</p>
                </div>

                <div className="phone-actions">
                    <button
                        className={`like-button ${isLiked ? 'liked' : ''}`}
                        onClick={() => onLike(id)}
                    >
                        {isLiked ? 'В обраному' : 'Додати в обране'}
                    </button>
                    <span className="price">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;