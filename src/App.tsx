import React from "react";
import "./scss/index.scss";
import { Typography, TextField, Button } from "@material-ui/core";
import { InputContainer, SortContainer, ToggleContainer } from "./components/index";

const App: React.FC = () => {
    return (
        <div className="main-container">
            <Typography className="main-header">Sort!</Typography>
            <div className="main-inputs">
                <InputContainer />
            </div>
            <div className="main-toggles">
                <ToggleContainer />
            </div>
            <div className="main-sorts">
                <SortContainer />
            </div>
        </div>
    );
};

export default App;
