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
import { ChangeEvent, useEffect, useState } from "react";
import { prisma } from "@/lib/prisma";

interface ExploreProps {
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
      categories: [
        {
          category: {
            name: string;
          };
        }
      ];
    }
  ];
}

interface BookProps {
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

export default function Explorer({ allBooks }: ExploreProps) {
  const [books, setBooks] = useState<BookProps[]>(allBooks);

  const [searchResult, setSearchResult] = useState<BookProps[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
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

  const haveResearch =
    String(watch("titleOrAuthor")).trim().length > 0 &&
    watch("titleOrAuthor") !== undefined;

  function handleSearchByCategory(category: ChangeEvent<HTMLInputElement>) {
    if (category.target.value !== "todos") {
      setBooks([]);
      for (let i = 0; i < allBooks.length; i++) {
        for (let x = 0; x < allBooks[i].categories.length; x++) {
          if (
            allBooks[i].categories[x].category.name === category.target.value
          ) {
            setBooks((prevState) => [...prevState, allBooks[i]]);
          }
        }
      }
    } else if (category.target.value === "todos") {
      setBooks(allBooks);
    }
  }

  useEffect(() => {
    if (haveResearch) {
      setSearchResult([]);
    }
  }, [haveResearch]);
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
                disabled={isSubmitting}
                {...register("titleOrAuthor")}
              />
            </form>
          </LogoAndInputBox>
          <BookCategories onChange={handleSearchByCategory}>
            <CategoryInputContainer>
              <input type="radio" id="todos" value="todos" name="category" />
              <InputLabel>
                <label htmlFor="todos">Todos</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="computacao"
                value="computacao"
                name="category"
              />
              <InputLabel>
                <label htmlFor="computacao">Computação</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="educacao"
                value="Educacao"
                name="category"
              />
              <InputLabel>
                <label htmlFor="educacao">Educação</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="fantasia"
                value="Fantasia"
                name="category"
              />
              <InputLabel>
                <label htmlFor="fantasia">Fantasia</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="ficcao-cientifica"
                value="Ficcao cientifica"
                name="category"
              />
              <InputLabel>
                <label htmlFor="ficcao-cientifica">Ficção Cientifica</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input type="radio" id="horror" value="Horror" name="category" />
              <InputLabel>
                <label htmlFor="horror">Horror</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input type="radio" id="hqs" value="Hqs" name="category" />
              <InputLabel>
                <label htmlFor="hqs">HQs</label>
              </InputLabel>
            </CategoryInputContainer>
            <CategoryInputContainer>
              <input
                type="radio"
                id="suspense"
                value="Suspense"
                name="category"
              />
              <InputLabel>
                <label htmlFor="suspense">Suspense</label>
              </InputLabel>
            </CategoryInputContainer>
          </BookCategories>
        </Header>
        <BooksList>
          {!haveResearch
            ? books.map((book) => {
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
  const allBooks = await prisma.book.findMany({
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,

      ratings: {
        select: {
          rate: true,
        },
      },
      categories: {
        select: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      allBooks,
    },
    revalidate: 60 * 60 * 3,
  };
};
