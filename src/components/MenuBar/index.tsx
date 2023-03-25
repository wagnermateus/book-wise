import Image from "next/image";
import {
  ActiveLinkBorder,
  Container,
  LinkComponent,
  LoginButton,
  NavItem,
  NavList,
  UserInfo,
} from "./styles";
import bookWiseLogo from "../../assets/BookWiseLogo.png";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import { useRouter } from "next/router";
import { UserAvatar } from "../UserAvatar";
import { GetServerSideProps } from "next";
import { getSession, signOut, useSession } from "next-auth/react";

export function MenuBar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <Container>
      <Image src={bookWiseLogo} alt="Book Wise" quality={100} priority />
      <NavList>
        <NavItem>
          <ActiveLinkBorder
            active={router.pathname == "/home" ? true : false}
          ></ActiveLinkBorder>
          <LinkComponent
            href="/home"
            active={router.pathname == "/home" ? true : false}
          >
            <ChartLineUp size={24} />
            Início
          </LinkComponent>
        </NavItem>
        <NavItem>
          <ActiveLinkBorder
            active={router.pathname == "/explorer" ? true : false}
          ></ActiveLinkBorder>
          <LinkComponent
            href="/explorer"
            active={router.pathname == "/explorer" ? true : false}
          >
            <Binoculars size={24} />
            Explorar
          </LinkComponent>
        </NavItem>
        <NavItem>
          <ActiveLinkBorder
            active={router.pathname == "/profile" ? true : false}
          ></ActiveLinkBorder>
          <LinkComponent
            href="/profile"
            active={router.pathname == "/profile" ? true : false}
          >
            <User size={24} />
            Perfil
          </LinkComponent>
        </NavItem>
      </NavList>
      {status === "authenticated" ? (
        <UserInfo>
          <UserAvatar src={session?.user.avatar_url} size={32} alt="" />
          <span>{session?.user.name}</span>

          <SignOut
            color="#F75A68"
            size={20}
            alt="Finalizar sessão"
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          />
        </UserInfo>
      ) : (
        <LoginButton>
          Fazer Login
          <SignIn size={20} color="#50B2C0" />
        </LoginButton>
      )}
    </Container>
  );
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
