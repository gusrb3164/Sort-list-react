import React from "react";
import { TextField, Typography } from "@material-ui/core";

const InputContainer: React.FC = () => {
    return (
        <>
            <Typography className="input-desc">Input number (max : 16)</Typography>
            <div className="input-container">
                <TextField
                    className="input"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    className="input"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    className="input"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
                <TextField
                    className="input"
                    type="number"
                    InputLabelProps={{
                        shrink: true
                    }}
                    variant="outlined"
                />
            </div>
        </>
    );
};

export default InputContainer;
