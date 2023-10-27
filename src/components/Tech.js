import '../css/tech.css'
import {tech} from '../static/data'

export default function Tech() {
    return(
    <section className = 'section'>
        <div className="technologies-section">
            <div className="divider"></div>
            <div className="section-header">
                <span className = 'tech-title'>Technologies I know</span>
            </div>
            <div className="divider"></div>
            
        </div>
        {/* <div className = 'prototype-section'>
            
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/color/100/000000/react-native.png' alt= 'react-icon'/>
                    <p className = 'tech-para'>REACT</p>
            </div>
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/color/100/000000/django.png' alt= 'django-icon'/>
                    <p className = 'tech-para'>DJANGO</p>
            </div>
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/fluent/100/000000/mysql-logo.png' alt= 'mysql-icon'/>
                    <p className = 'tech-para'>MYSQL</p>
            </div>
        </div> */}
        <div className = 'prototype-section' >
        {tech.map((tech) => {
                                return (
                                    
                                        <div className = 'prototype' id = {tech.id} >
                                                <img  className = 'tech-image' src = {tech.icon} alt = {tech.title}/>
                                                <p className = 'tech-para'>{tech.title}</p>
                                        </div>
                                    
                                );
                            })}
        </div>
    </section>
        
    )
}