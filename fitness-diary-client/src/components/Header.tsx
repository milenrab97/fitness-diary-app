import { Link } from 'react-router-dom';
import { useAuth } from '../Auth';

const Header = () => {
  const { authenticated, logout } = useAuth();

  return (
    <div className="w-full flex gap-20 justify-evenly">
      <Link to="/">Home</Link>
      <Link to="log-workout">Log workout</Link>
      <Link to="setup-workout">Setup workout</Link>
      {authenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header;
