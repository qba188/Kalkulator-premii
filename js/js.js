//iOS



function iosV() {
  let radiosAcse = document.getElementsByName('iosacse');
  let radiosCsat = document.getElementsByName('ioscs');
  let radiosDebitMemo = document.getElementsByName('iosdb');
  let radiosIosDevices = document.getElementsByName('diagiOS');

  for (let checkedVal of radiosAcse){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosAcse = checkedVal.value
    }
  }
  for (let checkedVal of radiosCsat){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosCsat = checkedVal.value
    }
  }
  for (let checkedVal of radiosDebitMemo){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosDb = checkedVal.value
    }
  }
  for(var value of radiosIosDevices.values()) {
    iosDevices = value.value * 2;
    //alert (iosDevices);
  }
};

function sum(){
  iosV()
  wynik = (0.3 * iosDevices * iosAcse)+
  (0.3 * iosDevices * iosCsat)+
  (0.4 * iosDevices * iosDb)
  document.getElementById('sum').innerHTML = wynik + ' ' + 'PLN brutto';
}

//MAC

function macV() {
  let radiosAcse = document.getElementsByName('macacse');
  let radiosCsat = document.getElementsByName('maccs');
  let radiosDebitMemo = document.getElementsByName('macdb');
  let radiosIosDevices = document.getElementsByName('diagMac');

  for (let checkedVal of radiosAcse){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosAcse = checkedVal.value
    }
  }
  for (let checkedVal of radiosCsat){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosCsat = checkedVal.value
    }
  }
  for (let checkedVal of radiosDebitMemo){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosDb = checkedVal.value
    }
  }
  for(var value of radiosIosDevices.values()) {
    iosDevices = value.value * 5;
    //alert (iosDevices);
  }
};

function sumMac(){
  macV()
  wynik = (0.3 * iosDevices * iosAcse)+
  (0.3 * iosDevices * iosCsat)+
  (0.4 * iosDevices * iosDb)
  document.getElementById('sumMac').innerHTML = wynik + ' ' + 'PLN brutto';
}


//Administracja

function admV() {
  let radiosCsat = document.getElementsByName('admcs');
  let radiosIosDevices = document.getElementsByName('diagAdm');


  for (let checkedVal of radiosCsat){
    if (checkedVal.checked){
      //alert(checkedVal.value);
      iosCsat = checkedVal.value
    }
  }
  for(var value of radiosIosDevices.values()) {
    iosDevices = value.value / 4;
    //alert (iosDevices);
  }

};

function sumAdm(){
  admV()
  wynik = iosDevices * iosCsat
  document.getElementById('sumAdm').innerHTML = wynik + ' ' + 'PLN brutto';
}
