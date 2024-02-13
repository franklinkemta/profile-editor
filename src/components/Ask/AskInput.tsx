import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

export default function App() {
    const [q, setQ] = useState<string>();
    return (
        <div className="min-w-[50%] px-1 py-2 rounded-xl flex justify-center items-center  ">
            <Textarea
                id="askInput"
                value={q}
                isDisabled
                onClear={() => setQ("")}
                onChange={(e) => setQ(e.target.value)}
                radius="lg"
                color="default"
                classNames={{
                    input: [
                        "text-black",
                        "placeholder:text-gray",
                    ],
                    inputWrapper: [
                        "border-gray-400",
                        "border",
                        "hover:border-blue-700",
                        "bg-white",
                        "!cursor-text",
                    ],
                }}
                placeholder="Ask anything..."
                startContent={
                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-slate-400 mb-0.5  pointer-events-none flex-shrink-0" />
                }
            />
        </div>
    );
}
