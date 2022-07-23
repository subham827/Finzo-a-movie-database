import React from 'react'
import styled from 'styled-components'
const MovieContainer = styled.div`
display : flex;
flex-direction : column;
padding : 10px;
width: 280px;
cursor : pointer;
`;
const CoverImage = styled.img`
height : 380px;
`
const Tittle = styled.span`
font-size : 18px;
color : black;
margin: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

`;
const Description = styled.span`
display : flex;
flex-direction : row;
justify-content : space-between;
`

export default function Movie(props) {
    const {Title, Year,  Type, Poster} = props.movie;
    return (
        <MovieContainer>
            <CoverImage src = {Poster == 'N/A'?"https://previews.123rf.com/images/ylivdesign/ylivdesign1211/ylivdesign121100088/16526995-blue-movie-logo-on-a-black-background.jpg":Poster} alt='no image available' />
            <Description>
            <Tittle>{Title}</Tittle>
            <span>Year: {Year}</span>
            <span >Type: {Type}</span>
            
            
            </Description>
            </MovieContainer>
    )
}
