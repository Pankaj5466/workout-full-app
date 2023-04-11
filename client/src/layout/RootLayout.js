import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { Outlet } from 'react-router-dom';

//Router v6.4: <Outlet> :: An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered.
function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
