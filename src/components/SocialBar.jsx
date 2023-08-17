'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialBar = () => {
    return (
        <div className="d-flex flex-column col-1 justify-content-center align-items-center ps-2">
            <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.facebook.com/groups/185567594878116', '_blank') }}><FontAwesomeIcon icon={faFacebook} /></h2>
            <h2 className='mx-2 social-link' onClick={() => { window.open('https://github.com/OSDG-IIITH', '_blank') }}><FontAwesomeIcon icon={faGithub} /></h2>
            <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.linkedin.com/company/74330374', '_blank') }}><FontAwesomeIcon icon={faLinkedin} /></h2>
            <h2 className='mx-2 social-link' onClick={() => { window.open('https://www.instagram.com/osdg.iiith', '_blank') }}><FontAwesomeIcon icon={faInstagram} /></h2>
        </div>
    );

};

export default SocialBar;