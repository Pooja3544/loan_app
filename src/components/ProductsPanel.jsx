// ProductsPanel.jsx
import React, { useState } from 'react';
import LoanContent from './LoanContent';
import './ProductsPanel.css';

const productList = [
  { id: 'home', title: 'Home Loan', details: ['Option A', 'Option B'] },
  { id: 'business', title: 'Business Loan', details: ['Option X', 'Option Y'] },
  { id: 'personal', title: 'Personal Loan', details: ['Option 1', 'Option 2'] },
];

const ProductsPanel = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="products-panel">
      <ul className="product-list">
        {productList.map(p => (
          <li key={p.id} onClick={() => setSelected(p.id)} className={selected === p.id ? 'active' : ''}>
            {p.title}
          </li>
        ))}
      </ul>
      <div className="loan-content-area">
        {selected && <LoanContent data={productList.find(p => p.id === selected)} />}
      </div>
    </div>
  );
};
export default ProductsPanel;
