import '../Home/Home.modules.css';
import { Link } from 'react-router-dom';
import { GrDocumentText } from "react-icons/gr";
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';
import Typewriter from 'typewriter-effect';
import Typical from 'react-typical'

export default function Home() {
    return (
        <> 
            <Header/>

            <MainContainer>
                <div className="main-cont">
                    <Fade bottom duration={2000} distance="40px">
                        <div className='apresentacao'>
                            <h1><strong>Olá, sou Misael Alves</strong></h1>
                            <br/>
                            <h2>Sou Desenvolvedor Front-End Júnior a Procura de Estágio.</h2>
                            <h2>{''}
                                <Typical 
                                    loop={Infinity} 
                                    steps={[
                                        'React.js',
                                        3000,
                                        'Vite.js',
                                        3000,
                                        'Tailwind CSS',
                                        3000,
                                        'MUI Material',
                                        3000,
                                        'React Router',
                                        3000,
                                    ]}
                                />
                            </h2>
                            
                            <br/>
                            <Link to="../../src/assets/curriculo-cv.pdf" target='_blank'>
                                <button><GrDocumentText className='icon-doc' />Download CV</button>
                            </Link>
                        </div>
                    </Fade>
                    
                    <Fade bottom duration={2000} distance="40px">
                        <div className='contato'>
                            <div className='perfil-h'>
                                {/* <img src="../../assets/img-perfil.png" alt="" /> */}
                            </div>
                            <div className='redes-sociais'>
                                <Link to="https://www.linkedin.com/in/misael-alves-dos-santos-8510b11b0/" target='_blank'>
                                    <div><FaLinkedinIn className='icon-rs'/></div>
                                </Link>
                                <Link to="https://github.com/misaelalves99" target='_blank'>
                                    <div><FaGithub className='icon-rs'/></div>
                                </Link>
                                <Link to="https://www.instagram.com/misael_alves_99/" target='_blank'>
                                    <div><FaInstagram className='icon-rs'/></div>
                                </Link>
                                <Link to="https://www.facebook.com/misael.alves.92317/" target='_blank'>
                                    <div><FaFacebookF className='icon-rs'/></div>
                                </Link>
                                <Link to="https://x.com/MisaelAlves110" target='_blank'>
                                    <div><FaTwitter className='icon-rs'/></div>
                                </Link>
                                {/* <Link>
                                    <div><FaGooglePlusG className='icon-rs'/></div>
                                </Link> */}
                            </div>
                        </div> 
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}