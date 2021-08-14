import React, { useState } from 'react';
import Button from '../button/button';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import classes from './button-picker.module.css';

const ButtonPicker = () => {
  const [buttonProps, setbuttonProps] = useState({
    color: 'default',
    size: 'md',
    variant: 'default',
    disableShadow: false,
    disabled: false,
    includeIcon: false,
    startIcon: '',
    endIcon: '',
  });

  const code = reactElementToJSXString(
    <Button
      color={buttonProps.color}
      size={buttonProps.size}
      variant={buttonProps.variant}
      disableShadow={buttonProps.disableShadow}
      disabled={buttonProps.disabled}
      startIcon={buttonProps.includeIcon ? buttonProps.startIcon : false}
      endIcon={buttonProps.includeIcon ? buttonProps.endIcon : false}
    />
  );

  const onChangeHandler = (e, buttonValue) => {
    let updatedButtonProps = { ...buttonProps };
    if (
      buttonValue === 'disableShadow' ||
      buttonValue === 'disabled' ||
      buttonValue === 'includeIcon'
    ) {
      updatedButtonProps = {
        ...updatedButtonProps,
        [buttonValue]: !updatedButtonProps[buttonValue],
      };
    } else {
      updatedButtonProps = {
        ...updatedButtonProps,
        [buttonValue]: e.target.value,
      };
    }

    setbuttonProps({
      ...updatedButtonProps,
    });
  };

  return (
    <div className={classes.container}>
      <form>
        <div className={classes.selectionRow}>
          <h3>Color</h3>
          <div className={classes.radioButtonGroup}>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="default"
                name="color"
                value="default"
                checked={buttonProps.color === 'default'}
                onChange={(e) => onChangeHandler(e, 'color')}
              />
              <label htmlFor="default">Default</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="primary"
                name="color"
                value="primary"
                checked={buttonProps.color === 'primary'}
                onChange={(e) => onChangeHandler(e, 'color')}
              />
              <label htmlFor="primary">Primary</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="secondary"
                name="color"
                value="secondary"
                checked={buttonProps.color === 'secondary'}
                onChange={(e) => onChangeHandler(e, 'color')}
              />
              <label htmlFor="secondary">Secondary</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="danger"
                name="color"
                value="danger"
                checked={buttonProps.color === 'danger'}
                onChange={(e) => onChangeHandler(e, 'color')}
              />
              <label htmlFor="danger">Danger</label>
            </div>
          </div>
        </div>
        <div className={classes.selectionRow}>
          <h3>Size</h3>
          <div className={classes.radioButtonGroup}>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="sm"
                name="size"
                value="sm"
                checked={buttonProps.size === 'sm'}
                onChange={(e) => onChangeHandler(e, 'size')}
              />
              <label htmlFor="sm">Small</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="md"
                name="size"
                value="md"
                checked={buttonProps.size === 'md'}
                onChange={(e) => onChangeHandler(e, 'size')}
              />
              <label htmlFor="md">Medium</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="lg"
                name="size"
                value="lg"
                checked={buttonProps.size === 'lg'}
                onChange={(e) => onChangeHandler(e, 'size')}
              />
              <label htmlFor="lg">Large</label>
            </div>
          </div>
        </div>
        <div className={classes.selectionRow}>
          <h3>Variant</h3>
          <div className={classes.radioButtonGroup}>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="variant-default"
                name="variant"
                value="default"
                checked={buttonProps.variant === 'default'}
                onChange={(e) => onChangeHandler(e, 'variant')}
              />
              <label htmlFor="variant-default">Default</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="outline"
                name="variant"
                value="outline"
                checked={buttonProps.variant === 'outline'}
                onChange={(e) => onChangeHandler(e, 'variant')}
              />
              <label htmlFor="outline">Outline</label>
            </div>
            <div className={classes.radioButton}>
              <input
                type="radio"
                id="text"
                name="variant"
                value="text"
                checked={buttonProps.variant === 'text'}
                onChange={(e) => onChangeHandler(e, 'variant')}
              />
              <label htmlFor="text">Text</label>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.checkboxContainer}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="disableShadow"
              name="disableShadow"
              checked={buttonProps.disableShadow}
              onChange={(e) => onChangeHandler(e, 'disableShadow')}
            />
            <label htmlFor="disableShadow" className={classes.label}>
              <div className={classes.ball}></div>
            </label>
            <span>Disable Shadow</span>
          </div>
        </div>
        <div>
          <div className={classes.checkboxContainer}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="disabled"
              name="disabled"
              checked={buttonProps.disabled}
              onChange={(e) => onChangeHandler(e, 'disabled')}
            />
            <label htmlFor="disabled" className={classes.label}>
              <div className={classes.ball}></div>
            </label>
            <span>Disable Button</span>
          </div>
        </div>
        <div>
          <div className={classes.checkboxContainer}>
            <input
              className={classes.checkbox}
              type="checkbox"
              id="icon-checkbox"
              name="icon-checkbox"
              checked={buttonProps.includeIcon}
              onChange={(e) => onChangeHandler(e, 'includeIcon')}
            />
            <label htmlFor="icon-checkbox" className={classes.label}>
              <div className={classes.ball}></div>
            </label>
            <span>Include Icon</span>
          </div>
        </div>
        {buttonProps.includeIcon ? (
          <div className={classes.selectionRow}>
            <h3>
              Icons
              <span>
                Find material icons here: https://fonts.google.com/icons
              </span>
            </h3>
            <div className={classes.textFieldRow}>
              <input
                className={classes.textField}
                type="text"
                id="startIcon"
                value={buttonProps.startIcon}
                onChange={(e) => onChangeHandler(e, 'startIcon')}
                placeholder="Start Icon"
              ></input>

              <input
                className={classes.textField}
                type="text"
                id="endIcon"
                value={buttonProps.endIcon}
                onChange={(e) => onChangeHandler(e, 'endIcon')}
                placeholder="End Icon"
              ></input>
            </div>
          </div>
        ) : null}
      </form>
      <div className={classes.demoContainer}>
        <div className={classes.buttonDemoContainer}>
          <span>Preview Button: </span>
          <Button
            color={buttonProps.color}
            size={buttonProps.size}
            variant={buttonProps.variant}
            disableShadow={buttonProps.disableShadow}
            disabled={buttonProps.disabled}
            startIcon={buttonProps.includeIcon ? buttonProps.startIcon : false}
            endIcon={buttonProps.includeIcon ? buttonProps.endIcon : false}
          />
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={a11yLight}
          customStyle={{
            width: '80%',
            borderRadius: '4px',
            backgroundColor: 'rgba(41, 98, 255, 0.2)',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ButtonPicker;
