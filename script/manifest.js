let manifest = 
{
"format_version": 2,
"header": {
"name": "",
"description": "",
"version": [ 1, 0, 0 ],
"uuid": "6f03def2-bb27-4bcb-a921-276bf42dbdca",
"min_engine_version": [ 1, 13, 0 ]
},
"modules": [
{
"type": "data",
"description": " behavior module",
"version": [ 1, 0, 0 ],
"uuid": "725712fd-43fb-4d0a-86b1-179db47d39cb"
}
]
}
let name1 = '';
let description1 = '';
let type1 = '';
let uuid1 = '';
let uuid2 = '';
const divtitle = document.createElement('div');
const titleh1 = document.createElement('h2');
titleh1.innerHTML = 'manifest.json生成機';
const divpack = document.createElement('div');
const packname = document.createElement('p');
packname.innerHTML = 'パックの名前';
const inputtext1 = document.createElement('input');
inputtext1.type = "text";  
inputtext1.minLength = "1";
inputtext1.maxLength = "13";
inputtext1.size = "22";  
inputtext1.placeholder = "入力してください"  
inputtext1.style.fontSize = '15px';
inputtext1.style.backgroundColor = '#fff';
inputtext1.style.border = '#000 2px solid';
inputtext1.addEventListener('input', inputvalue);

const divexplanation = document.createElement('div');
const explanationtext = document.createElement('p');
explanationtext.innerHTML = '説明文';
const inputtext2 = document.createElement('input');
inputtext2.type = "text";
inputtext2.minLength = "1";
inputtext2.maxLength = "13";
inputtext2.size = "22";     
inputtext2.placeholder = "入力してください"  
inputtext2.style.fontSize = '15px'; 
inputtext2.style.backgroundColor = '#fff';
inputtext2.style.border = '#000 2px solid';
inputtext2.addEventListener('input', inputvalue);

const divselect = document.createElement('div');
const selecttext = document.createElement('p');
selecttext.innerHTML = 'パックの種類';
const selectbox = document.createElement('select');
const option1 = document.createElement('option');
const option2 = document.createElement('option');
option1.value = 'resources';
option1.textContent = 'リソースパック';
option2.value = 'data';
option2.textContent = 'ビヘイビアパック';
selectbox.addEventListener('input', inputvalue);
  
const divfinsh = document.createElement('div');
const finshbutton = document.createElement('button');
finshbutton.innerHTML = '保存する';
finshbutton.onclick = () => {
if(name1 != '' || description1 != '' || type1 != '') {
 inputvalue();
 getuuid();
 jsonget();
 writein();
}
}
function inputvalue() {
name1 = inputtext1.value;
description1 = inputtext2.value;
type1 = selectbox.value;
}
function getuuid() {
let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
uuid1 = [u.substr(0,8), u.substr(8,4), '4000-8' + u.substr(13,3), u.substr(16,12)].join('-');
u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
uuid2 = [u.substr(0,8), u.substr(8,4), '4000-8' + u.substr(13,3), u.substr(16,12)].join('-');
}
function jsonget() {
manifest.header.name = name1;
manifest.header.description = description1;
manifest.header.uuid = uuid1;
manifest.modules.type = type1;
manifest.modules.description = description1;
manifest.modules.uuid = uuid2;
}
function writein() {
let str = JSON.stringify(manifest);
const jsonmanifest = new Blob([str],{type:"json/plain"});
const link = document.createElement('a');
link.href = URL.createObjectURL(jsonmanifest);
link.download = 'manifest.json';
link.click();
}
divtitle.appendChild(titleh1);
divpack.appendChild(packname);
divpack.appendChild(inputtext1);
divexplanation.appendChild(explanationtext);
divexplanation.appendChild(inputtext2);
divselect.appendChild(selecttext);
divselect.appendChild(selectbox);
selectbox.appendChild(option1);
selectbox.appendChild(option2);
divfinsh.appendChild(finshbutton);
let manifestmanifest = document.getElementById('manifest')
manifestmanifest.appendChild(divtitle);
manifestmanifest.appendChild(divpack);
manifestmanifest.appendChild(divexplanation);
manifestmanifest.appendChild(divselect);
manifestmanifest.appendChild(divfinsh);