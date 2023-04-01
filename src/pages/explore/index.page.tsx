import { MenuBar } from "@/components/MenuBar";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import {
  BookCategories,
  CategoryInputContainer,
  Container,
  Content,
  Header,
  InputLabel,
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
          <BookCategories>
            <CategoryInputContainer>
              <input type="radio" id="todos" value="todos" name="category" />
              <InputLabel>
                <label htmlFor="all">Todos</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="educacao"
                value="educacao"
                name="category"
              />
              <InputLabel>
                <label htmlFor="all">Computação</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="educacao"
                value="educacao"
                name="category"
              />
              <InputLabel>
                <label htmlFor="all">Educação</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="fantasia"
                value="fantasia"
                name="category"
              />
              <InputLabel>
                <label htmlFor="all">Fantasia</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="ficcao-cientifica"
                value="ficcao-cientifica"
                name="category"
              />
              <InputLabel>
                <label htmlFor="all">Ficção Cientifica</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input type="radio" id="horror" value="horror" name="category" />
              <InputLabel>
                <label htmlFor="all">Horror</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input type="radio" id="hqs" value="hqs" name="category" />
              <InputLabel>
                <label htmlFor="all">HQs</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="suspense"
                value="suspense"
                name="category"
              />
              <InputLabel>
                <label htmlFor="all">Suspense</label>
              </InputLabel>
            </CategoryInputContainer>
          </BookCategories>
        </Header>
      </Content>
    </Container>
  );
}
