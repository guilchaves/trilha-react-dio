import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IFormLogin, defaultValues } from './types';

const schema = yup
  .object({
    email: yup.string().email('E-mail inválido').required('Cmapo obrigatório'),
    password: yup.string().min(6, 'No minimo 6 caracteres').required('Campo obrigatório'),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues,
    reValidateMode: 'onChange',
  });

  return <>ola</>;
};

export default Login;
