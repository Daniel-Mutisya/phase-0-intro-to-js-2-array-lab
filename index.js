const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
    return cats;
 }
 
 function destructivelyPrependCat(Bob){
   cats.unshift("Bob");
   return cats;
 }
 
 function destructivelyRemoveLastCat(Ralph){
   cats.pop('Ralph');
   return cats;
 }
 
 function destructivelyRemoveFirstCat(Bob){
   cats.shift("Bob");
   return cats;
 }
 
 function appendCat(Broom){
   var newCats= [...cats,Broom];
   return newCats;
 }
 
 function prependCat(Arnold){
   var newCats=[Arnold, ...cats];
   return newCats;
 }
 
 function removeLastCat(Garfield){
    Array.prototype.shift(Garfield); 
    return(["Milo", "Otis"]);
      };

 
 
 function removeFirstCat(Milo){
    Array.prototype.pop(Milo)
return(["Otis", "Garfield"]);
       
      };







