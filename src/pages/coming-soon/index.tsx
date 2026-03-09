import LottieAnimation from "@/components/ui/lottie-animation";
import underConstruction from "../../../public/assets/lotties/under-construction.json";
import ProtectedLayout from "@/protected-layout";
import TopHeader from "@/components/ui/top-header";

const ComingSoon = () => {
  const pathname = window.location.pathname;
  return (
    <ProtectedLayout className="space-y-3">
      <TopHeader
        title={pathname.replace("/", "")}
        description="This page is currently under construction. We are working hard to bring it to you soon!"
      />
      <section className="flex justify-center flex-1 items-center h-[83vh]">
        <LottieAnimation animationData={underConstruction} height={300} />
      </section>
    </ProtectedLayout>
  );
};

export default ComingSoon;
