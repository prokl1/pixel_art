let pixeles = document.querySelectorAll('.pixel');
let choose = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');



for (let pixel of pixeles) 
 {    
      pixel.onclick = function() {
      
      if (eraser.checked) {pixel.style.backgroundColor = 'white';}
      else {pixel.style.backgroundColor = choose.value;};
      };      
     
       };
 
 
 
 
/*ЗАМЕТКИ ФИЛОЛОГА
Что должно произойти? 
Нужно, чтобы при нажатии на див менялось свойство фона дива в соответствии с параметром, прописанным в списке для каждого цвета. То есть этот параметр добавляется в стиль фона при команде клик. Для этого задаем стиль каждого дива "пиксель"

pixel.style.backgroundColor(меняет стиль фона) = choose.value (выводит параметр цвета, добавляя его в стиль css дива);

ПРОБЛЕМЫ С ЛАСТИКОМ
Сначала я пытался просто написать условную конструкцию отдельно, затем, вставить ее в обработчик onchange/ Но ничего не работало. Затем вставлял ее в цикл for of, но и там не работало/ Оказалось, произошел конфликт обработчиков с дублированными функциями. Нужно было вставлять условную конструкцию без лишних повторов типа  if (eraser.checked) 
 {pixel.onclick = function() прямиком в обработчик onclick/ ведь все, что связано с кликами должно быть внутри него. Соответственно переставил команду 
 pixel.style.backgroundColor = choose.value; внутрь условной конструкции. И ура!



   if (eraser.checked) 
 {
      pixel.onclick = function()
      {
      pixel.style.backgroundColor = 'white';
      };    
      
 };
 else 
      {
      pixel.onclick = function(){
      pixel.style.backgroundColor = choose.value;
      };}; 
 
1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.
*/
