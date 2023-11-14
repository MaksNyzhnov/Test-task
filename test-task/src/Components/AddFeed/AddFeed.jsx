import axios from 'axios'
import { useState } from 'react'
import css from './AddFeed.module.css'

const AddFeed = () => {
    const [inputText, setInputText] = useState('')

    const onAddClick = async () => {
     try {
         await axios.post('https://jsonplaceholder.typicode.com/posts', { data: inputText });
setInputText('')
        } catch (error) {
      console.error(error.message);
         
    }
    }
    return (
    <div className={css.add_feed_block}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter feed"
      />
      <button type='button' onClick={onAddClick}>Add</button>
    </div>
  );
}

export default AddFeed