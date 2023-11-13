import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import css from './home.module.css'


const Home = () => {
    const feeds = useSelector(state => state.feeds)

    return (
        
        <ul className={css.resource_list}>
            {feeds.map( ({title, link}) => {
                return <li key={title}><NavLink to="/Feed"><p>{title}</p></NavLink></li>
            })}
        </ul>
            
    )
}
export default Home