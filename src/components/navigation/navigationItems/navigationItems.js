import React from 'react';
import classes from './navigationItems.css';
import NavigationItem from '../navigationItems/navigationItem/navigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} active>Burger Builder</NavigationItem>
        <NavigationItem link={"/"}>Checkout</NavigationItem>
    </ul>
);


export default navigationItems;