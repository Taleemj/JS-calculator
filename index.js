var display = document.getElementById('display');

var buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'del':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case 'C':
                display.innerText = '';
                break;   
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText ='Invalid!';
                }
                break;    
            default:
                display.innerText += e.target.innerText;
        }
    })
})