import React from 'react'

type Props = {
    name:string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h2>My second component</h2>
        <h2>It's name is: {props.name}</h2>
    </div>
  )
}

export default SecondComponent