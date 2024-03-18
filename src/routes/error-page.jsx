import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return(
        <Container>
            <Title>Oops!</Title>
            <Subtitle>Sorry, an unexpected error has occurred.</Subtitle>
            <Error>
                <i>{error.statusText || error.message}</i>
            </Error>
        </Container>
    );
}

const Error = styled.p`
    font-size: 1.2rem;
`;

const Subtitle = styled.p`
    font-size: 1.3rem;
`;

const Title = styled.h3`
    font-size: 3rem;
`;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    color: black;
`;