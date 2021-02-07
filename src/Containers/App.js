import React,{useState} from 'react';

import ThemeContext from '../Context/ThemeContext'
// import appTheme from '../Theme/theme'
import Header from '../Components/Header';


const App=()=>{

	let [theme,setTheme]=useState("light")

	const switchThemeHandler=()=>{
		setTheme((theme==="light")?"dark":"light")   
		                
	}
	

	return(
			<div className="container-fluid m-0 p-0"
			style={{padding:"0px"}}>
		  	    <ThemeContext.Provider value={{theme:theme,toggleTheme:switchThemeHandler}}>
						<Header/>
				</ThemeContext.Provider>
			</div>
	)
};

export default App;