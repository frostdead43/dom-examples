let data = [1, 2, 3, 4, 5, 6, 7, 8];
data = data.concat(data);
data.sort(() => Math.random() - 0.5);





// elementleri js ile ekrana basın
// <div class="game-item">3</div>

// const btn = document.querySelector('.lightBtn');

// btn.addEventListener('click', function() {
//   if(this.innerText === 'Aç') {
//     this.innerText = 'Kapa';
//   } else {
//     this.innerText = 'Aç';
//   }

//   this.classList.toggle('lightBtn-on');
// });


// console.log(items);

/**
 * eğer querySelector dersek doğrudan elementi getirir
 * querySelectorAll dersek elementlerin olduğu bir dizi getirir
 * bu sebeple querySelector'de addEventListener çalışırken
 * querySelectorAll'da dizi olduğu için doğrudan addEventListener
 * yazılmaz.
 * Onun yerine döngü ile tüm elemanlara tek tek erişip 
 * addEventListener yazarız
 */

// eğer for-of içinde tanımlasaydık. 16 kez aynı tanımı yapmış olurduk.
// gerek var mı? hayır..
function handleItemClick() {
  // if(this.classList.contains('game-item-active')) {
  //   this.classList.remove('game-item-active');
  // } else {
  //   this.classList.add('game-item-active')
  // }

  // toggle - eğer yoksa ekler, varsa kaldırır
  this.classList.toggle('game-item-active');
}

for (const x of data) {
  document.querySelector(".game").innerHTML += `<div class = 'game-item'>${x}<div>`;
}
const items = document.querySelectorAll('.game-item');
// 16 kere çalışacak
for (const item of items) {
  // item her seferinde sıradan bize tek tek game-item'ları getirecek
  item.addEventListener('click', handleItemClick);
}














// const btns = document.querySelectorAll('.lightBtn');

// function show () {
//   this.classList.toggle('lightBtn-on');
// }

// btns.forEach(function(btns){
//   btns.addEventListener('click', show);
// });