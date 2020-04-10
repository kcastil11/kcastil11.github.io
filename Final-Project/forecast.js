const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=53b041f63e3c333dbe3d192222ec7210";
  fetch(apiURL)
   
 
   .then(function (response) {
         return response.json();
       })
   .then(function (jsObject) { 
         var items = jsObject.list['items'];   
         
       
           var i = 0;
     
           var perrO = document.createElement('div');  
           perrO.setAttribute('class', 'gridforecast');
     
   jsObject.list.forEach(item => {
   var datetime = jsObject.list[i].dt_txt;
     
   if (datetime.includes("18:00:00")) {
    var newdate = new Date(datetime);
    var diaCorto = newdate.toLocaleDateString( 'en-US', { weekday: 'long' }); 
     
   var divdate = document.createElement('h4'); 
   var divtemp = document.createElement('div');  
     divdate.textContent = diaCorto
     divdate.setAttribute('class', 'forecast-item');
     divtemp.setAttribute('class', 'forecast-item');
   var temp = `${jsObject.list[i].main.temp.toFixed(0)}`;
     divtemp.textContent = temp + " °F"; 
     
             
     
   var imgURL = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
   var desc = jsObject.list[i].weather[0].description;  
   var icon1 = document.createElement('img');
     
    icon1.setAttribute('src', imgURL);
    icon1.setAttribute('alt', desc);
    icon1.setAttribute('height', 'auto');
    icon1.setAttribute('width', '90px');
             
    divdate.appendChild(divtemp);
    divdate.appendChild(icon1);
    perrO.appendChild(divdate);
    document.querySelector('.fiveDayForcast').appendChild(perrO);      
             
             i++;        
           } else {
             i++;
           }
             
           
         });
       });