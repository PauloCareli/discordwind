const Post = ({ name, timestamp, text, ...props }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${props.avatar ? props.avatar : seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        {text.includes('giphy.gif') ?
          <img src={text} alt='loading...' />
          :
          text.includes('https://') ?
            <a className="text-blue-300" target="_blank" href={text}>{text}</a>
            :
            <p className='post-text'>{text}</p>
        }

      </div>
    </div>
  );
};

export default Post