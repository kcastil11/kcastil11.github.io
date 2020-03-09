const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" ){
        

      var contenido = document.createElement('section');
      var h2 = document.createElement('h2');
      var h4 = document.createElement('h4');
      var year = document.createElement('p');
      var population = document.createElement('p');
      var rainfall = document.createElement('p');
      var image = document.createElement('img');
      




      h2.textContent = towns[i].name;
      h4.textContent = towns[i].motto;
      year.textContent = "Year Founded: " + towns[i].yearFounded;
      population.textContent = "Population: " + towns[i].currentPopulation;
      rainfall.textContent = "Annual RainFall: " + towns[i].averageRainfall;
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "picture of: " + h2.textContent);
      
      
      
    



      contenido.appendChild(h2);
      contenido.appendChild(h4);
      contenido.appendChild(year);
      contenido.appendChild(population);
      contenido.appendChild(rainfall);
      contenido.appendChild(image);
   
      document.querySelector('div.contenido').appendChild(contenido);

        }
}
  });