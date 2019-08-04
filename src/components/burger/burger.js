import React from 'react';
import classes from './burger.css';
import BurgerIngredient from './burgerIngredients/burgerIngredients';


const burger = (props) => {
    //keys:  this method return an array of the keys of the object
    //[0: "salad"
    // 1: "bacon"
    // 2: "cheese"
    // 3: "meat"]
    let transformedIngredients = Object.keys(props.ingredients).
    map(igkey => {
        // return an Array(2) means an array with lenght of 2. so for each ingredients we have to read the
        // value of that ingredients and return an array with that lenght.
        return [...Array(props.ingredients[igkey])].map((_, i) => {
           return <BurgerIngredient type={igkey} key={igkey + i}/>
        });
    }).reduce((arr,el)=> {
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"}/>
            {transformedIngredients}
            <BurgerIngredient type={"bread-bottom"}/>
        </div>
    );
};

export default burger;