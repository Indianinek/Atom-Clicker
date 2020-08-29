var atomCount = 0;
var autoClick = 0;
var priceGlob = 8;
var priceMultiplier = 4;
var priceMatery = 1000;
var priceMutation = 8;
var priceSchwimMutation = 3;
var priceEnergy = 1000;
var currentPlanet = "planet"
var multiplier = 1;
var atomMassCounter = 0;
var matery = 0;
var mutatedGlob = 1;
var powerSchwimState = 1;
var pricePowerSchwim = 5000;
var energyPricePowerSchwim = 10;
var energy = 0;
var clickState;

function clickPlus(){

  clickState = multiplier * powerSchwimState;
  atomCount = atomCount + clickState;
  atomMassCounter++;
  atomMassCounter= atomMassCounter + (multiplier-1);

  localStorage.setItem("atomMassCounter", atomMassCounter);
  localStorage.setItem("clickState", clickState);
    $('.starPlayerImg').css('backgroundImage','url(img/'+currentPlanet+'Click.png)');
    $('.starPlayerImg').html('<div class="clickPlus">+'+clickState+'</div>');
        $('.clickPlus').animate({top: '100px'}, "fast");//animacja
          $('.clickPlus').fadeOut(100);
    $('#starName').css('user-select','none');
}

function buyClickMultiplier(){ //MUTACJA W SCHWIMGLAABA
  if(atomCount>=priceMultiplier){
    multiplier++;
    atomCount = atomCount - priceMultiplier;
    priceMultiplier = priceMultiplier + 2;
    clickState = multiplier*powerSchwimState;
  }
  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("priceMultiplier", priceMultiplier);
}

function powerSchwim(){
  if(atomCount>=pricePowerSchwim){
    if(energy>=energyPricePowerSchwim)
    {
      atomCount = atomCount - pricePowerSchwim;
      energy = energy - energyPricePowerSchwim;
      pricePowerSchwim = pricePowerSchwim * 3;
      energyPricePowerSchwim = energyPricePowerSchwim * 1.5;
      powerSchwimState++;
    }
  }
    localStorage.setItem("powerSchwimState",powerSchwimState);
    localStorage.setItem("pricePowerSchwim", pricePowerSchwim);
    localStorage.setItem("energyPricePowerSchwim", energyPricePowerSchwim);
}


function schwimMutated(){
  if(energy>=priceSchwimMutation)
  {
    energy = energy - priceSchwimMutation;
    priceSchwimMutation = priceSchwimMutation * 1.4;
    multiplier= multiplier * 2;
  }
  localStorage.setItem("priceSchwimMutation", priceSchwimMutation);
  localStorage.setItem("energy", energy);
}

function buyAllSchwim(){
  while(atomCount>=priceMultiplier){
    multiplier++;
    priceMultiplier = priceMultiplier + 10;
    atomCount = atomCount - priceMultiplier;
  }

  localStorage.setItem("multiplier", multiplier);
  localStorage.setItem("priceMultiplier", priceMultiplier);
}

function buyAllMatery(){
  while(atomMassCounter>=priceMatery){
      atomMassCounter = atomMassCounter - priceMatery;
        priceMatery = priceMatery + 10000;
        if(priceMatery > 100000){
          priceMatery = priceMatery + 1000000;
        }
      matery++;
  }
  localStorage.setItem("priceMatery", priceMatery);
  localStorage.setItem("matery", matery);
}

function buyAllEnergy(){
  while(atomCount>=priceEnergy){
    atomCount = atomCount - priceEnergy;
      priceEnergy = priceEnergy + 1000;
      energy++;
  }
  localStorage.setItem("priceEnergy", priceEnergy);
  localStorage.setItem("energy", energy);
}


function planetNotClick(){ //stan poczatkowy planety
    $('.starPlayerImg').css('backgroundImage','url(img/'+currentPlanet+'.png)');
}


function buyGlob(){//KUP GLOBGAZORDA
  if(atomCount>=priceGlob){

    atomCount = atomCount - priceGlob;
    autoClick = autoClick + mutatedGlob;
    priceGlob = priceGlob + 15;
    localStorage.setItem("priceGlob", priceGlob);
    }
  }

  function buyAllGlob(){
    while(atomCount>=priceGlob){
      atomCount = atomCount - priceGlob;
      autoClick = autoClick + mutatedGlob;
      priceGlob = priceGlob + 10;
    }
    localStorage.setItem("priceGlob", priceGlob);
  }


