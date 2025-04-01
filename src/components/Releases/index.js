import { books } from './releaseData.js';
import styled from 'styled-components';
import { Title } from '../Title/index.js';
import RecommendationCard from '../RecommendationCard/index.js';

const ReleasesContainer = styled.section`
    text-align: center;
    background-color:rgb(240, 240, 240);
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    gap: 50px;
    justify-content: center;
    cursor: pointer;
`

function Releases() {
    return (
        <ReleasesContainer>
            <Title>Últimos lançamentos</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <div className='book' key={book.id}>
                        <p>{book.name}</p>
                        <img src={book.src} alt={book.name}></img>
                    </div>
                ))}
            </NewBooksContainer>
            <RecommendationCard 
                title='Talvez você se interesse por...'
                subtitle='Angular 11'
                description=''
            />
        </ReleasesContainer>
    );
}

export default Releases;
