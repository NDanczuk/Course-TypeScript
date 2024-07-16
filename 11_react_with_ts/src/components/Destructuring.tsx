import React from 'react'

type Props = {
  title:string
  content:string
  commentsQty:number
  tags:string[]

  // 8 - Enum
  category: Category
}

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  PHP = "PHP"
}

const Destructuring = ({title, content, commentsQty, tags, category}:Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <h3>{content}</h3>
        <h3>Amount of comments: {commentsQty}</h3>
        <div>
            {tags.map(tag => (
                <span>#{tag}</span>
            ))}
        </div>
        <h4>Category: {category}</h4>
    </div>
  )
}

export default Destructuring