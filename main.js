document.getElementById('btn-surprise').addEventListener('click', () => {
	const santaContainer = document.querySelector('.santa')
	const santa = document.getElementById('flying-santa')
	const message = document.getElementById('message')
	const photoContainer = document.getElementById('photo-container')
	const santaSound = document.getElementById('santa-sound') // Звук Санты
	const fireworksContainer = document.getElementById('fireworks-container') 


	message.classList.add('show')
	photoContainer.classList.add('show')

	santaContainer.classList.remove('hidden')

	santaContainer.style.animation = 'flySanta 15s linear forwards'


	santaSound.currentTime = 0 
	santaSound.play() 

	// Убираем Санту после завершения анимации (15 секунд)
	setTimeout(() => {
		santaContainer.classList.add('hidden')
	}, 15000)



	// Убираем уведомление через 3 секунды
	setTimeout(() => {
		notification.remove()
	}, 3000)

	// Оповещение через alert
	setTimeout(() => alert('Сюрприз открыт! 🎉'), 1000)

	// Запуск фейерверков
	const fireworkCount = 15 // Количество фейерверков
	for (let i = 0; i < fireworkCount; i++) {
		const firework = document.createElement('div')
		firework.classList.add('firework')

		// Случайная позиция для фейерверка
		firework.style.left = `${Math.random() * 100}vw`
		firework.style.top = `${Math.random() * 100}vh`

		// Случайный размер фейерверка для разнообразия
		firework.style.width = `${Math.random() * 5 + 3}px`
		firework.style.height = `${Math.random() * 5 + 3}px`

		// Случайная форма для фейерверка
		const randomForm = Math.random() > 0.5 ? 'star' : 'square' // случайный выбор формы
		firework.classList.add(randomForm)

		fireworksContainer.appendChild(firework)

		// Удаляем фейерверк через 6-7 секунд
		setTimeout(() => {
			firework.remove()
		}, 7000) 
	}
})

// Логика включения/выключения музыки
const musicToggle = document.getElementById('music-toggle')
const musicIframe = document.getElementById('bg-music')

musicToggle.addEventListener('click', () => {
	if (musicIframe.src.includes('autoplay=0')) {
		// Если музыка не играет, включаем её
		musicIframe.src = musicIframe.src.replace('autoplay=0', 'autoplay=1')
		musicToggle.textContent = 'Остановить музыку'
	} else {
		// Если музыка играет, останавливаем её
		musicIframe.src = musicIframe.src.replace('autoplay=1', 'autoplay=0')
		musicToggle.textContent = 'Включить музыку'
	}
})
