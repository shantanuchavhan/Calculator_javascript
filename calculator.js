let string=''
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach(
    (button)=>{
        button.addEventListener('click',(e)=>{
            value=e.target.innerHTML;
            if (value=="C"){
                string=''
                document.querySelector('input').value=string;

            }else if(value=="="){
                string=eval(string);
                document.querySelector('input').value=string;

                

            }else{
                string+=value;
                document.querySelector('input').value=string;

            }
            
            


        })
    }
    )
