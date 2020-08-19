import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'There are endless possibilities for virgin cocktails. Be creative and serve your faux cocktail in a fun and festive way. Keep on hand colorful garnishes, plenty of ice, and some decorative glasses to turn your mocktail into something spectacular.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:'The beauty of nature doesn’t need to be hard to find. Our goal is simple - build the largest collection of hand-curated trail guides, so you can explore the outdoors with confidence. Anytime. Anywhere.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:'We have resumed our On Demand Van Service. It will run Monday – Friday from 10:00AM – 4:00PM. Rides can be requested using the Harvard Evening Van App. Information can be found here.  All other service remains suspended.'
            },
            {
                icon:<FaBeer/>,
                title:"fresh juice",
                info:'Experience a juice detox staying in our stunning country house. We offer 6-day stays, from Saturday to the following Friday, with daily fresh organic juices, meditation, pilates, Nature walks in serene woodlands, and a range of relaxing treatments you can choose from.'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        );
    }
}
