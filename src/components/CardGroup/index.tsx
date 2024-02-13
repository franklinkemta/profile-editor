import React from "react";
import Link from "next/link";
import CardItem from "./CardItem";

interface CardGroupProps {
    title?: string,
    moreLink?: string
    items: CardData[]
    action?: string
}

export default function CardGroup({ title, moreLink = "#", items = [], action }: CardGroupProps) {
    return (
        <div>
            <div className="flex px-2">
                <Link href={moreLink} className="text-end w-full underline">{title}</Link>
            </div>
            {items.length ? (
                <div className="w-full gap-2 grid grid-cols-12 _grid-rows-2 px-2 py-2">
                    {
                        items.map((item, index) =>
                            <CardItem key={index} {...item} action={action} />
                        )
                    }

                </div>
            ) : <></>}
        </div>

    )
};
