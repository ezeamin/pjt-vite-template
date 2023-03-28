import { lazy, Suspense } from 'react';

import { Container } from '@mui/material';

import FABContainer from '../components/FAB/FABContainer';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

// const Viewer = lazy(() => import('../components/Viewer/Viewer'));

const Main = () => {
  return (
    <>
      <Container className='content'>
        <Header />
        <main>
          <Suspense fallback={null}>
            {/* Here will go the main view or the routes component */}
            {/* For Routing, follow 'edictos-fe-new' pattern */}
          </Suspense>
        </main>
        <Footer />
      </Container>

      <FABContainer />
    </>
  );
};

export default Main;
