import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

interface ProjectCardProps {
    headTitle?: string,
    subTitle?: string,
    name?: string,
    description?: string,
    action?: string
    backgroundImg?: string
    askAction?: boolean
}

export default function CardItem({
    headTitle, subTitle,
    name, description,
    action,
    backgroundImg = "/images/projects/viize/mlops-loop-en.jpg"
}: ProjectCardProps) {
    const scrollTo = () => {
        const askElement = document.getElementById('askElement');
        const askInput = document.getElementById('askInput') as HTMLInputElement;
        if (askElement && askInput) {
            askElement.scrollIntoView({ behavior: 'smooth' });
            askInput.value = `Please tell me about: ${name}`
        }
    }
    return (
        <Card shadow="sm" isFooterBlurred className="w-full min-h-[300px] col-span-12 sm:col-span-12">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{headTitle}</p>
                <h4 className="text-white/90 font-medium text-xl">{subTitle}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-contain"
                src={backgroundImg}
            />
            <CardFooter className=" bg-gray-100 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-col">
                    <p className="text-tiny">{name}</p>
                    <p className="text-tiny">{description}</p>
                </div>
                {action
                    && (<Button onClick={scrollTo} className="ml-auto" radius="full" size="sm" variant="bordered"
                        startContent={<ChatBubbleLeftRightIcon className="h-4 w-4 text-slate-400 mb-0.5  pointer-events-none flex-shrink-0" />}><span className="hidden md:block">{action}</span></Button>)
                }

            </CardFooter>
        </Card>
    )
};
