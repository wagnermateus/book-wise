import { MenuBar } from "@/components/MenuBar";
import { UserRating } from "@/components/UserRating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import {
  BookOpen,
  User as UserIcon,
  Books as BooksIcon,
  UserList,
} from "phosphor-react";

import {
  Activity,
  ActivityInfo,
  Books,
  Box,
  Container,
  Content,
  Header,
  Ratings,
  SearchRatingInput,
  UserActivities,
  UserInfo,
  UserProfile,
} from "./styles";
import { UserAvatar } from "@/components/UserAvatar";
import { getYear } from "date-fns";

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
  userData: {
    id: string;
    name: string;
    avatar_url: string;
    created_at: Date;
  };
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

  const userRegistrationDateFormatted = getYear(
    new Date(user!.userData.created_at)
  );

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
        <Box>
          <Ratings>
            <SearchRatingInput
              type="text"
              placeholder="Buscar livro avaliado"
            />
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
          <UserProfile>
            <UserInfo>
              <UserAvatar
                src={user!.userData.avatar_url}
                alt="User profile image"
                size={68}
              />
              <strong>{user!.userData.name}</strong>
              <span>{`membro desde ${userRegistrationDateFormatted}`}</span>
            </UserInfo>
            <UserActivities>
              <Activity>
                <BookOpen color="#50B2C0" size={32} />
                <ActivityInfo>
                  <strong>123</strong>
                  <span>Páginas lidas</span>
                </ActivityInfo>
              </Activity>
              <Activity>
                <BooksIcon color="#50B2C0" size={32} />
                <ActivityInfo>
                  <strong>3</strong>
                  <span>Livros avaliados</span>
                </ActivityInfo>
              </Activity>

              <Activity>
                <UserList color="#50B2C0" size={32} />
                <ActivityInfo>
                  <strong>3</strong>
                  <span>Autores lidos</span>
                </ActivityInfo>
              </Activity>
            </UserActivities>
          </UserProfile>
        </Box>
      </Content>
    </Container>
  );
}
