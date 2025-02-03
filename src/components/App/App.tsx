import React, { useState } from "react";
import styles from "./App.module.css";
import Button from "../Button/Button.tsx";
import Label from "../Label/Label.tsx";
import Counter from "../Counter/Counter.tsx";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [animated, setAnimated] = useState(false);

  const onSwitchDisabledClick = () => {
    setDisabled(!disabled);
  };

  const onSwitchAnimatedClick = () => {
    setAnimated(!animated);
  };

  return (
    <div className={styles.wrapper}>
      <h2 onClick={onSwitchDisabledClick} className={styles.switch}>
        Переключить на disabled здесь
      </h2>
      <h2 onClick={onSwitchAnimatedClick} className={styles.switch}>
        Переключить на animated здесь
      </h2>
      <Button disabled={disabled} styleProp="primary" size="medium">
        <>
          <Label>Скажи как мне быть, если</Label>
          <Counter size="small" styleProp="primary" animation={animated}/>
        </>
      </Button>
    </div>
  );
}

export default App;
