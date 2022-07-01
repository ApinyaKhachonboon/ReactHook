import React, {useState} from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  return (
    <div>
      <button onClick={()=>{
        setCount(count + 1)
        setTitle("React Hook")
      }}>ADD</button>
      UseState: {count}
      <br />
      Title: {title}
    </div>
  )
}