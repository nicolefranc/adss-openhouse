import React, { useRef, useEffect } from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { TimelineLite, Power3 } from 'gsap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import bulb from '../assets/images/light-bulb.svg'
import LabContent from '../components/LabContent'

export const query = graphql`
  query($slug: String!) {
    contentfulLocation(slug: { eq: $slug }) {
      name
      description {
        description
      }
      tourLink
      images {
        fluid {
          src
        }
        title
      }
      didYouKnow
      slug
    }
  }
`;

const Location = ({ data }) => {
  // let titleBg = useRef(null);
  let title = useRef(null)
  // let paraBg = useRef(null)
  let para = useRef(null)
  let galleryNum = useRef(null)
  let galleryTitle = useRef(null)
  // let tourNum = useRef(null)
  // let tourTitle = useRef(null)

  // const tl = new TimelineLite()
  // const revealIn = { width: '100%', ease: Power3.easeInOut }
  // const revealOut = { width: 0, right: 0, ease: Power3.easeInOut}
  // const makeVisible = { css: { visibility: 'visible' }, ease: Power3.easeInOut }
  
  // useEffect(() => {
  //   tl.to([titleBg, paraBg], 1, revealIn)
  //     .to([title, para], 0, makeVisible)
  //     .to([titleBg, paraBg], 1, revealOut)
  //     // .from(galleryNum, 1, {
  //     //   height: 0,
  //     //   ease: Power3.easeInOut,
  //     //   delay: -1
  //     // })
  // }, [data])
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    adaptiveHeight: true,
    arrows: false
  }; 

  return (
    <Layout hasBack={true}>
      <section>
        <div>
          <div className="inline-block relative">
            <h1 ref={el => title = el}
              className="text-4xl md:text-6xl font-bold tracking-wide visible"> {/* was set to invisible */}
              {data.contentfulLocation.name}</h1>
             {/* <div ref={el => titleBg = el}
               className="w-0 h-full bg-gray-900 absolute bottom-0"></div> */}
          </div>
          <br/>
          <div className="w-full md:w-2/3 inline-block relative mt-8">
            { data.contentfulLocation.slug == 'laboratories'
                ? <LabContent />
                : <p ref={el => para = el} className="visible leading-8 tracking-wide"> {/* was set to invisible */}
                    {data.contentfulLocation.description.description}</p>
            }
            {/* <div ref={el => paraBg = el}
              className="w-0 h-full bg-gray-900 absolute bottom-0"></div> */}
          </div>
        </div>
        { data.contentfulLocation.didYouKnow != null && (
            <div className="mt-10 w-full md:w-2/3 px-4 py-6 shadow-lg flex items-start bg-gray-400 bg-opacity-75">
              <img src={bulb} alt="DYK!" className="w-8 h-8" />
              <div className="text-black ml-4">
                <h3 className="font-semibold uppercase">Did you know?</h3>
                <p>
                  {data.contentfulLocation.didYouKnow}
                </p>
              </div>
            </div>
        )}
      </section>
      <section>
        <h2 className="text-xl md:text-2xl mt-16 mb-8 lowercase tracking-wide font-semibold text-right">
          <span ref={el => galleryNum = el} className="text-md font-light h-64">01 </span>
          <span ref={el => galleryTitle = el}>Gallery</span>
        </h2>
        {/* <div className="hidden md:flex justify-end mb-20">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kH-fuB-zUznhBws7s14I4QHaE7%26pid%3DApi&f=1"
            className="object-cover" />
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kH-fuB-zUznhBws7s14I4QHaE7%26pid%3DApi&f=1"
            className="object-cover" />
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kH-fuB-zUznhBws7s14I4QHaE7%26pid%3DApi&f=1"
            className="object-cover" />
        </div> */}
        <div className="relative mb-20">
          <Slider {...settings}>
            {/* <div> */}
              { data.contentfulLocation.images.map(image => (
                // <div className="h-40 relative">
                  <img src={image.fluid.src} alt={image.title}
                    className="object-center h-72 object-contain" />
                // </div>
              )) }
            {/* </div> */}
          </Slider>
        </div>
        {/* <Carousel plugins={['arrows', 'infinite', 'clickToChange']}>
            { data.contentfulLocation.images.map(image => (
              <img src={image.fluid.src} alt={image.title} />
            )) }
        </Carousel> */}
      </section>
      <section>
        <h2 className="text-xl md:text-2xl mt-16 mb-8 lowercase tracking-wide font-semibold">
          <span className="text-md font-light">02 </span>
          <span className="">Tour</span>
        </h2>
        <div>
          <iframe
            width="100%"
            height="480px"
            title={data.contentfulLocation.name}
            // src="https://poly.google.com/view/eAG7QIXKPAU/embed?chrome=min"
            src={`${data.contentfulLocation.tourLink}/embed?chrome=min`}
            frameBorder="0"
            allowvr="yes"
            allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            onmousewheel=""
          ></iframe>
          {/* <iframe width="100%" height="480px" src="https://poly.google.com/view/eAG7QIXKPAU/embed?chrome=min" frameborder="0" style="border:none;" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe> */}
        </div>
      </section>
    </Layout>
  );
};

Location.propTypes = {
  data: propTypes.object.isRequired,
};
export default Location;
