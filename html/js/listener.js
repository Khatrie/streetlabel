window.addEventListener('message', (event) => {
	let item = event.data;
  
	if (item.type === 'open') {
		if (!item.active) {
			$(".compass").hide();
		} else {
			$('.compass').show();

			$('.compass').css('left', item.positionX + '%');
			$('.compass').css('bottom', item.positionY + '%');

			$('span.direction').text(item.direction);
			$('span.street').text(item.street);
			$('span.street').css('color', item.color);
			$('span.zone').text(item.zone);
		}
	}  
})