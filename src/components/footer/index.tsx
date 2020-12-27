import FormCep from '../form-cep';
import './styles.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <FormCep buttonLabel='Update CEP State' />
    </footer>
  );
}
