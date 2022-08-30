import { useEffect, useState, useRef } from "react"

// Components
import TopNavigation from '../TopNavigation';
import BottomBar from "../BottomBar";
import Post from "../Post"
import song from "../../rickSong";

const ContentContainer = () => {
  const [chatText, setChatText] = useState(song)

  function inputAndUpdateChat(e) {
    setChatText([...chatText, { name: "You", text: e, avatar: 161 }])
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatText]);

  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
        {chatText.length > 0 ? chatText.map((eachText) => {
          return (
            <Post
              name={eachText.name}
              timestamp={new Date().toDateString()}
              text={eachText.text}
              avatar={eachText.avatar}
            />
          )
        }) : ""}
        <div ref={messagesEndRef} />
      </div>
      <BottomBar updateChat={inputAndUpdateChat} />
    </div>

  );
};

export default ContentContainer;
