import { BookCard } from "@/components/BookCard";

import { MenuBar } from "@/components/MenuBar";

import { api } from "@/lib/axios";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { CaretRight, ChartLineUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  Books,
  BooksContent,
  ButtonSeeAll,
  Container,
  Content,
  Header,
  LastBookRead,
  LastRatings,
  PopularBooks,
  PopularBooksList,
  Ratings,
  Text,
} from "./styles";
import { LastReadCard } from "./components/LastReadCard";
import { RatingCard } from "./components/RatingCard";
import { Loading } from "@/components/Loading";
import { MobileMenuButton } from "@/components/MobileMenuButton";
import { prisma } from "@/lib/prisma";

interface HomeProps {
  popularBooks: [
    {
      id: string;
      author: string;
      name: string;
      cover_url: string;
      ratings: [
        {
          rate: number;
        }
      ];
    }
  ];
}

type BooksRatingProps = {
  user: {
    avatar_url: string;
    name: string;
    id: string;
  };
  book: {
    author: string;
    cover_url: string;
    name: string;
    summary: string;
  };
  rate: number;
  created_at: Date;
  id: string;
};

interface LastReadProps {
  ratings: [
    {
      book: {
        name: string;
        author: string;
        cover_url: string;
        summary: string;
      };
      rate: number;
      created_at: Date;
    }
  ];
}
export default function Home({ popularBooks }: HomeProps) {
  const { data: session, status } = useSession();
  const userIsAuthenticated = status === "authenticated";

  const [booksRating, setBooksRating] = useState<BooksRatingProps[]>([]);

  const {
    data: lastRead,
    isFetching,
    isLoading,
  } = useQuery<LastReadProps>(
    ["lastRead"],

    async () => {
      if (userIsAuthenticated) {
        const response = await api.get("/user/lastRead");
        return response.data;
      }
    },

    {
      enabled: !!session,
    }
  );

  useEffect(() => {
    api.get("/rating").then((response) => {
      setBooksRating(response.data);
    });
  }, []);

  if (userIsAuthenticated) {
    if (isFetching || isLoading) {
      return <Loading />;
    }
  }
  if (!userIsAuthenticated) {
    if (!booksRating) {
      return <Loading />;
    }
  }
  return (
    <Container>
      <MenuBar />
      <Content>
        <MobileMenuButton />
        <Header>
          <ChartLineUp size={24} color="#50B2C0" />
          <h2>Início</h2>
        </Header>

        <Books>
          <BooksContent>
            {userIsAuthenticated && (
              <LastBookRead>
                <div>
                  <Text>Sua última leitura</Text>
                  <ButtonSeeAll href={`/user/${session?.user.id}`}>
                    Ver todas <CaretRight size={16} />
                  </ButtonSeeAll>
                </div>

                <LastReadCard lastRead={lastRead!} />
              </LastBookRead>
            )}
            <LastRatings>
              <Text>Avaliações mais recentes</Text>

              <Ratings>
                {booksRating.map((rating) => {
                  return (
                    <RatingCard
                      key={rating.id}
                      bookAuthor={rating.book.author}
                      bookCoverUrl={rating.book.cover_url}
                      bookTitle={rating.book.name}
                      commentDate={rating.created_at}
                      rating={rating.rate}
                      summary={rating.book.summary}
                      userAvtarUrl={rating.user.avatar_url}
                      userName={rating.user.name}
                      userId={rating.user.id}
                    />
                  );
                })}
              </Ratings>
            </LastRatings>
          </BooksContent>
          <PopularBooks>
            <div>
              <Text>Livros populares</Text>
              <ButtonSeeAll href={"/explore"}>
                Ver todos <CaretRight size={16} />
              </ButtonSeeAll>
            </div>
            <PopularBooksList>
              {popularBooks.map((book) => {
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
            </PopularBooksList>
          </PopularBooks>
        </Books>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const popularBooks = await prisma.book.findMany({
    select: {
      author: true,
      name: true,
      cover_url: true,
      id: true,

      ratings: {
        select: {
          rate: true,
        },
      },
    },
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
    take: 3,
  });

  return {
    props: {
      popularBooks,
    },
    revalidate: 60 * 60 * 1,
  };
};
