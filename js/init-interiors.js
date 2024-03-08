for ( let interior of interiorsArray) {
	if (interiorsArray.indexOf(interior)<3) {
	let interiorBlock = document.createElement('div');
	interiorBlock.id = `interiorBlock${interiorsArray.indexOf(interior)+1}`;
	interiorBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('interiorsPage').append(interiorBlock);

	const interiorLink =  document.createElement('a');
	interiorLink.href = `${interior.name}.html`;
	interiorBlock.append(interiorLink);

	const interiorImage = document.createElement('img');
	interiorImage.src = `./img/projects/interiors/${interior.name}/${interior.img}`;
	interiorLink.append(interiorImage);

	const interiorTitle = document.createElement('div');
	interiorTitle.className = `projectTitle`;
	interiorTitle.innerHTML = `Проект<br>${interior.name}<br>${interior.s}`;
	interiorLink.append(interiorTitle);
}
};

let title = document.title;
let ourArray = interiorsArray.find(interior=> interior.name === title);

let interiorName = document.createElement('div');
interiorName.innerHTML = `${ourArray.name}`;
interiorName.className = `page-title page-title_layout`;
document.getElementById('name').append(interiorName);

let interiorText = document.createElement('p');
interiorText.innerHTML = `${ourArray.text}`;
interiorText.className = `wow fadeInRight`;
document.getElementById('text').append(interiorText);

let interiorDate = document.createElement('p');
interiorDate.innerHTML = `${ourArray.date}`;
interiorDate.className = `projects-page__element`;
document.getElementById('date').append(interiorDate);

let interiorAuthor = document.createElement('p');
interiorAuthor.innerHTML = `${ourArray.author}`;
interiorAuthor.className = `projects-page__element`;
document.getElementById('author').append(interiorAuthor);

let interiorPlace = document.createElement('p');
interiorPlace.innerHTML = `${ourArray.place}`;
interiorPlace.className = `projects-page__element`;
document.getElementById('place').append(interiorPlace);

let interiorS = document.createElement('p');
interiorS.innerHTML = `${ourArray.s}`;
interiorS.className = `projects-page__element`;
document.getElementById('s').append(interiorS);

let interiorImg = document.createElement('img');
interiorImg.src = `./img/projects/interiors/${ourArray.name}/${ourArray.img}`;
interiorImg.className = `wow fadeIn projects-page__undertop-block-img`;
document.getElementById('img').append(interiorImg);

let interiorPhoto1 = document.createElement('img');
interiorPhoto1.src = `./img/projects/interiors/${ourArray.name}/${ourArray.image1}`;
interiorPhoto1.className = `swiper-slide-img`;
document.getElementById('photo1').append(interiorPhoto1);

let interiorPhoto2 = document.createElement('img');
interiorPhoto2.src = `./img/projects/interiors/${ourArray.name}/${ourArray.image2}`;
interiorPhoto2.className = `swiper-slide-img`;
document.getElementById('photo2').append(interiorPhoto2);

let interiorPhoto3 = document.createElement('img');
interiorPhoto3.src = `./img/projects/interiors/${ourArray.name}/${ourArray.image3}`;
interiorPhoto3.className = `swiper-slide-img`;
document.getElementById('photo3').append(interiorPhoto3);
console.log (ourArray);

