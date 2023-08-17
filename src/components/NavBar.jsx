'use client';
import Image from 'next/image';
import BrandLogo from "/public/assets/images/BrandLogo.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid py-2">
                <Image src={BrandLogo} alt="OSDG" height={30} className='ps-0 m-1' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-link ms-3 active" style={{fontSize: '15px'}}>Home</a>
                        <a href="/projects" className="nav-link ms-3 active" style={{fontSize: '15px'}}>Projects</a>
                        <a href="/events" className="nav-link ms-3 active" style={{fontSize: '15px'}}>Events</a>
                        <a href="/team" className="nav-link ms-3 active" style={{fontSize: '15px'}}>Team</a>
                        {/* <Link href="/#contact-form-scroll-point"><button className=" btn-custom ms-3 px-3 pt-1">Contact Us</button></Link> */}
                    </div>
                </div>
            </div >
        </nav >
    );
};

export default NavBar;