import {useDispatch, useSelector} from "react-redux";
import {animateSecret} from "../../../redux/slice/transitionSlice";
import {secretInput} from "../../../redux/slice/inputSlice";

export default function CardSecret() {
    const dispatch = useDispatch()

    const secretState = useSelector((state)=> state.placeHolder.secret)
    const secretValueInput = useSelector((state)=> state.inputHolder.secretValue)


    return(
        <div className={'absolute flex gap-2 bottom-10 right-20'}>
            <div className={'relative w-8 rounded '}>
                <input onClick={()=>dispatch(animateSecret())} onFocus={()=>dispatch(animateSecret())} onChange={(event)=>dispatch(secretInput({value: event.target.value}))}  value={secretValueInput}  className={'focus:outline-none focus:ring-0 w-14 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white text-center'}  type={"text"} required />
                <span className={`text-white pointer-events-none absolute left-0 top-2 font-montserratRegular text-xs transition ease-in-out delay-200 ${secretState}`}>CVV/CVC</span>
            </div>
        </div>
    )
}