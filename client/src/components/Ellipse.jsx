import React from 'react';

const Ellipse = ({ height, width }) => {
  return (
    <div className={`bg-white ${height && `h-${height}`} ${width && `w-${width}`}`}>
      
    </div>
  );
};

export default Ellipse;
