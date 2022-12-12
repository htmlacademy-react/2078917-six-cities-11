import { useAppSelector } from '../../hooks';
import CSS from 'csstype';

function Error(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);

  const styles: CSS.Properties = {
    position: 'fixed',
    zIndex: 10,
    top: '20px',
    right: '20px',
    padding: '5px',
    backgroundColor: '#f68f4a',
    color: 'white',
    borderRadius: '3px',
    fontSize: '14px'
  };

  return (error) ?
    <div
      style={styles}
      className='error-message'
    >
      {error}
    </div>
    : null;
}

export default Error;
