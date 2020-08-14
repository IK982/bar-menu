import React from "react";


export const Settings = ({selectedMenuTitle, setMenuTitle, selectedFoodItem, setFoodItem, selectedCocktail, setCocktail, hue, setSquareColour1}) => {
    const changeTitle = (event) => {

        setMenuTitle(event.target.value)

    };

    const changeFoodItem = (event) => {

        setFoodItem(event.target.value)

    };

    const changeCocktail = (event) => {

        setCocktail(event.target.value)

    };

    const changeSquareColour1 = (event) => {

        setSquareColour1(event.target.value)

    };
    
    
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for="name"> Change Menu Name:</label>
                <input onChange={changeTitle} type="text" id="name" name="fname" value={selectedMenuTitle}></input><br></br><br></br>

                <label for="name"> Change Food Item Name:</label>
                <input onChange={changeFoodItem} type="text" id="name" name="fname" value={selectedFoodItem}></input><br></br><br></br>

                <label for="name"> Change Food Item Name:</label>
                <input onChange={changeCocktail} type="text" id="name" name="fname" value={selectedCocktail}></input><br></br>

                {/* <label for="name"> Change Square Colour 1:</label>
                <input onChange={changeSquareColour1} type="text" id="name" name="fname" value={selectedSquareColour1}></input><br></br> */}

                <label for="points">Change Square Colour 1:</label>
                <input onChange = {changeSquareColour1}  type="range"  value= {hue} min="0" max="360"></input>

                
                TODO: Add the settings
            </div>
        </section>
    );
};
    // { <form action="/action_page.php">
    //     <label for="username"> Change Title to: </label>
    //     <input type="text" id="changetitle" name="changetitle"></input><br></br>
    //     <input onSubmit = {changeTitle} type="submit" value= "Submit"></input>
    // </form> }