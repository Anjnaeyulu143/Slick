import React from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowBackIos } from "@mui/icons-material"
import { ArrowForwardIos } from '@mui/icons-material';

import "./index.css"

import { data } from '../data';

// const data = ['Anjan', 'Anjaneyulu', 'Vinay', 'Tiger', 'Lion']


const PreviousBtn = () => {
    return
    (
    <div>
        <ArrowBackIos />
    </div>
    )
}

const NextBtn = () => {
    return (
        <div>
            <ArrowForwardIos />
        </div>
    )
}

export const Carosuel = () => {
    return (
        <div style={{ margin: "30px" }}>
            <Slider
                autoplay
                autoplaySpeed={1000}
                dots
                initialSlide={5}
                infinite={true}
                prevArrow={<PreviousBtn />}
                NextArrow={<NextBtn />}
                customPaging={(i) => {
                    return <div>
                        <img src={data[i]} alt="" style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "10px`" }} />
                    </div>
                }}

                dotsClass='slick-dots custom-indicator'
            >

                {
                    data.map((item) => (
                        <div>
                            <img src={item} alt="" style={{ width: "100%", height: "80vh" }} />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
