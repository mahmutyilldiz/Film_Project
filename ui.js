//UI islemleri icin bu objenin protopini kulanacagiz
function UI(){

}

UI.prototype.addFlimToUI= function(newFlim){



   



    const flimList=document.getElementById("films");

    flimList.innerHTML +=`
    <tr>

      <td><img src="${newFlim.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFlim.title}</td>
      <td>${newFlim.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  
    </tr>  
    
    `;

    

}

//burada yani UI.js projemizi moduler hale getirmis olduk!
//clearInputs fonk ile inputlarin icini silelim!

UI.prototype.clearInputs=function(element1,element2,element3){

  element1.value="";
  element2.value="";
  element3.value="";

}

//hata ve bilgilendirme mesajlari icin fonskyiyonumuzu  olusturalim

UI.prototype.displayMessages=function(message,type){
  const cardBody= document.querySelector(".card-body");
  const div= document.createElement("div");
  div.className= 'alert alert-${type}';
  div.textContent=message;
  cardBody.appendChild(div);
  setTimeout(function(){
      div.remove();
  }, 1000);
}



//tum flimleri ekleme:ui prototipine yazilacak fonksiyonumuz

//tum flimleri ekleme:ui prototipine yazilacak fonksiyonumuz

UI.prototype.loadAllFilms= function(films){
  const filmList=document.getElementById("films");
  films.forEach(function(film){
  filmList.innerHTML += `
  <tr>
  <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
  <td>${film.title}</td>
  <td>${film.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger"> Film </a> </td>
  </tr>
   `;
  
  });
  }
   


UI.prototype.deleteFlimFromUI=function(element){

  //a tiketine ulastik onun oldgu satiri silmek icin 2 parentine ulasmamiz lazim
  //yani tr etiketine ulasmamiz lazim!

  element.parentElement.parentElement.remove();


}

//tum flimleri silme islemi: ilk basta UI kaldiralim

UI.prototype.clearAllFilmsFromUI=function(){

//tbody icinde tum flimler mevcut 
const flimList=document.getElementById("films");//tbody kismini aldik

while(flimList.firstElementChild!=null){//child oldugu surece

  //firstChild null olana kadar surekli sil
 flimList.firstElementChild.remove();

}

}

