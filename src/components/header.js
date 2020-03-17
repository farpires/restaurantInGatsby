import React from 'react';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {Link} from 'gatsby';
import Navegacion from '../components/nav';


const EnlaceHome = styled(Link)`
 color: #2a1000;
 text-align: center;
 text-decoration: none;

`;

const Header = () => {
    return ( 
       <header
       css={css`
           background-color: #ffbc01;
            padding: 1rem; 
       `}
       >
           <div
           css={css`
           max-width: 1200px;
           margin: 0 auto;
           
@media(min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: space-between;
}

           `}
           >
               <EnlaceHome to='/'>
               <h1>El Rincon de Buscaja</h1>
               </EnlaceHome>
             <Navegacion />
 
           </div>
       </header>
     );
}
 
export default Header; 