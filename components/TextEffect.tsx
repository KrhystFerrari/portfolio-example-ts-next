import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Programmer",
        1500,
        "Web Developer",
        1500,
        "Software Engineer",
        1500,
        "Software Architect",
        1500,
      ]}
      speed={40}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
