import React, { useState } from 'react';
import Button from '../button/button';

const ButtonPicker = (props) => {
  const [buttonProps, setbuttonProps] = useState({
    color: 'default',
    size: 'md',
    variant: 'default',
    disableShadow: false,
    disabled: false,
  });

  const onChangeHandler = (e, buttonValue) => {
    let updatedButtonProps = { ...buttonProps };
    if (buttonValue === 'disableShadow' || buttonValue === 'disabled') {
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
    <div>
      <form>
        <div>
          <h3>Color</h3>
          <div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
        <div>
          <h3>Size</h3>
          <div>
            <div>
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
            <div>
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
            <div>
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

        <div>
          <h3>Variant</h3>
          <div>
            <div>
              <input
                type="radio"
                id="default"
                name="variant"
                value="default"
                checked={buttonProps.variant === 'default'}
                onChange={(e) => onChangeHandler(e, 'variant')}
              />
              <label htmlFor="default">Default</label>
            </div>
            <div>
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
            <div>
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
          <div>
            <input
              type="checkbox"
              id="disableShadow"
              name="disableShadow"
              checked={buttonProps.disableShadow}
              onChange={(e) => onChangeHandler(e, 'disableShadow')}
            />
            <label htmlFor="disableShadow">Disable Shadow</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="checkbox"
              id="disabled"
              name="disabled"
              checked={buttonProps.disabled}
              onChange={(e) => onChangeHandler(e, 'disabled')}
            />
            <label htmlFor="disabled">Disabled</label>
          </div>
        </div>
      </form>
      <div>
        <Button
          color={buttonProps.color}
          size={buttonProps.size}
          variant={buttonProps.variant}
          disableShadow={buttonProps.disableShadow}
          disabled={buttonProps.disabled}
        />
      </div>
    </div>
  );
};

export default ButtonPicker;
