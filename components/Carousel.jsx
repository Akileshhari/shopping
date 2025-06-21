import React from "react";
import BlurText from "../Animated_Components/BlurText";

function Carousel() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center text-left text-white"
      style={{ backgroundImage: "url('/banner/pic-1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-10 md:mx-[150px]">
        {/* Heading BlurText */}
        <BlurText
          text="Shop Smarter, Live Better."
          delay={150}
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-lg md:text-4xl font-bold text-[#785ba5] drop-shadow-md"
        />
         <BlurText
          text="Discover the Best Deals Today!"
          delay={250}
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-lg mt-4  md:text-4xl font-bold text-[#785ba5]  drop-shadow-md"
        />

        {/* Paragraph BlurText */}
        <BlurText
          text="Your journey to excellence starts here."
          delay={300} // Slightly delayed animation for smooth effect
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="mt-4 text-lg md:text-2xl text-[#785ba5] drop-shadow-md"
        />
      </div>
    </div>
  );
}

export default Carousel;
