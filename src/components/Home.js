import { useNavigate } from "react-router";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleAction = () => {
    navigate("/board");
  };

  return (
    <>
      <h1>Zazou-test</h1>
      <button
        className="start-button"
        placeholder="Press to start the game"
        onClick={handleAction}
      >
        {" "}
        Start Game{" "}
      </button>
    </>
  );
};

export default Home;
