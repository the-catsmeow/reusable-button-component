import React from 'react';
import Button from './button/button';

import classes from './App.module.css';
import ButtonPicker from './button-picker/button-picker';

function App() {
  return (
    <div className={classes.App}>
      <h1>Pick a Button</h1>
      <ButtonPicker />
      <h1>Buttons</h1>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button />'}</span>
          <Button />
        </div>
        <div className={classes.column}>
          <span>{'&:hover, &:focus'}</span>
          <Button customStyles={{ backgroundColor: '#AEAEAE' }} />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button variant="outline" />'}</span>
          <Button color="primary" variant="outline" />
        </div>
        <div className={classes.column}>
          <span>{'&:hover, &:focus'}</span>
          <Button
            color="primary"
            variant="outline"
            customStyles={{ backgroundColor: 'rgba(41, 98, 255, 0.1)' }}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button variant="text" />'}</span>
          <Button color="primary" variant="text" />
        </div>
        <div className={classes.column}>
          <span>{'&:hover, &:focus'}</span>
          <Button
            color="primary"
            variant="text"
            customStyles={{ backgroundColor: 'rgba(41, 98, 255, 0.1)' }}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button disableShadow />'}</span>
          <Button disableShadow />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button disabled />'}</span>
          <Button text="Disabled" disabled />
        </div>
        <div className={classes.column}>
          <span>{'<Button disabled variant="text"/>'}</span>
          <Button text="Disabled" disabled variant="text" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button startIcon="local_grocery_store" />'}</span>
          <Button color="primary" startIcon="local_grocery_store" />
        </div>
        <div className={classes.column}>
          <span>{'<Button endIcon="local_grocery_store" />'}</span>
          <Button color="primary" endIcon="local_grocery_store" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button size="sm" />'}</span>
          <Button color="primary" size="sm" />
        </div>
        <div className={classes.column}>
          <span>{'<Button size="md" />'}</span>
          <Button color="primary" size="md" />
        </div>
        <div className={classes.column}>
          <span>{'<Button size="lg" />'}</span>
          <Button color="primary" size="lg" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'<Button color="default" />'}</span>
          <Button />
        </div>
        <div className={classes.column}>
          <span>{'<Button color="primary" />'}</span>
          <Button color="primary" />
        </div>
        <div className={classes.column}>
          <span>{'<Button color="secondary" />'}</span>
          <Button color="secondary" />
        </div>
        <div className={classes.column}>
          <span>{'<Button color="danger" />'}</span>
          <Button color="danger" />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <span>{'&:hover, &:focus'}</span>
          <Button customStyles={{ backgroundColor: '#AEAEAE' }} />
        </div>
        <div className={classes.column}>
          <span></span>
          <Button
            color="primary"
            customStyles={{ backgroundColor: '#0039CB' }}
          />
        </div>
        <div className={classes.column}>
          <span></span>
          <Button
            color="secondary"
            customStyles={{ backgroundColor: '#455A64' }}
          />
        </div>
        <div className={classes.column}>
          <span></span>
          <Button
            color="danger"
            customStyles={{ backgroundColor: '#9A0007' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
