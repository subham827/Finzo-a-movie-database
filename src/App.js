import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Movie from './Movie';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  `;
  const Header = styled.div`
    background-color:  black;
    color: white;
    padding: 10px;
    font-size: 1.2em;
    font-weight: bold;
    box-shadow: 0px 3px 6px 0 #555;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    `;
    const SearchBox = styled.div`
    background-color:  white;
    color: black;
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    align-items: center;

    `;
    const SearchInput = styled.input`
    color: black;
    font-size: 0.8em;
    font-weight: bold;
    border: none;
    outline: none;
    margin-left: 10px;
    
    `;
    const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: space-evenly;
    `
  

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [page, setPage] = useState(1);
  const l = page;
  const [timeout, updateTimeout] = useState();
  const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(false);


  const fetchMovies = async (searchString) => {
    setLoading(true);
   const response = await axios.get(`http://www.omdbapi.com/?s=${searchString}&apikey=47832f18`);
   console.log(response.data.Search);
    setMovies(response.data.Search); 
    setLoading(false);

  }
  const fetchfullMovies = async ()=>{
    setLoading(true);
    // const response = await axios.get(`http://www.omdbapi.com/?page=${page}&apikey=47832f18`);
    const response = await axios.get(`http://www.omdbapi.com/?s=Avengers&apikey=47832f18`);
    setMovies(response.data.Search); 
    console.log(response);
    setLoading(false);
  }
 
  const onTextChange = (e) => {
    clearTimeout(timeout);
    setSearchTerm(e.target.value);
    const newTimeout = setTimeout(() => fetchMovies(e.target.value), 500) ;
    updateTimeout(newTimeout);

    
  }
useEffect(()=>{
  fetchfullMovies();
  
  
},[])
  return (
   
   <Container>
    <Header>Finzo
      <SearchBox>
        <SearchInput type="text" placeholder="Search for a movie" value={searchTerm} onChange={onTextChange}/>
      </SearchBox>
    </Header>
    <MovieListContainer>

      
      { 
      
      
    //  movies?.length ? movies.map((movie, index)=> <Movie key={index} movie={movie}/>) : <div>Search for a movie or series!</div>}
         loading ? <div>Loading...</div> : movies?.length?movies.map((movie, index)=> <Movie key={index} movie={movie}/>) : <div>Search for a movie or series!</div>
      }

      
      </MovieListContainer>
    </Container>
   
  );
}

export default App;
