import React from "react";
import {Gift} from './Gift';
import Background from "../assets/Background.png";
import {ReverseGift} from "./ReverseGift"
import Media from '../assets/Media.png';
import Card from "./Card (2)";
import Rectangle from "../assets/Rectangle.png"
import Rectangle2 from "../assets/Rectangle2.png"
import Rectangle3 from "../assets/Rectangle3.png"
import Rectangle4 from "../assets/Rectangle4.png"

export const Content = () => {
    const title = ['Birthday', 'Anniversary', "Valentine's Day", 'Christmas']
    const image = [Rectangle, Rectangle2,Rectangle3, Rectangle4]
    return (
        <div className="Content">
            <div className="wrapper">
                <Gift 
                title='Find a gift for your wife or girlfriend'
                titleTag={'h2'}
                textTag={'p'}
                text='Struggling to find a gift for your wife or girlfriend?
No problem!'
                img={Background}
                />
                <ReverseGift
                title='How we work'
                titleTag='h2'
                textTag='p'
                text='We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.'
                img={Media}
                />
            </div>
            <section className="Gifts_Occasions">
                <h2>Gifts for all Occasions</h2>
                <span>“Try our web app to find the best gifts for all occasions”</span>
                <div className="card_body">
            {
                title.map((title, index) => (
                        <Card title={title} index={index} textButton="See More >" img={image[index]}/>
                ))
            }
            </div>
            </section>
        </div>
    )
}