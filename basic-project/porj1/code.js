const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach(function(button){
console.log(button);
button.addEventListener('click',function(code){
  console.log(code.target)
  if(code.target.id === 'grey'){
    body.style.backgroundColor = code.target.id
  }else if(code.target.id === 'blue'){
    body.style.backgroundColor = code.target.id 
  }else if(code.target.id === 'red'){
    body.style.backgroundColor = code.target.id 
  }else if(code.target.id === 'purple'){
    body.style.backgroundColor = code.target.id 
  }else if(code.target.id === 'yellow'){
    body.style.backgroundColor = code.target.id 
  }
  else{
    body.style.backgroundColor = code.target.id 
  }
});
})

