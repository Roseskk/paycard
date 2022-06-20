

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
                state.name =' ';
                break
            }
        }
    }
    ColorHandler({state,number}){
        switch (number) {
            case '4':{
                state.color = 'text-blue-400 animate-toplvl';
                break
            }
            case '5':{
                state.color = 'text-red-400 animate-toplvl';
                break
            }
            default: {
                state.color = 'text-black';
                break
            }
        }
    }
    ColorBackground({state,number}) {
        switch (number) {
            case ' ': {
                state.background = 'bg-black';
                break
            }
            case '4': {
                state.background = 'animate-visa';
                break
            }
            case '5': {
                state.background = 'animate-mastercard';
                break
            }
            default: {
                state.background = 'bg-black';
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
                return mutate.monthValue = newState.replace(/[^0-9]/g, '').slice(0,2)
            }
            case 'year': {
                return mutate.yearValue = newState.replace(/[^0-9]/g, '').slice(0,2)
            }
            default: {
                break
            }
        }
    }
    SecretValidator({mutate,newState}) {
       return  mutate.secretValue = newState.replace(/[^0-9]/g, '').slice(0,3)
    }
    FormValidator({mutate}) {
        let statusVal = ''
        if (mutate.firstValue && mutate.secondValue &&mutate.thirdValue &&mutate.fourthValue &&mutate.monthValue && mutate.yearValue && mutate.secretValue !== '') {
            statusVal = 'done'
        } else {
            statusVal = 'reject'
        }

        switch (statusVal){
            case 'done': {
                return mutate.formStatus = 'done'
            }
            case 'reject': {
                return mutate.formStatus = 'reject'
            }
            default : {
                break
            }
        }
    }
}