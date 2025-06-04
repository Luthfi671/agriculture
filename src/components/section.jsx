import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`flex flex-col justify-center items-center ${className}`}>
      {children}  
    </section>
  );
};

export default Section;