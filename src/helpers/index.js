// Вспомогательный функции

// Функция склонения слова
export function declOfNum(number, words) {
		return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

// Функция форматирования даты в строку вида 'день название месяца год'
export function formatDate(dateString) {
	const dateArray = dateString.split('-');
	const month = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];

	const dateFormat =
		String(parseInt(dateArray[2])) +
		' ' +
		month[parseInt(dateArray[1]) - 1] +
		' ' +
		dateArray[0];

	return dateFormat;
}

// Функция разделения числа по три цифры
export function formatPrice(priceNumber) {
	priceNumber = Math.trunc(priceNumber);
	const priceArray = [];
	while(priceNumber >= 1000) {
		if (priceNumber % 1000 < 10) {
			priceArray.unshift('00'.concat(String(priceNumber % 1000)));
		} else if (priceNumber % 1000 < 100) {
			priceArray.unshift('0'.concat(String(priceNumber % 1000)));
		} else {
			priceArray.unshift(''.concat(String(priceNumber % 1000)));
		}
		priceNumber = Math.trunc(priceNumber / 1000);
	}
	priceArray.unshift(priceNumber);
	return priceArray.join(' ');
}
