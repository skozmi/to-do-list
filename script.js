let textInput = document.getElementById('add-text');
let addBtn = document.getElementById('addBtn');
let toDoListDiv = document.querySelector('.to-do-list');
let listUl = document.querySelector('ul');
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
let buttonUp = document.querySelector('.up');
let buttonDown = document.querySelector('.down');
let buttonRemove = document.querySelector('.remove');
let wordDiv = document.querySelector('.wordDiv');
let bulletDiv = document.querySelector('.bulletDiv');

const attachListBtn = (li) => {
   let listDiv = document.createElement('div');
   listDiv.className = 'listDiv';
   let up = document.createElement('button');
   up.className = 'up';
   up.innerHTML = '<img class="upImg" src="images/up.svg" />';
   listDiv.appendChild(up);
   let down = document.createElement('button');
   down.className = 'down';
   down.innerHTML = '<img class="downImg" src="images/down.svg" />';
   listDiv.appendChild(down);
   let remove = document.createElement('button');
   remove.className = 'remove';
   remove.innerHTML = '<img class="removeImg" src="images/remove.svg" />';
   listDiv.appendChild(remove);
   li.appendChild(listDiv);
}

addBtn.addEventListener('click', ()=>{
   if (textInput.value == "") {
	alert('Niste nista uneli u polje');
   } else {
   let ul = document.getElementsByTagName('ul')[0];
   let li = document.createElement('li');
   li.innerHTML = '<div class = "wordDiv"><div class="bulletDiv" style ="display: none"><img class="bulletImg" src="images/bullet.svg" /></div>' + textInput.value + '</div>';
   attachListBtn(li);
   ul.appendChild(li);
   textInput.value ="";
   }
});

listUl.addEventListener('click', (event) => {
	if(event.target.tagName == 'BUTTON'){
	  if(event.target.className == 'remove') {
	    let li = event.target.parentNode.parentNode;
	    let ul = li.parentNode;
	    ul.removeChild(li);
	  }
	  if(event.target.className == 'up') {
	    let li = event.target.parentNode.parentNode;
	    let prevLi=li.previousElementSibling;
	    let ul = li.parentNode;
	    if (prevLi) {
	      ul.insertBefore(li, prevLi);
	    }
	  }
	  if(event.target.className == 'down') {
	    let li = event.target.parentNode.parentNode;
	    let nextLi=li.nextElementSibling;
	    let ul = li.parentNode;
	    if (nextLi) {
	      ul.insertBefore(nextLi, li);
	    }
	  }
	}
	if(event.target.tagName == 'IMG'){
		if(event.target.className == 'removeImg') {
		  let li = event.target.parentNode.parentNode.parentNode;
		  let ul = li.parentNode;
		  ul.removeChild(li);
		}
		if(event.target.className == 'upImg') {
		  let li = event.target.parentNode.parentNode.parentNode;
		  let prevLi=li.previousElementSibling;
		  let ul = li.parentNode;
		  if (prevLi) {
			ul.insertBefore(li, prevLi);
		  }
		}
		if(event.target.className == 'downImg') {
		  let li = event.target.parentNode.parentNode.parentNode;
		  let nextLi=li.nextElementSibling;
		  let ul = li.parentNode;
		  if (nextLi) {
			ul.insertBefore(nextLi, li);
		  }
		}
	  }
	if(event.target.tagName == 'DIV'){
		if(event.target.className == 'wordDiv'){
			let li = event.target.parentNode;
			event.target.style.border = "solid 0.5vmin #00840c";
			li.style.textDecoration = "line-through";
			event.target.children[0].style.display = "block";
			event.target.className = 'wordDivSelected';		   
		}
		else if(event.target.className == 'wordDivSelected'){
			let li = event.target.parentNode;
			event.target.style.border = "solid 0.5vmin #82a2e8";
			li.style.textDecoration = "none";
			event.target.children[0].style.display = "none";
			event.target.className = 'wordDiv';	
		}
	}
});

