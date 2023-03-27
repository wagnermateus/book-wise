import { BookInfo, Container, ImageContainer, TitleAndAuthor } from "./styles";
import book from "../../assets/Book.png";
import Image from "next/image";
import { RatingStars } from "../RatingStars";
export function BookCard() {
  return (
    <Container href={"/"}>
      <ImageContainer>
        <Image src={book} alt="Book Cover" />
      </ImageContainer>
      <BookInfo>
        <TitleAndAuthor>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </TitleAndAuthor>
        <RatingStars rating={4} starSize={14} />
      </BookInfo>
    </Container>
  );
}
