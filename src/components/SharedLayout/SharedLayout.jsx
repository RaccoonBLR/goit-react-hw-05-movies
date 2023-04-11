import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

export const SharedLayout = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/movies">MOVIES</NavLink>
      </nav>
    </header>
    <main>
      <Suspense fallback={<ColorRing />}>
        <Outlet />
      </Suspense>
    </main>
  </>
);
