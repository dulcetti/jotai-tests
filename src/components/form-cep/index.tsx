import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';

import './styles.css';
import { CEP_DEFAULT } from '../../atoms/cep';
import { ICep } from '../../services/address/interface';
import { IFormCep } from './interface';
import Button from '../button';

export default function FormCep({ buttonLabel }: IFormCep) {
  const [cep, setCep] = useAtom(CEP_DEFAULT);
  const { errors, handleSubmit, register } = useForm();
  const onSubmit = (data: ICep) => {
    setCep(data.cep);
  };

  return (
    <form className='form-cep' onSubmit={handleSubmit(onSubmit)}>
      <label>
        Digite o CEP:
        <input
          className='input-text'
          defaultValue={cep}
          maxLength={8}
          name='cep'
          type='text'
          ref={register({ minLength: 8, required: true })}
        />
      </label>
      {errors.cep && <p>Obrigatório</p>}
      <Button label={buttonLabel} type='submit' />
    </form>
  );
}
