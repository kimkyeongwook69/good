import { useEffect, useState } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser'
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

const ConcertDetailWrap = styled.div`
    padding: 15px;
    flex-wrap: wrap;
`
const ConcertDetailContent = styled.div`
    font-size: 0.9rem;
    color: gray;
    padding: 20px 0;
    

    & h1{
        font-size: 1.5rem;
        font-weight: bold;
        margin: 15px 0;
        color: black;
    }
`

const ConcertDetailInfo = styled.div`
    display: flex;
    padding: 30px 0;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
`
const ConcertDetail1 = styled.div`
    width: 30%;
    padding: 15px;
`

const ConcertPoster = styled.div`
    height: 400px;
`
const ConcertDetail2 = styled.div`
    width: 70%;
    padding: 25px 50px;
    font-size: 0.8rem;

    & dt, dd{
        display:inline-block;
        padding: 10px 0;
    }
    & dt{
        width: 30%;
        padding-left: 5px;
    }
    & dd{
        width: 70%;
    }

    & p{
        line-height: 30px;
        padding-left: 5px;
    }

    & h2{
        font-weight: bold;
        line-height: 40px;
    }
`

const ConcertDetailStyurls = styled.div`
    & h2{
        font-size: 0.9rem;
        font-weight: bold;
        padding: 20px 0; 
    }
`

const ConcertDetailStyurlsImages = styled.div`
    display:flex;
    flex-wrap: wrap;
    text-align: center;
    & div{
        width: 100%;
    }

    & p{
        padding: 150px 0;
        font-weight: bold;
        font-size: 0.8rem;
    }
`
function parseJson(dataSet) {
    const dataArr = new XMLParser().parseFromString(dataSet);
    return dataArr;
}

function ConcertDetail(){
    const [data, setData] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        
        const id = location.state.id;
        
        const readShowList = async () => {
            try {
              const response = await axios.get(
                '/pblprfr/' + id +'?service=5142c77db2284ca09ff559832f6858e2',
              );
               const xmlData = response.data;
               const jsonData = parseJson(xmlData);
               // const parse
               setData(jsonData.children[0].children);

               console.log(jsonData.children[0].children);
            } catch (e) {
              console.log(e);
            }
          };
          readShowList();    
    },[]);

    return (
        
      <ConcertDetailWrap>
        
        
        {data.length !== 0 &&
        (
        <div>
            <ConcertDetailContent>
                <p>{data[13].value}</p>
                <h1>{data[1].value} - {data[4].value}</h1>
                <p>{data[2].value} ~ {data[3].value}</p>
            </ConcertDetailContent>
            <ConcertDetailInfo>
                <ConcertDetail1>
                    <ConcertPoster>
                        <img src={1 && data[11].value} width={"100%"}/>
                    </ConcertPoster>



                    
                    
                    {/* <p>?????? ID : {data[0].value}</p> */}
                    {/* <p>?????? ?????? ID : {data[17].value}</p> */}
                    {/* <p>????????? : {data[15].value}</p> */}
                    
                </ConcertDetail1>
                <ConcertDetail2>
                    <h2>?????? ??????</h2>
                    <dl>
                        <dt>?????? ?????? ??????</dt>
                        <dd>{data[8].value}</dd>
                    </dl>
                    <dl>
                        <dt>?????? ??????</dt>
                        <dd>{data[7].value}</dd>
                    </dl>
                    <dl>
                        <dt>?????????</dt>
                        <dd>{data[5].value}</dd>
                    </dl>
                    <dl>
                        <dt>?????? ?????????</dt>
                        <dd>{data[6].value !== "" ? data[6].value : "--"}</dd>
                    </dl>
                    <dl>
                        <dt>?????????</dt>
                        <dd>{data[9].value !== "" ? data[9].value : "--"}</dd>
                    </dl>
                    <dl>
                        <dt>??????</dt>
                        <dd>{data[10].value}</dd>
                    </dl>

                    <br/>
                    <hr/>
                    <br/>


                    <h2>?????? ?????? ??????</h2>
                    <p>{ data.length=== 19 ? data[18].value : data[17].value}</p>
                    <p>?????? ?????? : {data[14].value}</p>

                    <br/>
                    <hr/>
                    <br/>

                    <h2>?????????</h2>
                    <p>{data[12].value !== "" ? data[12].value : "???????????? ???????????? ????????????."}</p>
                </ConcertDetail2>
            </ConcertDetailInfo>
            <ConcertDetailStyurls>
                <h2>?????? ?????? ?????????</h2>
                <ConcertDetailStyurlsImages>
                    { data.length=== 19 ?
                        data[16].children.map((img) => (
                            <div>
                                <img src={img.value} width={"80%"}/>
                            </div>
                        ))
                        :
                        <div>
                            <p>?????? ?????? ???????????? ???????????? ????????????.</p>
                        </div>
                    }
                </ConcertDetailStyurlsImages>
                
                
            </ConcertDetailStyurls>
        </div>
        )
        }
      </ConcertDetailWrap>
    );
}

export default ConcertDetail;