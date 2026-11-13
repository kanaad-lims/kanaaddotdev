import { Shell, SectionHeader } from "@/components/Layout";
import CircularGallery from "@/components/photoanim/CircularGallery";

const galleryItems = [
  { image: "/images/gallery/ieeeaward.JPG", text: "IEEE Hackathon 2025" },
  { image: "/images/gallery/awardindi.jpeg", text: "IEEE Best SB Award 2025" },
  { image: "/images/gallery/deccanteam.jpeg", text: "Deccan XI Football Club" },
  { image: "/images/gallery/hpair_confirmation.png", text: "Acceptance into HPAIR '26" },
  { image: "/images/gallery/iitdindi.jpeg", text: "IIT Delhi Robocon 2025" },
  { image: "/images/gallery/logiphoto.jpeg", text: "Logitech launch @ PDF'25" },
  { image: "/images/gallery/messileo.jpeg", text: "Messi event in Mumbai" },
  { image: "/images/gallery/paperpres.jpeg", text: "Paper presentation @ ICEI 2026" },
  { image: "/images/gallery/roboconteam.jpeg", text: "Robocon Team Rudra 2025" },
];

export function Gallery() {
  return (
    <div id="gallery">
      <SectionHeader
        title="Gallery"
        aside={
          <span className="font-mono text-[11px] text-[var(--soft)] hidden sm:inline">
            "Proof that I occasionally step away from the keyboard."
          </span>
        }
      />
      <Shell>
        <div className="h-[320px] w-full">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            fontUrl=""
            font="bold 20px JetBrains Mono"
            scrollSpeed={1}
          />
        </div>
      </Shell>
    </div>
  );
}

export default Gallery;
