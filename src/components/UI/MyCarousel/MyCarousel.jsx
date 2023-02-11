import classes from './MyCarousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


export default function MyCarousel() {
	return (
		<div className={classes.carousel}>
			<Swiper
				spaceBetween={12}
				centerInsufficientSlides = {true}
				slidesPerView={3.5}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide><img src='../img/carousel/item-1.png' className={classes.slide} /></SwiperSlide>
				<SwiperSlide><img src='../img/carousel/item-1.jpg' className={classes.slide}/></SwiperSlide>
				<SwiperSlide><img src='../img/carousel/item-1.jpg' className={classes.slide}/></SwiperSlide>
				<SwiperSlide><img src='../img/carousel/item-1.jpg' className={classes.slide}/></SwiperSlide>
				<SwiperSlide><img src='../img/carousel/item-1.jpg' className={classes.slide}/></SwiperSlide>
			</Swiper>
		{/* <div className={classes.carousel}>MyCarousel</div> */}
		</div>
	)
}
