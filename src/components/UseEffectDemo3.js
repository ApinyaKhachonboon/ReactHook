import React, {useState, useEffect} from 'react'

export default function UseEffectDemo3() {
    const [count, setCount] = React.useState(0);
    const doSomthing = () => {
        setCount(countPrev => countPrev + 1);
        console.log("Do Something");
    }
    React.useEffect(() => {
      const intervalId = setInterval(doSomthing, 1000);

      // Clean Up
      return () => {
        console.log("Destroy");
        clearInterval(intervalId);
      }
    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

