import { Check, X, Star as StarIcon } from "phosphor-react";
import {
  Buttons,
  Container,
  Header,
  Star,
  Stars,
  TextAreaInput,
  User,
} from "./styles";
import { useSession } from "next-auth/react";
import { UserAvatar } from "@/components/UserAvatar";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";

const RatingFormSchema = z.object({
  description: z.string().min(4),
});

type RatingFormData = z.infer<typeof RatingFormSchema>;

interface RatingProps {
  bookId: string;
  onCancelRate: (status: boolean) => void;
}

export function RatingBox({ bookId, onCancelRate }: RatingProps) {
  const { handleSubmit, register } = useForm<RatingFormData>({
    resolver: zodResolver(RatingFormSchema),
  });

  const session = useSession();

  if (!session.data) {
    return <></>;
  }

  async function onRating(data: RatingFormData) {
    await api.post(
      "/rating/createRating",
      {
        bookid: bookId,
        userid: session.data?.user.id,
        description: data.description,
        rate: 4,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    onCancelRate(true);
  }
  return (
    <Container>
      <Header>
        <User>
          <UserAvatar
            src={session.data.user.avatar_url}
            size={38}
            alt="User profile image"
          />
          <strong>{session.data.user.name}</strong>
        </User>
        <Stars>
          <Star>
            <StarIcon color="#8381D9" size={28} />
          </Star>
          <Star>
            <StarIcon color="#8381D9" size={28} />
          </Star>
          <Star>
            <StarIcon color="#8381D9" size={28} />
          </Star>
          <Star>
            <StarIcon color="#8381D9" size={28} />
          </Star>
          <Star>
            <StarIcon color="#8381D9" size={28} />
          </Star>
        </Stars>
      </Header>
      <form onSubmit={handleSubmit(onRating)}>
        <TextAreaInput
          placeholder="Escreva sua avaliação"
          required
          {...register("description")}
        />
        <Buttons>
          <button type="button" onClick={() => onCancelRate(true)}>
            <X color="#8381D9" size={24} />
          </button>
          <button type="submit">
            <Check color="#50B2C0" size={24} />
          </button>
        </Buttons>
      </form>
    </Container>
  );
}
