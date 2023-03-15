import { useRouteError } from "react-router-dom";
import styled from "styled-components";

export const Error = () => {
  const error = useRouteError();
  console.error(error);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `;

  const isError = (err: unknown): err is Error => err instanceof Error;

  return (
    <Container>
      <>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error && isError(error) && (
          <p>
            <i>{error.message}</i>
          </p>
        )}
      </>
    </Container>
  );
};
