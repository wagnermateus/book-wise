import { MenuBar } from "@/components/MenuBar";
import { RatingCard } from "@/components/RatingCard";
import { ChartLineUp } from "phosphor-react";
import { Container, Content, Header, Text } from "./styles";

export default function Home() {
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header>
          <ChartLineUp size={24} color="#50B2C0" />
          <h2>Início</h2>
        </Header>
        <Text>Avaliações mais recentes</Text>
        <RatingCard />
      </Content>
    </Container>
  );
}