function exchangeMatery(){
  if(atomMassCounter>=priceMatery){
    atomMassCounter = atomMassCounter - priceMatery;
      priceMatery = priceMatery + 2000;
      if(priceMatery > 100000){
        priceMatery = priceMatery + 1000000;
      }
    matery++;
  }
}

function exchangeEnergy(){
  if(atomCount>=priceEnergy){
    atomCount = atomCount - priceEnergy;
      priceEnergy = priceEnergy + 1000;
    energy++;
  }
  localStorage.setItem("priceEnergy", priceEnergy);
  localStorage.setItem("energy", energy);
}


function globgazordMutation(){
  if(matery>=priceMutation)
  {
    matery = matery - priceMutation;
    priceMutation = priceMutation * 1.2;
    mutatedGlob = mutatedGlob * 2;
    autoClick = autoClick * 2;
  }
  localStorage.setItem("priceMutation", priceMutation);
  localStorage.setItem("matery", matery);
}


function starName(){//Wymagana funkcja aby tekst nie zaznaczal sie podczas klikania w planete
    $('#starName').css('user-select','text');
}

function load(){ // WCZYTAJ DANE Z PAMIECI LOKALNEJ
  atomCount=localStorage.getItem("atomCount");
  autoClick= localStorage.getItem('autoClick');
  priceGlob=localStorage.getItem("priceGlob");
  multiplier=localStorage.getItem("multiplier");
  priceMultiplier=localStorage.getItem("priceMultiplier");
  atomMassCounter=localStorage.getItem("atomMassCounter");
  priceMutation= localStorage.getItem("priceMutation");
  priceSchwimMutation = localStorage.getItem("priceSchwimMutation")
  matery=localStorage.getItem("matery");
  priceMatery=localStorage.getItem("priceMatery");
  energy=localStorage.getItem("energy");
  priceEnergy=localStorage.getItem("priceEnergy");
  powerSchwimState=localStorage.getItem("powerSchwimState");
  pricePowerSchwim=localStorage.getItem("pricePowerSchwim");
  energyPricePowerSchwim=localStorage.getItem("energyPricePowerSchwim");
  clickState=localStorage.getItem("clickState");
  clickState = parseInt('clickState');
  //powerSchwim = parseInt(powerSchwim);
  pricePowerSchwim = parseInt(pricePowerSchwim);
  energyPricePowerSchwim = parseInt(energyPricePowerSchwim);
  autoClick = parseInt(autoClick);
  atomMassCounter= parseInt(atomMassCounter);
  matery=parseInt(matery);
  priceMatery=parseInt(priceMatery);
  atomCount = parseInt(atomCount);
  priceGlob = parseInt(priceGlob);
  priceMultiplier=parseInt(priceMultiplier);
  multiplier=parseInt(multiplier);
  priceMutation=parseInt(priceMutation);
  priceSchwimMutation=parseInt(priceSchwimMutation);
  priceEnergy=parseInt(priceEnergy);
  energy = parseInt(energy);
}

function time(){ // funkcja odpowiedzialna za jednostke czasu 1s
atomCount = atomCount + autoClick;
  atomMassCounter= atomMassCounter + autoClick;

document.title = 'Atom Clicker / '+atomDigit(atomCount)+' ATOMS';
if(autoClick>0){
  $('.starPlayerImg').html('<div class="clickPlusSec" style="padding-left:150px;">+'+autoClick.toFixed(0)+'</div>');
  $('.clickPlusSec').animate({top: '100px'}, "fast");
  $('.clickPlusSec').fadeOut(100);
}}setInterval(time,1000);


function atomDigit(x){
  if (x>=1000000000)
  {
    x = x/1000000000;
    return x.toFixed(2) + "b";
  }
  if(x>=1000000)
  {
    x = x/1000000;
    return x.toFixed(2) + "m";
  }
  if(x>=1000)
  {
    x = x/1000;
    return x.toFixed(2) +"k";
  }

  if(x<1000){
    return x.toFixed(0);
  }
}

