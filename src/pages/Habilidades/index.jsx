import '../Habilidades/Habilidades.modules.css';
import { FaHtml5, FaCss3Alt, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine, RiNextjsLine } from "react-icons/ri";
import { SiMui, SiReactrouter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiIllustrator } from "react-icons/di";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

export default function Habilidades() {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-container-hab'>
                    <div className="main-cont">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="habilidades">
                                <h1>Habilidades</h1>
                                <br/>
                                <h2>Essas são as minhas habilidades como Desenvolvedor Web Front-end.</h2>
                            </div>
                            <div className='habilidades-img'>
                                <img src="../../src/assets/img-habilidades.png" alt="Habilidades" />
                            </div>
                        </Fade> 
                    </div>
                    {/* Linguagens */}
                    <div className='ferramentas'>
                        <Fade bottom duration={2000} distance="40px">
                            <div className='titulo'>
                                <h2>Linguagens</h2>
                                <br/>
                            </div>
                            <div className='cards-ferr'>
                                <div className='c-ferr'>
                                    <FaHtml5 className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <FaCss3Alt className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <IoLogoJavascript className='icon-fe' />
                                </div>
                                {/* <div className='c-ferr'>
                                    
                                </div> */}
                            </div>
                        </Fade>
                    </div>
                    <div className='ferramentas'>
                        <Fade bottom duration={2000} distance="40px">
                            <div className='titulo'>
                                <h2>Bibliotecas e Frameworks</h2>
                                <br/>
                            </div>
                            <div className='cards-ferr'>
                                <div className='c-ferr'>
                                    <FaReact className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <RiTailwindCssLine className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <SiMui className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <FaNpm className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <RiNextjsLine className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <SiReactrouter className='icon-fe' />
                                </div>
                                {/* <div className='c-ferr'>
                                    
                                </div> */}
                                {/* <div className='c-ferr'>
                                    
                                </div> */}
                            </div>
                        </Fade>
                    </div>
                    <div className='ferramentas'>
                        <Fade bottom duration={2000} distance="40px">
                            <div className='titulo'>
                                <h2>Ferramentas e Plataformas </h2>
                                <br/>
                            </div>
                            <div className='cards-ferr'>
                                <div className='c-ferr'>
                                    <VscVscode className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <DiIllustrator className='icon-fe' />
                                </div>
                                <div className='c-ferr'>
                                    <FaFigma className='icon-fe' />
                                </div>
                                <div className='c-ferr-fe'>
                                    
                                </div>
                            </div>
                        </Fade>
                    </div>
                </section>
            </MainContainer>

            <Footer/>
        </>
    );
}