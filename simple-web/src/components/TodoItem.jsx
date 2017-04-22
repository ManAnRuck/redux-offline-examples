import React from 'react';

export default ({text}) => {
  return (
    <li className="collection-item">
      <input type="checkbox" id="test5" /> <label htmlFor="test5">{text}</label>
    </li>
  )
}
