import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, } from 'react'
import css from './home.module.css'
import FeedCategory from '../../Components/FeedCategory/FeedCategory'
import AddFeed from "../../Components/AddFeed/AddFeed"
import { reloadFeeds, addFeed } from '../../Redux/feedSlice'

const Home = () => {
    const feeds = useSelector(state => state.feeds)
    const userId = useSelector(state => state.userId)
    const dispatch = useDispatch()

    const fetchDefinitionsByID = async (id) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        return res.data 
    }
    useEffect(() => {
        const takeUserFeeds = async () => {
            const userFeeds = await fetchDefinitionsByID(userId)
            console.log(userFeeds)
            userFeeds.forEach(feed => dispatch(addFeed(feed)))
        }
        takeUserFeeds()
    }, [])
    return (
        <>
        <ul className={css.resource_list}>
            {feeds.map( ({title, link = ''}) => {
                return <li key={title}><FeedCategory title={title} link={link}></FeedCategory></li>
            })}
            </ul>
            <AddFeed/>
        <button onClick={() => dispatch(reloadFeeds())}>reload</button>
           </> 
    )
}
export default Home