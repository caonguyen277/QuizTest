import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { decode } from "html-entities";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import useAxios from "../hooks/useAxios";
import { handleScoreChange,handleTimeChange } from "../redux/actions";
import "./Question.css";
import Time from "./Time.js";
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const {
    score
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const { response, loading } = useAxios({
    url: "https://opentdb.com/api.php?amount=5",
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    setSelected(e.target.textContent);
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    } else {
    }
  };
  const handleClickNext = () => {
    setSelected();
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      dispatch(handleTimeChange(Time(false)));
      history.push("/score");
    }
  };
  const handleSelect = (i) => {
    const correct = response.results[questionIndex].correct_answer;
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };
  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button
            className={`singleOption  ${selected && handleSelect(data)}`}
            onClick={handleClickAnswer}
            variant="outlined"
            disabled={selected}
          >
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        <Button
          onClick={handleClickNext}
          variant="contained"
          disabled={!selected}
        >
          {questionIndex + 1 !== response.results.length ? "Next" : "Submit"}
        </Button>
      </Box>
    </Box>
  );
};

export default Questions;
