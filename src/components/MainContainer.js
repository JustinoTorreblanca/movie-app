import Box from "./atoms/Box";
import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import MovieContainer from "./MovieContainer";
import "./globalStyles.css";
import { useState } from "react";

const MainContainer = () => {
  const [genre, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const MOVIE_CATEGORIES = {
    aventura: "Aventura",
    comedia: "Comedia",
    crimen: "Crimen",
    drama: "Drama",
  };

  return (
    <Flex
      flexDirection="column"
      mb={["30px"]}
      mx={["auto"]}
      border="1px solid gray"
      borderRadius="4px"
      justifyContent="center"
      alignItems="center"
      py={["16px"]}
      px={["8px"]}
      minWidth="300px"
      width="96%"
      maxWidth="1581px"
    >
      <Typography variant={["h3", "h2", "h1"]} color="graySecondary">
        Movie Awards
      </Typography>
      {loading ? <h1>loading...</h1> : ""}

      <SearchField />

      <Category value={MOVIE_CATEGORIES.aventura} />
      <MovieContainer />

      <Category value={MOVIE_CATEGORIES.comedia} />
      <MovieContainer />

      <Category value={MOVIE_CATEGORIES.crimen} />
      <MovieContainer />

      <Category value={MOVIE_CATEGORIES.drama} />
      <MovieContainer />

      <SubmitButton openModal={openModal} isOpen={isOpen} />

      <ModalVotesSubmitted isOpen={isOpen} closeModal={closeModal} />
    </Flex>
  );
};

export default MainContainer;

const SearchField = () => {
  return (
    <Flex justifyContent="center" my={["16px"]}>
      <Box
        width={["90vw"]}
        maxWidth={["360px", "80vw", "1333px"]}
        as="input"
        type="text"
        fontSize="16px"
        borderRadius="4px"
        border="1px solid gray"
        placeholder="Search a movie tittle..."
        textAlign="left"
        p="11px"
      />
    </Flex>
  );
};

const Category = ({ value }) => {
  return (
    <Flex
      my={["16px"]}
      backgroundColor="#e6e6e6"
      borderRadius="2px"
      border="1px solid gray"
      width={["91vw"]}
      maxWidth={["360px", "80vw", "1333px"]}
    >
      <Typography
        borderRadius="4px"
        border="1px solid gray"
        placeholder="Search a movie tittle..."
        p="5px"
        textAlign="left"
        variant={["h6"]}
        //id={id}
      >
        {value}
      </Typography>
    </Flex>
  );
};

const SubmitButton = ({ openModal }) => {
  return (
    <Flex
      backgroundColor="#fac612"
      as="button"
      width="225px"
      borderRadius="12px"
      border="2px solid gray"
      justifyContent="center"
      py="5px"
      my="15px"
      onClick={openModal}
    >
      <Typography variant="body1Regular">SUBMIT VOTES</Typography>
    </Flex>
  );
};

const ModalVotesSubmitted = ({ isOpen, closeModal }) => {
  return (
    <Box
      position="fixed"
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="rgba(0,0,0, 0.75)"
      alignItems="center"
      top="0vh"
      className={`modal ${isOpen && "is-open"}`}
    >
      <Box
        //position="absolute"
        width="80vw"
        //height="80vh"
        backgroundColor="white"
        justifyContent="start"
        py="15px"
        flexDirection="column"
        px="20px"
        maxWidth={["680px"]}
        className={`modal ${isOpen && "is-open"}`}
      >
        <Typography variant="h3" mb="15px">
          VOTES SUBMITTED
        </Typography>
        <Flex flexDirection="column" mt="12px">
          <Typography variant="body1Bold" textAlign="left" mb="8px">
            Your votes:
          </Typography>
          <Typography as="ul" ml="24px" fontSize="24px">
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
          </Typography>
          <Flex
            backgroundColor="#fac612"
            as="button"
            width="225px"
            borderRadius="12px"
            border="2px solid gray"
            justifyContent="center"
            py="5px"
            my="15px"
            alignSelf="flex-end"
            mr={["0px", "15px", "20px"]}
            onClick={closeModal}
          >
            <Typography variant="body1Bold">Close</Typography>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
