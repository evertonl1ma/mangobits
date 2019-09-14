import React from 'react';
import './style.css';
import bradesco from '../../assets/bradesco.svg';
import brasaosp from '../../assets/brasaosp.svg';
import chillibeans2 from '../../assets/chillibeans2.svg';
import plbrasil from '../../assets/plbrasil.svg';
import fanex from '../../assets/fanex.svg';


const Clients = () => (

    <div className="clients">
        <div className="clients__container flex flex-align-center">
            <div className="clients__text align-self-end">
                <p className="">
                    Alguns clientes
                </p>
            </div>

            <div className="clients__list flex flex-align-center">
                <div className="client">
                    <img className="" src={bradesco} />
                </div>

                <div className="client">
                    <img className="" src={brasaosp} />
                </div>

                <div className="client">
                    <img className="" src={plbrasil} />
                </div>

                <div className="client">
                    <img className="" src={chillibeans2} />
                </div>

                <div className="client">
                    <img className="" src={fanex} />
                </div>
            </div>
        </div>
    </div>
)

export default Clients;