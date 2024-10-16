import { Button, Container, Heading } from '@chakra-ui/react';
import InputForm from '../Input/Input';
import { Path, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

export type formInputs = {
  userEmail: string;
  userPassword: string;
};

export interface IInputOption {
  name: string;
  label: Path<formInputs>;
  placeholder: string;
  required: boolean;
}

const optionInputs: IInputOption[] = [
  {
    name: 'email',
    label: 'userEmail',
    placeholder: 'Введите email',
    required: true,
  },
  {
    name: 'password',
    label: 'userPassword',
    placeholder: 'Введите пароль',
    required: true,
  },
];

const Form = () => {
  const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false);
  const { handleSubmit, register, formState } = useForm<formInputs>();

  const submitForm: SubmitHandler<formInputs> = (data) => {
    setIsLoadingForm((prev) => !prev);
    console.log(data);

    setTimeout(() => {
      setIsLoadingForm((prev) => !prev);
    }, 2000);
  };

  return (
    <Container
      p={'20px'}
      border={'1px'}
      borderRadius={'10px'}
      borderColor={'#e7e7e7'}
    >
      <Heading mb={3}>Авторизация</Heading>
      <form onSubmit={handleSubmit(submitForm)}>
        {optionInputs.map((option) => (
          <InputForm
            key={option.label}
            size="sm"
            name={option.name}
            placeholder={option.placeholder}
            register={register}
            label={option.label}
          />
        ))}
        <Button
          isLoading={isLoadingForm}
          loadingText="Отправка"
          colorScheme="teal"
          variant="outline"
          type="submit"
        >
          Отправить
        </Button>
      </form>
    </Container>
  );
};

export default Form;
