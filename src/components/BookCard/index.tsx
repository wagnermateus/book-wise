import { BookInfo, Container, ImageContainer, TitleAndAuthor } from "./styles";
import Image from "next/image";
import { RatingStars } from "../RatingStars";
import * as Dialog from "@radix-ui/react-dialog";
import { BookSideBar } from "../BookSideBar/index.page";
import { useContext } from "react";
import { bookContext } from "@/contexts/BookContexts";

type BookProps = {
  id: string;
  author: string;
  name: string;
  cover_url: string;
  ratings: [{ rate: number }];
};

export function BookCard({ id, author, cover_url, name, ratings }: BookProps) {
  const { bookData, handleViewBook } = useContext(bookContext);

  const sumOfRatings = ratings?.reduce(
    (accumulator, item) => {
      accumulator.rate += item.rate;
      return accumulator;
    },
    { rate: 0 }
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container onClick={() => handleViewBook(id)}>
          <ImageContainer>
            <Image
              src={cover_url}
              alt={`Book cover`}
              width={64}
              height={96}
              priority
            />
          </ImageContainer>
          <BookInfo>
            <TitleAndAuthor>
              <strong>{name}</strong>
              <span>{author}</span>
            </TitleAndAuthor>
            <RatingStars
              rating={Math.round(sumOfRatings!.rate / ratings!.length)}
              starSize={14}
            />
          </BookInfo>
        </Container>
      </Dialog.Trigger>
      <BookSideBar />
    </Dialog.Root>
  );
}
