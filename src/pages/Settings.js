import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Time from "./Time.js"
import "./Question.css"

const Settings = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
    Time(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mt={3} width="100%">
        <Button className="border" fullWidth variant="contained" type="submit">
          Start quiz!
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
