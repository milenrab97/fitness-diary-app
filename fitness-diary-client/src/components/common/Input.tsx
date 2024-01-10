import React from 'react';

interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
}

const Input = ({ value, onChange, label }: InputProps) => {
  return (
    <>
      {label && <label className="block mb-1">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-md bg-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-6 placeholder-gray-800 text-gray-900"
        placeholder="Enter your name"
      />      
    </>
  );
};

export default Input;
