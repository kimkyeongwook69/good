import './App.css';
import { useState } from 'react';

import Search from './component/Search';
import { Routes, Route } from 'react-router-dom';
import { Common } from './page/Common';
import { Main } from './page/Main';

// npm install
// npm install axios
// npm styled-components

// spotify API Reference
// https://developer.spotify.com/documentation/web-api/reference/#/
// How to use the Spotify API In Your React JS App
// https://dev.to/dom_the_dev/how-to-use-the-spotify-api-in-your-react-js-app-50pn

function App() {
  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("");
  
  return (
    <div>
    <Routes>
      <Route path='/' element={<Common token={token} setToken={setToken} setSearchKey={setSearchKey} />}>
        <Route path='/' element={token? (<Main token={token} />):(<></>)}></Route>
        <Route path='/search' element={<Search token={token} />}></Route>
        {/* <Route path='/artist'></Route>
        <Route path='/relatedArtists'></Route>
        <Route path='/albums'></Route> */}
      </Route>
    </Routes>
    </div>
  );
  
}

export default App;