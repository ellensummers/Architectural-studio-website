for ( let landscape of landscapesArray) {
	if (landscapesArray.indexOf(landscape)<3) {
	let landscapeBlock = document.createElement('div');
	landscapeBlock.id = `landscapeBlock${landscapesArray.indexOf(landscape)+1}`;
	landscapeBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('landscapesPage').append(landscapeBlock);

	const landscapeLink =  document.createElement('a');
	landscapeLink.href = `${landscape.name}.html`;
	landscapeBlock.append(landscapeLink);

	const landscapeImage = document.createElement('img');
	landscapeImage.src = `./img/projects/landscapes/${landscape.name}/${landscape.img}`;
	landscapeLink.append(landscapeImage);

	const landscapeTitle = document.createElement('div');
	landscapeTitle.className = `projectTitle`;
	landscapeTitle.innerHTML = `Проект<br>${landscape.name}<br>${landscape.s}`;
	landscapeLink.append(landscapeTitle);
}
};
let title = document.title;
let ourArray = landscapesArray.find(landscape=> landscape.name === title);

let landscapeName = document.createElement('div');
landscapeName.innerHTML = `${ourArray.name}`;
landscapeName.className = `page-title page-title_layout`;
document.getElementById('name').append(landscapeName);

let landscapeText = document.createElement('p');
landscapeText.innerHTML = `${ourArray.text}`;
landscapeText.className = `wow fadeInRight`;
document.getElementById('text').append(landscapeText);

let landscapeDate = document.createElement('p');
landscapeDate.innerHTML = `${ourArray.date}`;
landscapeDate.className = `projects-page__element`;
document.getElementById('date').append(landscapeDate);

let landscapeAuthor = document.createElement('p');
landscapeAuthor.innerHTML = `${ourArray.author}`;
landscapeAuthor.className = `projects-page__element`;
document.getElementById('author').append(landscapeAuthor);

let landscapePlace = document.createElement('p');
landscapePlace.innerHTML = `${ourArray.place}`;
landscapePlace.className = `projects-page__element`;
document.getElementById('place').append(landscapePlace);

let landscapeS = document.createElement('p');
landscapeS.innerHTML = `${ourArray.s}`;
landscapeS.className = `projects-page__element`;
document.getElementById('s').append(landscapeS);

let landscapeImg = document.createElement('img');
landscapeImg.src = `./img/projects/landscapes/${ourArray.name}/${ourArray.img}`;
landscapeImg.className = `wow fadeIn projects-page__undertop-block-img`;
document.getElementById('img').append(landscapeImg);

let landscapePhoto1 = document.createElement('img');
landscapePhoto1.src = `./img/projects/landscapes/${ourArray.name}/${ourArray.image1}`;
landscapePhoto1.className = `swiper-slide-img`;
document.getElementById('photo1').append(landscapePhoto1);

let landscapePhoto2 = document.createElement('img');
landscapePhoto2.src = `./img/projects/landscapes/${ourArray.name}/${ourArray.image2}`;
landscapePhoto2.className = `swiper-slide-img`;
document.getElementById('photo2').append(landscapePhoto2);

let landscapePhoto3 = document.createElement('img');
landscapePhoto3.src = `./img/projects/landscapes/${ourArray.name}/${ourArray.image3}`;
landscapePhoto3.className = `swiper-slide-img`;
document.getElementById('photo3').append(landscapePhoto3);
console.log (ourArray);