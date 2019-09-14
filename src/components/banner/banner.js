import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/logo-lg.svg';  

class Banner extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <main className="main">
                <header className="menu">
                    <nav className="menu__container">
                        <input className="menu__container--checkbox" type="checkbox" id="menu-btn" />
                        <label className="menu__btn" htmlFor="menu-btn"><span className="menu__btn--navicon"></span></label>
                        <ul className="menu__navigation">
                            <li className="menu__navigation--item"><a href="#como-funciona" className="menu__navigation--link" data-scroll-to="como-funciona">Como funciona</a></li>
                            <li className="menu__navigation--item"><a href="#vantagens" className="menu__navigation--link" data-scroll-to="vantagens">Vantagens</a></li>
                        </ul>
                        <a href="#" className="btn menu__container--btn">Entrar</a>
                    </nav>
                </header>
                <section className="main__present">
                    <div className="main__text">
                          <div className="main__logo">
                               <img className="mb-2" role="logo" src={logo} alt="Logo mangobits" />
                          </div>

                          <div className="main__text-titles ml-5">  
                                <h3 className="text-left subtitle text-color--white">Inovação e tecnologia</h3>
                                <h3 className="text-left text-color--white">Buscando o novo e o melhor para você</h3>
                          </div>
                    </div>
                </section>
            </main>
        )
    }
}
 
export default Banner; 