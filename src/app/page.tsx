import Header from "@/components/Header";
import { Avatar, Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="min-h-screen py-0 lg:px-60 text-xs print:px-0">
      <div className="bg-white py-3 px-8 min-h-screen">
        <Header title="Welcome" />
        <div className="flex flex-col gap-2 py-10 px-3 min-h-60">
          <Avatar isBordered isFocusable radius="lg" color="primary" src="https://avatars.githubusercontent.com/u/17672563?v=4" className="w-20 h-20 text-large" />
          <h2 className="font-semibold text-lg">Franklin Kemta</h2>
          <Divider />
          <div className="w-full flex flex-col items-center justify-center">
            <h3>Hi! am actually updating this application... <a href="https://github.com/franklinkemta/profile-editor" className="underline">Check project on Github</a></h3>
            <br />
            <a href="https://franklinkemta-2020.web.app" className="underline">Prev version here</a>
          </div>
          <Divider />
        </div>
      </div>
    </main>
  );
}
