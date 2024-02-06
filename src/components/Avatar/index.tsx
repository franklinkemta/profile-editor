import React from "react";
// import Image from "next/image";
interface AvatarProps {
    name: string
}
export default function Avatar({ name }: AvatarProps) {
    return (
        <div className="font-bold text-2xl text-low-blue px-0">{name}</div>
    )
};
