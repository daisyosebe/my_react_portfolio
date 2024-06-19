// Importing css and hooks
import "./Contact.css";
import {useState} from "react";

// Exporting functionable page
export default function ContactPage(){

  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState('');

  function handleInputChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  function handleBlur(e){
    if(e.target.name === "Name"){
      if (e.target.value === '') {
        setErrorMessage('There is a missing field that needs to be completed.');
      } 
    }

    if(e.target.name === "email"){
      if (e.target.value === '') {
        setErrorMessage('There is a missing field that needs to be completed.');
      } else {
        setErrorMessage('');
      }
    }
    if(e.target.name === "message"){
      if (e.target.value === '') {
        setErrorMessage('There is a missing field that needs to be completed.');
      } else {
        setErrorMessage('');
      }
    }
  }

  return (
    <div className="container">
      <div className="space"></div>
        <section className="contactBox">
          <h2 className="contactme">Contact Me</h2><br></br>
          <form>
            <label></label>
            <input 
              type="text" 
              id="Name" 
              name="Name" 
              placeholder="Enter your name here" 
              value={formData.Name || ""} 
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            /><br></br>
            <label></label><br></br>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email here" 
              value={formData.email || ""} 
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            /><br></br>
            <label></label><br></br>
            <textarea
              type="text" 
              id="message" 
              name="message" 
              placeholder="Enter your message here" 
              value={formData.message || ""} 
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            ></textarea><div className="errorMessage">{errorMessage}</div>
            <input 
              type="submit" 
              id="submit" 
              value="Submit your message"
            />
          </form>
        </section>
    </div>
  )
};