import MainContainer from "./components/MainContainer";
import GlobalStyle from "./globalStyles";
import Flex from "./components/atoms/Flex";

function App() {
  return (
    <Flex pt={["30px", "30px", "60px"]} flexDirection="column">
      <GlobalStyle />
      <MainContainer />
    </Flex>
  );
}

export default App;
