import React, { useState } from 'react';
import {Preview} from "./Preview/Preview";
import * as styles from "./App.module.scss";
import {Settings} from "./Settings/Settings";

export const App = () => {
  const[selectedMenuTitle, setMenuTitle] = useState("Mike's Bar Menu");
  return (
    <main className={styles.main}>
        <h1>Bar Menu</h1>
        <Preview selectedMenuTitle={selectedMenuTitle}/>
        <Settings selectedMenuTitle= {selectedMenuTitle} setMenuTitle = {setMenuTitle}/>
    </main>
  );
};