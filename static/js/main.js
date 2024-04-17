// Карусель

document.addEventListener('DOMContentLoaded', function () {
	const carouselItems = document.querySelectorAll('.carousel-item')
	const prevBtn = document.querySelector('.prev-btn')
	const nextBtn = document.querySelector('.next-btn')
	let currentIndex = 0

	function goToSlide(index) {
		if (index < 0) {
			index = carouselItems.length - 1
		} else if (index >= carouselItems.length) {
			index = 0
		}
		currentIndex = index
		document.querySelector('.carousel-inner').style.transform = `translateX(-${
			currentIndex * 100
		}%)`
	}

	function goToNextSlide() {
		goToSlide(currentIndex + 1)
	}

	function goToPrevSlide() {
		goToSlide(currentIndex - 1)
	}

	prevBtn.addEventListener('click', goToPrevSlide)
	nextBtn.addEventListener('click', goToNextSlide)

	setInterval(goToNextSlide, 3000) // автоматическая прокрутка каждые 3 секунды
})

var searchInput = document.getElementById('searchInput')

// Функция для обработки события нажатия клавиши Enter
function handleKeyPress(event) {
	if (event.keyCode === 13) {
		// Код клавиши Enter
		var searchQuery = searchInput.value.toLowerCase()

		var gridItems = document.getElementsByClassName('grid-item')

		for (var i = 0; i < gridItems.length; i++) {
			var anketa = gridItems[i].querySelector('.anketa')
			var anketaName = anketa
				.querySelector('.anketaName')
				.textContent.toLowerCase()
			var anketaTheme = anketa
				.querySelector('.anketaTheme')
				.textContent.toLowerCase()
			var anketaDescription = anketa
				.querySelector('.anketaDescription')
				.textContent.toLowerCase()

			// Выполняем поиск на основе ввода пользователя
			if (
				anketaName.includes(searchQuery) ||
				anketaTheme.includes(searchQuery) ||
				anketaDescription.includes(searchQuery)
			) {
				gridItems[i].style.display = 'block' // Показываем совпадающий элемент
				console.log('Найдено совпадение:')
				console.log('Имя: ' + anketaName)
				console.log('Тема: ' + anketaTheme)
				console.log('Описание: ' + anketaDescription)
			} else {
				gridItems[i].style.display = 'none' // Скрываем несовпадающий элемент
			}
		}
	}
}

// Добавляем обработчик события нажатия клавиши Enter к полю ввода
searchInput.addEventListener('keypress', handleKeyPress)

// Всплывающее окно
function showPopup() {
	var popup = document.createElement('div')
	popup.className = 'popup'

	var close = document.createElement('span')
	close.innerHTML = '&times;'
	close.className = 'close'
	close.onclick = function () {
		document.body.removeChild(popup)
	}
	popup.appendChild(close)

	var form = document.createElement('form')
	form.onsubmit = function (event) {
		event.preventDefault() // Предотвращаем перезагрузку страницы
		var formData = new FormData(form)
		var data = {}
		for (var pair of formData.entries()) {
			data[pair[0]] = pair[1]
		}
		console.log(data)
		showSuccessMessage(popup)
	}

	var div1 = document.createElement('div')
	div1.textContent = 'Ваша почта *'
	form.appendChild(div1)

	var input1 = document.createElement('input')
	input1.type = 'text'
	input1.name = 'input1'
	input1.placeholder = 'x@y.com'
	form.appendChild(input1)

	var div2 = document.createElement('div')
	div2.textContent = 'Ваше имя и фамилия *'
	form.appendChild(div2)

	var input2 = document.createElement('input')
	input2.type = 'text'
	input2.name = 'input2'
	input2.placeholder = 'Иван Иванов'
	form.appendChild(input2)

	var div3 = document.createElement('div')
	div3.textContent = 'О чём хотите поговорить? *'
	form.appendChild(div3)

	var input3 = document.createElement('input')
	input3.type = 'text'
	input3.name = 'input3'
	input3.placeholder = 'Хочу научится писать код'
	form.appendChild(input3)

	var div4 = document.createElement('div')
	div4.textContent = 'Ваши достижения'
	form.appendChild(div4)

	var input4 = document.createElement('input')
	input4.type = 'text'
	input4.name = 'input4'
	input4.placeholder = 'Сделал рабочий сайт'
	form.appendChild(input4)

	var div5 = document.createElement('div')
	div5.textContent = 'Telegram @username *'
	form.appendChild(div5)

	var input5 = document.createElement('input')
	input5.type = 'text'
	input5.name = 'input5'
	input5.placeholder = '@XXXXXXXX'
	form.appendChild(input5)

	var div6 = document.createElement('div')
	form.appendChild(div6)

	var submitButton = document.createElement('input')
	submitButton.type = 'submit'
	submitButton.value = 'Отправить'
	form.appendChild(submitButton)

	popup.appendChild(form)

	document.body.appendChild(popup)
}

function showSuccessMessage(popup) {
	var successMessage = document.createElement('div')
	successMessage.className = 'success'
	successMessage.textContent = 'Данные успешно отправлены!'
	popup.innerHTML = ''
	popup.appendChild(successMessage)

	setTimeout(function () {
		document.body.removeChild(popup)
	}, 3000)
}
