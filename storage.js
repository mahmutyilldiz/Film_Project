//localStorage flim ekleme
//Storage Constructor:bu objenin prototype kullanacagiz
function Storage(){


}
//storage flim eklemek icin prototipine flim ekleyen fonk yazalim
Storage.prototype.addFlimToStorage=function(newFlim){
 
     let films=this.getFilmsFromStorage();//array mizi almis olduk!
   
     films.push(newFlim);

    /* 
      arrayimizin icinde flimler, flims adinda objelerde tutulmakta 
      [
          {title:"wjfwjfew",director:"hdufkd",url:"56489465"},
           {title:"wjfwjfew",director:"hdufkd",url:"56489465"},

      ] 
    */

      //arrayimizi localStorage yazalim:localde ifadeler string olarak tutuldugu icin 
      //bu sefer json objemizi stringe donusturelim
      localStorage.setItem("films",JSON.stringify(films));//"flims":key       icindekiler de value degerlerim


}

  Storage.prototype.getFilmsFromStorage=function(){


      //flimleri array e yazalim ordan localStorage ekleyelim

      let films;
      //localStorage de flims adinda  keys yok ise bos bir array olustur
      if(localStorage.getItem("films")===null){
             films=[];
      }
    else{
         //varsa o keys al ve diziye yaz!
         //localStorage de sadece string ifadeler yazili oldugu icin aldigimiz degeri 
         //Json donusturup array haline getirms olduk
         films=JSON.parse(localStorage.getItem("films")); 
     }

     return films;

  }

  Storage.prototype.deleteFlimFromStorage=function(filmTitle){

    let films=this.getFilmsFromStorage();//fonksıyon geriye dizi dondurecek
    films.forEach(function(film,index){//dizi icinde gezinelim dongu ile
   
        //array icindeki objemizi isime gore sildik
         //flim:object, index:index
         if(film.title===filmTitle)//flimi isime gore ariyoruz
         {
             films.splice(index,1);//splice:array de silme islemi yapar
         }

       

    });

      //dizimizi guncelleyelim
      localStorage.setItem("films",JSON.stringify(films));

    



  }

  Storage.prototype.clearAllFilmsFromStorage=function(){

        localStorage.removeItem("films");

  }