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
        <section className="exp space-y-1 mb-2 last:mb-0">
            <div className="flex justify-between">
                {organizationName && <p className="font-semibold"><a href={organizationUrl && "#"}>{organizationName}</a></p>}
                {period && <p className="font-semibold ml-auto">{period}</p>}
            </div>
            {role && <h2 className="font-semibold">{role}</h2>}
            {children}
        </section>
    )
};
