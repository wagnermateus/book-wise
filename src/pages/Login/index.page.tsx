import Image from "next/image";
import loginImg from "../../assets/loginImg.png";
import googleIcon from "../../assets/googleIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import rocketIcon from "../../assets/rocketIcon.svg";
import {
  Box,
  Button,
  Buttons,
  Container,
  Header,
  ImageContainer,
  OptionsContainer,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={loginImg}
          alt="Mulher deitada a ler um livro"
          quality={100}
        />
      </ImageContainer>
      <OptionsContainer>
        <Box>
          <Header>
            <strong>Boas vindas!</strong>
            <span>Faça seu login ou acesse como visitante.</span>
          </Header>
          <Buttons>
            <Button>
              <Image src={googleIcon} alt="Google icon" />
              Entrar com Google
            </Button>
            <Button>
              <Image src={githubIcon} alt="Google icon" />
              Entrar com GitHub
            </Button>
            <Button>
              <Image src={rocketIcon} alt="Google icon" />
              Acessar como visitante
            </Button>
          </Buttons>
        </Box>
      </OptionsContainer>
    </Container>
  );
}
