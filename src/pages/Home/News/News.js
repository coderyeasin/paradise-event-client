import React from 'react';
import event from '../../../images/event.jpg';
const News = () => {
    return (
        <div className="mx-10 md:mx-20 md:my-20 mt-12">
            <div className="md:grid md:grid-cols-2">
            <div className="md:grid md:grid-cols-3 gap-5">
                <div> <img className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3" src={event} alt="" /></div>
                <div></div>
                <div><img className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3" src={event} alt="" /></div>
                <div></div>
                <div><img className="rounded-3xl shadow-xl transform duration-500 hover:scale-105 mb-3" src={event} alt="" /></div>
            </div>
                <div className=" md:mx-20 text-justify space-y-10 my-10">
                    <h3 className="text-center text-xl text-pink-900 font-bold uppercase">News</h3>
                    <p className="text-base text-">Event Management (formerly Festival Management & Event Tourism), an International Journal, intends to meet the research and analytic needs of a rapidly growing profession focused on events. This field has developed in size and impact globally to become a major business with numerous dedicated facilities, and a large-scale generator of tourism. The field encompasses meetings, conventions, festivals, expositions, sport and other special events. Event management is also of considerable importance to government agencies and not-for-profit organizations in a pursuit of a variety of goals, including fund-raising, the fostering of causes, and community development. Event Management aims to be the leading source of research reports and anlysis related to all forms of event management. This journal publishes refereed and invited articles, book reviews, and documentation of news and trends. It also invites opinion pieces, profiles of organizations, and management case studies.</p>
                </div>
            </div>
        </div>
    );
};

export default News;