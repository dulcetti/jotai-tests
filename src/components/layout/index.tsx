import { useAtom } from 'jotai';

import { IS_LOADING } from '../../atoms/spinner';
import Header from '../header';
import Content from '../content';
import Footer from '../footer';
import Spinner from '../spinner';

export default function Layout() {
  const [loading, setLoading] = useAtom(IS_LOADING);

  return (
    <>
      <Header />
      <Content />
      <Footer />
      {loading && <Spinner isLoading={loading} />}
    </>
  );
}
