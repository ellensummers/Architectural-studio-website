for ( let worker of workerArray) {
	const workerBlock = document.createElement('div');
	workerBlock.id = `workerBlock${workerArray.indexOf(worker)+1}`
	workerBlock.className = `workerBlock wow fadeInRight`;
	document.getElementById('team').append(workerBlock);

	const workerImage = document.createElement('img');
	workerImage.src = `./img/faces/${worker.img}`;
	workerBlock.append(workerImage);

	const workerTitle = document.createElement('div');
	workerTitle.className = `workerTitle`;
	workerTitle.innerHTML = ` ${worker.name} <br> ${worker.pro}`;
	workerBlock.append(workerTitle);
}