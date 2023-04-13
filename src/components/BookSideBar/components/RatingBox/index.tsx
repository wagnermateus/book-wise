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
import { useEffect, useState } from "react";

const RatingFormSchema = z.object({
  description: z.string().min(4),
});

type RatingFormData = z.infer<typeof RatingFormSchema>;

interface RatingProps {
  bookId: string;
  onCancelRate: (status: boolean) => void;
}

type StarsProps = {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
  5: boolean;
};

export function RatingBox({ bookId, onCancelRate }: RatingProps) {
  const [stars, setStars] = useState<StarsProps>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  } as StarsProps);
  const [totalRatedStars, setTotalRatedStars] = useState<number[]>([]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { isLoading, isSubmitSuccessful },
  } = useForm<RatingFormData>({
    resolver: zodResolver(RatingFormSchema),
  });

  const session = useSession();

  useEffect(() => {
    if (watch("description").length > 4 && isSubmitSuccessful) {
      onCancelRate(true);
    }
  }, [isSubmitSuccessful, onCancelRate, watch]);

  if (!session.data) {
    return <></>;
  }
  function handleStars(position: keyof StarsProps) {
    if (stars[position] === false) {
      stars[position] = true;

      setTotalRatedStars((prevState) => {
        return [...prevState, position];
      });
    } else if ((stars[position] = true)) {
      stars[position] = false;

      setTotalRatedStars((prevState) => {
        return prevState.filter((item) => item !== position);
      });
    }
  }
  console.log(totalRatedStars);
  async function onRating(data: RatingFormData) {
    api.post("/rating/createRating", {
      bookid: bookId,
      userid: session.data?.user.id,
      description: data.description,
      rate: totalRatedStars.length,
    });
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
          <Star onClick={() => handleStars(1)}>
            {stars[1] === false ? (
              <StarIcon color="#8381D9" size={28} />
            ) : (
              <StarIcon color="#8381D9" size={28} weight="fill" />
            )}
          </Star>
          <Star onClick={() => handleStars(2)}>
            {stars[2] === false ? (
              <StarIcon color="#8381D9" size={28} />
            ) : (
              <StarIcon color="#8381D9" size={28} weight="fill" />
            )}
          </Star>
          <Star onClick={() => handleStars(3)}>
            {stars[3] === false ? (
              <StarIcon color="#8381D9" size={28} />
            ) : (
              <StarIcon color="#8381D9" size={28} weight="fill" />
            )}
          </Star>
          <Star onClick={() => handleStars(4)}>
            {stars[4] === false ? (
              <StarIcon color="#8381D9" size={28} />
            ) : (
              <StarIcon color="#8381D9" size={28} weight="fill" />
            )}
          </Star>
          <Star onClick={() => handleStars(5)}>
            {stars[5] === false ? (
              <StarIcon color="#8381D9" size={28} />
            ) : (
              <StarIcon color="#8381D9" size={28} weight="fill" />
            )}
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
          <button
            type="button"
            onClick={() => onCancelRate(true)}
            disabled={isLoading}
          >
            <X color="#8381D9" size={24} />
          </button>
          <button type="submit" disabled={isLoading}>
            <Check color="#50B2C0" size={24} />
          </button>
        </Buttons>
      </form>
    </Container>
  );
}
