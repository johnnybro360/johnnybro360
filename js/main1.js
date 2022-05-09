// JavaScript Document 


var mybutton = document.getElementById("myBtn");

        window.onscroll = function () {
          scrollFunction();
        };

        function scrollFunction() {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }

        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }

let mainText = document.querySelector("h2")

window.addEventListener("scroll",function(){
	let value = window.scrollY;
	console.log("scrollY",value);
	
	if(value>200){
		mainText.style.animation="slideback 1s ease-out forwards";
	}else{
		mainText.style.animation="slide 1s ease-out";
	}
});


