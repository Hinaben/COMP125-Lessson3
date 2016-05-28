/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
  
  //define an array of HTML elements
  var paragraphElements = [];
  
  paragraphElements[0]= document.getElementById("paragraphOne");  
  paragraphElements[1]= document.getElementById("paragraphTwo");  
  paragraphElements[2]= document.getElementById("paragraphThree");    
  
  //define your paragraphs array
  var paragraphs = [];
  
  //
  paragraphs[0] = "This page is my home page. The best is yet to come!"
  paragraphs[1] = "This is my project page and project details will be added later."
  paragraphs[2] = "My name is Hina Patel and my student number is 821021425."
   
    //check to see if paragraph one exists
  for (var index = 0; index < paragraphElements.length; index++){
    if(paragraphElements[index]){
      paragraphElements[index].textContent = paragraphs[index];
    }
  }
  
})();