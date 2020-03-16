import React from "react";
import Image from 'gatsby-image';
import {css} from '@emotion/core';
import styled from  '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
margin-top: 2rem;
padding: 1rem;
background-color: rgba(44,62,80,.85);
width: 100%;
color: #FFF;
display: block;
text-decoration: none;
text-transform: uppercase;
font-weight: 700;
text-align:center;
`;

const HabitacionPreview = ({ plato }) => {

  const { contenido, imagen, titulo, slug } = plato

  return (<div
            css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
            `}
  >
        <Image
        fluid={imagen.fluid}
        />
            <div
            css={css`
            padding: 3rem;
            `}
            >
                <h3
                css={css`
                    font-size: 2.7rem;
                `}
                >{titulo}</h3>
                <p>{contenido}</p>
                <Boton to={slug}>Ver Plato del dia</Boton>

            </div>
         </div>
         )

}

export default HabitacionPreview
