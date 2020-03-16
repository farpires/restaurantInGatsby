import React from "react";
import {css} from '@emotion/core';
import styled from '@emotion/styled'; 
import Layout from '../components/layout';
import ImagenRestaurante from '../components/imagenRestaurante';
import ContenidoInicio from '../components/contenidoInicio';
import PlatoPreview from '../components/platoPreview'
import UsePlatos from '../hooks/use-platos';

const ListadoPlatos = styled.ul`
max-width: 1200px;
width: 95%;
margin: 4rem auto 0rem auto; 

@media (min-width: 768px){
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem; 
}

`

const IndexPage = () => {
  const plato = UsePlatos();
  console.log(plato);
  
  return(
    <Layout>
       <ImagenRestaurante />
       <ContenidoInicio/>
       <h2
       css={css`
       text-align: center;
       margin-top: 5rem;
       font-size: 3rem;
       `}
       >Nuestros Platos</h2>

      <ListadoPlatos>
        {plato.map(plato =>(
          <PlatoPreview 
            key={plato.id}
            plato={plato}
          />
        ))};
      </ListadoPlatos>
 
    </Layout>
  )

}

export default IndexPage
