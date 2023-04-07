import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

type UserAvatarProps = {
  src: string;
  alt: string;
  size: number;
  id?: string;
};

export function UserAvatar({ size, src, alt, id }: UserAvatarProps) {
  if (id) {
    return (
      <Link href={`user/${id}`}>
        <Container>
          <Image src={src} alt={alt} width={size} height={size} />
        </Container>
      </Link>
    );
  }
  return (
    <Container>
      <Image src={src} alt={alt} width={size} height={size} />
    </Container>
  );
}
