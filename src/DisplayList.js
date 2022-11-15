import Button from '@mui/material/Button';
import './DisplayList.css';

export function DisplayList(props) {

    const list = props.list;
    return (
        <div className='board'>
            {list.map((item) => (
            <div className='text-box'>
                <img src={item.image} alt={item.city}/>
                <h2>{item.city}</h2>
                <p>Distance from Providence: {item.distance} miles</p>
                <p>Population: {item.population} million</p>
                <p>Language: {item.language}</p>
                <Button onClick={() => props.addToCart(item.city, item.distance)}>Add to Itinerary</Button>
            </div>
        ))}
        </div>
    );
};