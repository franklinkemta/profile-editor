import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";

export default function Blog() {
  return (
    <main className="layout">
      <div className="page">
        <Header title="Cover Letter" />

        <div className="w-full flex flex-col items-center justify-center min-h-60 px-2">
          <p>
            <span className="print:hidden">[WIP]</span> <br /><br />
            Dear Explorer <br /><br />
            My name is <b>Franklin Kemta</b>, I would love to work on your exciting project. <br />
            Feel free to reach out, Cant wait to hear about you ! <br /><br />
            Regards
          </p>
        </div>
        <Divider className="print:hidden" />
        <a href="#" className="print:hidden"> <small> Get your specific cover letter</small> </a>
      </div>
    </main>
  );
}
