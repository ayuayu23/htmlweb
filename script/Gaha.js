let Star1 = ["images/Character/プリコネ星1/アユミ.png","images/Character/プリコネ星1/アオイ.png","images/Character/プリコネ星1/ミフユ.png","images/Character/プリコネ星1/コッコロ.png","images/Character/プリコネ星1/レイ.png","images/Character/プリコネ星1/クウカ.png","images/Character/プリコネ星1/キャル.png","images/Character/プリコネ星1/ユイ.png","images/Character/プリコネ星1/ユカリ.png","images/Character/プリコネ星1/クルミ.png","images/Character/プリコネ星1/スズメ.png"];
let Star2 = ["images/Character/プリコネ星2/チカ.png","images/Character/プリコネ星2/ミヤコ.png","images/Character/プリコネ星2/タマキ.png","images/Character/プリコネ星2/カオリ.png","images/Character/プリコネ星2/スズナ.png","images/Character/プリコネ星2/ナナカ.png","images/Character/プリコネ星2/ミミ.png","images/Character/プリコネ星2/エリコ.png","images/Character/プリコネ星2/シオリ.png","images/Character/プリコネ星2/マツリ.png"];
let Star3 = ["images/Character/プリコネ星3/正月ムイミ.png","images/Character/プリコネ星3/正月ペコリーヌ.png","images/Character/プリコネ星3/レム.png","images/Character/プリコネ星3/エミリア.png","images/Character/プリコネ星3/ノゾミ.png","images/Character/プリコネ星3/正月ネネカ.png","images/Character/プリコネ星3/正月イリヤ.png","images/Character/プリコネ星3/ユニ.png","images/Character/プリコネ星3/アキノ.png","images/Character/プリコネ星3/マコト.png","images/Character/プリコネ星3/シズル.png","images/Character/プリコネ星3/ジータ.png"];
const titleh1 = document.createElement("h2");
const divtitle = document.createElement("div");
const divGacha = document.createElement("div");
const titleimag = document.createElement('img');

const divresult = document.createElement("div");
const Drawresult = document.createElement("p");
const resetresult = document.createElement("p");
const joinresult = document.createElement("p");

const divbutton = document.createElement("div");
const Drawbutton = document.createElement("button");
const resetbutton = document.createElement("button");
titleh1.innerHTML = "ガチャシュミレーター";
titleimag.src = 'images/Gachascreen/プリコネ.png';
divtitle.style.textAlign = 'center';
divGacha.style.display = 'none';
divGacha.style.textAlign = 'center';
divGacha.style.border = '2px rgb(123,132,424) solid';
resetbutton.style.display = 'none';
divbutton.style.display = 'flex';
divbutton.style.textAlign = 'center';
Drawbutton.style.margin = '5%';
resetbutton.style.margin = '5%';
Drawbutton.style.border = '#000 2px solid';
resetbutton.style.border = '#000 2px solid';
titleimag.style.width = '800px';
titleimag.style.height = 'auto';
Drawbutton.style.backgroundColor = 'rgb(23,213,12)';
resetbutton.style.backgroundColor = 'rgb(133,623,622)';
divGacha.style.maxWidth = '500px';
divGacha.style.margin = '0';
divGacha.style.marginLeft = 'auto';
divGacha.style.marginRight = 'auto';
divresult.style.maxWidth = '500px';
divresult.style.margin = '0';
divresult.style.marginLeft = 'auto';
divresult.style.marginRight = 'auto';
divresult.style.backgroundColor = 'rgb(12,223,222)';
let i,Star1i,Star2i,Star3i,imgaa;
let tm = 0;
let ty = 0;
let to = 0;
Drawbutton.onclick = () => {
 while(divGacha.firstChild) {
   divGacha.removeChild(divGacha.firstChild);
 }
 tm = 0;
 ty = 0;
 to = 0;
 for(let u=0;u<10;u++) {
   imgaa = document.createElement("img");
   i = Math.floor(Math.random()*100);
   divGacha.appendChild(imgaa);
   imgaaonclick();
 }
 stylemone();
 innnerresult();
}
resetbutton.onclick = () => {
 location.reload();
}
function innnerresult() {
 Drawresult.innerHTML = "星３:" + tm;
 resetresult.innerHTML = "星２:" + ty;
 joinresult.innerHTML = "星１:" + to;
}
function imgaaonclick (){ 
 if(i > 90) {
   Star3i = Math.floor(Math.random()*Star3.length);
   imgaa.src = Star3[Star3i];
   tm++;
 }
 else if(i > 70) {
   Star2i = Math.floor(Math.random()*Star2.length);
   imgaa.src = Star2[Star2i];
   ty++;
 }
 else {
   Star1i = Math.floor(Math.random()*Star1.length);
   imgaa.src = Star1[Star1i];
   to++; 
 }
}
function stylemone() {
 divGacha.style.display = 'block';
 divbutton.style.display = 'block';
 resetbutton.style.display = 'inline-block';
 Drawbutton.innerHTML = "もう一度引く";
 resetbutton.innerHTML = "戻る";
 divGacha.style.backgroundColor = 'rgb(242, 324, 324)';
 titleimag.style.display = 'none';
}
Drawbutton.innerHTML = "引く";
divtitle.appendChild(titleh1);
divresult.appendChild(Drawresult);
divresult.appendChild(resetresult);
divresult.appendChild(joinresult);
divbutton.appendChild(titleimag);
divbutton.appendChild(Drawbutton);
divbutton.appendChild(resetbutton);
let GahaGaha = document.getElementById('Gaha')
GahaGaha.appendChild(divtitle);
GahaGaha.appendChild(divGacha);
GahaGaha.appendChild(divresult);
GahaGaha.appendChild(divbutton);