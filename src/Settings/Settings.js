import React, { useState } from "react";
import {Preview} from '../Preview/Preview';
// import * as styles from "./Preview.module.scss";


export const Settings = ({selectedMenuTitle, setMenuTitle}) => {
    const changeTitle = (event) => {

        setMenuTitle(event.target.value)

    };
    
    
    return (
        <section>
            <h2>Settings</h2>
            <div>
                <label for="name"> Name:</label>
                <input onChange={changeTitle} type="text" id="name" name="fname" value={selectedMenuTitle}></input>

                
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