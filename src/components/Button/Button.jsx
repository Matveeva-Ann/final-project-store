import React from "react";
import './Button.style';
import PropTypes from 'prop-types'
import { ButtonBunner } from "./Button.style";


const Button = (props) => {
  const {type = "button", boxView, underlineView, children, deleteProduct, click=() => {}, ...restProps} = props
  ///...restProps == {.......}
  return (
    <ButtonBunner onClick={click} className={cx("button", classNames, {"_box":boxView}, {"_box-underline":underlineView})} type={type} {...restProps} deleteproduct={deleteProduct}>{children}</ButtonBunner>
  )
}

export default Button