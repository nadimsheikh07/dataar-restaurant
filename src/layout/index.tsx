"use client";

import { Box } from "@mui/material"
import WebHeader from "./header";
import WebFooter from "./footer";

import { ReactNode, useState } from "react";
import WebDrawer from "./drawer";

interface WebLayoutProps {
    children: ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => {
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <WebHeader open={open} setOpen={setOpen} />
            {children}
            <WebFooter />
            <WebDrawer open={open} onClose={() => setOpen(false)} />
        </Box>
    )
}

export default WebLayout;