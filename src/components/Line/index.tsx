import React from "react";
import { Divider, DividerProps } from "@nextui-org/react";

import "./style.css"

export default function Line(props: DividerProps) {
    return (
        <div className="line" >
            <Divider {...props} orientation="horizontal" />
        </div>
    )
};
