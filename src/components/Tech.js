import '../css/tech.css'

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
        <div className = 'prototype-section'>
            
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/color/100/000000/react-native.png'/>
                    <p className = 'tech-para'>REACT</p>
            </div>
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/color/100/000000/django.png'/>
                    <p className = 'tech-para'>DJANGO</p>
            </div>
            <div className = 'prototype'>
                    <img  className = 'tech-image' src = 'https://img.icons8.com/fluent/100/000000/mysql-logo.png'/>
                    <p className = 'tech-para'>MYSQL</p>
            </div>
        </div>
        
    </section>
        
    )
}