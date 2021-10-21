import React, {useContext} from "react";
import styled from "styled-components";

import {Context} from "../../context";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: blue;
`;

const Comp: React.FC = () => {
    const {pageCursor} = useContext(Context);

    return(
        <Header>
            <h3>Current page: {pageCursor}</h3>
        </Header>
    );
}

export default Comp;