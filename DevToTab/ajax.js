myFunction();

function myFunction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var i;
  for (i = 0; i < 12; i++) {
    

    //creada
    var enlace = document.createElement("A");              
    var div = document.createElement("DIV"); 
    var cabecera = document.createElement("H5");    
    var imagen = document.createElement("IMG");
    var divBody = document.createElement("DIV"); 
    
    
       //seteamos valores enlace
      enlace.href=myObj[i].url;
      enlace.id=i;
     
      //seteamos div
      div.className="card text-center mb-3";
      //seteamos imagen     
      if (myObj[i].cover_image===null) {
        imagen.src="devtoLogo.jpg";
      }else{
      imagen.src=myObj[i].cover_image;}
      imagen.className="card-img-top";
      var titulo = "";
      titulo =myObj[i].description;
      imagen.setAttribute('title',titulo );
      //seteamos divBody
      divBody.className="card-body";
      //seteamos cabecera       
      cabecera.innerText=myObj[i].title;
      cabecera.className="card-title";
      
      

      //por ultimo metemos el conjunto en el body
      
      
      enlace.appendChild(cabecera);
      divBody.appendChild(imagen);
      enlace.appendChild(divBody);
      
      div.appendChild(enlace);
      document.getElementById("grupo").appendChild(div);
  }
      
      }
    };
    xhttp.open("GET", "https://dev.to/api/articles?top=1", true);
    xhttp.send();
}