import Image from "next/image";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0D12] border-t border-[#1A1D24] text-[#8B8D90] py-6 px-4 mt-auto">
      <div className="container mx-auto  flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Your Custom Image Logo Slot */}
        <div className="flex items-center select-none">
          <Image
            src={logoImg}
            alt="FITLOG Logo"
            height={16} // 2. Locked to the exact compact height profile from your screenshot
            className="w-auto h-4 object-contain"
            priority
          />
        </div>

        {/* Right Side: Copyright Telemetry Statement */}
        <div className="text-[11px] font-medium tracking-wide text-center sm:text-right text-[#575C66]">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
