import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext';

import appTheme from '../Theme/theme'

const HeroSection=()=>{
  const themeContextType=useContext(ThemeContext);
  return(
	<div className="container-fluid text-center" style={{ backgroundColor:`${appTheme[themeContextType.theme].backgroundColor}`,
	 color:`${appTheme[themeContextType.theme].color}`,
	 height:"100vh"
	 }}>
		 <h1> Hello, This is Hero-Section</h1>
		 <p>You can change the theme of this Section  by using above⬆️⬆️ button</p>
	</div>
  )
}

export default HeroSection;