import styled from "styled-components";
import Concerts from "../component/Concerts";
import GeneConcerts from "../component/GeneConcerts";
import NewAlbums from "../component/NewAlbums";

const ConcertArea = styled.div`
  display: flex;
  padding-bottom: 20px;
  
`

export function Main({ token }) {
    return (
        <main>
            <NewAlbums token={token} />
            
            <ConcertArea>
                <Concerts/>
                <GeneConcerts/>
            </ConcertArea>
        </main>
    )
}