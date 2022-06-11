

export default function PayCard() {
    return(
        <div className={'bg-black absolute w-card h-card  rounded'}>
            <form className={'p-2'}>
                <h2 className={'text-center text-2xl font-montserratRegular text-white'}>Type of card</h2>
                <div className={'mt-2 flex items-center justify-center'}>
                    <input className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular pl-1 pr-1 bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'1234 5678 9012 1293'} type={"number"} />
                    <input className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular pl-1 pr-1 bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'1234 5678 9012 1293'} type={"number"} />
                    <input className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular pl-1 pr-1 bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'1234 5678 9012 1293'} type={"number"} />
                    <input className={'focus:outline-none focus:ring-0 w-12 font-montserratRegular pl-1 pr-1 bg-transparent border-b-white border-b tracking-widest placeholder-white text-white'} placeholder={'1234 5678 9012 1293'} type={"number"} />
                </div>
            </form>
        </div>
    )
}