import styled from "styled-components";
import React, {useContext, useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";

import Grid from "../../components/Grid";

import apiProvider from "../../api/apiProvider";
import {useIntersection} from "../../utils/hooks";
import {Context} from "../../context";

const Trending = styled.div`
    margin: 70px 0;
`;

const LoadMore = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 60px;
  background-color: rgba(0, 0, 0, .1);
`;

const Text = styled.p`
  margin: 0 auto;
`

interface RouteParams {
    page: string
}

const Comp: React.FC = () => {

    const {pageCursor, setPageCursor} = useContext(Context);

    const [films, setFilms] = useState<IFilm[] | unknown>([]);

    const loadMoreRef = useRef<HTMLDivElement>(null);

    useIntersection(loadMoreRef, async (isVisible) => {
        console.log({isVisible});

        // @ts-ignore
        if (!(isVisible && films.length)) return;

        const newFilms = await apiProvider.getTrendingFilms(pageCursor + 1);

        if (films && newFilms ) {
            // @ts-ignore
            setFilms([...films, ...newFilms]);
        }
        setPageCursor(pageCursor + 1);
    });

    const params = useParams<RouteParams>();

    useEffect(() => {
        (async () => {
            const films = await apiProvider.getTrendingFilms(+params.page ?? 1);

            setFilms(films);
        })();
    }, [params.page]);


    return (
        <Trending>
            {/* @ts-ignore*/}
            <Grid list={films} />
            <LoadMore ref={loadMoreRef}>
                <Text>
                    Loading...
                </Text>
            </LoadMore>
        </Trending>
    );
};

export default Comp;
