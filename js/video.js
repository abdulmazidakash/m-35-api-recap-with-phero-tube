// console.log('video script added');
// 1. fetch, load and show categories on html

//create load categories

const loadCategories = ()=>{
	//fetch the data

	fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
		.then(res => res.json())
		.then(data => displayCategories(data.categories))
		.catch(error => console.log(error));
}

//create display categories

const displayCategories = (data)=>{

	//add data in html
	console.log(data)
}

loadCategories();