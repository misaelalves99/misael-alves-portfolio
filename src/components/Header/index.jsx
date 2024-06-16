import '../Header/Header.modules.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <section className='header'>
                <div className='container'>
                    
                    <div className='logo'>
                        {/* <h1 className='text-white'>Misael Alves</h1> */}
                        <Link to="/"><img src='../../src/assets/logo.png' alt='Logotipo' /></Link>
                    </div>

                    <nav className='navbar'>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/habilidades">Habilidades</Link></li>
                            <li><Link to="/experiencia">Experiencia</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}