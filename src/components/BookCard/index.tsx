import { BookInfo, Container, ImageContainer, TitleAndAuthor } from "./styles";
import Image from "next/image";
import { RatingStars } from "../RatingStars";

type BookProps = {
  id: string;
  author: string;
  name: string;
  cover_url: string;
  rate: number;
};
export function BookCard({ id, author, cover_url, name, rate }: BookProps) {
  return (
    <Container href={"/home"}>
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
        <RatingStars rating={rate} starSize={14} />
      </BookInfo>
    </Container>
  );
}
