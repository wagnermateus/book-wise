import { MenuBar } from "@/components/MenuBar";
import { prisma } from "@/lib/prisma";
import { GetServerSideProps } from "next";
import { User } from "phosphor-react";
import {
  Books,
  Container,
  Content,
  Header,
  Ratings,
  SearchRatingInput,
} from "./styles";

export default function Profile({ user }: any) {
  console.log(user);
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header>
          <User size={26} color="#50B2C0" />
          <h2>Perfil</h2>
        </Header>
        <Ratings>
          <SearchRatingInput type="text" placeholder="Buscar livro avaliado" />
          <Books></Books>
        </Ratings>
      </Content>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = String(params?.id);

  const response = await prisma.user.findUnique({
    select: {
      id: true,
      name: true,
      avatar_url: true,
      created_at: true,

      ratings: {
        select: {
          book: {
            select: {
              name: true,
            },
          },
          created_at: true,
          id: true,
          rate: true,
          description: true,
        },
      },
    },
    where: {
      id: userId,
    },
  });
  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      response,
    },
  };
};
