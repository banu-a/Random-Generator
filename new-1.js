$(document).ready(function(){

  function getQuote(){
    var quotes=["Good friends, good books, and a sleepy conscience: this is the ideal life.", 
	"Life is not a matter of holding good cards, but sometimes, playing a poor hand well.", 
	"Enjoy the little things in life, because one day you will look back and realize they were the big things.",
	"In three words I can sum up everything I’ve learned about life : it goes on.",
	"Women are meant to be loved, not to be understood.", 
	"There are certain words which are nearer and dearer to a man than any others.", 
	"The greatest ideas are the simplest.", "Violence is the last refuge of the incompetent.", 
	"The greatest happiness is to know the source of unhappiness.", 
	"Everyone thinks of changing the world, but no one thinks of changing himself.", 
	"Doubt that truth to be a liar, but never doubt I love.", 
	"It is only with the heart that one can see rightly; what is essential is invisible to the eye.", 
	"Nothing on earth puts more pressure on the human mind than nothing.", 
	"Selfishness must always be forgiven you know, because there is no hope of a cure.", 
	"War is peace. Freedom is slavery. Ignorance is strength.", 
	"There is no friend as loyal as a book.", 
	"Maybe this world is another planet’s hell."];
      var authors=["Mark Twain",
	"Jack London", 
	"Kurt Vonnegut", 
	"Robert Frost", 
	"Oscar Wilde", 
	"Nikolai Gogol", 
	"William Golding", 
	"Isaac Asimov", 
	"Fyodor Dostoevsky", 
	"Leo Tolstoy", 
	"William Shakespeare", 
	"Antoine de Saint-Exupery", 
	"Stefan Zweig", 
	"Jane Austen", 
	"George Orwell", 
	"Ernest Hemingway", 
	"Aldous Huxley"];
       var colorPalette = ['#6B5B95',
'#944743',
'#BC70A4',
'#BFD641',
'#2E4A62',
'#92B558',
'#672E3B',
'#223A5E',
'#9C9A40',
'#D2691E',
 '#CE3175',
 '#AD5D5D',
 '#B76BA3',
 '#F7786B',
 '#79C753',
 '#955251',
 '#B565A7',
 '#009B77',
 '#45B8AC',
 '#EFC050',
 '#9B2335',
 '#7FCDCD',
 '#C3447A',
 '#88B04B',
 '#9896A4'];
    var renk=document.getElementById("renk");
 
 
renk.onclick=function(){
 
var rasgele=Math.floor(Math.random()*colorPalette.length);
 
document.body.style.backgroundColor=colorPalette[rasgele];

}
    
var randomNum=Math.floor((Math.random()*quotes.length));
    var randomQuote=quotes[randomNum];
    var randomAuthor=authors[randomNum];
   $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  
  }  
          
       $("#renk").on("click", function(){
      getQuote();
         
          
   });
});         
 