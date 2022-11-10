let backImg = document.querySelector('img');

backImg.addEventListener('click',() => {
	let src = backImg.getAttribute('src');
	if (src === 'images/index-back.jpeg'){
		backImg.setAttribute('src','images/index-back2.jpg');
	}else {
		backImg.setAttribute('src','images/index-back.jpeg');
	}
});

/*
	场景：进入网站，弹出窗口让用户输入姓名，然后展示个性化欢迎语，下次用户再进入网站，无需输入姓名，就展示欢迎语。
	页面底部加个按钮，可以让用户随时切换用户名。
*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')) {
	setUserName();
}else {
	myHeading.textContent = 'Forest Life,' + localStorage.getItem('name');
}

function setUserName() {
  let userName = prompt('请输入你的名字。');
  if(!userName) {
  	setUserName();
  }else {
  	localStorage.setItem('name',userName);
  	myHeading.textContent = 'Forest Life,' + userName;
  }
}

myButton.onclick = function() {
	setUserName();
}