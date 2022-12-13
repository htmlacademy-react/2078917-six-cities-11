import { FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes, Cities, TIMEOUT_PASSWORD_ERROR } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/actions/action';
import { loginAction } from '../../store/actions/api';
import Logo from '../../components/logo/logo';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setPasswordError(false);

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (passwordRef.current.value.length > 2) {
        dispatch(loginAction({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        }));
        navigate(AppRoutes.Root);
      }

      setPasswordError(true);
      setTimeout(
        () => (setPasswordError(false)),
        TIMEOUT_PASSWORD_ERROR,
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {isPasswordError && <span>Поле ввода должно содержать не менее трех символов</span>}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoutes.Root}
                onClick={() => dispatch(setCity(Cities.Amsterdam))}
              >
                <span className="locations__item-link">Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
