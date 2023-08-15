import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthActions } from '../store/user-auth-slice';

const Header = () => {
  const dispatchFunction = useDispatch();
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);

  const signOutHandler = () => {
    dispatchFunction(userAuthActions.signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="/">Мої продажі</a>
            </li>
          )}
          <li>
            <a href="/">Про нас</a>
          </li>
          <li>
            <a href="/">Контакти</a>
          </li>
          <li>
            {isUserLoggedIn && <button onClick={signOutHandler}>Вийти</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
