import axios from "axios"

export const fetchCities = async () => {
		const response = await axios.get('http://engine.hotellook.com/api/v2/static/locations.json?token=7fcb3770011b991915caa97cb981887e');
		return response.data;
}