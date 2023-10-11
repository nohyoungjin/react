import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { useEffect } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

export default () => {

    useEffect(() => {
        document.body.classList.add('home')
        return () => {
            document.body.classList.remove('home')
        }        
    }, [])

    return (
        <>
            <div>
                <h2>메인</h2>
            </div>      

            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={ [Navigation, Pagination, Mousewheel, Keyboard] }
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </>
    )
}