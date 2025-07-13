import TrueFocus from "./TrueFocus";
import Waves from "./waves";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Waves />
      <img className="h-96 z-10" src="jason.jpg" alt="jason" />
      <TrueFocus
        sentence="Hi, I'm Jason."
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <h2 className="text-4xl font-bold text-left">A Photographer</h2>
    </div>
  );
};

export default Hero;
