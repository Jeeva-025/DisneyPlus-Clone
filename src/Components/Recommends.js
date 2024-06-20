import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../disneyPlusMovies';

const Recommends = () => {

  const movie = Object.values(data.movies).slice(8, 12);
  console.log(movie);

  return (
    <Container>
      <h4>Recommend</h4>
      <Content>
        {movie &&
          movie.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  )
}

const Container=styled.div`
padding:0px 40px 20px;
`;

const Content =styled.div`
display:grid;
grid-gap:20px;
gap:25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap=styled.div`
padding-top:56.25%;
border-radius:10px;
overflow:hidden;
position:relative;
cursor:pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

img{
    position:absolute;
    object-fit:cover;
    height:100%;
    width:100%;
    inset:0px;
    display:block;
    z-index:1;
    top:0;
    opacity:1;
    transition: opacity 500ms ease-in-out 0s;
}
&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}`;


export default Recommends;