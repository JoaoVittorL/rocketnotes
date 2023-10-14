import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.5625rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style-type: none;
  list-style: none;

  > li {
    margin-top: 0.75rem;

    a {
      color: inherit;
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 1rem;
    margin-top: 1rem;
    text-align: justify;
  }
`;
