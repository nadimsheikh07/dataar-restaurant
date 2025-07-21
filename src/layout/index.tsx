import { Box } from "@mui/material"
import WebHeader from "./header";
import WebFooter from "./footer";

import { ReactNode } from "react";

interface WebLayoutProps {
    children: ReactNode;
}

const WebLayout = ({ children }: WebLayoutProps) => {
    return (
        <Box>
            <WebHeader />
            {children}
            <WebFooter />
        </Box>
    )
}

export default WebLayout;