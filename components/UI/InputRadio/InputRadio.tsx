import React from 'react';

interface InputRadioProps {
    id: string,
    name: string,
    label: string,
    value: string,
    onChange: (newValue: string)=>void
}

const InputRadio = ({label, name, id, value, onChange}: InputRadioProps) => {
    return (
        <>
            <input type="radio" id={id} name={name} value={id} checked={value === id} onChange={() => onChange(id)}/>
            <label htmlFor={id}>{label}</label>
        </>
    );
};

export default InputRadio;