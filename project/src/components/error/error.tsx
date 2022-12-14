import { useAppSelector } from '../../hooks';
import '../../styles.css';

function Error(): JSX.Element | null {
  const { error } = useAppSelector((state) => state.DATA);
  return (error) ?
    <div
      className='error'
    >
      {error}
    </div>
    : null;
}

export default Error;
