function countryList(country) {
    const request = new XMLHttpRequest();
    request.open('GET', "https://restcountries.com/v3.1/name/" + country); //* sorgu gönder
    request.send();

    request.addEventListener('load', () => {
        var data = request.responseText;
        var dataTo = JSON.parse(data);  // * data parse et.

        //* data yı fonksiyona gönder, gerekli verileri, dom ile ekrana yazdır.
        function infoList(dataTo) {   
            var div = document.querySelector("#select");
            var html = ` 
            <div class="card-body " id="img-bottom">
            <img src="${dataTo[0].flags.png}" alt="" class="img-fluid">
    
            <div class="card mx-auto" style="width: 18rem;" id="">
                <ul class="list-group list-group-flush" id="li-bottom">
                    <li class="list-group-item" >Bölge : ${dataTo[0].continents[0]} </li>
                    <li class="list-group-item" >Başkent : ${dataTo[0].capital[0]} </li>
                    <li class="list-group-item" >Nufus : ${dataTo[0].population} </li>
                </ul>
            </div>
            </div>  
        `
            div.insertAdjacentHTML('beforeend', html);
        }
        infoList(dataTo); 
    })
}

document.querySelector("#btn").addEventListener('click', input)  //* Butona tıklayınca
function input() {
    var resultInput = document.querySelector("#inp").value       //* girilen bilgiyi al
    if (resultInput == "") {
        alert("Lütfen burayı boş bırakmayınız");
    }
    else {
        countryList(resultInput);                     //* girilen bilgiyi countryList fonksiyonuna gönder.
    }
}





