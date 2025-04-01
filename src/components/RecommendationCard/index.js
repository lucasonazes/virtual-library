import styled from "styled-components";

function RecommendationCard({title, subtitle, description, img}) {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
            <img src={img.src} alt={img.alt}/>
            <button>Saiba mais</button>
        </div>
    );
}

export default RecommendationCard;
