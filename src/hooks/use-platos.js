import {graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsPlato{
        nodes{
          titulo
          id
          slug
          contenido
          imagen{
            fluid(maxWidth:1200){
              ...GatsbyDatoCmsFluid
            }
          }
        }
        
        }
      }
    `);
    // console.log(data);
    return data.allDatoCmsPlato.nodes.map(plato => ({

        titulo: plato.titulo,
        id: plato.id,
        contenido: plato.contenido,
        imagen: plato.imagen,
        slug: plato.slug,

    }));
    
}
 
export default useHabitaciones;