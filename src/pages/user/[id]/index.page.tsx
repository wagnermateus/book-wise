import { MenuBar } from "@/components/MenuBar";
import { UserRating } from "@/components/UserRating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { User as UserIcon } from "phosphor-react";

import {
  Books,
  Container,
  Content,
  Header,
  Ratings,
  SearchRatingInput,
} from "./styles";

type RatingsProps = [
  {
    ratings: [
      {
        book: {
          name: string;
          author: string;
          cover_url: string;
          id: string;
        };
        created_at: Date;
        description: string;
        id: string;
        rate: number;
      }
    ];
  }
];

interface UserProps {
  userData: {};
  userRatings: RatingsProps;
}

export default function User() {
  const { data: user, isFetching } = useQuery<UserProps>(["user"], async () => {
    const response = await api.get("/user", {
      params: { id: router.query.id },
    });

    return response.data;
  });

  const router = useRouter();

  if (isFetching) {
    return <></>;
  }
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header>
          <UserIcon size={26} color="#50B2C0" />
          <h2>Perfil</h2>
        </Header>
        <Ratings>
          <SearchRatingInput type="text" placeholder="Buscar livro avaliado" />
          <Books>
            {user!.userRatings[0].ratings.map((item) => {
              return (
                <UserRating
                  key={item.id}
                  bookAuthor={item.book.author}
                  bookCoverUrl={item.book.cover_url}
                  bookTitle={item.book.name}
                  comment={item.description}
                  commentDate={item.created_at}
                  rating={item.rate}
                />
              );
            })}
          </Books>
        </Ratings>
      </Content>
    </Container>
  );
}
