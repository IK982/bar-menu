import React, { useState } from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings} from "./Settings/Settings";
import { BackgroundSquares } from './Settings/backgroundSquares';

export const App = () => {
  const[selectedMenuTitle, setMenuTitle] = useState("Mike's Bar Menu");
  const[selectedFoodItem, setFoodItem] = useState("Garlic Bread");
  const[selectedCocktail, setCocktail] = useState("Margarita");
  const[selectedSquareColour1, setSquareColour1] = useState(230);
  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>

        <Preview selectedMenuTitle={selectedMenuTitle} selectedFoodItem={selectedFoodItem} selectedCocktail={selectedCocktail}/>

        <BackgroundSquares selectedSquareColour1={selectedSquareColour1}/>

        <Settings selectedMenuTitle= {selectedMenuTitle} setMenuTitle = {setMenuTitle} 
        selectedFoodItem={selectedFoodItem} setFoodItem={setFoodItem}
        selectedCocktail={selectedCocktail} setCocktail={setCocktail}
        selectedSquareColour1={selectedSquareColour1} setSquareColour1={setSquareColour1}/>


    </main>
  );
};