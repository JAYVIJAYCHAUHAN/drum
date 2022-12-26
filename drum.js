 
//   document.querySelector("button").addEventListener("click",handleClick);
//   function handleClick(){
//     alert("welcome");
//   }
 // concept of evenlisler

//  var  numberOfbutton=document.querySelectorAll(".drum").length;
//  for(var i=0;i<numberOfbutton;i++){
//      document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//       //alert("welcome")
//       console.log(this.style.color="white")
//      });
//  }
  
   var length = document.querySelectorAll(".drum").length;

   for (var i = 0; i < length; i++) {
     document.querySelectorAll("button")
       [i].addEventListener("click", function () {
         var letter = this.innerHTML;
         playSound(letter);
         animate(letter);
       });
   }

   document.addEventListener("keydown", function (event) {
     playSound(event.key);
     animate(event.key);
   });

   function playSound(letter) {
     switch (letter) {
       case "a":
         var a = new Audio("d.mp3");
         a.play();
         break;

       case "b":
         var b = new Audio("e.mp3");
         b.play();
         break;

       case "c":
         var c = new Audio("f.mp3");
         c.play();
         break;

       case "d":
         var d = new Audio("g.mp3");
         d.play();
         break;

       case "e":
         var e = new Audio("c.mp3");
         e.play();
         break;

       case "f":
         var f = new Audio("a.mp3");
         f.play();
         break;

       case "g":
         var g = new Audio("b.mp3");
         g.play();
         break;

       default:
         console.log(this.innerHTML);
         break;
     }
   }

   function animate(key) {
     var active = document.querySelector("." + key);
     active.classList.add("pressed");

     setTimeout(function () {
       active.classList.remove("pressed");
     }, 100);
   }
   

  