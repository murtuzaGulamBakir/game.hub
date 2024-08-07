import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"}>Aside</GridItem>
                </Show>
                <GridItem area={"main"}>Main</GridItem>
            </Grid>
        </div>
    );
}

export default App;
