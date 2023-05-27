//workout 1

// let ul=document.querySelector('.items')

// ul.firstElementChild.textContent='Hello'

// ul.firstElementChild.style.background='green'
// ul.children[1].style.background='yellow'


//workout 2
// const btn=document.querySelector('.btn')

// btn.addEventListener('submit',(e) =>{
//     document.querySelector(body).style.background ='#00FF00'

// })
// btn.addEventListener('mouseover',(e) =>{
//     document.querySelector('#my-form').style.background ='#ff66ff'

// })
// btn.addEventListener('mouseout',(e) =>{
//     document.querySelector('#my-form').style.background ='#990000'

// })
//workout 3

const myform=document.querySelector('#my-form');
const nameinp=document.querySelector('#name');
const emailinp=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');



myform.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault;
    
    if(nameinp.value ===''||emailinp.value ===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all';

        setTimeout(() => msg.remove(),3000);
    }
    else{
        localStorage.setItem(nameinp.value,emailinp.value)
        const li=document.createElement('li');
        li.appendChild(document.createTextNode('${nameinp.value}:${emailinp.value}'));
        userlist.appendChild(li);

            //clear field
            nameinp.value='';
            emailinp.value='';
    }
}


