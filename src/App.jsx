import Grid from "./components/Grid";

function App() {
  return (
    <div style={appStyles}>
      <h1>Rat in a maze</h1>
      <Grid rows={3} columns={3} />
    </div>
  );
}

export default App;

const appStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  alignItems: "center",
  // justifyContent: "center",
  paddingBlock: "3rem",
  minHeight: "100vh",
};
