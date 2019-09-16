import React from 'react';
import './style.css';

import iconApps from '../../assets/icon-apps.svg';
import java from '../../assets/icon-coffe.svg';
import intelectual from '../../assets/icon-intelectual.svg';

const Skills = () => (
    <div className="skills">
        <div className="skills__container">
            <div className="skill flex">
                <div className="skill__image">
                    <img src={iconApps}  alt="Ícone de apps" />
                </div>
                <div className="skill__text text-left">
                    <h4 className="h4">Plataformas nativas</h4>

                    <p className="">
                        As plataformas nativas trazem uma imensa vantagem,<br />
                        garantindo grande performance e aumentando a boa<br />
                        experiência do usuário.
                    </p>
                </div>
            </div>

            <div className="skill flex">
                <div className="skill__text text-left order-2-sm">
                    <h4 className="h4">Sua Nuvem com Java</h4>

                    <p className="">
                        O Java traz uma poderosa plataforma capaz de garantir um <br />
                        sistema rápido e com segurança mesmo com o crescimento <br />
                        exponecial do seu app.
                    </p>
                </div>

                <div className="skill__image order-1-sm">
                    <img src={java} alt=""  alt="Ícone do Java" />
                </div>
            </div>

            <div className="skill flex">
                <div className="skill__image">
                    <img src={intelectual} alt=""  alt="Ícone de uma mão segurando um cérebro" />
                </div>
                <div className="skill__text text-left">
                    <h4 className="h4">Seu Projeto com os Melhores Experts</h4>

                    <p className="">
                       Temos mais de 12 anos de experiência no<br />
                       desenvolvimento Mobile/Web.
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Skills;