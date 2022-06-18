import {useSelector} from "react-redux";
import CardNumber from "./cardDigits/CardNumber";
import CardDate from "./cardDigits/CardDate";


export default function PayCard() {

    const inputHandler = useSelector((state) => state.inputHolder.name);
    const colorSelector = useSelector((state) => state.colorHolder.color);
    const bgSelector = useSelector((state)=> state.colorHolder.background)


    return(
        <div className={`${bgSelector === ' ' ? 'bg-black' : bgSelector} absolute w-card h-card  rounded overflow-hidden transition ease-in-out delay-500`}>
            <form className={'p-2'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={`pl-1 pr-1  text-center text-2xl font-montserratRegular ${colorSelector} z-50 transition ease-in-out delay-1000 border rounded w-full `}>{inputHandler === ' ' || inputHandler === '' ? 'Card' : inputHandler}</h2>
                </div>
                <CardNumber />
                <CardDate />
            </form>
        </div>
    )
}
