import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMistake, setIsFinish, setTime, updateCurrentSymbolIndex } from '../../store/actions';
import { getCurrentSymbolIndex, getIsFinish, getText } from '../../store/selectors';

function Test(): JSX.Element {
  const dispatch = useDispatch();
  const text = useSelector(getText);
  const currentSymbolIndex = useSelector(getCurrentSymbolIndex);
  const isFinish = useSelector(getIsFinish);

  const [isMistake, setIsMistake] = useState(false);
  const [stopwatch, setStopwatch] = useState<NodeJS.Timeout | null>(null);

  const preparedText = text.split('');

  useEffect(() => {
    if (isFinish) {
      return;
    }

    const onType = (evt: KeyboardEvent) => {
      if (evt.key === preparedText[currentSymbolIndex]) {
        dispatch(updateCurrentSymbolIndex());

        if (currentSymbolIndex === 0) {
          const interval = setInterval(() => {
            dispatch(setTime());
          }, 1000);

          setStopwatch(interval);
        }

        if (isMistake) {
          setIsMistake(false);
        }

        if (currentSymbolIndex === preparedText.length - 1) {
          dispatch(setIsFinish(true));
        }

      } else {
        setIsMistake(true);
        dispatch(addMistake());
      }
    };

    document.addEventListener('keypress', onType);

    return (() => {
      document.removeEventListener('keypress', onType);
    });
  }, [currentSymbolIndex, isFinish, isMistake, dispatch, preparedText]);

  useEffect(() => () => {
    if (stopwatch) {
      clearInterval(stopwatch);
      setStopwatch(null);
    }
    setIsMistake(false);
  }, [text, isFinish, stopwatch]);

  return (
    <div className="text-container">
      {
        // eslint-disable-next-line react/no-array-index-key
        preparedText.map((symbol, index) => <span className={`symbol ${index === currentSymbolIndex ? 'symbol--current' : ''} ${index === currentSymbolIndex && isMistake ? 'symbol--mistaken' : ''}`} key={`${index}`}>{symbol}</span>)
      }
    </div>
  );
}

export default Test;
