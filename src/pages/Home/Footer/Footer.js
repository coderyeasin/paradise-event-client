import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gradient-to-t from-pink-800 via-pink-700 to-pink-900 py-5 text-justify text-white">
                <div className="md:grid md:grid-cols-4 md:my-10 mx-3.5 md:mx-20 space-x-10">
            <div className=""><h3 className="text-xl">Questions?</h3>
                <address >
                Contact Carmen Escalante
                    Event Planner & Coordinator  <br />
                    AED Accredited Event Designer <br />
                    Call 1 (805) 844-3303 <br />
                    Email: Eventbycarmen@gmail.com
                </address>
            </div>
            <div className=""><h3 className="text-xl">Location</h3>
                <address>
                A Perfect Event By Carmen Company<br />
                323 Bedford Place <br />
                Thousand Oaks, CA 91360 <br />
                United States of America
                </address>
            </div>
            <div className=""><h3 className="text-xl">Passion and experience</h3>
            <p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours. Get a cost estimate of your event based upon your submission and appointment.</p>
            </div>
            <div className=" list-none">
                <h3 className="text-xl">Event Short List</h3>
                <p className="text-medium"> We are a one-stop shop focusing on simplifying the event planning process for you and your loved ones.</p>
            <li>Catering </li>
            <li>Floral Decor</li>
            <li>Cake and Candy Buffet Services</li>
            <li>Party Rentals</li>
            <li>transportation</li>
            <li>DJ, Lighting,</li>
            <li>Photo and Video.</li>
            </div>
        </div>
        </div>
    );
};

export default Footer;