import React from "react";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface HeaderProps {
    title?: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <div className="w-full flex flex-row flex-wrap justify-between py-2 px-2 z-50 sticky top-0 bg-white print:hidden">
            <div className="inline-flex gap-2 items-center">
                <Link href="/" ><Squares2X2Icon className="h-4 w-4 " /></Link>
                <p className="font-semibold text-inherit text-sm">{title}</p>
            </div>
            <div className="flex flex-row flex-wrap gap-2 ml-auto">
                <div className="text-low-blue _inline-flex hidden">
                    <Link href="/resume" ><span className="hidden md:block">Resume</span><span className="md:hidden">CV</span></Link>
                </div>
                <div className="text-middle-blue">
                    <Link href="/letter" >About</Link>
                </div>
                <div >
                    <Link href="/projects" className="text-hard-blue">· Projects</Link>
                </div>
                <div >
                    <Link href="/blog">· Blog</Link>
                </div>
            </div>
        </div>
    )
};
