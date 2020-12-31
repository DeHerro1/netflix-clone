import React from 'react';
import './NetflixHomePage.css';
import Row from '../../components/NetflixMainPage/Row/Row';
import requests from '../../requests';
import Banner from './Banner/Banner';
import Nav from './Banner/Nav/Nav';

const netflixHomePage = () => (
    <div className="homePage">
        <Nav />
        <Banner />
        <Row 
            title="Trending Now" 
            isLargeRow
            fetchUrl={requests.fetchTrending}/>
        <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="RomanMovies" fetchUrl={requests.fetchRomanMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
);

export default netflixHomePage;