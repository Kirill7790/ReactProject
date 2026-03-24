import React from 'react';
import '../styles/phoneCard.css';

const PhoneCard = ({ phone, onLike, onDelete }) => {
    const { id, name, image, specs, price, isNew, isLiked } = phone;

    const handleLikeClick = () => {
        onLike(id);
    };

    const handleDeleteClick = () => {
        onDelete(id);
    };

    return (
        <div className={`phone-card ${isLiked ? 'liked' : ''}`}>
            {isNew && <div className="phone-badge">NEW</div>}

            <button className="delete-button" onClick={handleDeleteClick} title="Видалити">
                ×
            </button>

            <div className="phone-image">
                <img
                    src={image}
                    alt={name}
                    onError={(e) => {
                        "";
                    }}
                />
            </div>

            <div className="phone-info">
                <h3 className="phone-name">{name}</h3>

                <div className="phone-specs">
                    <p><strong>Дисплей:</strong> {specs.display}</p>
                    <p><strong>Процесор:</strong> {specs.processor}</p>
                    <p><strong>Оперативна пам'ять:</strong> {specs.ram}</p>
                    <p><strong>Внутрішня пам'ять:</strong> {specs.storage}</p>
                    <p><strong>Камера:</strong> {specs.camera}</p>
                    <p><strong>Акумулятор:</strong> {specs.battery}</p>
                </div>

                <div className="phone-actions">
                    <button
                        className={`like-button ${isLiked ? 'liked' : ''}`}
                        onClick={handleLikeClick}
                    >
                        {isLiked ? '❤️ В обраному' : '🤍 Додати в обране'}
                    </button>
                    <span className="price">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;