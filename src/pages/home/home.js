import React from 'react';
import Banner from '../../components/banner/banner';
import Presentation from '../../components/presentation/presentation';
import Intern from '../../components/intern/intern';
import Skills from '../../components/skills/skills';
import Portfolio from '../../components/portfolio/portfolio';
import HowWork from '../../components/how-work/how-work';
import Clients from '../../components/clients/clients';
import Footer from '../../components/footer/footer';

const Main = () => (
    <React.Fragment>
        <Banner logo="assets/logo2" />
        <Presentation />
        <Intern />
        <Skills />
        <Portfolio />
        <HowWork  />
        <Clients />
        <Footer />
        <br /><br /><br />
    </React.Fragment>
)

export default Main;