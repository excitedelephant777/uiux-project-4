import React from 'react'
import './App.css';
import {FilteredList} from './FilteredList';
import amsterdam from "./images/amsterdam.png";
import athens from "./images/athens.png";
import berlin from "./images/berlin.png";
import budapest from "./images/budapest.png";
import copenhagen from "./images/copenhagen.png";
import dublin from "./images/dublin.png";
import lisbon from "./images/lisbon.png";
import london from "./images/london.png";
import madrid from "./images/madrid.png";
import paris from "./images/paris.png";
import rome from "./images/rome.png";
import stockholm from "./images/stockholm.png";

function App() {

  // distance to providence
  const locations = [
    {city: "Paris", distance: 3473.59, population: 2.161, language: "French", image: paris},
    {city: "London", distance: 3306.69, population: 8.982, language: "English", image: london},
    {city: "Rome", distance: 4130.35, population: 2.873, language: "Italian", image: rome},
    {city: "Lisbon", distance: 3224.57, population: 0.504, language: "Portuguese", image: lisbon},
    {city: "Budapest", distance: 4203.42, population: 1.756, language: "Hungarian", image: budapest},
    {city: "Berlin", distance: 3818, population: 3.645, language: "German", image: berlin},
    {city: "Madrid", distance: 3428.07, population: 3.223, language: "Spanish", image: madrid},
    {city: "Amsterdam", distance: 3487.61, population: 0.821, language: "Dutch", image: amsterdam},
    {city: "Cophenhagen", distance: 3694.4, population: 0.602, language: "Danish", image: copenhagen},
    {city: "Dublin", distance: 3024.09, population: 0.544, language: "English", image: dublin},
    {city: "Athens", distance: 4777.72, population: 3.167, language: "Greek", image: athens},
    {city: "Stockholm", distance: 3792.18, population: 0.975, language: "Swedish", image: stockholm}
  ];

  return (
    <div className="App">
        <h1 className='title'>Explore Europe!</h1>
        <FilteredList list={locations} />
        {/* <p className='citations'>Image Citations</p>
        <ul>
          <li>Paris: https://www.archdaily.com/922278/23-places-in-paris-every-architect-must-visit</li>
          <li>London: https://depositphotos.com/stock-photos/london.html</li>
          <li>Rome: https://www.britannica.com/place/Rome</li>
          <li>Lisbon: https://www.theguardian.com/travel/2017/jul/08/lisbon-portugal-stay-hotels-food-museums-city-guide</li>
          <li>Budapest: https://whc.unesco.org/en/list/400/</li>
          <li>Berlin: https://www.cntraveler.com/gallery/best-things-to-do-in-berlin</li>
          <li>Madrid: https://www.travelandleisure.com/travel-guide/madrid</li>
          <li>Amsterdam: https://www.travelandleisure.com/travel-guide/amsterdam</li>
          <li>Cophenhagen: https://www.travelandleisure.com/travel-guide/copenhagen</li>
          <li>Dublin: https://www.audleytravel.com/us/ireland/places-to-go/dublin</li>
          <li>Athens: https://www.britannica.com/place/Athens</li>
          <li>Stockholm: https://www.timeout.com/stockholm/things-to-do/best-things-to-do-in-stockholm</li>
        </ul> */}
    </div>
  );
}

export default App;
