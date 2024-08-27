import React from 'react'
import './articles.css'

const Article = ({imgUrl,date,title}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="Blog image" />
      </div>
      <div className="gpt__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full Aricle</p>
      </div>
    </div>
  )
}

export default Article
