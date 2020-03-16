import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Imagen from 'gatsby-image';

import styled from '@emotion/styled';
import {css} from '@emotion/core';


const TextoInicio = styled.div`
padding-top: 4rem;
max-width:1500px;
width: 75%;
margin: 0px auto; 

@media (min-width: 768px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    /* grid-template-columns: 2fr, 1fr; */
    column-gap: 2rem;
}

p{
    line-height: 2;
    margin-top: 2rem;
}


`;


const ContenidoInicio = () => {
  const informacion = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq:"inicio"}}){
      nodes{
            titulo
        contenido
        imagen{
          fluid{
           ...GatsbyDatoCmsFluid 
          }
        }
        
      }
      }
      }
      
    `);
    // console.log(informacion.allDatoCmsPagina.nodes[0]);
    const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];
    // console.log(imagen.fluid)
    return (
    <>
      <h2
      css={css`
      text-align: center;
      font-size: 4rem;
      margin-top: 4rem; 
      `}
      >{titulo}</h2>
      <TextoInicio>
          <p>{contenido}</p>
          <Imagen fluid={imagen.fluid}/>
      </TextoInicio>

    </>
  )
}

export default ContenidoInicio
