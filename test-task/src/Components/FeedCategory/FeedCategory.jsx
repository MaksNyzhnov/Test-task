
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setFeedTopic, removeFeed } from '../../Redux/feedSlice';
import css from './FeedCategory.module.css'



const FeedCategory = ({ title, link }) => {
    const dispatch = useDispatch();
   
    const onLinkClick = () => {
        
        dispatch(setFeedTopic(link))
        
    }
    return <>
        <Link to='/feed' onClick={onLinkClick}>{title}</Link>
        <button className={css.delete_feed_btn} onClick={()=> dispatch(removeFeed(title))} >delete</button>
 </>
}

export default FeedCategory