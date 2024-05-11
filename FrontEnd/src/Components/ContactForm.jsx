import React, { useState } from 'react';
import '../index.css';
const ContactForm = () => {
  return (
    <div className="contact-info">
      <div>
        <h2>ADDRESS</h2>
        <p>Kate Wasti, Tathawade,</p>
        <p>Pimpri-Chinchwad, Maharashtra 411033</p>
      </div>

      <div>
        <h2>CONTACT INFO ADMISSION CELL</h2>
        <p>MR. Ajay Ingle : 8975898xx9</p>
        <p>MR .chatGPT AI : <a>https://chatgpt.com/?oai-dm=1</a> </p>
        <p>Email : ajayyingle0@gmail.com</p>
      </div>

      <div>
        <h2>Helper</h2>
        <p>Website : <a href="https://chatgpt.com/?oai-dm=1">chatGPT</a></p>
        <p>Website : <a href="https://www.geeksforgeeks.org/react-tutorial/">GeeksforGeeks</a></p>
      </div>

      <div>
        <h2>Website Coordinator</h2>
        <p>chat GPT</p>
        <p>https://chatgpt.com/?oai-dm=1</p>
       
      </div>

      <div>
        <h2>FOR ANY QUERY / FEEDBACK</h2>
        <p>Email : <a href="ajayyingle0@gmail.com">Ajay Ingle</a></p>
      </div>

      
    </div>
  );
};


export default ContactForm;