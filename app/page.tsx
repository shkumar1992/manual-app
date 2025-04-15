import Hero from "@/components/hero";
import Middle from "@/components/middle";
import Footer from "@/components/footer";
import { Questions } from "@/app/libs/types";

export default async function Home() {
  const res = await fetch('https://manual-case-study.herokuapp.com/questionnaires/972423.json');
  const data: Questions = await res.json();
  return (
    <>
      <Hero data={data}/>
      <Middle />
      <Footer />
    </>
  );
}
