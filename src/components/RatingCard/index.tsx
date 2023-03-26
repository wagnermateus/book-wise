import Image from "next/image";
import { UserAvatar } from "../UserAvatar";
import bookCover from "../../assets/Book.png";
import {
  Book,
  Container,
  CoverContainer,
  Details,
  Header,
  RatingDate,
  TitleAndAuthor,
  UserName,
  UserNameAndRatingDate,
} from "./styles";

export function RatingCard() {
  return (
    <Container>
      <Header>
        <UserAvatar
          size={50}
          alt="User profile picture"
          src={"http://github.com/wagnermateus.png"}
        />
        <UserNameAndRatingDate>
          <UserName>Jaxson Dias</UserName>
          <RatingDate>Hoje</RatingDate>
        </UserNameAndRatingDate>
      </Header>
      <Book>
        <CoverContainer>
          <Image src={bookCover} alt="Book Cover" />
        </CoverContainer>
        <Details>
          <TitleAndAuthor>
            <strong>O Hobbit</strong>
            <span>J.R.R. Tolkien</span>
          </TitleAndAuthor>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </p>
        </Details>
      </Book>
    </Container>
  );
}
