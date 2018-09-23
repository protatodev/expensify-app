import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Cost: ${amount}</p>
    <p>Date Created: {createdAt}</p>
    <hr/>
  </div>
);

export default ExpenseListItem;