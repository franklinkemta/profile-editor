import React, { ReactElement } from "react";

import "./style.css"

interface SectionProps {
    title?: string
    underlineTitle?: boolean
    children?: ReactElement<HTMLElement>
}

export default function Section({ title, underlineTitle = false, children }: SectionProps) {
    return (
        <section className="bloc">
            {title && <h2 className={`title text-2xs font-semibold mb-2 mt-1 uppercase ${underlineTitle ? "underline" : ""}`}>{title}</h2>}
            {children}
        </section>
    )
};
