import Button from '@mui/material/Button';
import './Cart.css'

export function Cart(props) {
    return (
        <div className='cart'>
            <h1>Itinerary</h1>
            <div className='cart-container'>
            {props.cart.map((item) => (
                <div className='cart-box'>
                    <h2>{item.city}</h2>
                    <div class='text'>
                    <p>Distance from Providence: {item.distance}</p>
                    <Button onClick={() => props.removeFromCart(item.city)}>X</Button>
                    </div>
            </div>
        ))}
        </div>
        <p className='distance'>Total Miles from Providence: {Math.round(props.total*100)/100}</p>
        </div>
    );
};