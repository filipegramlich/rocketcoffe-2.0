import { Container } from "./styles";

export function Price({title,...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}