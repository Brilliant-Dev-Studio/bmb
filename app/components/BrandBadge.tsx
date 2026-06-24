"use client";

import CircularText from "./CircularText";

const letterColor = () => "#1A3A8F";

export default function BrandBadge() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden md:block">
      <CircularText
        text="BMB ENTERTAINMENT CO. LTD. • "
        spinDuration={18}
        onHover="speedUp"
        getLetterColor={letterColor}
        className="h-[96px] w-[96px] text-[10px] uppercase tracking-[0.08em]"
      />
    </div>
  );
}
