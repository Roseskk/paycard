

export default  class Utility {
    NameHandler({state,number}){
        switch (number) {
            case '4':{
                state.name ='VISA';
                break
            }
            case '5':{
                state.name ='MASTERCARD';
                break
            }
            default: {
                state.name ='UNKNOWN';
                break
            }
        }
    }
    ColorHandler({state,number}){
        switch (number) {
            case '4':{
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white animate-toplvl';
                break
            }
            case '5':{
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-red-500 to-orange-500 animate-toplvl';
                break
            }
            default: {
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-black to-white';
                break
            }
        }
    }
    InputValidator({mutate,newState,type}) {
        switch (type){
            case 'first': {
                return mutate.firstValue = newState.replace(/[^0-9]/g, '').slice(0,4)
            }
            case 'second': {
                return mutate.secondValue = newState.replace(/[^0-9]/g, '').slice(0,4)
            }
            case 'third': {
                return mutate.thirdValue = newState.replace(/[^0-9]/g, '').slice(0,4)
            }
            case 'fourth': {
                return mutate.fourthValue = newState.replace(/[^0-9]/g, '').slice(0,4)
            }
            default: {
                break;
            }
        }
    }
    DateValidator({mutate,newState,type}) {
        switch (type){
            case 'month': {
                return mutate.monthValue = newState.slice(0,2)
            }
            case 'year': {
                return mutate.yearValue = newState.slice(0,2)
            }
            default: {
                break
            }
        }
    }
}