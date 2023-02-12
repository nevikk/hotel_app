import axios from "axios"

export const fetchHotels = async ({location, checkIn, checkOut}) => {
	const response = await axios.get(`http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&token=7fcb3770011b991915caa97cb981887e`);
	return response.data;
}