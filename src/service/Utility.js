

export default  class Utility {
    NameHandler({state,number}){
        switch (number) {
            case '4':{
                state.name ='VISA';
                return
            }
            case '5':{
                state.name ='MASTERCARD';
                return;
            }
            default: {
                state.name ='UNKNOWN';
                return;
            }
        }
    }
    ColorHandler({state,number}){
        switch (number) {
            case '4':{
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white animate-toplvl';
                return
            }
            case '5':{
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-red-500 to-orange-500 animate-toplvl';
                return;
            }
            default: {
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-black to-white';
                return;
            }
        }
    }
}