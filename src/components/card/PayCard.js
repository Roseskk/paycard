import {useRef, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {animate} from "../../redux/slice/transitionSlice";
import {firstInput, firstLetterHandler, fourthInput, secondInput, thirdInput} from "../../redux/slice/inputSlice";
import {colorHandler} from "../../redux/slice/colorSlice";


export default function PayCard() {

    const dispatch = useDispatch();

    const placeHolder = useSelector((state) => state.placeHolder.value);
    const inputHandler = useSelector((state) => state.inputHolder.name);
    const colorSelector = useSelector((state) => state.colorHolder.color);
    const firstInputValue = useSelector((state) => state.inputHolder.firstValue)
    const secondInputValue = useSelector((state) => state.inputHolder.secondValue)
    const thirdInputValue = useSelector((state) => state.inputHolder.thirdValue)
    const fourthInputValue = useSelector((state) => state.inputHolder.fourthValue)
    /** tests

     */
    const firstInputRef = useRef();
    const secondInputRef = useRef();
    const thirdInputRef = useRef();
    const fourthInputRef = useRef()

    const  handleFirstInput=(e)=>{
        const firstNumber =  e.target.value[0]
        const value = e.target.value
        dispatch(colorHandler({firstNumber}))
        setTimeout(()=>{
            dispatch(firstLetterHandler({firstNumber}))
        },500)
        dispatch(firstInput({value}))
        if(e.target.value.length === 4) {
            secondInputRef.current.focus();
        }
    }

    const  handleSecondInput=(e)=>{
        const value = e.target.value
        dispatch(secondInput({value}))
        if(e.target.value.length === 4) {
            thirdInputRef.current.focus();
        }
    }

    const  handleThirdInput=(e)=>{
        const value = e.target.value
        dispatch(thirdInput({value}))
        if(e.target.value.length === 4) {
            fourthInputRef.current.focus();
        }
    }

    const  handleFourthInput=(e)=>{
        const value = e.target.value
        dispatch(fourthInput({value}))
    }


    return(
        <div className={'bg-black absolute w-card h-card  rounded overflow-hidden'}>
            <form className={'p-2'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={`pl-1 pr-1  text-center text-2xl font-montserratRegular ${colorSelector} transition ease-in-out delay-1000 border rounded w-full `}>{inputHandler === '' ? 'Unknown' : inputHandler}</h2>
                </div>
                <div className={'mt-5 flex gap-2 items-center justify-center'}>
                    <div className={'relative  rounded '}>
                        <input onClick={()=>dispatch(animate())}  onChange={handleFirstInput} ref={firstInputRef} tabIndex={1} value={firstInputValue}   className={'focus:outline-none focus:ring-0 w-12 mt-1 font-montserratRegular   bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleSecondInput} ref={secondInputRef}  tabIndex={2} value={secondInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular  mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleThirdInput} ref={thirdInputRef} tabIndex={3} value={thirdInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                    <div className={'relative  rounded '}>
                        <input onChange={handleFourthInput} ref={fourthInputRef} tabIndex={4} value={fourthInputValue} className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200  ${placeHolder}`}>1234</span>
                    </div>
                </div>
                <div className={'absolute flex gap-2 bottom-10 left-14'}>
                    <div className={'relative w-8 rounded '}>
                        <input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-0 font-montserratRegular transition ease-in-out delay-200 `}>MM</span>
                    </div>
                    <div className={'relative w-8 rounded '}>
                        <input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                        <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200 `}>YY</span>
                    </div>
                    {/*<input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'MM'} type={"number"} />*/}
                    {/*<input  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular text-center  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'YY'} type={"number"} />*/}
                </div>
            </form>
        </div>
    )
}
