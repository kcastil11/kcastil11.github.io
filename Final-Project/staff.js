const requestURL = 'https://kcastil11.github.io/final/personas.json';
 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['staffs'];

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Frank Lampard" || towns[i].name == "Zinedin Zidane" || towns[i].name == "David Beckham"  || towns[i].name == "Frodo" || towns[i].name == "King Richard" || towns[i].name == "Salma Hayek" ){
        

      var contenido = document.createElement('section');
      var h2 = document.createElement('h2');
      var h4 = document.createElement('h4');
      var year = document.createElement('p');
      var population = document.createElement('p');
      var rainfall = document.createElement('p');
      var h3 = document.createElement('h3');
      var star = document.createElement('p');
      var rating = document.createElement('img')
      var image = document.createElement('img');
      




      h2.textContent = towns[i].name;
      h4.textContent = "Motto: " + towns[i].motto;
      year.textContent = "Age: " + towns[i].age;
      population.textContent = "Years of experience: " + towns[i].yearsofexperience;
      rainfall.textContent = "Location: " + towns[i].location;
      h3.textContent = " Comments: " + towns[i].comments;
      star.textContent = "Stars: " + towns[i].star  ;
      
      rating.setAttribute('src', "images/" + towns[i].rating);
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "picture of: " + h2.textContent);
      
      
      
    



      contenido.appendChild(h2);
      contenido.appendChild(image);
      contenido.appendChild(h4);
      contenido.appendChild(year);
      contenido.appendChild(population);
      contenido.appendChild(rainfall);
      //contenido.appendChild(star);
     // contenido.appendChild(rating);
      contenido.appendChild(h3);
   
      document.querySelector('div.contenido').appendChild(contenido);

        }
}
  });



  // success: function(data) {
var HTML = ""; // Start the HTML string for concatenation
data.forEach(function( ob ) {
  for(var i=0; i<5; i++) {  // We need 5 stars
    var icoClass = i<ob.star ? "fa fa-star" : "fa fa-star-o"; // full or empty star?
    HTML += "<i class='"+ icoClass +"'></i>"; // concatenate stars
  }
  HTML += " "+ ob.name +"<br>"; // and concatenate the cool movie name
});
document.getElementById("movies").innerHTML = HTML; // Finally insert