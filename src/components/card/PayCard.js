import {useEffect, useRef, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {animate,hide} from "../../redux/slice/transitionSlice";
import {firstInputHandler} from "../../redux/slice/inputSlice";


export default function PayCard() {

    const [color,SetColor] = useState('bg-clip-text text-transparent  bg-gradient-to-r from-black to-white')
    const [cardName,SetCardName] = useState('Unknown');

    /** tests

     */

    const [firstState,SetFirstState] = useState('')
    const [secondState,SetSecondState] = useState('')
    const [thirdState,SetThirdState] = useState('')
    const [fourthState,SetFourthState] = useState('')

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef()

    const placeHolder = useSelector((state) => state.placeHolder.value);
    const inputHandler = useSelector((state) => state.inputHolder.value);
    const dispatch = useDispatch();


    const  handleFirstInput=(e)=>{
        const firstNumber =  e.target.value[0]
        dispatch(firstInputHandler({firstNumber}))
        SetFirstState(e.target.value.slice(0,4));
        if(e.target.value.length === 4) {
            secondInput.current.focus();
        }

        switch (firstNumber) {
            case '4':{
                setTimeout(()=>{
                    SetCardName('VISA')
                },500)
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-blue-500 to-white animate-toplvl')
                return
            }
            case '5':{
                setTimeout(()=>{
                    SetCardName('MASTERCARD')
                },500)
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-red-500 to-orange-500 animate-toplvl')
                return;
            }
            default: {
                setTimeout(()=>{
                    SetCardName('Unknown')
                },500)
                SetColor('bg-clip-text text-transparent  bg-gradient-to-r from-black to-white  ')
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
        <div className={'bg-black absolute w-card h-card  rounded overflow-hidden'}>
            <form className={'p-2'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={`pl-1 pr-1  text-center text-2xl font-montserratRegular ${color} transition ease-in-out delay-1000 border rounded w-full `}>{cardName}</h2>
                </div>
                <div className={'mt-5 flex gap-2 items-center justify-center'}>
                    <div className={'relative  rounded '}>
                        <input onClick={()=>dispatch(animate())}  onChange={handleFirstInput} ref={firstInput} tabIndex={1} value={firstState}   className={'focus:outline-none focus:ring-0 w-12 mt-1 font-montserratRegular   bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} type={"number"} />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleSecondInput} ref={secondInput}  tabIndex={2} value={secondState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular  mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleThirdInput} ref={thirdInput} tabIndex={3} value={thirdState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleFourthInput} ref={fourthInput} tabIndex={4} value={fourthState} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                </div>
                <div className={'absolute flex gap-2 bottom-10 left-14 '}>
                    <input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'02'} type={"number"} />
                    <input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'24'} type={"number"} />
                </div>
            </form>
        </div>
    )
}
