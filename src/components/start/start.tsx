import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/actions';
import { fetchText } from '../../store/api-actions';

function Start(): JSX.Element {
  const dispatch = useDispatch();

  const onStartBtnClick = () => {
    dispatch(setLoading());
    dispatch(fetchText());
  };

  return (
    <div className="start">
      <button className="start__btn" onClick={onStartBtnClick}>Start</button>
    </div>
  );
}

export default Start;
