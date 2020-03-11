import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
        height: 700px;

 `;
const TextoImagen = styled.div`
background-image: linear-gradient( to top, rgba(34,49,63,.3),rgba(34,49,63,.3));
color: #FFF;
height:100%;
display:flex;
flex-direction: column;
flex: 1;
align-items: center;
justify-content: center; 

h1{
    font-size: 3rem;
    margin: 0%;
    @media (min-width: 992px) {
        font-size: 5.8rem;
    }
}
p{
    font-size: 2rem;
    @media (min-width: 992px) {
        font-size: 2.2em;
    }
}

`;
const ImagenRestaurante = () => {
   
    const {image}= useStaticQuery(graphql`
    query{
        image: file(relativePath: {eq: "8.jpg"}) {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    // console.log(image) 
    
    return ( 
          
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" >
            <TextoImagen>
                <h1>Bienvenido a resturante gatsby</h1>
                <p>El mejor resturante para tus vacaciones</p>
            </TextoImagen>

          </ImageBackground>
     );
}
 
export default ImagenRestaurante;