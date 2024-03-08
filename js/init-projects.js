for ( let cottage of cottagesArray) {
	let cottageBlock = document.createElement('div');
	cottageBlock.id = `cottageBlock${cottagesArray.indexOf(cottage)+1}`;
	cottageBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('cottages').append(cottageBlock);

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
};
for ( let interior of interiorsArray) {
	let interiorBlock = document.createElement('div');
	interiorBlock.id = `interiorBlock${interiorsArray.indexOf(interior)+1}`;
	interiorBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('interiors').append(interiorBlock);

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
};
for ( let landscape of landscapesArray) {
	let landscapeBlock = document.createElement('div');
	landscapeBlock.id = `landscapeBlock${landscapesArray.indexOf(landscape)+1}`;
	landscapeBlock.className = `projectBlock wow fadeInRight`;
	document.getElementById('landscapes').append(landscapeBlock);

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
};

// for ( let cottage of cottagesArray) {
// 	if (cottagesArray.indexOf(cottage)<5) {
// 	let cottageBlock = document.createElement('div');
// 	cottageBlock.id = `cottageBlock${cottagesArray.indexOf(cottage)+1}`;
// 	cottageBlock.className = `cottageBlock wow fadeInRight`;
// 	document.getElementById('maincottages').append(cottageBlock);

// 	const cottageLink =  document.createElement('a');
// 	cottageLink.href = `./html/projects/cottages/${cottage.name}.html`;
// 	cottageBlock.append(cottageLink);

// 	const cottageImage = document.createElement('img');
// 	cottageImage.src = `./img/projects/cottages/${cottage.name}/${cottage.img}`;
// 	cottageLink.append(cottageImage);

// 	const cottageTitle = document.createElement('div');
// 	cottageTitle.className = `cottageTitle`;
// 	cottageTitle.innerHTML = `Проект<br>${cottage.name}<br>${cottage.s}`;
// 	cottageLink.append(cottageTitle);
// }
// }