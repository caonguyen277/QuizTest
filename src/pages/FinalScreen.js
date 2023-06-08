import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import completed from "../img/completed.png";
import congratulation from "../img/congratulation.png";
import {
  handleScoreChange,
} from "../redux/actions";

const FinalScreen = () => {
  const disptach = useDispatch();
  const history = useHistory();
  const { score, time } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        {score >= 3 ? (
          <Typography variant="h3" fontWeight="bold" mb={3}>
            <img width="50%" src={congratulation} alt="image"></img>
            Congratulation!!
            <Typography variant="h4" mb={3}>
              You are amazing!!
            </Typography>
          </Typography>
        ) : (
          <Typography Typography variant="h3" fontWeight="bold" mb={3}>
            <img width="50%" src={completed} alt="image"></img>
            <br></br>
            Completed!!
            <Typography variant="h4" mb={3}>
              Better luck next time!!
            </Typography>
          </Typography>
        )}
      </Typography>
      <Typography variant="h4" mb={3}>
        {score}/5 Correct answers in {time.sec} seconds.
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Play again
      </Button>
    </Box>
  );
};

export default FinalScreen;
