import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.fontSize || '36px'};
    margin: 0;
`
