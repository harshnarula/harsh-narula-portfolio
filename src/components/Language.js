import '../css/language.css'
// import { useEffect } from 'react'
import {lang} from '../static/data'

export default function Language({width, setWidth}) {
   
    // const containerClass = lang.length % 2 !== 0 ? 'prototype01-section02' : 'prototype01-section01';

    // useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		if (
	// 			(width > 768 && window.innerWidth <= 768) ||
	// 			(width <= 768 && window.innerWidth > 768)
	// 		)
	// 			setWidth(window.innerWidth);
                
	// 	});
	// 	return () => {
	// 		window.removeEventListener("resize", () => {
	// 			if (
	// 				(width > 768 && window.innerWidth <= 768) ||
	// 				(width <= 768 && window.innerWidth > 768)
	// 			)
	// 				setWidth(window.innerWidth);
	// 		});
	// 	};
	// }, [width]);

    return(
    <section className = 'section'>
        <div className="languages-section">
            <div className="divider"></div>
            <div className="section-header">
                <span className = 'lang-title'>Languages Learned</span>
            </div>
            <div className="divider"></div>
            
        </div>

        {/* <div className = 'prototype01-section'>
            <div className = 'prototype01-section01'>
                <div className = 'prototype01'>
                        <img  className = 'lang-image' src = 'https://img.icons8.com/color/100/000000/html-5.png' alt ='html-icon'></img>
                        <p className = 'lang-para'>HTML</p>
                </div>
                <div className = 'prototype01'>
                        <img  className = 'lang-image' src = 'https://img.icons8.com/color/100/000000/css3.png' alt ='css-icon'/>
                        <p className = 'lang-para'>CSS</p>
                </div>
                <div className = 'prototype01'>
                        <img  className = 'lang-image' src = 'https://img.icons8.com/color/100/000000/javascript.png' alt ='js-icon'/>
                        <p className = 'lang-para'>JS</p>
                </div>
            </div>
            <div className = {width <= 768 ? 'prototype01-section02' :'prototype01-section02'} >
                <div className = {width <= 768 ? 'prototype01' :'prototype-change01'}>
                        <img  className = 'lang-image' src = 'https://img.icons8.com/color/100/000000/python.png' alt ='python-icon'/>
                        <p className = 'lang-para'>PYTHON</p>
                </div>
                <div className = {width <= 768 ? 'prototype01' : 'prototype-change02'}>
                        <img  className = 'lang-image' src = 'https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png' alt ='java-icon'/>
                        <p className = 'lang-para'>JAVA</p>
                </div>
            </div>
        </div> */}
        <div className = {lang.length % 2 === 0 ? 'prototype01-section02':'prototype01-section01'} >
        {lang.map((lang) => {
                                return (
                                    
                                        <div className = 'prototype01' id = {lang.id}>
                                                <img  className = 'lang-image' src = {lang.icon} alt = {lang.title}/>
                                                <p className = 'lang-para'>{lang.title}</p>
                                        </div>
                                    
                                );
                            })}
        </div>

        
        
    </section>
        
    )
}