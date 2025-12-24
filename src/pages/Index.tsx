import { useState } from "react";
import { Preloader } from "@/components/Preloader";
import { ProfileHeader } from "@/components/ProfileHeader";
import { TechSection } from "@/components/TechSection";
import { ProgramSection } from "@/components/ProgramSection";
import { AboutSection } from "@/components/AboutSection";
import { OrderButton } from "@/components/OrderButton";
import { OrderModal } from "@/components/OrderModal";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container max-w-lg mx-auto">
        <ProfileHeader />
        <TechSection />
        <ProgramSection />
        <AboutSection />
        <OrderButton onClick={() => setIsModalOpen(true)} />
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
