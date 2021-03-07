import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab/";

const ToggleContainer: React.FC = () => {
    const [formats, setFormats] = useState(["selection"]);

    const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        setFormats(newFormats);
        console.log(newFormats);
    };
    return (
        <div className="toggle-container">
            <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
                <ToggleButton value="selection" aria-label="selection">
                    Selection-Sort
                </ToggleButton>
                <ToggleButton value="insertion" aria-label="insertion">
                    Insertion-Sort
                </ToggleButton>
                <ToggleButton value="bubble" aria-label="bubble">
                    Bubble-Sort
                </ToggleButton>
                <ToggleButton value="quick" aria-label="quick">
                    Quick-Sort
                </ToggleButton>
                <ToggleButton value="heap" aria-label="heap">
                    Heap-Sort
                </ToggleButton>
                <ToggleButton value="merge" aria-label="merge">
                    Merge-Sort
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default ToggleContainer;
