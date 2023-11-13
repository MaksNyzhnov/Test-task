import axios from "axios"
import { useState, useEffect } from "react"
import Article from "../../Components/Article/Article"


const Feed = () => {
    const [articles, setArticle] = useState([])

  console.log(articles)

  const getArticles = async () => {
    try {
      const res = await axios.get('http://localhost:8888/')
      setArticle(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])
    
    return <>
    

    {articles.map(({ article }) => <Article
        title={article.title}
        link={article.link}
        date={article.pubDate}
        key={article.title} />

    )}
    </>
}
export default Feed

