import Header from "@/components/header";
import ModalFormCall from "@/components/modalFormCall";
import dynamic from "next/dynamic";
import { useState } from "react";
import { MoonLoader } from "react-spinners";

const OurServices = dynamic(() => import("@/components/ourServices"), {
  loading: () => <MoonLoader color="red" size={50} />,
});
const Slider = dynamic(() => import("@/components/slider"), {
  loading: () => <MoonLoader color="red" size={50} />,
});
const WhyAreWe = dynamic(() => import("@/components/whyAreWe"), {
  loading: () => <MoonLoader color="red" size={50} />,
});
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <MoonLoader color="red" size={50} />,
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Header openModal={openModal} />
      <main>
        <OurServices openModal={openModal} />
        <Slider />
        <WhyAreWe />
      </main>
      <Footer />
      <ModalFormCall
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
}
