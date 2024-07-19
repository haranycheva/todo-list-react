const { useState, useEffect, useRef } = require("react")

function CompInter(){
    const [counter, setCounter] = useState(0)
    const btnRef = useRef(null)
    const incrementCounter = () => setCounter((state) => state+ 1)
    // const stopInterval = () => {
    //     clearInterval(intevalId.current)
    // }
    // useEffect(() => {
    //     intevalId.current = setInterval(() => {
    //         incrementCounter()
    //     }, 1000)
    // }, [])
    useEffect(()=>{
        console.log(counter);
        return () => {
            console.log("unmount");
        }
    }, [counter])
    return(
        <>
            <p>Inter: {counter}</p>
            <button onClick={()=> {setCounter((state) => state+=1)}}>+1</button>
            <button onClick={() => console.log(btnRef)} ref={btnRef}>stop</button>
        </>
    )
}

 export function CompRef(){
    const [visible, setVisible] = useState(true)
    return(
        <>
            <h1>REF</h1>
            <button onClick={()=> setVisible(false)}></button>
            {visible && <CompInter/>}
        </>
    )
}