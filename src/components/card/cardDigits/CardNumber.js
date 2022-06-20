import {animate,show} from "../../../redux/slice/transitionSlice";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from 'react'
import {backgroundHandler, colorHandler} from "../../../redux/slice/colorSlice";
import {firstInput, firstLetterHandler, fourthInput, secondInput, thirdInput} from "../../../redux/slice/inputSlice";



export default function CardNumber() {
    const dispatch = useDispatch();

    const placeHolder = useSelector((state) => state.placeHolder.value);
    const firstInputValue = useSelector((state) => state.inputHolder.firstValue)
    const secondInputValue = useSelector((state) => state.inputHolder.secondValue)
    const thirdInputValue = useSelector((state) => state.inputHolder.thirdValue)
    const fourthInputValue = useSelector((state) => state.inputHolder.fourthValue)

    const firstInputRef = useRef();
    const secondInputRef = useRef();
    const thirdInputRef = useRef();
    const fourthInputRef = useRef()



    const switchOptions=({event,type})=>{

        switch (type){
            case 'first': {
                const firstNumber = event.target.value[0];
                const value = event.target.value;

                dispatch(colorHandler({firstNumber}))
                dispatch(backgroundHandler({firstNumber}))
                setTimeout(()=>{
                    dispatch(firstLetterHandler({firstNumber}))
                },500)
                dispatch(firstInput({value}))
                if(value.length === 4) {
                    secondInputRef.current.focus();
                }
                if(value.length === 0) {
                    dispatch(show())
                } else {
                    dispatch(animate())
                }
                break
            }
            case 'second': {
                const value = event.target.value
                dispatch(secondInput({value}))
                if(value.length === 4) {
                    thirdInputRef.current.focus();
                }
                break
            }
            case 'third': {
                const value = event.target.value
                dispatch(thirdInput({value}))
                if(value.length === 4) {
                    fourthInputRef.current.focus();
                }
                break
            }
            case 'fourth': {
                const value = event.target.value
                dispatch(fourthInput({value}))
                break
            }
            default : {
                break
            }
        }
    }

    return(
        <>
            <div className={'mt-5 flex gap-2 items-center justify-center'}>
                <div className={'relative  rounded '}>
                    <input onClick={()=>dispatch(animate())}  onChange={(event)=> switchOptions({event,type:'first'})} ref={firstInputRef} tabIndex={1} value={firstInputValue}   className={'focus:outline-none focus:ring-0 w-12 mt-1 font-montserratRegular   bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} type={"text"} required />
                    <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                </div>
                <div className={'relative  rounded '}>
                    <input onChange={(event)=> switchOptions({event,type:'second'})} ref={secondInputRef}  tabIndex={2} value={secondInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular  mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"text"} required />
                    <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                </div>
                <div className={'relative  rounded '}>
                    <input onChange={(event)=> switchOptions({event,type:'third'})} ref={thirdInputRef} tabIndex={3} value={thirdInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"text"} required />
                    <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                </div>
                <div className={'relative  rounded '}>
                    <input onChange={(event)=> switchOptions({event,type:'fourth'})} ref={fourthInputRef} tabIndex={4} value={fourthInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"text"} required />
                    <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                </div>
            </div>
        </>
    )
}