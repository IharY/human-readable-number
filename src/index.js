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
                        result[1] = 'ten'
                        result[0] = '';
                        break;
                    case 'one':
                        result[1] = 'eleven'
                        result[0] = '';
                        break;
                    case 'two':
                        result[1] = 'twelve'
                        result[0] = '';
                        break;
                    case 'three':
                        result[1] = 'thirteen'
                        result[0] = '';
                        break;
                    case 'four':
                        result[1] = 'fourteen'
                        result[0] = '';
                        break;
                    case 'five':
                        result[1] = 'fifteen'
                        result[0] = '';
                        break;
                    case 'six':
                        result[1] = 'sixteen'
                        result[0] = '';
                        break;
                    case 'seven':
                        result[1] = 'seventeen'
                        result[0] = '';
                        break;
                    case 'eight':
                        result[1] = 'eighteen'
                        result[0] = '';
                        break;
                    case 'nine':
                        result[1] = 'nineteen'
                        result[0] = '';
                        break;           
                    }
            }else if(i==2){
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

    return result.reverse().join(' ').trim();

    let result2 = result.reverse().join(' ');

    // if(result2[result.length-1] == ' '){
    //     return result2.substring(0, (result2.length-2));
    // }

    // return result2;
}
