import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMistakes, getTime, getCurrentSymbolIndex, getIsDataLoaded, getIsLoading, getIsFinish } from '../../store/selectors';
import { resetStatistics, setLoading } from '../../store/actions';
import { fetchText } from '../../store/api-actions';
import Finish from '../finish/finish';

function Header(): JSX.Element {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const time = useSelector(getTime);
  const mistakes = useSelector(getMistakes);
  const currentSymbolIndex = useSelector(getCurrentSymbolIndex);
  const isFinish = useSelector(getIsFinish);

  const reloadBtnRef = useRef<HTMLButtonElement>(null);

  const getAccuracy = () => {
    if (!currentSymbolIndex) {
      return null;
    }

    return ((currentSymbolIndex) / (currentSymbolIndex + mistakes) * 100).toFixed(1);
  };

  const accuracy = getAccuracy();
  const speed = time ? Math.round(currentSymbolIndex / (time / 60)) : null;

  const onReloadBtnClick = () => {
    reloadBtnRef.current?.blur();
    dispatch(setLoading());
    dispatch(resetStatistics());
    dispatch(fetchText());
  };

  return (
    <header className="header">
      {
        isFinish && <Finish />
      }
      <div className="statistics">
        <ul className="statistics__list">
          <li className={`statistics__item property ${isDataLoaded ? '' : 'statistics__item--disabled'}`}>
            <p className="property__name">Speed:</p>
            <output className="property__value">{speed && `${speed}  symb./min.`}</output>
          </li>
          <li className={`statistics__item property ${isDataLoaded ? '' : 'statistics__item--disabled'}`}>
            <p className="property__name">Total mistakes:</p>
            <output className="property__value">{mistakes && `${mistakes}`}</output>
          </li>
          <li className={`statistics__item property ${isDataLoaded ? '' : 'statistics__item--disabled'}`}>
            <p className="property__name">Accuracy:</p>
            <output className="property__value">{accuracy && `${accuracy}  %`}</output>
          </li>
          <li className={`statistics__item ${isDataLoaded ? '' : 'statistics__item--disabled'}`}>
            <button className="statistics__reset-btn" disabled={isLoading || !isDataLoaded} onClick={onReloadBtnClick} ref={reloadBtnRef}>Reload test</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
