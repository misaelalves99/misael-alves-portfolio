import '../Experiencia/Experiencia.modules.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Experiencia() {
    return (
        <>
            <Header/>

            <MainContainer>
                <div className="main-cont">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="experiencia">
                            <h1>Experiência</h1>
                            <br/>
                            <h2>Procuro novas oportunidade para demonstrar meu valor e desempenho. Procuro por vagas de estágio para Desenvolvedor Web Front-end em React.js.</h2>
                        </div>
                        <div className='experiencia-img'>
                            <img src="../../src/assets/img-experiencia.png" alt="Experiência" />
                        </div>
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}