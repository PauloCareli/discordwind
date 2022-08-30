import PlusIcon from '../PlusIcon';

const BottomBar = (...props) => {
  return (
    <div className='bottom-bar'>
      <PlusIcon />
      <input type='text' placeholder='Enter message...' className='bottom-bar-input' onKeyPress={event => {
        if (event.key === 'Enter') {
          props[0].updateChat(event.target.value)
          event.target.value = ""
        }
      }} />
    </div>
  );
}

export default BottomBar;