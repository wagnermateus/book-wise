import * as Dialog from "@radix-ui/react-dialog";
import { Book } from "./components/Book";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export interface BookSideBarProps {
  id: string;
  author: string;
  name: string;
  cover_url: string;
  total_pages: number;
  categories: [
    {
      category: {
        name: string;
      };
    }
  ];
  _count: {
    ratings: number;
  };

  ratings: [
    {
      user: {
        avatar_url: string;
        name: string;
      };
      created_at: Date;
      description: string;
      rate: number;
    }
  ];
}

export function BookSideBar({
  id,
  name,
  author,
  cover_url,
  total_pages,
  categories,
  _count,
  ratings,
}: BookSideBarProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X color="#8D95AF" size={24} />
        </CloseButton>
        <Book
          id={id}
          name={name}
          author={author}
          cover_url={cover_url}
          total_pages={total_pages}
          categories={categories}
          _count={_count}
          ratings={ratings}
        />
      </Content>
    </Dialog.Portal>
  );
}
