import React from 'react';
import './style.css';
import suitecase from '../../assets/suitcase.svg';
import lightBub from '../../assets/light-bulb.svg';    
import endomango from '../../assets/endomango-logo.png';    
import startupkit from '../../assets/startupkit.svg';
import mangofy from '../../assets/mangofy.svg';

const Intern = () => (
    <div className="intern">
      <div className="intern__container">
      <div className="actions flex flex-justify-center pt-5">
            <button className="btn btn-lg btn-intern flex flex-align-center mr-2">
                <img  className="mr-2" src={suitecase} alt="" />
               <span><span className="text-color--green">Ver</span> Soluções corporativas<br /> e empresariais</span>
            </button>

            <button className="btn btn-lg btn-intern flex flex-align-center">
               <img  className="mr-2" src={lightBub} alt="" />
               <span><span className="text-color--green">Ver</span> Soluções pessoais<br /> e para startups</span>
            </button>
        </div>

        <div className="intern__projects">
            <div className="intern__projects-container">
                <div className="project flex">
                    <div className="project__image">
                        <img width={250} src={endomango} alt="Endomango" />
                    </div>
                    <div className="project__text">
                        <p className="text-left project__paragraph text-color--white">
                            Para empresass de varejo que<br />
                            querem criar uma loja virtual, o<br />
                            EndoMango é uma plataforma de ecommerce que<br />
                            oferece as melhores experiências<br />
                            de consumo para seus<br />
                            consumidores
                        </p>

                        <button className="btn btn-intern bg-project">
                            Saiba mais
                        </button>
                    </div>
                </div>

                <div className="project flex">
                    <div className="project__image">
                        <img width={300} src={startupkit} alt="Startup kit" />
                    </div>
                    <div className="project__text">
                        <p className="text-left project__paragraph text-color--white">
                           Com o startupkit você reduz em até 60% o custo de um projeto<br />
                           elvolvendo backend através de várias implementações de negócio<br />
                           pronta, diminuindo drasticamente o custo de implementação do<br />
                           projeto.
                        </p>

                        <button className="btn btn-intern bg-project">
                            Saiba mais
                        </button>
                    </div>
                </div>

                <div className="project flex">
                    <div className="project__text">
                        <p className="text-right project__paragraph text-color--white">
                           Com o Mangofy todos os<br />
                           produtos estão em um só lugar,<br />
                           uma experiência única em suas<br />
                           compras
                        </p>

                        <button className="btn btn-intern bg-project">
                            Saiba mais
                        </button>
                    </div>

                    <div className="project__image">
                        <img width={320} src={mangofy} alt="Mangofy" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
)

export default Intern;