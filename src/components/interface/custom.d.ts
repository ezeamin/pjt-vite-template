import type { ReactNode } from "react";
import type { SxProps } from "@mui/material";

import { AnyProp } from "../../interface/globalTypes";

export interface CustomIconButtonProps extends AnyProp{
    title: string;
    icon: ReactNode;
    onClick?: () => void;
    sx?: SxProps;
}