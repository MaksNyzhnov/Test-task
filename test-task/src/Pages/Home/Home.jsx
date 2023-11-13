import { useSelector, useDispatch } from 'react-redux'
import css from './home.module.css'
import FeedCategory from '../../Components/FeedCategory/FeedCategory'
import { reloadFeeds } from '../../Redux/feedSlice'

const Home = () => {
    const feeds = useSelector(state => state.feeds)
    const dispatch = useDispatch()
    return (
        <>
        <ul className={css.resource_list}>
            {feeds.map( ({title, link}) => {
                return <li key={title}><FeedCategory title={title} link={link}></FeedCategory></li>
            })}
        </ul>
        <button onClick={() => dispatch(reloadFeeds())}>reload</button>
           </> 
    )
}
export default Home