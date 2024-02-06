import React, { ReactElement } from "react";

import "./style.css"

interface EducationProps {
    organizationName?: string
    organizationUrl?: string
    role?: string
    period?: string
    children?: ReactElement<HTMLElement>
}

export default function Education({ organizationName, organizationUrl, role, period, children }: EducationProps) {
    return (
        <section className="edu space-y-1">
            {role && <h2 className="font-semibold">{role}</h2>}
            {children}
            <div className="flex justify-between">
                <p><a href={organizationUrl && "#"}>{organizationName}</a></p>
                <p className="font-semibold">{period}</p>
            </div>
        </section>
    )
};
