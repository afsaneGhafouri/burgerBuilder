import React from 'react';
import Aux from '../../hoc/aux';
import classes from './layout.css';
import Toolbar from '../../components/navigation/toolbar/toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);


export default layout;
