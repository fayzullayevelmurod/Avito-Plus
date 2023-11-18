// Layout Components
import AvitoInfo from "./layouts/AvitoInfo";
import ShortReview from "./layouts/ShortReview";
import Welcome from "./layouts/Welcome";
import Subscription from "./layouts/Subscription";

import { Container } from "../../components/common";

export default function Home() {
  return (
    <Container>
      <Welcome />
      <ShortReview />
      <AvitoInfo />
      <Subscription />
    </Container>
  )
}