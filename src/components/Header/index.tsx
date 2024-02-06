import React from "react";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { HomeIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
    title?: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <Navbar className="w-full items-center justify-between py-2 px-2 print:hidden">
            <NavbarBrand className="inline-flex gap-2">
                <Link href="/" ><HomeIcon className="h-4 w-4 outline-2 border-black border rounded-lg" /></Link>
                <p className="font-semibold text-inherit text-sm">{title}</p>
            </NavbarBrand>
            <NavbarContent className="gap-2" justify="end">
                <NavbarItem className="text-midle-blue">
                    <Link href="/cv" >CV</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/projects" >Projects</Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/blog" >Blog</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
};
