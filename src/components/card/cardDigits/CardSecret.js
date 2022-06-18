
export default function CardSecret() {
    return(
        <div className={'absolute flex gap-2 bottom-10 right-20'}>
            <div className={'relative w-8 rounded '}>
                <input  className={'focus:outline-none focus:ring-0 w-14 font-montserratRegular mt-1  bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'}  type={"text"} required />
                <span className={`text-white pointer-events-none absolute left-0 top-2 font-montserratRegular text-xs transition ease-in-out delay-200 `}>CVV/CVC</span>
            </div>
        </div>
    )
}