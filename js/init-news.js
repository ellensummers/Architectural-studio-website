for ( let news of newsArray) {
	if (newsArray.indexOf(news)<6) {
	const newsBlock = document.createElement('div');
	newsBlock.id = `newsBlock${newsArray.indexOf(news)+1}`
	newsBlock.className = `newsBlock wow fadeInRight`;
	document.getElementById('blog').append(newsBlock);

	const newsLink =  document.createElement('a');
	newsLink.href = `${news.title}.html`;
	newsBlock.append(newsLink);

	const newsImage = document.createElement('img');
	newsImage.src = `./img/news/${news.img}`;
	newsLink.append(newsImage);

	const newsTitle = document.createElement('div');
	newsTitle.className = `newsTitle`;
	newsTitle.innerHTML = ` ${news.title} <br> ${news.date}`;
	newsLink.append(newsTitle);
}
}

