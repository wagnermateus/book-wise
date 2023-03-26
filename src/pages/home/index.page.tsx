import { MenuBar } from "@/components/MenuBar";
import { RatingCard } from "@/components/RatingCard";
import { api } from "@/lib/axios";
import { GetStaticProps } from "next";
import { ChartLineUp } from "phosphor-react";
import { Container, Content, Header, Ratings, Text } from "./styles";

interface BookRatingProps {
  bookRating: [
    {
      user: {
        avatar_url: string;
        name: string;
      };
      book: {
        author: string;
        cover_url: string;
        name: string;
      };
      rate: number;
      description: string;
      created_at: Date;
    }
  ];
}

export default function Home({ bookRating }: BookRatingProps) {
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header>
          <ChartLineUp size={24} color="#50B2C0" />
          <h2>Início</h2>
        </Header>
        <Text>Avaliações mais recentes</Text>

        <Ratings>
          {bookRating.map((rating) => {
            return (
              <RatingCard
                key={rating.description}
                bookAuthor={rating.book.author}
                bookCoverUrl={rating.book.cover_url}
                bookTitle={rating.book.name}
                commentDate={rating.created_at}
                rating={rating.rate}
                ratingComment={rating.description}
                userAvtarUrl={rating.user.avatar_url}
                userName={rating.user.name}
              />
            );
          })}
        </Ratings>
      </Content>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("book/rating");
  const bookRating = response.data.rating;

  return {
    props: {
      bookRating,
    },
    revalidate: 60 * 60 * 1,
  };
};
