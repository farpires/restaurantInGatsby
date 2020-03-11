import React from 'react';
import {css} from '@emotion/core';
import Navegacion from '../components/nav'
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
               <h1
               css={css`
               	color: #2a1000;
                text-align: center;

               `}
               
               >Restaurante Gatsby</h1>
             <Navegacion />
              
           </div>
       </header>
     );
}
 
export default Header;