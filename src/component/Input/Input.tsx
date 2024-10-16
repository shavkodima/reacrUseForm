import { Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { formInputs, IInputOption } from '../Form/Form';

type Input = {
  placeholder: string;
  size: string;
  name: string;
  register: UseFormRegister<formInputs>;
  label: Path<formInputs>;
};

const InputForm = ({ placeholder, size, name, register, label }: Input) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Text mb="8px">{placeholder}</Text>
      <Input
        type={name}
        value={value}
        placeholder={placeholder}
        size={size}
        mb={'10px'}
        {...register(label, { required: true })}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputForm;
