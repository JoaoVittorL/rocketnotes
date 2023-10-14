# React + Vite

O componte pode retornar somente um elemento por exemplo dentro de uma <div></div> ou com fragment<></>

Evolução do css

CSS1 - CSS2 - CSS3

Pré processadores

Facilita a mnutençõa do código, ajuda a escreve um código mais limpo e organizado utilizando vários arquivos para separar os código e realizando a importação quando for necessário tornando os códigos CSS mais flexíveis e reutilizáveis.

Possui recursos, como por exmplo, de minificar arquivos.

Styled Components

Escreve css em JS, aproveitar todos os recursos do js

Criadno os estilos globais que vai compartilha com toda a aplicação

FORMA DE COLOCAR CORES COMO VARIAVES

export default {
COLORS: {
BACKGROUND_900: "#232129",
BACKGROUND_800: "#312E38",
BACKGROUND_700: "#3E3B47",

    WHITE: "#F4ED38",
    ORANGE: "#FF9000",

    GRAY_100: "#999591",
    GRAY_300: "#666360",

    RED: "#FF002E"

},
};

Adicionou em details as tags Main e Content:
Para que fosse viável a implantação do hover

> main {

    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;

}

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

Overflow-y garente o srrol somente no componente

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
