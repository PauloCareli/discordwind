import { useEffect, useState } from "react"
import TopNavigation from '../TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';

import song from "../../rickSong";

const ContentContainer = () => {
  const [chatText, setChatText] = useState(song)
  
  useEffect(() => {
    if (song) {
        setChatText(song)
    }
}, [song])

  const updateChat = () => {
    console.log(song)
  }


  const Input = (e) => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        // setChatText(song.push({
        //   name: e.name,
        //   text: e.text
        // }))
        console.log('do validate')
      }
    }}

  return (
    <div className='content-container'>      
      <TopNavigation />
          <div className='content-list'>             
            {song.length>0 ? song.map( (eachText) => {
              return(
                <Post
                  name={eachText.name}
                  timestamp={new Date().toDateString()}
                  text={eachText.text}
                />
              )
            }): ""}
          </div>  
      <BottomBar Input={Input()}/>
    </div>
  );
};

const BottomBar = (Input) => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' onKeyPress={event => {
                if (event.key === 'Enter') {
                  console.log(event.target.value)
                  // this.Input()
                }}}/>
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        {text.includes('giphy.gif') ?
          <img src={text} alt='loading...' />
           :
          <p className='post-text'>{text}</p>
        }
        
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;
