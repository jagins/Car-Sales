import React from 'react';

const AdditionalFeature = props => {
  const {buyItem} = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature.name)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
