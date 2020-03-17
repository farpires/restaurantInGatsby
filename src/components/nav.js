import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
 display: flex;
 justify-content: center;
 padding-bottom: 3rem;
 @media (min-width: 768px){
     padding-bottom: 0;

 }

`;
const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'Source Code Pro', sans-serif;
    text-decoration: none;
    padding: 1rem;



`;
const Navegacion = () => {
    return ( 
     <Nav>
         <NavLink to={'/'}>Inicio</NavLink>
         <NavLink to={'/nosotros'}>Nosotros</NavLink>
         {/* <NavLink to={'/carta'}>Carta</NavLink> */}
         <NavLink to={'/ubicacion'}>Ubicanos</NavLink>
         {/* <NavLink to={'/contacto_y_reservas'}>Contacto y reserva</NavLink> */}

     </Nav>
     );
}
 
export default Navegacion; 