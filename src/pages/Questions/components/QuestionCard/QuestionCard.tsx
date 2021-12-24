import React, { FC } from "react";

import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import IQuestion from "@store/model/IQuestion";

import AnswersModel from "../AnswersModel";

export type QuestionCardProps = {
  item: IQuestion;
};

const QuestionCard: FC<QuestionCardProps> = ({ item }: QuestionCardProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ my: 1, maxWidth: "80%", mx: "auto" }}>
        <CardActionArea onClick={handleOpen}>
          <CardHeader
            avatar={<Avatar alt="avatar" src={item.owner.profile_image} />}
            title={item.owner.display_name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Stack direction="row" spacing={1}>
              {item.tags.map((tag) => (
                <Chip key={tag} label={tag} color="success" />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>

      <AnswersModel
        open={open}
        handleClose={handleClose}
        id={item.question_id}
      />
    </>
  );
};

export default QuestionCard;
