import React, { useState } from "react";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import Card from "./Card";

const Testimonial = (props) => {
    let reviews = props.reviews;

    const[index, setIndex] = useState(0);

    // Handling the left arrow click
    function leftShiftHandler() {
        if((index-1) < 0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }
    }

    // handling the right arrow click
    function rightShiftHandler() {
        if((index+1) >= reviews.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }

    // Handling Surprise Me click
    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex- flex-col justify-center items-center mt-10 p-10 transition-all duration-700 
        hover:shadow-xl rounded-md">
            <Card review={reviews[index]}/>

            <div className="flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center">
                <button 
                onClick={leftShiftHandler}
                className="curosor-pointer hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={rightShiftHandler}
                className="curosor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-7">
                <button 
                onClick={surpriseHandler}
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md 
                font-bold text-lg text-white">
                    Surprise Me
                </button>
            </div>
        </div>
    )
}

export default Testimonial;