import React from 'react'

const FormInput = ({ type, label, cutClassname ,className }) => {
  return (
    <div className={`h-[50px] w-full relative ${className || ''}`} >
      <input className="input" type={type} placeholder=" " />
      <div className={`cut ${cutClassname}`}></div>
      <label htmlFor="firstname" className="placeholder">
        {label}
      </label>
    </div>
  );
};

export default FormInput