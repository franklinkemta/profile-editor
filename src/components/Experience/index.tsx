import React, { ReactElement } from "react";

import "./style.css"

interface ExperienceProps {
    organizationName?: string
    organizationUrl?: string
    role?: string
    period?: string
    children?: ReactElement<HTMLElement>
}

export default function Experience({ organizationName, organizationUrl, role, period, children }: ExperienceProps) {
    return (
        <section className="exp mt-3 space-y-1">
            <div className="flex justify-between">
                <p className="font-semibold"><a href={organizationUrl && "#"}>{organizationName}</a></p>
                <p className="font-semibold">{period}</p>
            </div>
            {role && <h2 className="font-semibold">{role}</h2>}
            {children}
        </section>
    )
};
