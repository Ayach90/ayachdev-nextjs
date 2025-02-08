import { FullWidth } from "@/lib/layout/FullWidth";
import style from "./style.module.css";

export const HeroBanner = () => {
  return (
    <FullWidth
      className={`flex ${style.heroBanner} py-48 px-4 justify-center items-center`}
    >
      <h1 className="text-white">
        <i>console.log(</i> &quot;Hola dev&quot; <i>)</i>
      </h1>
    </FullWidth>
  );
};
