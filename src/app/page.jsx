import Image from 'next/image';
import 'css/page.module.css';

import SocialBar from 'components/SocialBar';
import UpcomingEvent from 'components/UpcomingEvent';

import IntroGraphic from "/public/assets/images/IntroGraphic.svg";
import AboutGraphic from "/public/assets/images/AboutGraphic.svg";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Featured />
    </>
  )
}

const Intro = () => {
  return (
    <div className='d-flex flex-row' id='intro-div'>
      <SocialBar />
      <div className="d-flex flex-column col-11 col-lg-4 justify-content-center ps-3 pe-4 py-3">
        <h1 className='intro-heading'>Open Source Dev<span className="d-none d-md-inline">elopers</span> Group</h1>
        <span className='my-3' />
        <p className='intro-text'>Hi! We&apos;re OSDG. We like to make stuff, break stuff, and learn new things, which is especially fun when we do it together!</p>
      </div>
      <div className="d-none d-lg-flex flex-column col-7 p-5 justify-content-center">
        <Image src={IntroGraphic} alt="Intro Graphic" className='img-fluid' />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <div className='d-flex flex-column p-5' id='about-div'>
      <h2 className='about-heading text-center mb-5'>About Us</h2>
      <div className="d-flex flex-row justify-content-evenly my-5">
        <div className="d-none d-md-flex flex-column col-2 col-md-3 justify-content-center align-items-center">
          <Image src={AboutGraphic} alt="About Graphic" className='img-fluid' />
        </div>
        <div className="d-flex flex-column col-12 col-md-5 justify-content-center">
          <h6 className='about-text my-3'>The Open Source Developers Group at IIIT Hyderabad is dedicated to helping student developers improve their skills and contribute to the open-source community in a multitude of ways. Officially, it falls under the Center for Open Source at IIIT-H and is a completely student-run organisation.</h6>
          <h6 className="about-text my-3">The institution is known for actively participating in global programs like the Google Summer of Code, and we at OSDG are dedicated to encouraging more involvement in such areas. The group also hosts several of its own initiatives, like community projects and seminars, to help cultivate the open-source culture in the student community.</h6>
        </div>
      </div>
    </div>
  );
}

const Featured = () => {
  return (
    <div className='d-flex flex-column py-5' id='featured-div'>
      <h2 className='featured-heading text-center mb-5'>Featured</h2>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center" style={{ overflowX: 'hidden' }}>
        <div className="d-flex flex-column align-items-center col-10 col-lg-3 px-4 featured-sub-heading">
          <h4 className='mb-4'>Upcoming Event</h4>
          <UpcomingEvent eventData={{ image: "https://i.pinimg.com/474x/77/0c/e5/770ce5db197bf1cdf239e49757666480.jpg", title: "Intro to Linux", description: "A beginner friendly introduction to Linux Based Operating Systems for first time users." }} />
        </div>
        {/* <div className="d-flex flex-column align-items-center col-10 col-lg-6 col-xl-5 px-4 featured-sub-heading m-3">
            <h4 className='mb-4'>Featured Instagram Post</h4>
            // <InstagramPost postData={postData} />
          </div> */}
      </div>
    </div>
  );
}
