// Layout Components
import AvitoInfo from "./layouts/AvitoInfo";
import ShortReview from "./layouts/ShortReview";
import Welcome from "./layouts/Welcome";

export default function Home() {
  return (
    <>
      <Welcome />
      <ShortReview />
      <AvitoInfo />
    </>
  )
}