import React, { useState } from "react";
import axios from "axios";

function Test({token}){
    const [relatedArtists, setRelatedArtists] = useState([])

    
    
    const selectTopArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json" 
          }
        })
        setRelatedArtists(data.artists);
      }
      
      const renderTopArtists = () => {
        return relatedArtists.map(item => (
        //   <div key={tracks.id}>
        //     {tracks.album.images ? <img width={"100%"} src={tracks.images[0].url} alt=""/> : <div>No Image</div>}
        //     {console.log(tracks.album.images[0])}
        //     {tracks.name}
        //   </div>
        <div key={item.id}>
            <div>
            <img width={"10%"} src={item.images[0].url} alt=""/>
                외부 url : {item.external_urls.spotify}<br/>
                팔로워 : {item.followers.total}<br/>
                장르 : {item.genres}<br/>
                아티스트 id : {item.id}<br/>
                이름 : {item.name}<br/>
                인기도 : {item.popularity}<br/>
                타입 : {item.type}<br/>
                Spotify uri : {item.uri}<br/>
            </div>
            {/* <div>{tracks.images[1]}</div> */}
        </div>
        ))
      }
    return (
        <div>
            {token ?
                <form onSubmit={selectTopArtists}>
                <button type={"submit"}>Top-Artists</button>
                </form>
            :
            <></>
            }
            {renderTopArtists()}
        </div>
    )
}

export default Test;