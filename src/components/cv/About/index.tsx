import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import Avatar from "../Avatar";

export default function About() {
    return (
        <Navbar className="w-full justify-between py-2 px-2">
            <NavbarBrand>
                <Avatar name={"Franklin Kemta"} />
                <p className="font-semibold text-inherit "></p>
            </NavbarBrand>
            <NavbarContent className="gap-2" justify="end">
                <NavbarItem className="text-midle-blue">
                    <Link href="https://www.linkedin.com/in/franklinkemta" target="_blank">LinkedIn</Link>
                </NavbarItem>
                <NavbarItem >
                    <Button as={Link} color="primary" href="https://github.com/franklinkemta" target="_blank" variant="flat">
                        Github
                    </Button>
                </NavbarItem>
                <NavbarItem >
                    <Button as={Link} color="primary" href="https://franklinkemta.notion.site/franklinkemta/Franklin-Kemta-3a3d2139337f4038b1ab9e8a7c3897fa" target="_blank" variant="flat">
                        Notion
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
};
