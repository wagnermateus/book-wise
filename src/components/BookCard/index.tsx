import { BookInfo, Container, ImageContainer, TitleAndAuthor } from "./styles";
import Image from "next/image";
import { RatingStars } from "../RatingStars";
import * as Dialog from "@radix-ui/react-dialog";
import { api } from "@/lib/axios";
import { BookSideBar, BookSideBarProps } from "../BookSideBar/index.page";
import { useState } from "react";

type BookProps = {
  id: string;
  author: string;
  name: string;
  cover_url: string;
  ratings: [{ rate: number }];
};

export function BookCard({ id, author, cover_url, name, ratings }: BookProps) {
  const [bookData, setBookData] = useState<BookSideBarProps>(
    {} as BookSideBarProps
  );

  const sumOfRatings = ratings?.reduce(
    (accumulator, item) => {
      accumulator.rate += item.rate;
      return accumulator;
    },
    { rate: 0 }
  );
  async function handleViewBook() {
    const response = await api.get("/book", { params: { bookid: id } });

    setBookData(response.data);
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Container onClick={handleViewBook}>
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
      <BookSideBar
        id={bookData.id}
        name={bookData.name}
        author={bookData.author}
        cover_url={bookData.cover_url}
        total_pages={bookData.total_pages}
        categories={bookData.categories}
        _count={bookData._count}
        ratings={bookData.ratings}
      />
    </Dialog.Root>
  );
}
