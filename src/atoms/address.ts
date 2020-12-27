import { atom } from 'jotai';
import { CEP_DEFAULT } from './cep';

export const ADDRESS_DEFAULT = atom({
  cep: CEP_DEFAULT.init,
  city: 'Rio de Janeiro',
  neighborhood: 'Andaraí',
  state: 'RJ',
  street: 'Rua Uruguai',
});
