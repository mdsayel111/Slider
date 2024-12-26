'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import './OurTeamMembers.css';

import Title from '@/partials/elements/Title';
import Container from '@/partials/layouts/Container';
import { createRef, useState } from 'react';
import NextAndPrevButton from '@/partials/elements/NextAndPrevButton';
import { IMAGE_SPACES_URL } from '@/utils/APIS/websiteContentApi/websiteContentApi';

const OurTeamMembers = ({ data }) => {
  // const images = [
  //   {
  //     img: '/profile-img-1.png',
  //     title: 'Hossein Profile1',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-2.png',
  //     title: 'Hossein Profile2',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-3.png',
  //     title: 'Hossein Profile3',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-4.png',
  //     title: 'Hossein Profile4',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-5.png',
  //     title: 'Hossein Profile5',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-6.png',
  //     title: 'Hossein Profile6',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  //   {
  //     img: '/profile-img-7.png',
  //     title: 'Hossein Profile7',
  //     title2: 'Vice President',
  //     details:
  //       'Lorem ipsum dolor sit amet consectetur.Eyes Egestas quis tincidunt nibh sed nisl. Nisl mattis fermentum et lacus volutpat. Tellus elementum aliquet consectetur ullamcorper a neque lectus. Nec non mattis enim nibh amet velit phasellus. Molestie amet urna fringilla purus.',
  //   },
  // ];

  // Set the initial slide to the first image
  const [centerSlideData, setCenterSlideData] = useState(data[0]);
  const sliderRef = createRef();

  const settings = {
    centerMode: true,
    centerPadding: '20px', // Adds space around the center slide
    variableWidth: false,
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    arrows: true,
    dots: false,
    afterChange: (current) => {
      setCenterSlideData(data[current]);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          centerPadding: '30px', // Adjust padding for larger screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: '15px',
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          centerPadding: '10px',
        },
      },
    ],
  };

  return (
    <div id='team'>
      <Container className={'my-8 lg:my-24'}>
        <Title text={'Our Team'} />
      </Container>
      <div className='team-min-div'>
        {/* Display the current center slide image */}
        {/* Display center slide data */}
        {centerSlideData && (
          <div className='center-slide-data'>
            <Image
              className='object-contain'
              src={IMAGE_SPACES_URL + centerSlideData.image}
              alt='Center Slide'
              width={1000}
              height={1000}
            />
            <h1 className='name'>{centerSlideData?.name}</h1>
            <div className='linear-bg'></div>
          </div>
        )}
        <div className='team-slider'>
          <div
            className={`blogCarousel`}
            style={{
              backgroundImage: `url('/Vector 38.png')`,
              backgroundSize: '100% auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className='center-slider'>
              <div className='center-slider-contant'>
                <Image
                  src={IMAGE_SPACES_URL + centerSlideData.image}
                  alt='Center Slide'
                  width={1000}
                  height={1000}
                  className='object-contain active-center-img'
                />
                <div className='active-slider'>
                  <div className='user-info'>
                    <h1 className='title'>{centerSlideData?.name}</h1>
                    <p className='title2'>{centerSlideData?.designation}</p>
                  </div>
                  <p className='details'>{centerSlideData?.description}</p>
                  <NextAndPrevButton
                    style={{ color: 'black', bottom: '4%' }}
                    handlePrev={() => sliderRef.current?.slickPrev()}
                    handleNext={() => sliderRef.current?.slickNext()}
                  />
                </div>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {data.map((src, index) => (
                <div key={index} className={`blogPostBox`}>
                  <div className={`blogPostImage`}>
                    <Image
                      src={IMAGE_SPACES_URL + src?.image}
                      alt={`Blog Post ${index + 1}`}
                      width={1000}
                      height={1000}
                      className='object-contain h-full w-fit slider-img'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamMembers;
