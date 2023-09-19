import {Backdrop, CircularProgress} from "@mui/material";
import React from "react";

interface Props {
    open: boolean;
    setOpen: () => void;
}

export default function SimpleBackdrop(props: Props) {
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={props.open}
            onClick={props.setOpen}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
