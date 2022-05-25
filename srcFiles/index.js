
let firstN = '';
let secondN = '';
let operator = '';
let result = false;

num ='1234567890.'
const numbers =num.split('')

const operation = ['+','-','x','/']
const screan = document.querySelector('.screan p');
const btn = document.querySelector('.buttons')

let clearRes =document.querySelector('.ac')
function claer(){
	firstN = '';
	secondN = '';
	operator = '';
	result = false;
	screan.textContent = '';

}

clearRes.onclick = claer;



document.querySelector('.buttons').onclick=(event)=>{
	screan.textContent = '';
	let key = event.target.textContent;
	if(numbers.includes(key)){
	
	
		if (secondN===''&& operator ===''){
			firstN +=key
			screan.textContent =firstN;
			

		}
		else if(firstN!==''&&secondN!=='' && result){
			secondN = key;
			result = false;
			screan.textContent = secondN
		}
		else{
			secondN +=key;
			screan.textContent = secondN
			
		}
		
	}
	if(operation.includes(key)){
		operator=key;
		screan.textContent = operator
	

		
	
	}
	if(key==='='){
		switch(operator){
			case '+':
				firstN = +firstN+(+secondN)
				break;
			case '-':
				firstN= firstN-secondN;
				break;
			case 'x':
				firstN=firstN*secondN;
				break;
			case '/':
				if(secondN ==='0'){
					screan.textContent ='Error';
					firstN = '';
					secondN = '';
					operator = '';
					return;
				}
				firstN=firstN/secondN;	
			

	}
	result = true;
		screan.textContent = firstN;
		console.log(firstN,secondN,result)	
		
 	
}	



}