import {useDispatch, useSelector} from "react-redux";
import {animateMM, animateYY} from "../../../redux/slice/transitionSlice";
import {monthValue, yearValue} from "../../../redux/slice/inputSlice";
import {useRef} from "react";

export default function CardDate() {
    const dispatch = useDispatch()
    const yearRef = useRef()

    const month = useSelector((state) => state.placeHolder.mm)
    const year = useSelector((state) => state.placeHolder.yy)


    const switchDate = ({event,type}) =>{

        // if (event.target.value === '-' &&) {}

        switch (type){
            case 'month': {
                const value = event.target.value;
                dispatch(monthValue({value}))

                if(value.length === 2) {
                    yearRef.current.focus()
                }
                break
            }
            case 'year': {
                const value = event.target.value;
                dispatch(yearValue(value))
                break
            }
            default: {
                break
            }
        }
    }

    return(
        <div className={'absolute flex gap-2 bottom-10 left-14'}>
            <div className={'relative w-8 rounded '}>
                <input onClick={() => dispatch(animateMM())} onChange={(event) => switchDate({event,type:'month'})}  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"number"} required />
                <span className={`text-white pointer-events-none absolute left-0 font-montserratRegular transition ease-in-out delay-200 ${month}`}>MM</span>
            </div>
            <div className={'relative w-8 rounded '}>
                <input onClick={() => dispatch(animateYY())} onFocus={() => dispatch(animateYY())} ref={yearRef} onChange={(event) => switchDate({event,type:'year'})}  className={'focus:outline-none focus:ring-0 w-8 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white '}  type={"number"} required />
                <span className={`text-white pointer-events-none absolute left-1 font-montserratRegular transition ease-in-out delay-200 ${year}`}>YY</span>
            </div>
        </div>
    )
}