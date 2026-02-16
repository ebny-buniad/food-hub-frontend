import DownloadApp from "@/components/layouts/home/DownloadApp";
import FeaturedDecision from "@/components/layouts/home/FeaturedDecision";
import FeaturedServices from "@/components/layouts/home/FeaturedServices";
import Hero from "@/components/layouts/home/Hero";
import { getUser } from "@/services/getUser";


export default async function Home() {

  const user = await getUser();
  console.log('user in home' ,user)

  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <FeaturedDecision></FeaturedDecision>
      <FeaturedServices></FeaturedServices>
      <DownloadApp></DownloadApp>
    </div>
  );
}
