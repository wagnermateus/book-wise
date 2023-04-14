import { RatingStars } from "@/components/RatingStars";
import {
  BookInfo,
  Container,
  Content,
  Footer,
  FooterItem,
  ImageContainer,
  NumberOfReviewsSpan,
  TitleAndAuthor,
} from "./styles";
import Image from "next/image";
import { BookOpen, BookmarkSimple } from "phosphor-react";

type BookProps = {
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
      rate: number;
    }
  ];
};

export function Book({
  id,
  author,
  cover_url,
  name,
  ratings,
  _count,
  categories,
  total_pages,
}: BookProps) {
  const sumOfRatings = ratings?.reduce(
    (accumulator, item) => {
      accumulator.rate += item.rate;
      return accumulator;
    },
    { rate: 0 }
  );

  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image
            src={cover_url}
            alt={`Book cover`}
            width={171}
            height={96}
            priority
          />
        </ImageContainer>
        <BookInfo>
          <TitleAndAuthor>
            <strong>{name}</strong>
            <span>{author}</span>
          </TitleAndAuthor>
          <div>
            <RatingStars
              rating={Math.round(sumOfRatings?.rate / ratings?.length)}
              starSize={20}
            />
            {_count?.ratings === 1 ? (
              <NumberOfReviewsSpan>
                {_count?.ratings} avaliação
              </NumberOfReviewsSpan>
            ) : (
              <NumberOfReviewsSpan>
                {_count?.ratings} avaliações
              </NumberOfReviewsSpan>
            )}
          </div>
        </BookInfo>
      </Content>
      <Footer>
        <FooterItem>
          <BookmarkSimple size={24} color="#50B2C0" />

          <div>
            <span>Categoria</span>
            <div>
              {categories?.map((item) => {
                return (
                  <strong key={item.category.name}>
                    {categories.indexOf(item) !== categories.length - 1
                      ? `${item.category.name}, `
                      : `${item.category.name}. `}
                  </strong>
                );
              })}
            </div>
          </div>
        </FooterItem>
        <FooterItem>
          <BookOpen size={24} color="#50B2C0" />

          <div>
            <span>Páginas</span>
            <strong>{total_pages}</strong>
          </div>
        </FooterItem>
      </Footer>
    </Container>
  );
}
