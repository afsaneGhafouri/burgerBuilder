import React , {Component} from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../UI/button/button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdatr');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igkey)=> {
                return (
                    <li key={igkey}>
                        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
                    </li>)
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Cotinue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;