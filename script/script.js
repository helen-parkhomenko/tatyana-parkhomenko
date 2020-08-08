var flag=true;
function changeC()
{
	var col=document.getElementById("col").value;
	//alert(col);
	//document.body.style.backgroundColor=col;
	var article = document.getElementsByTagName('article')[0];
	article.style.backgroundColor=col;
}
function dayNight()
{
	var main=document.getElementsByTagName('main')[0];
	var el=main.getElementsByTagName('*');
	if(flag==true)
	{
		for(var i=0;i<el.length;i++)
	   {
		el[i].style.cssText="background-color:white;color:black;"
	   }
	   flag=false;
	}
else	
    {for(var i=0;i<el.length;i++)
	  {
		el[i].style.cssText="background-color:black;color:white;"
	  }
	flag=true;
    }
}

function go()
{
	window.timerM=window.setInterval(timer,3000);
	
}

function timer()
{
	if(window.number==undefined||window.number==3)
		window.number=1;
	else
		window.number++;
document.body.style.backgroundImage="URL('images/"+window.number+".jpg')";
document.body.style.backgroundSize="cover";
	
}


function stopT()
{
	clearInterval(timerM);
}

function down()
{
  var a = document.getElementById('dropdown');
  if ( a.style.display == 'none' )
  { a.style.display = 'block';
    a.style.zIndex=1000;
	a.style.position="absolute";
  }
  else
    if ( a.style.display == 'block' )
	{ a.style.display = 'none';
    a.style.zIndex=1;
	a.style.position="static";
	}
};


/*Gallery*/
/*открываются картинки в вспывающем окне*/

$(document).ready(function(){
	$("a.photo").fancybox();
});

$(document).ready(function(){
	$("a.photo").fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 500,
		speedOut: 500,
		hideOnOverlayClick: false,
		titlePosition: 'over'
	});
});


$(document).ready(function(){
	$("a.image").fancybox();
});

$(document).ready(function(){
	$("a.image").fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 500,
		speedOut: 500,
		hideOnOverlayClick: false,
		titlePosition: 'over'
	});
});



$(document).ready(function(){
	$("a.phot").fancybox();
});




$(document).ready(function(){
	$("a.phot").fancybox({
		transitionIn: 'elastic',
		transitionOut: 'elastic',
		speedIn: 500,
		speedOut: 500,
		hideOnOverlayClick: false,
		titlePosition: 'over'
	});
});





//new 25.02.2018

function galImg(img)
{
	var block=document.getElementById("bigImg");
	block.innerHTML="";//выводит только 1 картинку, удаляя предыдущие перед выводом
	block.style.textAlign="center";
	//console.log/*вывод в консоль*//*(img);
	var srcimg=img.src;
	var nimg=document.createElement('img');
	nimg.src=srcimg;
	nimg.style.width="90%";
	
	block.appendChild(nimg);
}



function sway(xPos, yPos) {
	img.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
 /* img1.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img2.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img3.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img4.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img5.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img6.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img7.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img8.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img9.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img10.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img11.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img12.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img13.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img14.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img15.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img16.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img17.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img18.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img19.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img20.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img21.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img22.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img23.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img24.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img25.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img26.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img27.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img28.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img29.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img30.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img31.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img32.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img33.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img34.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img35.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img36.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img37.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img38.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img39.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img40.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img41.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img42.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img43.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img44.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  img45.style.transform = "rotateX("+(yPos - wh) / 25+"deg) rotateY("+(xPos - ww) / 25 +"deg)";
  */}

document.addEventListener("mousemove", function(e) {
  sway(e.clientX,e.clientY);
})

document.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
	 
    if (touch) {
        sway(touch.pageX, touch.pageY);
    }
});

/*Еффект этих буковок на главной*/
// function([string1, string2],target id,[color1,color2])    
 consoleText(['Welcome.', 'I am Tanya.', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
















//Добавляем Web Animation Тема 15
function img_animate()
{

var reveal = document.querySelector(".reveal");
reveal.classList.remove("reveal");

var revealedImages = reveal.querySelectorAll("img"),
i = 1;

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

Array.prototype.forEach.call(revealedImages, function(photo) { 
    setTimeout(function(){ 
        photo.style.position = "absolute";
        photo.style.width = getRandom(33,45)+"%";
        photo.style.left = getRandom(-5,65)+"%";
        photo.style.top = getRandom(-6,60)+"vh";
        photo.classList.add("expose");
        var animate = photo.animate([
            { opacity: '0', transform: 'rotate('+getRandom(-12,12)+'deg) scale(1.2)', 
                boxShadow: '0 0 1px 12px rgba(0,0,0,.3)' },//.3
            { opacity: '1', transform: 'rotate('+getRandom(-8,8)+'deg)', 
                boxShadow: '0 0 12px 0px rgba(0,0,0,.3)' }
          ], {
            duration: 1300,
          fill: 'forwards'
          });                    
    }, 1500*i)
    i++;
})
}

/*Анкета*/
function valid()
{
	var adr_pattern=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
    var par_pattern=/[0-9a-z]+/i;
	var myform=document.regist;
	var user= myform.user.value;
	var pass1= myform.pass1.value;
	var pass2= myform.pass2.value;
	var email= myform.email.value;
	var bh= myform.bh.value;
	var male= myform.pol.value;
	var female= myform.pol.value;
	var it= myform.pol.value;
	var file= myform.inf.value;
	if(user == ""|| user=="")
		alert("Вы не ввели имя пользователя")
	else if(adr_pattern.test(email)==false)
		alert("Неверный адрес");
	else if(par_pattern.test(pass1)==false || par_pattern.test(pass2)==false)
		alert("Неверно указан пароль сайта");
	else if(pass1 != pass2)
		alert("Пароли не совпадают");
	else if(bh==" " || pol==" ")
		alert("Заполните все поля");
	else
	{
		alert("Все ОК");
		location.href="../index.html";
	}
}

/*Динамическая смена стилей*/
/*function color()
{
var col=document.getElementById('sel').value;
alert(col);
var dr=document.getElementById('drl');
dr.style.color= col;
}

/*Динамическая смена стилей*/
function color()
{
var col=document.getElementById('sel').value;
alert(col);
var dr=document.getElementById('dre');
dr.style.color = col;
}




$(".btn").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});






/* Fell free to visit my youtube channel for more updates,
https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA
*/


/*
let me explain what's happening in the above gif, first, we can the search icon with background color, whenever we click the icon, Input field slides out from the left side. and we see the icon rotation. and a slide-in and slide-out effect in both(icon and input) to the left side. 

HTML structure
Let's get started by creating the <strong>wrapper</strong> div element with <strong>serach-box</strong> div element. and within that create the input field and <strong>btn</strong> div element with search icon in it.

*/















