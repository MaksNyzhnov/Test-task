import css from './Article.module.css'

const Article = ({ title, link, date }) => {

    let formatted = { day: 'numeric', month: 'long', year: 'numeric' }

    let articleDate = new Date(date).toLocaleDateString("en-GB", formatted)

    return <div className={css.articles_container}>
        <a href={link} target='_blank' rel='noopener noreferrer' className={css.article_link}>
            <h3 className={css.article_title}>{title}</h3>
        
            <p>{articleDate}</p>
        </a>
    </div>
}

export default Article