import Channelbar from './components/ChannelBar';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Channelbar />
        <Routes>
          <Route path="/" element={<ContentContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
