import { BookCard } from "@/components/BookCard";
import { MenuBar } from "@/components/MenuBar";
import { api } from "@/lib/axios";
import { GetStaticProps } from "next";
import { Binoculars } from "phosphor-react";
import {
  BookCategories,
  BooksList,
  CategoryInputContainer,
  Container,
  Content,
  Header,
  InputLabel,
  Logo,
  LogoAndInputBox,
  SearchBookInput,
} from "./styles";

interface BookProps {
  allBooks: [
    {
      id: string;
      name: string;
      author: string;
      cover_url: string;
      ratings: [
        {
          rate: number;
        }
      ];
    }
  ];
}

export default function Explorer({ allBooks }: BookProps) {
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
              <input
                type="radio"
                id="todos"
                value="todos"
                name="category"
                checked
              />
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
        <BooksList>
          {allBooks.map((book) => {
            return (
              <BookCard
                key={book.id}
                author={book.author}
                cover_url={book.cover_url}
                id={book.id}
                name={book.name}
                ratings={book.ratings}
              />
            );
          })}
        </BooksList>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("book/allBooks");
  const allBooks = response.data;
  return {
    props: {
      allBooks,
    },
    revalidate: 60 * 60 * 3,
  };
};
