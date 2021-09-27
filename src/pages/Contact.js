import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';


const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                   <div className="adress">
                   <div className="contact">
                       <h4>adresse</h4>
                       <p>25 rue des martyrs</p>
                       <p>2020 Ariana Tunisie</p>
                    </div>
                   </div>
                
                  <div className="phone">
                    <div className="content">
                        <h4>téléphone: +216 52222635</h4>
                        <p style={{cursor: 'pointer'}} 
                        className="clipboard" onclick={() => {
                            alert('Téléphone copié !');
                        }} ></p> 
                    </div>
                  </div>   
                    <div  className="email">                 
                        <div className="content">
                            <h4>email: nhaggui2010@yahoo.fr"</h4>
                            <p style={{cursor: 'pointer'}} 
                        className="clipboard" onclick={() => {
                            alert('Email copié !');
                        }} ></p> 
                        </div>
                    </div>
                  
            </div>
            </div>
        </main>
    );
};

export default Contact;