import React from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../UI/button/button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igkey)=> {
            return (
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                </li>)
        });
    return (
      <Aux>
          <h3>Your Order</h3>
          <p>A delicious burger with following ingredients: </p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total Price: {props.price}</strong></p>
            <p>Cotinue to Checkout?</p>
          <Button btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
          <Button btnType="Success" clicked={props.continued}>CONTINUE</Button>
      </Aux>
    );
};


export default orderSummary;