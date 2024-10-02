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

// {
// 	"category_id": "1001",
// 	"category": "Music"
//   }

//create display categories

const displayCategories = (categories)=>{

	const categoryContainer = document.getElementById('categories');
	//add data in html
	// console.log(data)
	categories.forEach((item)=>{
		console.log(item);
		const button = document.createElement('button');
		button.innerText = item.category;
		button.classList.add('btn');

		categoryContainer.append(button);
	})

}

loadCategories();