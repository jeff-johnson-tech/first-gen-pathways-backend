import './App.css'
import MomDaughter from './images/mom&daughter.png';
import './Contact.css';

export function Contact() {
    return (

        <div className='contactPage'>

            <h1 className='contactTitle'>Contact</h1>
            <img className='momDaughterPic' src={MomDaughter} alt="mom&daughter" />

            <h2 className='contact'>Contact us </h2>
            <div>
                <h3 className='questionsTitle'>If you have any questions don't hesitate to contact us.</h3>
                <br></br>
                <ul className='contactList'>
                    <li>Alice</li>
                    <li>contact@firstgenpathways.org</li>
                    <li>(888-444-8844)</li>
                </ul>

            </div>
        </div>
    )
}