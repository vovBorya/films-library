import styled from "styled-components";
import React from "react";

const GridItem = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 220px;
`

type Props = {
    item: IFilm
}

const Comp: React.FC<Props> = ({item}) => (
    <GridItem>
        <PosterImg
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
            alt={item.original_title}
        />
        <p>item: {item.original_title}</p>
    </GridItem>
);

export default Comp;
