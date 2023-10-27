import '../css/design.css'
import {design} from '../static/data.js'

export default function Design() {
    console.log(design)
    return(
    <section className = 'section'>
        <div className="design-section">
            <div className="divider"></div>
            <div className="section-header">
                <span className = 'design-title'>Designing Tools Used</span>
            </div>
            <div className="divider"></div>
            
        </div>
        {/* <div className = 'prototype02-section'>
            <div className = 'prototype02'>
                    <img  className = 'design-image' src = 'https://img.icons8.com/color/100/000000/figma.png' alt = 'design-img'/>
                    <p className = 'design-para'>FIGMA</p>
            </div>
        </div> */}
        <div className = 'prototype02-section' >
        {design.map((des) => {
                                return (
                                    
                                        <div className = 'prototype02' id = {des.id}>
                                                <img  className = 'design-image' src = {des.icon} alt = {des.title}/>
                                                <p className = 'design-para'>{des.title}</p>
                                        </div>
                                    
                                );
                            })}
        </div>
    </section>
        
    )
}