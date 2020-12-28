import { useAtom } from 'jotai';

import './styles.css';
import { ADDRESS_DEFAULT } from '../../atoms/address';
import { CEP_DEFAULT } from '../../atoms/cep';

export default function Content() {
  const [address, setAddress] = useAtom(ADDRESS_DEFAULT);
  const [cep, setCep] = useAtom(CEP_DEFAULT);

  return (
    <main className='content'>
      <p>O CEP do state é esse: {cep}</p>
      <p>O endereço é esse:</p>
      <ul className='list'>
        <li>
          <strong>CEP:</strong> {address.cep}
        </li>
        <li>
          <strong>City:</strong> {address.city}
        </li>
        <li>
          <strong>Neighborhood:</strong> {address.neighborhood}
        </li>
        <li>
          <strong>State:</strong> {address.state}
        </li>
        <li>
          <strong>Street:</strong> {address.street}
        </li>
      </ul>
    </main>
  );
}
