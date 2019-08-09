import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigationItems/navigationItems';
import classes from './sideDrawer.css';
import BackDrop from '../../UI/backdrop/backdrop';
import Aux from '../../../hoc/aux';

const sideDrawer = (props) => {
    let attachedClasses =[classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                     <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};


export default sideDrawer;