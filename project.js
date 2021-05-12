//bu projede html dom eventleri,dom manipulasyonu ve OOP yapisi kullanilmistir
//ana islemleri bu js dosyamizda yapacagiz
//flim ekleyebilmemiz icin forma ve form icindeki inputlara eristik
const form=document.getElementById("film-form");

const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
//classi card-body olan ikinci div'i secelim 
const cardbody=document.querySelectorAll(".card-body")[1];
//tum flimleri temizleyin butonunu secelim
const clear=document.getElementById("clear-films");


//UI objesini uret
const ui= new UI();

//Storage objesini uret
const storage=new Storage();


//Tum eventleri yukleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFlim);
    //localdeki tum flimleri arayuze ekleme:DOMContentLoaded:sayfa yuklendiginde calisan event
    document.addEventListener("DOMContentLoaded",function(){

       let films=storage.getFilmsFromStorage();//localdeki array icindeki flimleri aktaralim
      ui.loadAllFilms(films);//arayuze tum flimleri ekleyecek fonsiyon tanimlandi



    });
         
    //flimleri arayuzden silme
    cardbody.addEventListener("click",deleteFlim);

    //tum Flimleri silme
    clear.addEventListener("click",clearAllFilms);
    
}


function addFlim(e){

    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    //inpulari bos olma durumu kontrol et!

    if(title==="" || director==="" || url===""){

        //hata
        ui.displayMessages("tum alanlari doldurunuz","danger");
        
    }
    else{
//yeni flim
        const newFlim= new Flim(title,director,url);
        ui.addFlimToUI(newFlim);//arayuze flim ekleme

        storage.addFlimToStorage(newFlim);//Storage flim ekleme
        ui.displayMessages("flim basarili bir sekilde yuklendi","success");

    }


    //inpulari temizlemsi icin fonk cagiralim
 
     ui.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault();
}

function deleteFlim(e){

    //a etiketine yani butona tiklanmissa o filmi arayuzden silelim
    //buton'un id=delete-film
    if(e.target.id==="delete-film"){


          ui.deleteFlimFromUI(e.target); 
        
          //flim ismine gore localStorage arama yapip silecek flimi!
          //e.target ->bize a elementini yani butonu vermektedir
          //e.target:a element, td erisim parentla olur previousElementSibling iki tanesi td icindeki degerlere verir
             

          storage.deleteFlimFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
          //silme islemi icin bilgilendirme msj verelim
          ui.displayMessages("silme islemi basarili","success");

    }
   


}
//clearAllFilms fonksiyonunu yazalim

function clearAllFilms(){
      //tum flimleri hem arayuzden hemde storage den silelim
       ui.clearAllFilmsFromUI();
       storage.clearAllFilmsFromStorage();


}
 




