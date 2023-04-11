import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies">MOVIES</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
