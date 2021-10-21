import React, {ReactNode} from "react";
import styled from "styled-components";

import GridItem from "./GridItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  row-gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

type Props = {
    list: IFilm[],
    renderItemCb?: (item: IFilm) => ReactNode
};

const defaultRenderItemCb = (item: IFilm) => (
    <GridItem key={item.id} {...{item}} />
);

const Comp: React.FC<Props> = ({ list, renderItemCb= defaultRenderItemCb }) => {
    return (
        <Grid>
            {list.map(renderItemCb)}
        </Grid>
    );
};


export default Comp;