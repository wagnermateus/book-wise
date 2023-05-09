import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";
import { MenuBar } from "../MenuBar";

export function MobileMenuBar() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X color="#8D95AF" size={24} />
        </CloseButton>
        <MenuBar />
      </Content>
    </Dialog.Portal>
  );
}
