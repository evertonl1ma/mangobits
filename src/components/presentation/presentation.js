import React from 'react';
import './style.css';
import focoUsuario from '../../assets/icon-foco-usuario.svg';  
import appsNativos from '../../assets/icon-app-nativos.svg';  
import experiencia from '../../assets/icon-experiencia.svg';  

const Presentation = () => (
    <section className="presentation text-color--white">
       <div className="presentation__container flex flex-wrap">
       <div className="presentation__item--main presentation__item">
            <p className="text-right ft-w-100 ft-g">
                Mais de<br /> 
                1.000.000 de pessoas<br />
                usam apps criados<br />
                pela MangoBits
            </p>
        </div>

        <div className="presentation__item flex flex-align-center">
            <i className="presentation__icone mr-2">
                <img src={focoUsuario} alt="Foco no usuário" />
            </i>
            <p className="text-right ft-p">
                Desenvolvimento ágil<br />
                com foco no usuário
            </p>
        </div>

        <div className="presentation__item flex flex-align-center">
            <i className="presentation__icone mr-2">
                <img src={appsNativos} alt="Apps nativos" />
            </i>

            <p className="text-right ft-p">
                Plataformas nativas<br />
                de última geração<br />
                para criar aplicativos
            </p>
        </div>

        <div className="presentation__item">
            <p className="text-right ft-p">
                Somos apaixonados<br />
                por tecnologia, por<br />
                isso sabemos o que<br />
                uma bom projeto deve<br />
                ter e o quão excelente<br />
                deve ser.
            </p>
        </div>

        <div className="presentation__item flex flex-align-center">
            <i className="presentation__icone mr-2">
                <img src={experiencia} alt="Experiência" />
            </i>

            <p className="text-right ft-p">
                Equipe com mais de<br />
                13 anos de experiência<br />
                com desenvolvimento<br />
                de software
            </p>
        </div>
       </div>
    </section>
)

export default Presentation;