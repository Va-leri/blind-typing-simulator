// import './app.scss';
import '../../sass/style.scss';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { getIsDataLoaded, getIsFinish, getIsLoading } from '../../store/selectors';
import Header from '../header/header';
import Preloader from '../preloader/preloader';
import Start from '../start/start';
import Test from '../test/test';

function App(): JSX.Element {
  const isLoading = useSelector(getIsLoading);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const isFinish = useSelector(getIsFinish);

  return (
    <Fragment>
      <Header />
      <main className="main-container">
        {
          isLoading && <Preloader />
        }
        {
          !isLoading && !isDataLoaded && <Start />
        }
        {
          !isLoading && isDataLoaded && !isFinish && <Test />
        }
      </main>
    </Fragment>
  );
}

export default App;
