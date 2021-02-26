import React from "react";
import { TextField, Button } from "@material-ui/core";

const InputContainer = () => {
    return (
        <div>
            <TextField
                className="main-input"
                type="number"
                InputLabelProps={{
                    shrink: true
                }}
                variant="outlined"
            />
            <Button className="main-button" color="primary" variant="outlined">
                Sort!
            </Button>
        </div>
    );
};

export default InputContainer;
