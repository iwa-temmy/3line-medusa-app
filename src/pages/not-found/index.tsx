import { Undo2 } from "lucide-react";
import errorLottie from "../../../public/assets/lotties/404.json";
import { Link } from "react-router-dom";
import LottieAnimation from "@/components/ui/lottie-animation";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-h-[1200px]">
      <LottieAnimation animationData={errorLottie} height={300} />
      <div className=" bg-white dark:bg-transparent text-center">
        <h3 className="text-2xl font-bold">
          Sorry, it seems you&apos;re lost.
        </h3>
      </div>
      <div className="absolute bottom-10">
        <Link to="/settings" className="flex gap-3 items-center">
          <Undo2 />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
