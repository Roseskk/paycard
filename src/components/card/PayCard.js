import {useSelector} from "react-redux";
import CardNumber from "./cardDigits/CardNumber";
import CardDate from "./cardDigits/CardDate";


export default function PayCard() {

    const inputHandler = useSelector((state) => state.inputHolder.name);
    const colorSelector = useSelector((state) => state.colorHolder.color);

    /** tests

     */


    return(
        <div className={'bg-black absolute w-card h-card  rounded overflow-hidden'}>
            <form className={'p-2'}>
                <div className={'flex items-center justify-center'}>
                    <h2 className={`pl-1 pr-1  text-center text-2xl font-montserratRegular ${colorSelector} transition ease-in-out delay-1000 border rounded w-full `}>{inputHandler === '' ? 'Unknown' : inputHandler}</h2>
                </div>
                <CardNumber />
                <CardDate />
            </form>
        </div>
    )
}
