import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div class="col">
    <div className="card" style={{ width: '18rem' }}>
<img src={imageUrl} className="card-img-top tm" alt={title} />
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <p className="card-text">{description}</p>
  <a href="#" className="btn btn-primary">Seleccionar</a>
</div>
</div>
</div>

  );
};

export default Card;
