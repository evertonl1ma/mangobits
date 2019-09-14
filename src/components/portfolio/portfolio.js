import React from 'react';
import pidium from '../../assets/pidium.svg';
import apimentados from '../../assets/apimentados.svg';
import './style.css';

const Portfolio =  () => (
    <div className="portfolio">
        <div className="portfolio__container">
            <h3 className="h3 text-color--green text-left text-out">Nosso portfólio</h3>
            <div className="portfolio__item flex flex-align-center">
                <div className="portfolio__image">
                    <img src={pidium} alt="Pidium" />
                </div>
                <div className="portfolio__text">
                    <p className="text-color--white">
                        O Pidium é a maior 
                        plataforma de namoro
                        desenvolvida no Brasil.
                    </p>
                </div>
            </div>
            <div className="portfolio__item flex flex-align-center">
                 <div className="portfolio__text">
                    <p className="text-color--white">
                        Apimentados é uma
                        plataforma feita
                        exclusivamente para
                        atender demandas de
                        merchandising da
                        ChilliBeans.
                    </p>
                </div>
                <div className="portfolio__image">
                    <img src={apimentados} alt="Apimentados" />
                </div>
            </div>
        </div>
    </div>
)

export default Portfolio;