"use client"
import React from "react";
// import Image from "next/image";
interface RevealProps {
    placeholder?: string,
    children: React.ReactElement
}
export default function Reveal({ placeholder, children }: RevealProps) {
    const [hidden, setHidden] = React.useState(true);
    return (
        <>
            {
                hidden ? <a onClick={() => setHidden(false)} href="#">
                    {placeholder ?? " reaveal "}
                </a>
                    : <>{children}</>
            }
        </>
    )
};
