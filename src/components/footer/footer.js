import React from 'react';
import './style.css';
import logo from '../../assets/logo-mangobits.svg';

const Footer = () => (
    <React.Fragment>
        <div className="footer-section">
        <div className="contact">
            <div className="contact__container flex">
                <div className="contact__title">
                    <p className="text-color--white">
                        Entre em contato conosco!
                    </p>
                </div>
                <div className="contact__text">
                    <p className="text-color--green">hello@mangobits.com</p>
                    <p className="text-color--green">+ 55 11 97179-6556</p>
                    <p className="text-color--green">uebi_belli</p>
                </div>
            </div>
        </div>
    </div>

    <footer className="footer flex">
          <img src={logo} />
          <p className="text-footer text-color--white">2019 - Direito reservados</p>
    </footer>
    </React.Fragment>
)

export default Footer;