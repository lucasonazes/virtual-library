import './styles.css';
import logo from '../../images/logo.svg';
import profile from '../../images/perfil.svg';
import bag from '../../images/sacola.svg';
import styled from 'styled-components';

const textOptions = [{id: 1, description: 'Categorias'}, {id: 2, description: 'Minha estante'}, {id: 3, description:'Favoritos'}];
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
            <div className='logo'>
                <img src={logo} alt='Logo'></img>
                <p><strong>Alura</strong>Books</p>
            </div>

            <ul className='options'>
                { textOptions.map(text => (
                    <li className='option' key={text.id}><p>{text.description}</p></li>
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
