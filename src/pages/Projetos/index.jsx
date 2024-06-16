import '../Projetos/Projetos.modules.css';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine, RiComputerLine } from "react-icons/ri";
import { SiMui, SiReactrouter } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import Fade from 'react-reveal';

const CardProjetos = [
    {
        id: 1,
        img: ["../../src/assets/img-projeto-card.png"],
        title: "PORTFÓLIO",
        desc: "Esse é meu portfólio pessoal aqui mostro minha principais habilidades de front-end web",
        iconferr1: <FaReact className='icon-ferr2' />,
        iconferr2: <RiTailwindCssLine className='icon-ferr2' />,
        iconferr3: <SiMui className='icon-ferr2' />,
        iconferr4: <SiReactrouter className='icon-ferr2'/>,
        btndemo: <RiComputerLine/>,
        btngithub: <FiGithub/>,
    },
    {
        id: 2,
        img: ["../../src/assets/img-projeto-card.png"],
        title: "PORTFÓLIO",
        desc: "Esse é meu portfólio pessoal aqui mostro minha principais habilidades de front-end web",
        iconferr1: <FaReact className='icon-ferr2' />,
        iconferr2: <RiTailwindCssLine className='icon-ferr2' />,
        iconferr3: <SiMui className='icon-ferr2' />,
        iconferr4: <SiReactrouter className='icon-ferr2'/>,
        btndemo: <RiComputerLine/>,
        btngithub: <FiGithub/>,
    },
    {
        id: 3,
        img: ["../../src/assets/img-projeto-card.png"],
        title: "PORTFÓLIO",
        desc: "Esse é meu portfólio pessoal aqui mostro minha principais habilidades de front-end web",
        iconferr1: <FaReact className='icon-ferr2' />,
        iconferr2: <RiTailwindCssLine className='icon-ferr2' />,
        iconferr3: <SiMui className='icon-ferr2' />,
        iconferr4: <SiReactrouter className='icon-ferr2'/>,
        btndemo: <RiComputerLine/>,
        btngithub: <FiGithub/>,
    },
]

export default function Projetos() {
    return (
        <>
            <Header/>

            <MainContainer>
                <div className="main-cont">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="projetos">
                            <h1>Projetos</h1>
                            <br/>
                            <h2>Procuro novas oportunidade para demonstrar meu valor e desempenho. Procuro por vagas de estágio para Desenvolvedor Web Front-end em React.js.</h2>
                        </div>
                        
                        <div className='projetos-img'>
                            <img src="../../src/assets/img-projetos.png" alt="Projetos" />
                        </div>
                          
                    </Fade>
                </div>
                <div className='cont-proj'>
                    <Fade bottom duration={2000} distance="40px">
                        <div className='cards-proj'>
                            {CardProjetos.map((data) => (
                                <div className='c-proj'>
                                    <div className='img-proj'>
                                        <img src={data.img} alt="Imagem Projeto" />
                                    </div>
                                    <div className='info-ferr'>
                                        <h2>{data.title}</h2>
                                        <br/>
                                        <p>{data.desc}</p>
                                        <br/>
                                        <div className='cont-ferr2'>
                                            <div className='card-ferr2'>
                                                {data.iconferr1}
                                            </div>
                                            <div className='card-ferr2'>
                                                {data.iconferr2}
                                            </div>
                                            <div className='card-ferr2'>
                                                {data.iconferr3}
                                            </div>
                                            <div className='card-ferr2'>
                                                {data.iconferr4}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btns-lives'>
                                        <button>{data.btndemo}Demo</button>
                                        <button>{data.btngithub}GitHub</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </MainContainer>

            <Footer/>
        </>
    );
}