$(document).ready( // funkcja zapisuje gre co 0.5 sekundy
    function() {
        setInterval(function() {


                $('#bottom').html('Całkowita masa atomowa:'+atomDigit(atomMassCounter));
                $('.atomCounter').html('<font color="#84e899">ATOMY: '+ atomDigit(atomCount)+'</font><br> <font color="#d3265f"> MATERIA:'+matery.toFixed(0)+'</font> <br> <font color="#2a60b7">ENERGIA:'+energy.toFixed(0)+'</font>');

                  if(atomCount>=priceMultiplier){ // WIEM ZE ZLE, ALE INACZEJ NIE WIEM JAK TO ZROBIĆ
                    $('.multiClick').css('border-color','#0bba0e');
                  }else{
                    $('.multiClick').css('border-color','#b70000');
                  }
                  if(atomCount>=priceGlob){
                    $('.globgazord').css('border-color','#0bba0e');
                  }else {
                    $('.globgazord').css('border-color','#b70000');
                  }
                  if(atomMassCounter>=priceMatery){
                    $('.exchangeMatery').css('border-color','#0bba0e');
                  }else {
                    $('.exchangeMatery').css('border-color','#b70000');
                  }
                  if(matery>=priceMutation){
                    $('.globgazordMutation').css('border-color','#0bba0e');
                  }else {
                    $('.globgazordMutation').css('border-color','#b70000');
                  }
                  if(atomCount>=priceEnergy){
                    $('.exchangeEnergy').css('border-color','#0bba0e');
                  }else {
                    $('.exchangeEnergy').css('border-color','#b70000');
                  }
                  if(energy>=priceSchwimMutation){
                    $('.schwimMutation').css('border-color','#0bba0e');
                  }else {
                    $('.schwimMutation').css('border-color','#b70000');
                  }
                  if(atomCount>=pricePowerSchwim || energy >= energyPricePowerSchwim){
                    $('.schwimPower').css('border-color','#0bba0e');

                  }else {
                    $('.schwimPower').css('border-color','#b70000');
                  }


                    $('.globgazord').html('<br>ZAPROŚ GLOBGAZORDA <BR> <font color="#84e899">-'+atomDigit(priceGlob)+' ATOMÓW</font><div class="buttonAll" style="background-color:#84e899" onclick="buyAllGlob()">Kup wszystkie</div>'); //aktualizuje ceny perkow po wczytaniu danych z pamieci lokalnej
                    $('.multiClick').html('<br>ZMUTUJ ATOMY W SCHWIMGLAABIE <BR> <font color="#84e899">-'+atomDigit(priceMultiplier)+' ATOMÓW</font> <div class="buttonAll" style="background-color:#84e899" onclick="buyAllSchwim()">Kup wszystkie</div>');
                    $('.exchangeEnergy').html('<br>ZŁĄCZ ATOMY W <font color="#2a60b7">ENERGIE</font> <BR> <font color="#84e899">-'+atomDigit(priceEnergy)+' ATOMÓW</font><div class="buttonAll" style="background-color:#84e899" onclick="buyAllEnergy()">Kup wszystkie</div>');
                    $('.exchangeMatery').html('<br>ZŁĄCZ MASE ATOMOWĄ  W <font color="#d3265f">MATERIE</font> <BR> <font color="orange">-'+atomDigit(priceMatery)+' MASY ATOMOWEJ</font><div class="buttonAll" style="background-color:orange" onclick="buyAllMatery()">Kup wszystkie</div>');
                    $('.globgazordMutation').html('<br>MUTUJ FOTONY GLOBGAZORDÓW <BR> <font color="#d3265f"> -'+priceMutation.toFixed(0)+' MATERII</font>');
                    $('.schwimPower').html('<br>MUTUJ NEUTRONY ATOMOWE SCHWIMGLAABÓW <BR> <font color="#84e899">-'+atomDigit(pricePowerSchwim)+' ATOMÓW</font><br><font color="#2a60b7">-'+atomDigit(energyPricePowerSchwim)+' ENERGII</font>');
                    $('.schwimMutation').html('<br>MUTUJ PROTONY SCHWIMGLAABÓW <BR> <font color="#2a60b7">-'+priceSchwimMutation.toFixed(0)+' ENERGII</font>');


                   if(atomCount>0)
                     localStorage.setItem("atomCount", atomCount);
                    if(autoClick >0){
                      localStorage.setItem("autoClick", autoClick);
                      localStorage.setItem("priceEnergy", priceEnergy);
                      localStorage.setItem("energy", energy);
                      localStorage.setItem("priceMutation", priceMutation);
                      localStorage.setItem("matery", matery);
                     }


                 }, 200);
      });
