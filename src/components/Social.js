import '../css/social.css'
import { useEffect } from 'react';

export default function Social({
    social, setSocial, setWidth, width

}){
    const handleLinkedIn = () => {
        setSocial(prevState => ({
            ...prevState,
            linkedIn: !prevState.linkedIn,
            github: false,
            twitter: false,
            gmail: false,
            instagram: false
        }));
    };

    const handleGitHub = () => {
        setSocial(prevState => ({
            ...prevState,
            github: !prevState.github,
            linkedIn: false,
            twitter: false,
            gmail: false,
            instagram: false
        }));
    };

    const handleTwitter = () => {
        setSocial(prevState => ({
            ...prevState,
            twitter: !prevState.twitter,
            linkedIn: false,
            github: false,
            gmail: false,
            instagram: false
        }));
    }

    const handleGmail = () => {
        setSocial(prevState => ({
            ...prevState,
            gmail: !prevState.gmail,
            linkedIn: false,
            github: false,
            twitter: false,
            instagram: false
        }));
    };

    const handleInstagram = () => {
        setSocial(prevState => ({
            ...prevState,
            instagram: !prevState.instagram,
            linkedIn: false,
            github: false,
            twitter: false,
            gmail: false
        }));
    };

    useEffect(() => {
		setSocial(prevState => ({
            ...prevState,
            instagram: false,
            linkedIn: false,
            github: false,
            twitter: false,
            gmail: false
        }));
	}, []);


    return(
        <div className = 'Social'>
            {/* <div className = 'Social-header'>
                <h2 className = 'Header'>Social</h2>
            </div> */}
            
            <div className = 'Social-links'>
                <div className = 'link-box'>
                    <div className = 'link-box-01'>
                        <img src = {width <= 768 ? 'https://img.icons8.com/fluent/70/000000/linkedin.png' :  'https://img.icons8.com/fluent/100/000000/linkedin.png'}  className = 'link-img' alt = 'linkedin'/>
                    </div>
                    <div className = 'link-box-02' onClick={handleLinkedIn} id = 'link-box-02'>

                        {social.linkedIn === true ? <a className = 'linked-in'  href= "https://www.linkedin.com/in/harsh-narula-597b95314/" target="_blank" rel="noopener noreferrer" >Harsh Narula</a> : <p className = 'linked-in'>LinkedIn</p>}
                    </div>
                    
                </div>


                <div className = 'git-box'>
                    <div className = 'git-box-01'>
                        <img src = {width <= 768 ? 'https://img.icons8.com/fluent/70/000000/github.png' : 'https://img.icons8.com/fluent/100/000000/github.png'} className = 'git-img' alt = 'git'/>
                    </div>
                    <div className = 'git-box-02' onClick = {handleGitHub} id = 'git-box-02'>
                        {social.github === true ? <a className = 'github'  href= "https://github.com/harshnarula" target="_blank" rel="noopener noreferrer" >harshnarula</a> : <p className = 'github'>GitHub</p>}  
                    </div>
                    
                </div>


                <div className = 'tweet-box'>
                    <div className = 'tweet-box-01'>
                        <img src = {width <= 768 ? 'https://img.icons8.com/fluent/70/000000/twitter.png' : 'https://img.icons8.com/fluent/100/000000/twitter.png'} className = 'tweet-img' alt = 'tweet'/>
                    </div>
                    <div className = 'tweet-box-02' onClick = {handleTwitter} id = 'tweet-box-02'>
                        {social.twitter === true ? <a className = 'twitter'  href= "https://twitter.com/HarshNa89766122" target="_blank" rel="noopener noreferrer" >HarshNa89766122</a> : <p className = 'twitter'>Twitter</p>}  
                    </div>
                    
                </div>
                

                <div className = 'gmail-box'>
                    <div className = 'gmail-box-01'>
                        <img src = {width <= 768 ?  'https://img.icons8.com/fluent/70/000000/gmail-new.png' :'https://img.icons8.com/fluent/100/000000/gmail-new.png'} className = 'gmail-img' alt = 'gmail'/>
                    </div>
                    <div className = 'gmail-box-02' onClick = {handleGmail} id = 'gmail-box-02'>
                        {social.gmail === true ? <p className = 'gmail' >harshnarula02@gmail.com</p> : <p className = 'gmail'>Gmail</p>}  
                    </div>
                    
                </div>


                <div className = 'insta-box'>
                    <div className = 'insta-box-01'>
                        <img src = {width <= 768 ? 'https://img.icons8.com/fluent/70  /000000/instagram-new.png' :'https://img.icons8.com/fluent/100/000000/instagram-new.png'} className = 'insta-img' alt = 'insta'/>
                    </div>
                    <div className = 'insta-box-02' onClick = {handleInstagram} id = 'insta-box-02'>
                        {social.instagram === true ? <a className = 'instagram'  href= "https://www.instagram.com/decaitor/" target="_blank" rel="noopener noreferrer" >decaitor</a> : <p className = 'instagram'>Instagram</p>}
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}
