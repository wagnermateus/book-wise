import { MenuBar } from "@/components/MenuBar";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import {
  Container,
  Content,
  Header,
  Logo,
  LogoAndInputBox,
  SearchBookInput,
} from "./styles";

export default function Explorer() {
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header>
          <LogoAndInputBox>
            <Logo>
              <Binoculars size={32} color="#50B2C0" />
              <h2>Explorar</h2>
            </Logo>
            <SearchBookInput type="text" placeholder="Buscar livro ou autor" />
          </LogoAndInputBox>
        </Header>
      </Content>
    </Container>
  );
}
