import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as hamburgericon } from '../resources/hamburgerIcon.svg';


export default function HamburgerIcon(props){
  return (
    <SvgIcon {...props} component = {hamburgericon} viewBox="-6 -4 47 30"/>

  );
}
