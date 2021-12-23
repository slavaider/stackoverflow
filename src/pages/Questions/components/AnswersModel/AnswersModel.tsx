import React, { FC, useEffect } from "react";

import { Box, Modal, Typography } from "@mui/material";

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
  useEffect(() => {
    if (open) {
      console.log(id);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default AnswersModel;
