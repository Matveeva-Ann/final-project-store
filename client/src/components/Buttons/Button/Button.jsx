import React from "react";
import './Button.style';
import PropTypes from 'prop-types'
import { ButtonStyle } from "./Button.style";


const Button = (props) => {
  const {type = "button", boxView, isTransparent=false, underlineView, radius = "none", children, deleteProduct, click=() => {}, ...restProps} = props
  ///...restProps == {.......}
  return (
    <ButtonStyle radius={radius} isTransparent={isTransparent} onClick={click} type={type} {...restProps} deleteproduct={deleteProduct}>{children}</ButtonStyle>
  )
}

export default Button