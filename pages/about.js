import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | commerce</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                The Fablets Story
              </h2>
              <h4 className="font-size-subheader mb-4">
                Fablets began as an idea born from one of the most common household problems parents face: brushing teeth. Reminding, follow-up, and then cleaning up the toothpaste mess afterwards. Fablets was started by two BYU EMBA graduates during the latter end of their program. As time went on they saw the impact this product could have in the everyday American household. Parents loved it. Kids loved it. And the rest was history.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/images/toothbrush-1.jpg" alt="Fablets origin story"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </Root>
);

export default About;
