import Image from "next/image";
import {
  ActiveLinkBorder,
  Container,
  LinkComponent,
  NavItem,
  NavList,
  UserSession,
} from "./styles";
import bookWiseLogo from "../../assets/BookWiseLogo.png";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import { useRouter } from "next/router";
import { UserAvatar } from "../UserAvatar";

export function MenuBar() {
  const router = useRouter();

  return (
    <Container>
      <Image src={bookWiseLogo} alt="Book Wise" />
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

      <UserSession>
        <UserAvatar
          src="https://github.com/wagnermateus.png"
          size={32}
          alt=""
        />
        <span>Wagner</span>

        <SignOut size={20} color="#F75A68" />
      </UserSession>
    </Container>
  );
}
