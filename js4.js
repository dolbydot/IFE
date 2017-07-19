var ul = document.querySelector('ul'),
  list = document.querySelectorAll('ul li'),
  text = document.querySelector('input[name="text"]'),
  lInBtn = document.querySelector('input[name="leftin"]'),
  rInBtn = document.querySelector('input[name="rightin"]'),
  lOutBtn = document.querySelector('input[name="leftout"]'),
  rOutBtn = document.querySelector('input[name="rightout"]');

var arr = Array.from(list).map(function (a) {
  return a.innerHTML;
});

var append = function () {
  ul.innerHTML = null;
  arr.forEach(function (num, index) {
    var li = document.createElement('li');
    li.innerHTML = num;
    ul.appendChild(li);
  });
};

lInBtn.addEventListener('click', function () {
  arr.unshift(text.value);
  append();
});

rInBtn.addEventListener('click', function () {
  arr.push(text.value);
  append();
});

lOutBtn.addEventListener('click', function () {
  arr.shift(text.value);
  append();
});

rOutBtn.addEventListener('click', function () {
  arr.pop(text.value);
  append();
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName.toLowerCase()=="li"){
    ul.removeChild(event.target);
  }
});


