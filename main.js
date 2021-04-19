$(document).ready(function(){
 //creo referenze agli elementi

 var iconaOpen = $(".header-right a");//icona hamburger fas fa-bars

  var menuHamburger = $(".hamburger-menu");//chiamo menuhamburger la classe che contiene la lista che dobbiamo visualizzare

  var iconaClose = $(".hamburger-menu .close");//icona x di close fas fa-times

  //funzioni che creano le azioni una volta cliccato sull'icona

  iconaOpen.click(function(){
    menuHamburger.fadeIn(2000);
  })//diciamo che con il comando click il menuhamburgher e quindi con esso la lista compare dopo 2 secondi

  iconaClose.click(function(){
    menuHamburger.fadeOut(2000);
  })//diciamo che con il comando click il menuhamburgher e quindi con esso la lista scompare dopo 2 secondi

 
})