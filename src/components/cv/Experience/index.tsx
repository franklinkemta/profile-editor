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
        <section className="exp space-y-1 mb-4 last:mb-0">
            <div className="flex justify-between">
                {role && <h2 className="text-middle-blue">{role}</h2>}
                {period && <p className="ml-auto text-sm">{period}</p>}
            </div>
            {organizationName && <p className="underline"><a href={organizationUrl ?? "#"} target="_blank">{organizationName}</a></p>}
            {children}
        </section>
    )
};
