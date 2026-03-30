import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CounterButtons({count, setCount}){
    const increase = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const decrease = () => {
        if (count < 0) {
            setCount(count - 1)
        }
    }
    
    return(
        <>
        <div className="button-container">
        <button 
        className="count-btn"
        onClick={decrease}
        >
            <MinusIcon className="count-btn-icon"/>
        </button>
        <button className="count-btn"
         onClick={increase}
        >
            <PlusIcon className="count-btn-icon"/>
        </button>
        </div>
        </>
    );
}