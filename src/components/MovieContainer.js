import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import { useEffect, useState } from "react";

const MovieContainer = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  //https://www.omdbapi.com/?s=movie&apikey=59b8a129&page=1-10

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/944564/similar?api_key=f81892f1c533d8ff30e6351f28064ccf&language=es-MX&page=1"
    )
      .then((res) => res.json())
      .then((results) => {
        setMovie(results);
        console.log(results);
      })
      .catch((error) => console.log("ERROR"));
    setLoading(false);
  }, [setMovie]);

  return (
    <Flex flexWrap={["wrap"]} justifyContent="center">
      {loading ? <h1>loading...</h1> : ""}
      {movie &&
        movie?.results?.map((mov) => (
          <MovieCard title={mov.title} img={mov.poster_path} key={mov.id} />
        ))}
    </Flex>
  );
};
export default MovieContainer;

const MovieCard = ({ img, title } = {}) => {
  //debugger;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      border="1px solid gray"
      p="16px"
      width={["90vw"]}
      maxWidth={["300px"]}
      height={["320px"]}
      justifyContent="space-between"
      m={["15px", "20px"]}
      //key={key}
    >
      <Typography variant={["body1Regular"]}>{title}</Typography>

      <Flex
        borderRadius="50%"
        height="140px"
        width="120px"
        border="1px solid gray"
        backgroundImage={`url(${img})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Flex
        as="button"
        backgroundColor="graySecondary"
        width="220px"
        border="none"
        textAlign="center"
        justifyContent="center"
        p="8px"
        borderRadius="8px"
      >
        <Typography variant="h6">Select button</Typography>
      </Flex>
    </Flex>
  );
};
