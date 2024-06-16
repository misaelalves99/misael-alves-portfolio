import '../Sobre/Sobre.modules.css';
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import CardFormacao from '../../components/Card/CardFormacao';
import Fade from 'react-reveal';
import Typewriter from 'typewriter-effect';

const CardCertification = [
    {
        id: 1,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
    {
        id: 2,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
    {
        id: 3,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
    {
        id: 4,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
    {
        id: 5,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
    {
        id: 6,
        imgcert: ["../../src/assets/img-certificado.jpg"],
        imgmeda: ["../../src/assets/img-medalha.png"],
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt veniam labore .",
    },
]

export default function Sobre({ handleChange }) {
    return (
        <>
            <Header/>

            <MainContainer>
                <section className='section-container-sob'>
                    <div className="main-cont">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="sobre-mim">
                                <h1>Sobre mim</h1>
                                <br/>
                                <h2>Olá, meu nome é Misael Alves e sou de Teófilo Otoni-MG. Sou um Desenvolvedor Web Front-end em React.js e um estudante universitário do último ano buscando BTech em CSE.</h2>
                            </div>
                            
                            
                            <div className='perfil-s'>
                                
                            </div>
                            
                        </Fade>
                    </div>
                    
                    {/* EDUCAÇÃO */}
                    <div className='educacao'>
                        <Fade bottom duration={2000} distance="40px">
                            <div className='titulo'>
                                <h1>Educacão</h1>
                                <h2>Formação Acadêmica</h2>
                                <br/>
                            </div>

                            {/* Formação Acadêmica */}
                            
                            <CardFormacao
                                handleChange={handleChange}
                                img="../../src/assets/img-card.png"
                                title="GRADUANDO"
                                curso="Análise e Desenvolvimento de Sistemas"
                                instituicao="Universidade Estácio de Sá"
                                periodo="Período: 25/02/2022 - 01/07/2024"
                                nota="CGPA: 9,5"
                            />
                            <br/>
                            <CardFormacao
                                handleChange={handleChange}
                                img="../../src/assets/img-card.png"
                                title="ENSINO MÉDIO COMPLETO"
                                instituicao="E.E. José Expedito Souza Campos"
                                periodo="Período: 2005 - 2016"
                                nota="CGPA: 9,5"
                            />
                            <br/>

                            {/* Certificações */}

                            <div className='container-cards-cert'>
                                <div className='titulo'>
                                    <h2>Certificações</h2>
                                </div>

                                <br/>

                                <div className='container-cert'>
                                    {CardCertification.map((data) => (
                                        <div className='card-cert'>
                                            <div className='img-cert'>
                                                <img  src={data.imgcert} alt="Certificado"/>
                                            </div>
                                            <div>
                                                <p>{data.desc}</p>
                                            </div>
                                        </div>
                                    ))}
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