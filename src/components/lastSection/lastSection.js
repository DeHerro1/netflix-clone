import React from 'react';
import './lastSection.css';
import Drops from './Drops/Drops';

const LastSection = () => {

    return (
        <div className="lastSector">
            <h1>Frequenty Asked Questions</h1>
            <Drops title="What is Netflix?" text="Netflix is a streaming service that offers a wide variety 
            of award-winning TV shows, movies, anime, documentaries, 
            and more on thousands of internet-connected devices.
            
            You can watch as much as you want, whenever you want without a single 
            commercial – all for one low monthly 
            price. There's always something new to discover and new TV shows and movies are added every week!"/>
            <Drops title="How much does Netflix cost?" text="Watch Netflix on your smartphone, tablet, 
        Smart TV, laptop, or streaming device, all for one fixed monthly fee. 
        Plans range from US$2.99 to US$11.99 a month. No extra costs, no contracts." />
            <Drops title="Where can i watch?" text="Watch anywhere, anytime, on an unlimited number of devices.
         Sign in with your Netflix account to watch instantly on the web at 
        netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, 
        including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while 
you're on the go and without an internet connection. Take Netflix with you anywhere." />
            <Drops title="How do i cancel?" text="Netflix is flexible. There are no pesky contracts and no commitments. 
        You can easily cancel your account online in two clicks. 
        There are no cancellation fees – start or stop your account anytime." />
            <Drops title="What can i watch on Netflix?" text="Netflix has an extensive library of feature films, 
        documentaries, TV shows, anime, award-winning Netflix originals, and more. 
        Watch as much as you want, anytime you want." />
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <input type="email" placeholder="Email address" className="email_input2" />
            <button className="start_btn2">GET STARTED</button>
        </div>
    );
}

export default LastSection;