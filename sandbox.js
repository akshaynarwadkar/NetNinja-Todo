const ul = document.querySelector('ul');
const button = document.querySelector('button')



ul.addEventListener('click',e=>{
	console.log(e)
	if(e.target.nodeName=='LI'){
		e.target.remove()
	}
})



button.addEventListener('click',()=>{
	const li=document.createElement('li')
	li.textContent=prompt('Add an item')
	ul.append(li)
	console.log(ul)

	newUl = Array.from(ul.children)
	newUl.forEach(item => {
		item.addEventListener('click',e => {
			e.target.remove()
		})
	});
})



// ul.addEventListener('click',()=>{
// 	console.log(ul)
// })






