import { List } from "phosphor-react";
import { MenuButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { MobileMenuBar } from "../MobileMenuBar";

export function MobileMenuButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <MenuButton>
          <List size={32} />
        </MenuButton>
      </Dialog.Trigger>
      <MobileMenuBar />
    </Dialog.Root>
  );
}
