import axios from 'axios';
import '../css/contact.css';


export default function Contact({contact , setContact}){

    const handleName = (event) => {
        setContact((prevConc) => ({
            ...prevConc,
            [event.target.name]: [event.target.value]
        }))
        console.log(contact.name)
    }

    const handleEmail = (event) => {
        setContact((prevConc) => ({
            ...prevConc,
            [event.target.name]: [event.target.value]
        }))
        console.log(contact.email)
    }

    const handleMessage = (event) => {
        setContact((prevConc) => ({
            ...prevConc,
            [event.target.name]: [event.target.value]
        }))
        console.log(contact.message)
    }

    const handleData = async (e) => {
        e.preventDefault();
        console.log(contact);
      
        try {
          const response = await axios.post('/#contact/', {
            headers: {
              'Content-Type': 'application/json', // Set the Content-Type header
            },
            data: JSON.stringify({ // Convert your data to a JSON string
              name: contact.name,
              email: contact.email,
              message: contact.message,
            }),
          });
      
          console.log(response.data.message); // Log the response from Django
      
          // Optionally, you can reset the form state after a successful submission
          setContact({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          console.error('Error submitting contact form:', error);
        }
      };
      
    return(
    <form className = 'take-in' id = 'contact' onSubmit={handleData}>
        <div className="contact">
            <h2 className = 'contact-header'>Contact Me</h2>
            <p className = 'contact-para'>Have any questions or want to work together?</p>
        </div>
        
        <div className = 'contact-inputs'>
            <input placeholder="Name" className ='name' name = 'name' value = {contact.name} onChange = {handleName}/>
            <input placeholder="Email" className ='email' name = 'email' value = {contact.email} onChange = {handleEmail}/>
            <textarea placeholder="Leave a message(optional)" className ='message' name = 'message' value = {contact.message} onChange = {handleMessage}/>
        </div>
        
        <div className = 'contact-btn'>
            <button className = 'btn' type="submit">Send</button>
        </div>
        
    </form>
    )
}