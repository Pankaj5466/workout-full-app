import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import "./layout.css"

function MainNavigation() {

  return (
    <header className='header'>
      {/* <div className={classes.logo}>React Meetups</div> */}
      {/* <a> <img></img></a> enable this when you have logo */}
      {/* <p className={classes['menu-title']}>Workout Planner1</p> */}
      <p className='menu-title'> Workout Tracker App</p>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <NavLink to='/workout'>Workout</NavLink>
          </li>
          <li> <NavLink to='/new-meetup'>Workout</NavLink> </li>
          <li> <NavLink to='/new-meetup'>Workout Planner</NavLink> </li>
        </ul>
      </nav> 
    </header>
  );
}

export default MainNavigation;
