module.exports = function toReadable (number) {
    // console.log(typeof(number));
    console.log(number);
    let num = number.toString().split('').reverse();
    console.log(num);
    let result = [];
    for(let i = 0; i < 3; i++){
        console.log(num[i]);

        switch(num[i]){

        case '0':
            if(i==0){
                result[0] = 'zero';
            } 
            break;
        case '1':
            if(i==0){
                result[0] = 'one';
            } 
            if(i==1){
                switch(result[0]){
                    case 'zero':
                        result[0] = 'ten'
                        break;
                    case 'one':
                        result[0] = 'eleven'
                        break;
                    case 'two':
                        result[0] = 'twelve'
                        break;
                    case 'three':
                        result[0] = 'thirteen'
                        break;
                    case 'four':
                        result[0] = 'fourteen'
                        break;
                    case 'fife':
                        result[0] = 'fifteen'
                        break;
                    case 'six':
                        result[0] = 'sixteen'
                        break;
                    case 'seven':
                        result[0] = 'seventeen'
                        break;
                    case 'eight':
                        result[0] = 'eighteen'
                        break;
                    case 'nine':
                        result[0] = 'nineteen'
                        break;           
                    }
            }else if(i=2){
                result[2] = 'one hundred'
            }
            break;

        case '2':

            if(i==0){
                result[0] = 'two';
            } 
            if(i==1){
                result[1] = 'twenty'    
            }else if(i==2){
                result[2] = 'two hundred'
            }

            break;
        case '3':

            if(i==0){
                result[0] = 'three';
            } 
            if(i==1){
                result[1] = 'thirty'    
            }else if(i==2){
                result[2] = 'three hundred'
            }

            break;
        case '4':

            if(i==0){
                result[0] = 'four';
            } 
            if(i==1){
                result[1] = 'forty'    
            }else if(i==2){
                result[2] = 'four hundred'
            }

            break;
        case '5':

            if(i==0){
                result[0] = 'five';
            } 
            if(i==1){
                result[1] = 'fifty'    
            }else if(i==2){
                result[2] = 'five hundred'
            }

            break;
        case '6':

            if(i==0){
                result[0] = 'six';
            } 
            if(i==1){
                result[1] = 'sixty'    
            }else if(i==2){
                result[2] = 'six hundred'
            }

            break;
        case '7':

            if(i==0){
                result[0] = 'seven';
            } 
            if(i==1){
                result[1] = 'seventy'    
            }else if(i==2){
                result[2] = 'seven hundred'
            }

            break;
        case '8':

            if(i==0){
                result[0] = 'eight';
            } 
            if(i==1){
                result[1] = 'eighty'    
            }else if(i==2){
                result[2] = 'eight hundred'
            }

            break;

        case '9':

            if(i==0){
                console.log('мы тут х0х');
                result[0] = 'nine';
                console.log(result[0]);
            } 
            if(i==1){
                console.log('мы тут х1х');
                result[1] = 'ninety' 
                console.log(result[1]);   
            }else if(i==2){
                console.log('мы тут х2х');
                result[2] = 'nine hundred'
                console.log(result[2]);
            }

            break;

        }      

    }
    if (result[0] == 'zero'){
        result[0] = '';
    }


    return result.reverse().join(' ');
}
