import React from 'react';

const ProductCard = ({ title, description, icon }) => (
  <div className="flex gap-x-3">
    {icon}
    <span>
      <strong className="font-semibold text-gray-900">{title}:</strong> {description}
    </span>
  </div>
);

export default ProductCard;
