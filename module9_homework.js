JS

const btn = 
document.querySelector('.submitButton')
//const text =
document.getEventByld('textArea')

const inpA =
document.getElementByld('input_a')
const inpB =
document.getElementByld('input_b')
const imgBox =
document.querySelector('.imgBox')

function fetch_num(num1,num2){
  fetch('https://picsum.photos/v2/list?page=1&limit=10/${num1}/${num2}')
  .then ((response) => {
    console.log('response', response);
    const result = response;
    return result;

  })
  .then((data) => {
    console.log(data.url);
  })
  .catch(() => {console.log('error')});
}
btn.addEventListener('click',() => {
  console.log(inpA.value)
  console.log(inpB.value)
  let imgUrl = 
  fetch_num(inpA.value.inpB.value)

  console.log(imgUrl)
  imgBox.innerHTML = '<img src="$ = {imgUrl}">'
});




HTML


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport"
	content="width=device-width">
	<title>fetch</title>
	<link rel="stylesheet" href = "style.css"
</head>

<body>
	<p class="p_task"> Напишите код приложения, интерфейс которого предсавляет собой 2 input и кнопку submit. 
В input можно ввести любое число.
При клике на кнопку происходит следующее:
Если обо числа не попадают в диапазон от 1 до 10 или введено не число - выводить ниже текст "одно из чисел вне диапазона от 1 до 10";
Если числа попадают в диапазон от 1 до 10 - сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где первое число - ширина картинки, второе - высота </p>
		<input clas="input_num" id='input_a'
		type="number"></input>
		<input class="input_num" id='input_b'
		type="number"></input>
		<input type = "supmit"> 
		class="submitButton" > Введите 2 числа от 1 до 10 </input>

		<div id = "textarea">

		</div>
		<div class="imgBox" id="img1">
		</div>
	<script src="script.js"></script>
</body>

</html>