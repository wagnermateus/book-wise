import * as Dialog from "@radix-ui/react-dialog";
import { Book } from "./components/Book";
import {
  CloseButton,
  Content,
  Overlay,
  RateButton,
  RatingHeader,
  RatingsContainer,
  RatingsContent,
} from "./styles";
import { X } from "phosphor-react";
import { BookRating } from "./components/BookRating";
import { useSession } from "next-auth/react";

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
        id: string;
      };
      created_at: Date;
      description: string;
      rate: number;
      id: string;
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
  const session = useSession();

  if (!ratings) {
    return <></>;
  }

  const userHasAlreadyRatedTheBook =
    ratings.filter((item) => {
      return item.user.id === session.data?.user.id;
    }).length === 1;

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

        <RatingsContainer>
          <RatingHeader>
            <span>Avaliações</span>
            {!userHasAlreadyRatedTheBook && <RateButton>Avaliar</RateButton>}
          </RatingHeader>
          <RatingsContent>
            {ratings.length > 0 ? (
              ratings?.map((rating) => {
                return (
                  <BookRating
                    key={rating.id}
                    commentDate={rating.created_at}
                    summary={rating.description}
                    userAvtarUrl={rating.user.avatar_url}
                    userName={rating.user.name}
                    rating={rating.rate}
                  />
                );
              })
            ) : (
              <strong> Seja o primeiro a avaliar este livro!</strong>
            )}
          </RatingsContent>
        </RatingsContainer>
      </Content>
    </Dialog.Portal>
  );
}
