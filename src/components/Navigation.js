import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import gsap from 'gsap';

// const Navbar = styled.nav`
//   background-color: #fbfbfb;
//   padding: 20px 0;
// `

// const MaxWidth = styled.div`
//   // max-width: 960px;
//   max-width: 1024px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const Logo = styled(Link)`
//   font-family: "Ubuntu";
//   font-size: 18px;
//   color: #000;
//   text-decoration: none;
// `

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
// `

// const NavItem = styled(Link)`
//   margin-left: 35px;
//   font-family: "Ubuntu";
//   font-size: 16px;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   color: #000;
//   text-decoration: none;
// `

const Navigation = ({ state }) => {
  let navRef = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let listRef = useRef(null);

  useEffect(() => {
    // console.log(state.clicked);
    if (state.clicked === false) {
      // navRef.style.display = 'none';
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(navRef, {
        duration: 1,
        css: { display: 'none' },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(navRef, {
        duration: 1,
        css: { display: 'block' },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(listRef);
      // staggerText(listRef);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1,
      },
    });
  };

  const fadeInUp = node => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.3,
      opacity: 0,
      ease: 'power3.inOut',
    });
  };

  const staggerText = node => {
    gsap.from(node, {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.5,
      },
    });
  };

  const handleHover = e => {
    console.log('enter');
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut',
    });
  };

  const handleHoverExit = e => {
    console.log('exit');
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut',
    });
  };

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
    <div
      ref={el => (navRef = el)}
      style={{ display: 'none' }}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10"
    >
      <div
        ref={el => (revealMenuBackground = el)}
        className="bg-black fixed top-0 left-0 right-0 bottom-0 w-full h-full -z-1"
      />
      <div
        ref={el => (revealMenu = el)}
        className="bg-blue-700 h-full overflow-hidden"
      >
        <div className="h-full max-w-6xl mx-auto px-8 xl:px-0 relative">
          <nav className="w-full h-full flex items-center">
            <ul
              ref={el => (listRef = el)}
              className="w-full h-full text-white text-3xl md:text-6xl font-extrabold tracking-wide"
            >
              {data.allContentfulLocation.edges.map(edge => (
                <li
                  key={edge.node.id}
                  ref={el => (edge.node.id = el)}
                  className="first:mt-24 h-16 md:h-32 relative"
                  // onMouseEnter={e => handleHover(e)}
                  // onMouseOut={e => handleHoverExit(e)}
                >
                  <Link
                    to={`/explore/${edge.node.slug}`}
                    onMouseEnter={handleHover}
                    onMouseOut={handleHoverExit}
                    className="hover:text-black absolute h-full"
                  >
                    {edge.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
    // <Navbar>
    //   <MaxWidth>
    //     <Logo to="/">ADSS Open House 2020</Logo>
    //     <NavList>
    //       <NavItem to="/">Home</NavItem>
    //       <NavItem to="/explore">Explore</NavItem>
    //       <NavItem to="/mission">Mission</NavItem>
    //     </NavList>
    //   </MaxWidth>
    // </Navbar>
  );
};

Navigation.propTypes = {
  state: propTypes.object.isRequired,
};

export default Navigation;
