import React,{useContext} from 'react'

import ThemeContext from '../Context/ThemeContext'

import './header.css'
import "bootstrap/dist/css/bootstrap.css";

import Theme from '../Theme/theme'
import HeroSection from './HeroSection'

const Header=()=>{
  const themeContextType=useContext(ThemeContext)


  return(
	<div style={{
				padding:"0px",
				margin:"0px",
				backgroundColor:`${Theme[themeContextType.theme].navBGColor}`,
				color:`${Theme[themeContextType.theme].color}`}}
		className="header container-fluid text-center m-0 p-0" >
	  
	     <div className='custom-control custom-switch'>
		 <input
        	 type='checkbox'
         	 className='custom-control-input'
         	 id='customSwitches'
			 onChange={themeContextType.toggleTheme}
         	 readOnly/>	  
		 <label className='custom-control-label h3' htmlFor='customSwitches'>
				<b>Dark Theme </b>  &nbsp; &nbsp; &nbsp;
         </label>	  

		 </div>
		

		 <span className="text-muted h3 " 
		 		style={{borderRadius:"20px",border:"0px black"}}> 
				{themeContextType.theme==="light"?"Enable":"Disabled"} </span>
		 <HeroSection/>
	</div>
  )
}

export default Header;