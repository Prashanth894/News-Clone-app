
var search=document.querySelector('#search').addEventListener('click', e =>{
	e.preventDefault()
	var textarea = document.querySelector("#keyword").value
	
	// const btn=document.querySelector("#search")
	// var newsBlock = document.createElement('div')
	
	var title = document.createElement('header')
	title.setAttribute('class', 'h1 border-dark bg-light text-center container br')
	
	
	title.textContent= `${textarea}`
	var titleNav = document.querySelector('#searched-title')
	document.querySelector("#my-div").appendChild(title)
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=${textarea}&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
	

		
	    
		{
			
		// console.log(url);
		// url = `${url}${search}`
		
				
				
				
				var output = ""
				
				for( i=0 ; i <response.articles.length; i++) {
					console.log(response.articles.length)
					output =`
					<div class="container">
					<div class="card">
					<div class="row g-0">
					<div class="col-md-4">
					<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
					</div>
					  <div class="col-md-8">
					  <div class="card-body">
					  <h4 class="card-title">${response.articles[i].title}</h4>
					  <p class="card-text">${response.articles[i].content}</p>
					  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
					  <p>
					  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
					  </p>
					  </div>
					  </div>
					  </div>
					  
					  </div>
					  </div>
					  </div>
					  `
					  document.querySelector("#my-div").innerHTML += output;
					  document.querySelector("#keyword").value=""
					  
					
					  
					  
	
					  
					 
					}
				
					
					
		}}
		
	
	}
		xhr.send(data);
		 })
	
	
	
document.querySelector('#btn-home').addEventListener('click', e =>{
	e.preventDefault()
	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})
document.querySelector('#btn-entertainement').addEventListener('click', e =>{
	e.preventDefault()

	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=Entertainement&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})

document.querySelector('#btn-study').addEventListener('click', e =>{
	e.preventDefault()

	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=study&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})

document.querySelector('#btn-sports').addEventListener('click', e =>{
	e.preventDefault()

	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=sports&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})

document.querySelector('#btn-business').addEventListener('click', e =>{
	e.preventDefault()

	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=business&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})

document.querySelector('#btn-politics').addEventListener('click', e =>{
	e.preventDefault()

	
	
	const data = "null";
	const api_key = "c1423f8cdd68455997b358bbf5fd636a"
	const url = `https://newsapi.org/v2/everything?q=politics&apiKey=c1423f8cdd68455997b358bbf5fd636a`
	
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url)
	
	xhr.onreadystatechange = () => {
		
		if(xhr.readyState === 4 && xhr.status === 200) {
			const stringResponse = xhr.responseText
			const response = JSON.parse(stringResponse)
			console.log(response)
			
			
			
			var output = ""
			
			for( i=0 ; i <response.articles.length; i++) {
				console.log(response.articles.length)
				output =`
				<div class="container">
				<div class="card">
				<div class="row g-0">
				<div class="col-md-4">
				<img src="${response.articles[i].urlToImage}" style="height:200px;width:300px;">
				</div>
				  <div class="col-md-8">
				  <div class="card-body">
				  <h4 class="card-title">${response.articles[i].title}</h4>
				  <p class="card-text">${response.articles[i].content}</p>
				  <p class="card-text  text-muted"><small> ${response.articles[i].publishedAt}</small></br><small> ${response.articles[i].source.name}</small></br><small>Author : ${response.articles[i].author}</small></p>
				  <p>
				  <a href="${response.articles[i].url}"  target="blanck" class="btn btn-primary">Read More</a>
				  </p>
				  </div>
				  </div>
				  </div>
				  
				  </div>
				  </div>
				  </div>
				  `
				  document.querySelector("#my-div").innerHTML += output;
				 
				}
				
				
	}}

	xhr.send(data);
})
