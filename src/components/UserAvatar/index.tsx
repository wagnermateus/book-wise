import Image from "next/image";
import { Container } from "./styles";

type UserAvatarProps = {
  src: string;
  alt: string;
  size: number;
};

export function UserAvatar({ size, src, alt }: UserAvatarProps) {
  return (
    <Container>
      <Image src={src} alt={alt} width={size} height={size} priority />
    </Container>
  );
}
