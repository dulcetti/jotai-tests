import axios from 'axios';
import { ICep } from './interface';

export default async function getAddress({ cep }: ICep) {
  const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
  const { data } = await axios.get(url);

  return data;
}
