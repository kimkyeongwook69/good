import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchArea = styled.div`
  margin: 15px 0;
  padding: 1rem 3rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  &.on{
    display: flex;
  }

  & h1{
    width: 100%;
    padding: 30px 0;
  }
`;

const SearchItem = styled.div`
  width: 25%;
  padding: 20px;
`;

function Search ({token, keyValue}) {
    const [artists, setArtists] = useState([])

    useEffect(() => {if(keyValue != "" && {token}) {searchArtists();}}, [keyValue])
    
    const searchArtists = async () => {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: keyValue,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    
        console.log(data)
    }
    
    const renderArtists = () => {
      return artists.map(artist => (
          <SearchItem key={artist.id}>
              {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
              {artist.name}
          </SearchItem>
      ))
    }
    return(
        <SearchArea>
            <h1>'{keyValue}' 에 대한 검색 결과 입니다.</h1>
            {renderArtists()}
        </SearchArea>
    )
}


export default Search