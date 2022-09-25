import { Container } from "./styles";
export function Option({title,text}){
    return(
        <Container>
            <h1>{title}</h1>
            <p>{text}</p>
        </Container>
    )
};