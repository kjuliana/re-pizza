import React from 'react';
import InputRadio from "../InputRadio/InputRadio";

interface RadioGroupProps {
    name: string,
    variants: Option[],
    groupLabel: string,
    value: string,
    onChange: (newValue: string)=>void
}

type Option = {
    id: string,
    label: string
}

const RadioGroup = ({variants, groupLabel, name, value, onChange}: RadioGroupProps) => {
    return (
        <div>
            <h4>{groupLabel}</h4>
            {variants.map(item =>
                <div key={item.id}>
                    <InputRadio id={item.id} name={name} label={item.label} value={value} onChange={onChange}/>
                </div>
            )}
        </div>
    );
};

export default RadioGroup;