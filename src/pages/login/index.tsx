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
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <Container>
      <ImageContainer>
        <Image
          src={loginImg}
          alt="Mulher deitada a ler um livro"
          quality={100}
          priority
        />
      </ImageContainer>
      <OptionsContainer>
        <Box>
          <Header>
            <strong>Boas vindas!</strong>
            <span>Faça seu login ou acesse como visitante.</span>
          </Header>
          <Buttons>
            <Button onClick={() => signIn("google")}>
              <Image src={googleIcon} alt="Google icon" />
              Entrar com Google
            </Button>
            <Button onClick={() => signIn("github")}>
              <Image src={githubIcon} alt="Google icon" />
              Entrar com GitHub
            </Button>
            <Button onClick={() => router.push("/home")}>
              <Image src={rocketIcon} alt="Google icon" />
              Acessar como visitante
            </Button>
          </Buttons>
        </Box>
      </OptionsContainer>
    </Container>
  );
}
