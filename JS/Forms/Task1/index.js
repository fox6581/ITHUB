document.querySelector("#form #number").oninput=function(){
    this.value = this.value.substr(0, 16);
    this.value = this.value.replace (/\D/, '')
     let cardNum = this.value;
   
    if ( cardNum.trim().length > 5){
        let cardInfo = new CardInfo(cardNum.trim(),{
            banksLogosPath:'./node_modules/card-info/dist/banks-logos/',
            brandsLogosPath:'./node_modules/card-info/dist/brands-logos/'
        })  
    console.log(cardInfo.bankName);
    console.log(cardInfo.bankLogo);
    console.log(cardInfo.brandLogo);
    console.log(cardInfo.backgroundColor);
     document.querySelector('p#card-number').textContent=document.querySelector('#number').value
    

   
    document.querySelector('.card-image').src = cardInfo.bankLogo;
    document.querySelector('.card-logo').src = cardInfo.brandLogo;
    document.querySelector('.card-front').style.backgroundColor = cardInfo.backgroundColor;
    };
    // var cardInfo = new CardInfo('4377730000000000');
    // console.log('Bank name:', cardInfo.bankName);
    // // > Bank Name: Tinkoff Bank
    // console.log('Bank logo:', cardInfo.bankLogo);
}
document.querySelector("#form #month").oninput=function(){

    this.value = this.value.substr(0, 2);
    this.value = this.value.replace (/\D/, '')
    document.querySelector('#card-to-month').value=document.querySelector('#month').value

   };
 
   document.querySelector("#form #fio").oninput=function(){

    document.querySelector('p#card-to-fio').textContent=document.querySelector('#fio').value
    

   };

   document.querySelector("#form #year").oninput=function(){

    this.value = this.value.substr(0, 2);
    this.value = this.value.replace (/\D/, '')
    document.querySelector('#card-to-year').value=document.querySelector('#year').value

   };
   document.querySelector("#form #cvv1").oninput=function(){

    this.value = this.value.substr(0, 3);
    this.value = this.value.replace (/\D/, '')
    document.querySelector('#cvv').value=document.querySelector('#cvv1').value

   };
   


   document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменить стандартное поведение отправки формы

    // Получить значения из полей формы
    var number = document.querySelector("#number").value;
    var month = document.querySelector("#month").value;
    var year = document.querySelector("#year").value;
    var cvv = document.querySelector("#cvv1").value;
    var fio = document.querySelector("#fio").value;

    // Создать таблицу, если еще не существует
    if (!document.querySelector("#dataTable")) {
        var table = document.createElement("table");
        table.id = "dataTable";

        var caption = document.createElement("caption");
        caption.textContent = "Данные из формы";
        table.appendChild(caption);

        var thead = document.createElement("thead");
        var tr = document.createElement("tr");

        var th1 = document.createElement("th");
        th1.textContent = "Number";
        tr.appendChild(th1);

        var th2 = document.createElement("th");
        th2.textContent = "Месяц";
        tr.appendChild(th2);

        var th3 = document.createElement("th");
        th3.textContent = "Год";
        tr.appendChild(th3);

        var th4 = document.createElement("th");
        th4.textContent = "CVV";
        tr.appendChild(th4);

        var th5 = document.createElement("th");
        th5.textContent = "ФИО";
        tr.appendChild(th5);


        var th6 = document.createElement("th");
       
        th6.textContent = "Название банка";
        tr.appendChild(th6);

        thead.appendChild(tr);


        var th7 = document.createElement("th");
       
        th7.textContent = "Тип платежной системы";
        tr.appendChild(th7);


        table.appendChild(thead);

        document.body.appendChild(table);
    }

    // Добавить новую строку в таблицу с данными из формы
    var dataTable = document.querySelector("#dataTable");
    var row = dataTable.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();

    cell1.textContent = number;
    cell2.textContent = month;
    cell3.textContent = year;
    cell4.textContent = cvv;
    cell5.textContent = fio;
 // Вставить логотип в ячейку "Лого"
 var cardImage = document.querySelector('.card-image');
 var logoImg = document.createElement('img');
 logoImg.src = cardImage.src;
 logoImg.alt = 'Логотип';
 logoImg.width = 50;

 logoImg.style.backgroundColor =  document.querySelector('.card-front').style.backgroundColor;
 cell6.appendChild(logoImg);


 var cardImage1 = document.querySelector('.card-logo');
 var logoImg1 = document.createElement('img');
 logoImg1.src = cardImage1.src;
 logoImg1.alt = 'Банк';
 logoImg1.width = 50;
 logoImg1.style.backgroundColor =  document.querySelector('.card-front').style.backgroundColor;
 cell7.appendChild(logoImg1);
    // Сбросить значения полей формы

    document.querySelector('p#card-number').textContent ='';
    document.querySelector('#card-to-month').value='';
    document.querySelector('p#card-to-fio').textContent='';
    document.querySelector('#card-to-year').value='';
    document.querySelector('#cvv').value='';
    document.querySelector("#form").reset();
});
   // var cardInfo = new CardInfo('4377730000000000');
   // console.log('Bank name:', cardInfo.bankName);
   // // > Bank Name: Tinkoff Bank
   // console.log('Bank logo:', cardInfo.bankLogo);


console.log('111')