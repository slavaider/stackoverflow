import React, { FC, FormEvent, useCallback, useEffect } from "react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  TextField,
} from "@mui/material";
import { ADD_ANSWER, FETCH_ANSWERS } from "@store/actionTypes";
import { IAnswer } from "@store/model/IAnswer";
import { RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export type AnswersModelProps = {
  open: boolean;
  handleClose: () => void;
  id: number;
};
const AnswersModel: FC<AnswersModelProps> = ({
  open,
  handleClose,
  id,
}: AnswersModelProps) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const answers = useSelector((state: RootState) => state.answers.items);
  const error = useSelector((state: RootState) => state.answers.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      dispatch({ type: FETCH_ANSWERS, payload: id });
    }
  }, [open]);

  const addAnswer = useCallback((event: FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    dispatch({
      type: ADD_ANSWER,
      token,
      id,
      content: target.content.value,
    });
  }, []);

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {answers?.map((answer: IAnswer) => (
            <React.Fragment key={answer.answer_id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={answer.owner.profile_image} />
                </ListItemAvatar>
                <ListItemText
                  primary={answer.owner.display_name}
                  secondary={
                    <span>
                      Score: {answer.score} &nbsp;
                      {answer.is_accepted ? "Accepted" : "Declined"}&nbsp;
                      <Link
                        rel="noreferrer"
                        target="_blank"
                        href={`https://stackoverflow.com/questions/${id}/#${answer.answer_id}`}
                      >
                        Link
                      </Link>
                    </span>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>

        {error && (
          <Chip
            sx={{ display: "flex", justifyContent: "center" }}
            label={error.message}
            color="warning"
          />
        )}

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={addAnswer}
          autoComplete="off"
        >
          <TextField
            multiline
            required
            inputProps={{ minLength: 30 }}
            helperText="minimum 30 symbols"
            defaultValue={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
              "Eum nostrum unde vel! Doloribus ex facere placeat rerum?\n" +
              "Accusantium error neque quia suscipit?\n" +
              "Asperiores molestias nam nesciunt reiciendis reprehenderit?"
            }
            id={`${id}answer`}
            name="content"
            label="Your Answer"
          />
          <Button type="submit" size="large" variant="contained">
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AnswersModel;
