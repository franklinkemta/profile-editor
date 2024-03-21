import React from "react";
import Avatar from "../Avatar";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-row flex-wrap gap-0 py-0 px-2 items-center">
            <div>
                <Avatar name={"Franklin Kemta"} />
                <p className="font-semibold text-inherit "></p>
            </div>
            <div className="flex flex-row gap-2 ml-auto items-center">
                <div className="text-middle-blue">
                    <Link href="https://www.linkedin.com/in/franklinkemta" target="_blank">LinkedIn</Link>
                </div>
                <div >
                    <Link href="https://github.com/franklinkemta" target="_blank">Github</Link>
                </div>
                <div>
                    <Link href="https://dev.franklinkemta.com" target="_blank" className="hidden print:block">Website</Link>
                </div>
            </div>
        </div>
    )
};
