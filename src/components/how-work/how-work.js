import React from 'react';
import './style.css';
import ideia from '../../assets/ideia.svg';
import recomendado from '../../assets/recomendado.svg';
import book from '../../assets/book.svg';

const HowWork = () => (
    <div className="howWork">
        <div className="howWork__container">
            <div className="howWork__header flex flex-align-center">
                <div className="howWork__title">
                     <h3 className="h2 text-color--green text-truncate">Como funciona?</h3>
                </div>
               <div className="howWork__header-text">
                   <p className="">
                        Nosso modelo de negócio foi pensado em uma
                        forma de contato próxima, para conseguir
                        entender e atender exatamente o que você
                        necessita.
                    </p>
               </div>
            </div>

            <div className="howWork__feels flex">
                <div className="feel-card">
                    <div className="feel-card__header">
                        <img className="mt-2" src={ideia} alt="" />
                        <p className="text-color--green">Entendemos<br /> a Sua necessidade</p>
                    </div>
                    <div className="feel-card__body">
                        <p className="">
                            Desde a primeira reunião
                            entendemos e adaptamos
                            a sua necessidade nas
                            melhores soluções, seja
                            para aplicativos, hardwares
                            ou softwares.
                        </p>
                    </div>
                </div>

                <div className="feel-card">
                    <div className="feel-card__header">
                        <img className="mt-2" src={book} alt="" />
                        <p className="text-color--green">Você sempre<br /> Junto com o Projeto</p>
                    </div>
                    <div className="feel-card__body">
                        <p className="">
                            Fazemos entregas
                            constantes para você
                            sempre acompanhar a
                            evolução do projeto.
                        </p>
                    </div>
                </div>

                <div className="feel-card">
                    <div className="feel-card__header">
                        <img className="mt-2" src={recomendado} alt="" />
                        <p className="text-color--green">Qualidade Garantida</p>
                    </div>
                    <div className="feel-card__body">
                        <p className="">
                            O resultado desse processo é um
                            aplicativo bonito, robusto e
                            preparado para alavancar
                            o seu negócio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HowWork;  