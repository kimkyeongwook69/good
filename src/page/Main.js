import styled from "styled-components";
import NewAlbums from "../component/NewAlbums";
import PopularAlbums from "../component/PopularAlbums";
import RankingAlbums from "../component/RankingAlbums";

const PopularandRanking = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 15px 0;
`;

export function Main({ token }) {
    return (
        <main>
            <NewAlbums token={token} />
            <PopularandRanking>
                <PopularAlbums token={token} />
                <RankingAlbums token={token} />
            </PopularandRanking>
        </main>
    )
}