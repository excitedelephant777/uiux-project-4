import React from 'react'
import { DisplayList } from './DisplayList';
import { Cart } from './Cart';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import './FilteredList.css'
import { useState } from 'react';
import { Typography } from '@mui/material';

const allLanguages = ['English', 'Dutch', 'French', 'Spanish', 'Swedish', 'German', 'Italian', 'Portuguese', 'Hungarian', 'Danish', 'Greek']

export function FilteredList(list) {
    const [languages, setLanguages] = useState([]);
    const [maxDistance, setMaxDistance] = useState(5000);
    const [pressedSort, setPressedSort] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalDistance, settotalDistance] = useState(0);

    function addToCart(city, distance) {
        for (var i=0; i < cart.length; i++) {
            if (cart[i].city === city) {
                alert(city.toString() + ' already in itinerary!')
                return;
            }
        }
        setCart([
            ...cart,
            {city: city, distance: distance}
        ]);
        settotalDistance(totalDistance + distance)
    }

    function removeFromCart(city) {
        var cartCopy = [...cart]
        for (var i=0; i < cartCopy.length; i++) {
            if (cartCopy[i].city === city) {
                settotalDistance(totalDistance - cartCopy[i].distance);
                cartCopy.splice(i, 1);
                setCart(cartCopy);
                return;
            }
        }
    }

    function onSelectFilterDistance(event) {
        var int = parseInt(event.target.value);
        if (int.toString() === 'NaN') {
            setMaxDistance(5000);
        } else {
            setMaxDistance(int);
        }
    };

    function onSelectFilterLanguages(event) {
        const {
            target: {value},
        } = event;
        setLanguages(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    function matchesFilter(item) {
        if (maxDistance.toString() === 'NaN' && languages.length === 0) {
            return true
        } else if (maxDistance.toString() === 'Nan') {
            return languages.includes(item.language);
        } else if (languages.length === 0) {
            return maxDistance >= item.distance;
        } else {
            return languages.includes(item.language) && maxDistance >= item.distance;
        }
    }

    function sortLocations(item1, item2) {
        if (pressedSort) {
            if (item1.population > item2.population) {
                return 1;
            } else if (item1.population === item2.population) {
                return 0;
            } else {
                return -1;
            }
        } else {
            return item1.city.localeCompare(item2.city);
        }
    }

    return (
        <div>
            <div className='filters'>
            <div className='element'>
                <div className='select'>
                <Typography variant="caption">Language</Typography>
                <Select
                    id="language"
                    multiple
                    value={languages}
                    onChange={(e) => onSelectFilterLanguages(e)}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {allLanguages.map((language) => (
                        <MenuItem key={language} value={language}>
                        <Checkbox checked={languages.indexOf(language) > -1}/>
                        {language}
                        </MenuItem>
                        ))}
                </Select>
                </div>
            </div>
            <div className='element'>
            <TextField 
                id="maximumDistance" 
                label="Maximum Distance" 
                variant="standard" 
                onChange={(e) => onSelectFilterDistance(e)}
                defaultValue={maxDistance}
            />
            </div>
            <div className='element'>
            <FormControlLabel
                label="Sort by Population"
                control={
                    <Checkbox onClick={() => setPressedSort(!pressedSort)}></Checkbox>}
            />
            </div>
            </div>
            <DisplayList list={Object.entries(list)[0][1].filter(matchesFilter).sort(sortLocations)} addToCart={addToCart}></DisplayList>
            <Cart cart={cart} total={totalDistance} removeFromCart={removeFromCart}></Cart>
        </div>
    );
};