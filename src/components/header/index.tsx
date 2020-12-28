import { useAtom } from 'jotai';

import './styles.css';
import logo from '../../assets/images/logo192.png';
import { IS_LOADING } from '../../atoms/spinner';
import { CEP_DEFAULT } from '../../atoms/cep';
import { ADDRESS_DEFAULT } from '../../atoms/address';
import Button from '../button';
import getAddress from '../../services/address';

export default function Header() {
  const [cep, setCep] = useAtom(CEP_DEFAULT);
  const [address, setAddress] = useAtom(ADDRESS_DEFAULT);
  const [headerLoader, setHeaderLoader] = useAtom(IS_LOADING);

  const getAddressResult = async () => {
    setHeaderLoader(true);
    await getAddress({ cep }).then((result) => {
      setCep(result.cep);
      setAddress(result);
      setHeaderLoader(false);
    });
  };

  return (
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
      <Button label='Update Content state' method={getAddressResult} />
    </header>
  );
}
