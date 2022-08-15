import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'


const HomePage = () => {
  return (
    <div>
        <Main/>
        <Row rowId="1" title="Up Coming" fetchBaseUrl={request.requestUpcoming}/>
        <Row rowId="2" title="Trending" fetchBaseUrl={request.requestTrending}/>
        <Row rowId="3" title="Horror" fetchBaseUrl={request.requestHorror}/>
        <Row rowId="4" title="Top Rated" fetchBaseUrl={request.requestTopRated}/>
        <Row rowId="5" title="Popular" fetchBaseUrl={request.requestPopular}/>
    </div>
  )
}

export default HomePage