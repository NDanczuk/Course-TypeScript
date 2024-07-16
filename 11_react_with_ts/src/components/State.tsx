import React, {useState, ChangeEvent} from 'react'


const State = () => {

    const [text, setText] = useState<string | null>(null)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

  return (
    <div>
        <h3>The text is: {text}</h3>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default State