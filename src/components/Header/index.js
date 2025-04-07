import './styles.css';
import logo from '../../images/logo.svg';
import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const textOptions = [{id: 1, description: 'Categorias', route: '/categories'}, {id: 2, description: 'Minha estante', route: '/my-bookshelf'}, {id: 3, description:'Favoritos', route: '/favorites'}];
const icons = [{id: 1, src: profile, alt: 'Perfil'}, { id: 2, src: bag, alt: 'Sacola'}];

const Icon = styled.li`
    list-style: none;
`

const Icons = styled.ul`
    display: flex;
    gap: 30px;
    align-items: center;
`

function Header() {
    return (
        <header className='header'>
            <Link to='/' className='logoLink'>
                <div className='logo'>
                    <img src={logo} alt='Logo'></img>
                    <p><strong>Alura</strong>Books</p>
                </div>
            </Link>

            <ul className='options'>
                { textOptions.map(text => (
                    <Link to={text.route} className='optionLink' key={text.id}><li className='option'><p>{text.description}</p></li></Link>
                )) }
            </ul>

            <Icons>
                { icons.map(icon => (
                   <Icon key={icon.id}><img src={icon.src} alt={icon.alt}></img></Icon> 
                )) }
            </Icons>
        </header>
    );
}

export default Header;
