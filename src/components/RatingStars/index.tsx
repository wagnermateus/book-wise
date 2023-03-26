import { Star } from "phosphor-react";
import { Container } from "./styles";

type RatingStarsProps = {
  starSize: number;
  rating: number;
};

export function RatingStars({ starSize, rating }: RatingStarsProps) {
  switch (rating) {
    case 1:
      return (
        <Container>
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
        </Container>
      );

    case 2:
      return (
        <Container>
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
        </Container>
      );
    case 3:
      return (
        <Container>
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
        </Container>
      );

    case 4:
      return (
        <Container>
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star size={starSize} color="#8381D9" />
        </Container>
      );
    case 5:
      return (
        <Container>
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
          <Star weight="fill" size={starSize} color="#8381D9" />
        </Container>
      );

    default:
      return <></>;
  }
}
