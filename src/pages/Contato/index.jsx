import '../Contato/Contato.modules.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Contato() {
    return (
        <>
            <Header/>

            <MainContainer>
                <div className="main-cont">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="contact">
                            <h1>Contato</h1>
                            <br/>
                            <h2>Procuro novas oportunidade para demonstrar meu valor e desempenho. Procuro por vagas de estágio para Desenvolvedor Web Front-end em React.js.</h2>
                        </div>
                        <div className='contact-img'>
                            <img src="../../src/assets/img-contato.png" alt="Contato" />
                        </div>
                    </Fade>
                </div>
                <div className='cont-contato'>
                    <Fade bottom duration={2000} distance="40px">
                        <form className='cont-form'>
                            <div className='formulario'>
                                <div className='form'>
                                    <label htmlFor="">Nome</label>
                                    <input type="text" id='nome' className='nome' placeholder='Seu Nome' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="">Email</label>
                                    <input type="email" id='email' className='email' placeholder='seunome@email.com' />
                                </div>
                                <div className='form'>
                                    <label htmlFor="">Mensagem</label>
                                    <textarea type="text" name="mensagem" id="mensagem" className='mensagem' placeholder='Sua mensagem'></textarea>
                                </div>
                            </div>
                        </form>
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}