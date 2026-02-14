import DownloadApp from "@/components/layouts/home/DownloadApp";
import FeaturedDecision from "@/components/layouts/home/FeaturedDecision";
import FeaturedServices from "@/components/layouts/home/FeaturedServices";
import Hero from "@/components/layouts/home/Hero";
import { getUser } from "@/services/getUser";
import { userService } from "@/services/user.service";


export default async function Home() {

  // const {session, user} = await getUser();
  // console.log(session, user)

  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <FeaturedDecision></FeaturedDecision>
      <FeaturedServices></FeaturedServices>
      <DownloadApp></DownloadApp>
    </div>
  );
}
