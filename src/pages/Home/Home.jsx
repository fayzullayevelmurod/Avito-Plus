// Layout Components
import AvitoInfo from "./layouts/AvitoInfo";
import ShortReview from "./layouts/ShortReview";
import Welcome from "./layouts/Welcome";
import PicturesWork from "./layouts/PicturesWork";
import AvitoPlus from "./layouts/AvitoPlus";
import Statistic from "./layouts/Statistic";
import Help from "./layouts/Help";
import Subscription from "./layouts/Subscription";

import { Container } from "../../components/common";

export default function Home() {
  return (
    <Container>
      <Welcome />
      {/* <ShortReview /> */}
      <AvitoInfo />
      <PicturesWork />
      <AvitoPlus />
      <Statistic />
      <Subscription />
      <Help />
    </Container>
  );
}
