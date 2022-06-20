import {useDispatch, useSelector} from "react-redux";
import CardNumber from "./cardDigits/CardNumber";
import CardDate from "./cardDigits/CardDate";
import CardSecret from "./cardDigits/CardSecret";
import {useEffect} from "react";
import {formSubmit} from "../../redux/slice/inputSlice";


export default function PayCard() {
    const dispatch = useDispatch();

    const inputHandler = useSelector((state) => state.inputHolder.name);
    const colorSelector = useSelector((state) => state.colorHolder.color);
    const formSelector = useSelector((state) => state.inputHolder.formStatus);
    const firstLetter = useSelector((state) => state.inputHolder.firstValue)
    const bgSelector = useSelector((state) => state.colorHolder.background);

    const handleCard = () => {
        // send data
    }

    useEffect(()=>{
        setInterval(()=>{
            if (firstLetter[0] === '4' || firstLetter[0] === '5') {
                dispatch(formSubmit())
                if (formSelector === 'done') {
                    handleCard()
                }
            }
        },1200)
    },[formSelector,firstLetter])

    return(
        <div className={`${bgSelector === ' ' ? 'bg-black' : bgSelector} absolute w-card h-card  rounded overflow-hidden transition ease-in-out delay-500`}>
            <form onSubmit={(event)=> handleCard(event)} className={'p-2'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={`pl-1 pr-1  text-center text-2xl font-montserratRegular ${colorSelector} z-50 transition ease-in-out delay-1000 border rounded w-full `}>{inputHandler === ' ' || inputHandler === '' ? 'Card' : inputHandler}</h2>
                </div>
                <CardNumber />
                <div className={'flex'}>
                    <CardDate />
                    <CardSecret />
                </div>
            </form>
        </div>
    )
}
