import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby';

// const Container = styled.ul`
//   display: flex;
//   justify-content: center;
//   padding-left: 0;
//   margin-block: 40px;
// `

// const MenuItem = styled(Link)`
//   font-family: "Ubuntu";
//   font-size: 18px;
//   padding: 10px 25px;
//   text-decoration: none;
//   // background-color: #1583D8;
//   color: #1583d8;
//   border: 2px solid #1583d8;
//   border-right: none;

//   :first-child {
//     border-radius: 5px 0 0 5px;
//   }

//   :last-child {
//     border-right: 2px solid #1583d8;
//     border-radius: 0 5px 5px 0;
//   }

//   :hover {
//     background-color: #1583d8;
//     color: #fff;
//   }
// `

const LocationMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLocation(sort: { order: ASC, fields: name }) {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allContentfulLocation.edges.map((edge) => (
        <Link key={edge.node.id} to={`/explore/${edge.node.slug}`}>
          {edge.node.name}
        </Link>
      ))}
    </div>
  );
};

export default LocationMenu;
