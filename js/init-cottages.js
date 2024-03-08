for ( let cottage of cottagesArray) {
	if (cottagesArray.indexOf(cottage)<3) {
	let cottageBlock = document.createElement('div');
	cottageBlock.id = `cottageBlock${cottagesArray.indexOf(cottage)+1}`;
	cottageBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('cottagesPage').append(cottageBlock);

	const cottageLink =  document.createElement('a');
	cottageLink.href = `${cottage.name}.html`;
	cottageBlock.append(cottageLink);

	const cottageImage = document.createElement('img');
	cottageImage.src = `./img/projects/cottages/${cottage.name}/${cottage.img}`;
	cottageLink.append(cottageImage);

	const cottageTitle = document.createElement('div');
	cottageTitle.className = `projectTitle`;
	cottageTitle.innerHTML = `Проект<br>${cottage.name}<br>${cottage.s}`;
	cottageLink.append(cottageTitle);
}
};
let title = document.title;
let ourArray = cottagesArray.find(cottage=> cottage.name === title);

let cottageName = document.createElement('div');
cottageName.innerHTML = `${ourArray.name}`;
cottageName.className = `page-title page-title_layout`;
document.getElementById('name').append(cottageName);

let cottageText = document.createElement('p');
cottageText.innerHTML = `${ourArray.text}`;
cottageText.className = `wow fadeInRight`;
document.getElementById('text').append(cottageText);

let cottageDate = document.createElement('p');
cottageDate.innerHTML = `${ourArray.date}`;
cottageDate.className = `projects-page__element`;
document.getElementById('date').append(cottageDate);

let cottageAuthor = document.createElement('p');
cottageAuthor.innerHTML = `${ourArray.author}`;
cottageAuthor.className = `projects-page__element`;
document.getElementById('author').append(cottageAuthor);

let cottagePlace = document.createElement('p');
cottagePlace.innerHTML = `${ourArray.place}`;
cottagePlace.className = `projects-page__element`;
document.getElementById('place').append(cottagePlace);

let cottageS = document.createElement('p');
cottageS.innerHTML = `${ourArray.s}`;
cottageS.className = `projects-page__element`;
document.getElementById('s').append(cottageS);

let cottagePlan1 = document.createElement('img');
cottagePlan1.src = `./img/projects/cottages/${ourArray.name}/${ourArray.plans1}`;
document.getElementById('plans').append(cottagePlan1);

let cottageImg = document.createElement('img');
cottageImg.src = `./img/projects/cottages/${ourArray.name}/${ourArray.img}`;
cottageImg.className = `wow fadeIn projects-page__top-block-img`;
document.getElementById('img').append(cottageImg);

let cottagePlan2 = document.createElement('img');
cottagePlan2.src = `./img/projects/cottages/${ourArray.name}/${ourArray.plans2}`;
document.getElementById('plans').append(cottagePlan2);

let cottagePhoto1 = document.createElement('img');
cottagePhoto1.src = `./img/projects/cottages/${ourArray.name}/${ourArray.image1}`;
cottagePhoto1.className = `swiper-slide-img`;
document.getElementById('photo1').append(cottagePhoto1);

let cottagePhoto2 = document.createElement('img');
cottagePhoto2.src = `./img/projects/cottages/${ourArray.name}/${ourArray.image2}`;
cottagePhoto2.className = `swiper-slide-img`;
document.getElementById('photo2').append(cottagePhoto2);

let cottagePhoto3 = document.createElement('img');
cottagePhoto3.src = `./img/projects/cottages/${ourArray.name}/${ourArray.image3}`;
cottagePhoto3.className = `swiper-slide-img`;
document.getElementById('photo3').append(cottagePhoto3);
console.log (ourArray);

