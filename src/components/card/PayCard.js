import {useRef, useState} from "react";


export default function PayCard() {

    const [color,SetColor] = useState('')
    const [cardName,SetCardName] = useState('Unknown');

    const [firstState,SetFirstState] = useState('')
    const [secondState,SetSecondState] = useState('')
    const [thirdState,SetThirdState] = useState('')
    const [fourthState,SetFourthState] = useState('')

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef()

    const  handleFirstInput=(e)=>{
        const firstNumber =  e.target.value[0]
        SetFirstState(e.target.value.slice(0,4));
        if(e.target.value.length === 4) {
            secondInput.current.focus();
        }

        switch (firstNumber) {
            case '4':{
                SetCardName('VISA')
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white')
                return
            }
            case '5':{
                SetCardName('MASTERCARD');
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-red-500 to-orange-500')
                return;
            }
            default: {
                SetCardName('Unknown')
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-black to-white')
                return;
            }
        }
    }

    const  handleSecondInput=(e)=>{
        SetSecondState(e.target.value.slice(0,4));
        if(e.target.value.length === 4) {
            thirdInput.current.focus();
        }
    }

    const  handleThirdInput=(e)=>{
        SetThirdState(e.target.value.slice(0,4));
        if(e.target.value.length === 4) {
            fourthInput.current.focus();
        }
    }

    const  handleFourthInput=(e)=>{
        SetFourthState(e.target.value.slice(0,4));
    }




    return(
        <div className={'bg-black absolute w-card h-card  rounded'}>
            <form className={'p-2'}>
                <h2 className={`text-center text-2xl font-montserratRegular ${color} transition ease-in-out delay-300`}>{cardName === undefined ? 'Card' : cardName}</h2>
                <div className={'mt-2 flex gap-2 items-center justify-center'}>
                    <input onChange={handleFirstInput} ref={firstInput} tabIndex={1} value={firstState}   className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'1234'} type={"number"} />
                    <input onChange={handleSecondInput} ref={secondInput}  tabIndex={2} value={secondState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'5678'} type={"number"} />
                    <input onChange={handleThirdInput} ref={thirdInput} tabIndex={3} value={thirdState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular text-center bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'9012'} type={"number"} />
                    <input onChange={handleFourthInput} ref={fourthInput} tabIndex={4} value={fourthState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular text-center bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'3456'} type={"number"} />
                </div>
            </form>
        </div>
    )
}