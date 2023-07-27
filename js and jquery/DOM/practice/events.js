const buttonTwo = document.querySelector('.btn-2');
function alertBox(){
  alert('I also love js')
}
buttonTwo.addEventListener("click",alertBox);

//mouseOver//
const newBackgroundColor = document.querySelector(".btn-3");
newBackgroundColor.addEventListener('mouseover',()=>{
  newBackgroundColor.style.backgroundColor = 'yellow'
})