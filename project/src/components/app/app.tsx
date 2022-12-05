import MainPage from '../../pages/main/main';
import { Offer } from '../../types/offer';

type AppProps = {
  offersNumber: number;
  offers: Offer[];
};

function App({ offersNumber, offers }: AppProps): JSX.Element {
  return (
    <MainPage
      offersNumber={offersNumber}
      offers={offers}
    />
  );
}

export default App;
