import { BookCard } from "@/components/BookCard";
import { MenuBar } from "@/components/MenuBar";
import { api } from "@/lib/axios";
import { GetStaticProps } from "next";
import { Binoculars } from "phosphor-react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useEffect, useState } from "react";

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

interface SearchResultProps {
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

const SearchBookFormSchema = zod.object({
  titleOrAuthor: zod.string().min(2),
});

type SearchBookFormData = zod.infer<typeof SearchBookFormSchema>;

export default function Explorer({ allBooks }: BookProps) {
  const [searchResult, setSearchResult] = useState<SearchResultProps[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isLoading },
  } = useForm<SearchBookFormData>({
    resolver: zodResolver(SearchBookFormSchema),
  });

  function handleSearchBook(data: SearchBookFormData) {
    const result = allBooks.filter(
      (book) =>
        book.name.includes(data.titleOrAuthor) ||
        book.author.includes(data.titleOrAuthor)
    );
    setSearchResult(result);
  }
  const searchInputIsEmpty =
    String(watch("titleOrAuthor")).trim().length > 0 &&
    watch("titleOrAuthor") !== undefined;

  useEffect(() => {
    if (searchInputIsEmpty) {
      setSearchResult([]);
    }
  }, [searchInputIsEmpty]);
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
            <form onSubmit={handleSubmit(handleSearchBook)}>
              <SearchBookInput
                type="text"
                placeholder="Buscar livro ou autor"
                disabled={isLoading}
                {...register("titleOrAuthor")}
              />
            </form>
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
          {!searchInputIsEmpty
            ? allBooks.map((book) => {
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
              })
            : searchResult.map((book) => {
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
