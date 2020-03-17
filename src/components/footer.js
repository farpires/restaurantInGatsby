import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Navegacion from "../components/nav"

const EnlaceHome = styled(Link)`
  color: #2a1000;
  text-align: center;
  text-decoration: none;
`

const Footer = ({title}) => {
    const year = new Date().getFullYear();
  return (
      <>
    <footer
      css={css`
        background-color: rgba(44,62,81 );
        margin-top: 5rem;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Navegacion />
        <EnlaceHome to="/">
          <h1>El Rincon de Buscaja</h1>
        </EnlaceHome>
      </div>
    </footer>
        <p 
        css={css`
        text-align: center;
        color:#fff;
        background-color: rgba(44,62,81 );
        margin: 0;
        padding: 1rem;
        `}
        >Restauran Gatsby - {title} - Todos los derechos reservados {year}&copy;</p>
    </> 
  )
}

export default Footer
