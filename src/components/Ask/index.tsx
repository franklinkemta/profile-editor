import React from "react";
import AskInput from "./AskInput";

interface AskProps {
}

export default function Ask({ }: AskProps) {
    return (
        <div id="askElement" className="w-full flex flex-col bg-gray-100 gap-2">
            <div className="min-h-20 text-sm p-1">

            </div>
            <div className="flex items-center justify-center">
                <AskInput />
            </div>
        </div>
    )
};
