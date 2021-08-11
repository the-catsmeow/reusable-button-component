import React from 'react';
import classes from './button.module.css';
import icon from './icons/outline_local_grocery_store_white_24dp.png'


const Button = props => {

  const {customStyles, startIcon, endIcon, disabled, disableShadow, variant, size, color, text, ...rest} = props;
  let styles = [classes.button]; 

  if(disabled) styles.push(classes.disabled)
  if(disableShadow) styles.push(classes.disableShadow);

  switch (variant) {
    case 'outline':
      styles.push(classes.outline)
      break;
    case 'text':
      styles.push(classes.text);
      break;
    default:
      break;
  }

  switch(size) {
    case 'sm':
      styles.push(classes.small);
      break;
    case 'lg':
      styles.push(classes.large);
      break;
    default:
      styles.push(classes.medium)
      break;
  }

  switch(color) {
    case 'primary':
      styles.push(classes.primary)
      break;
    case 'secondary':
      styles.push(classes.secondary)
      break;
    case 'danger':
      styles.push(classes.danger)
      break;
    default:
      styles.push(classes.default)
      break;
  }


  return (<button 
            {...rest} 
            disabled={disabled} 
            className={styles.join(' ')} 
            style={customStyles}>
              {startIcon ? <img style={{height: '16px', width: '16px', marginRight: '8px'}} src={icon} alt="" /> : null}
              {text ? text : 'Default'}
              {endIcon ? <img style={{height: '16px', width: '16px', marginLeft: '8px'}} src={icon}  alt="" /> : null}
            </button>)
}

export default Button;
 