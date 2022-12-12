import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <h1 style={{textAlign: 'center', width: '100%'}}>Not Found</h1>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
