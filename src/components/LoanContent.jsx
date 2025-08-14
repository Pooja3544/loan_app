// LoanContent.jsx
import React from 'react';

const LoanContent = ({ data }) => (
  <div className="loan-content">
    <h3>{data.title} Options</h3>
    <ul>
      {data.details.map((opt, idx) => <li key={idx}>{opt}</li>)}
    </ul>
  </div>
);

export default LoanContent;
