import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'


const Card = (props) => {
    let review = props.review;

    // Rendering the card for the current data
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute z-[10] top-[-7rem] mx-auto">
                <img className="w-[140px] h-[140px] aspect-square rounded-full z-[25]" 
                src={review.image} alt="Img"/>
                <div className="w-[140px] h-[140px] rounded-full absolute top-[-6px] left-[6px] z-[-10] bg-violet-500">
                </div>
            </div>

            <div className="text-center mt-7">
                <p className="tracking-wider text-2xl font-bold capitalize">{review.name}</p>
                <p className="text-violet-300 text-sm uppercase">{review.job}</p>
            </div>


            <div className="mx-auto mt-5 text-violet-300">
                <FaQuoteLeft/>
            </div>

            <div className="text-slate-500 text-center mt-4">
                {review.text}
            </div>

            <div className="mx-auto mt-5 text-violet-300">
                <FaQuoteRight/>
            </div>


        </div>
    )
}

export default Card;