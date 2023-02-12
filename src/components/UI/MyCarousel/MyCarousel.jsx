import classes from './MyCarousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


export default function MyCarousel({images}) {
	return (
		<div className={classes.carousel}>
			<Swiper
				spaceBetween={12}
				centerInsufficientSlides = {true}
				slidesPerView={3.5}
			>
				{images.map((imgSrc, index) => (
					<SwiperSlide key={index} ><img src={imgSrc} className={classes.slide} alt="slide"/></SwiperSlide>
				))}
			</Swiper>
		{/* <div className={classes.carousel}>MyCarousel</div> */}
		</div>
	)
}
