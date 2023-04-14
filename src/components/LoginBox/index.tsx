import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import {
  Button,
  Buttons,
  CloseButton,
  Content,
  Overlay,
  Title,
} from "./styles";
import googleIcon from "../../assets/googleIcon.svg";
import githubIcon from "../../assets/githubIcon.svg";
import { signIn } from "next-auth/react";
import { X } from "phosphor-react";
export function LoginBox() {
  function handleSignIn(provider: string) {
    signIn(provider);
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X color="#8D95AF" size={24} />
        </CloseButton>
        <Dialog.Title asChild>
          <Title>Faça login para deixar sua avaliação</Title>
        </Dialog.Title>
        <Buttons>
          <Button onClick={() => handleSignIn("google")}>
            <Image src={googleIcon} alt="Google icon" />
            Entrar com Google
          </Button>
          <Button onClick={() => handleSignIn("github")}>
            <Image src={githubIcon} alt="Google icon" />
            Entrar com GitHub
          </Button>
        </Buttons>
      </Content>
    </Dialog.Portal>
  );
}
