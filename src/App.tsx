import { lazy, Suspense } from 'react';

import { Container } from '@mui/material';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Main = lazy(() => import('./views/Main'));

const App = () => {
  return (
    <Container className='content'>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
      </main>
      <Footer />
    </Container>
  );
};

export default App;
