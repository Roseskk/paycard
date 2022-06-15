

export default  class Utility {
    NameHandler({state,number}){
        switch (number) {
            case '4':{
                state.name ='VISA';
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white animate-toplvl';
                return
            }
            case '5':{
                state.name ='MASTERCARD'
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-red-500 to-orange-500 animate-toplvl';
                return;
            }
            default: {
                state.name ='UNKNOWN'
                state.color = 'bg-clip-text text-transparent  bg-gradient-to-r from-black to-white ';
                return;
            }
        }
    }
}