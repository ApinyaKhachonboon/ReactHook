import React, { useState, useEffect } from 'react'

export default function UseEffectDemo1() {

    const [count, setCount] = useState(0)
    useEffect(() => {

        // Called whenever state is changed
        document.title = "Current Count : " + count;
        return () => {
            // Called when component is deleted
            document.title = "The component was just destory"
            console.log("Destroy");
        }
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>ADD</button>
        </div>
    )
}
