import axios from "axios"

export const fetchHotels = async ({location, checkIn, checkOut}) => {
	console.log('location ', location);
	console.log('checkIn ', checkIn);
	console.log('checkOut ', checkOut);
	const response = await axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}`);
	return response.data;
}