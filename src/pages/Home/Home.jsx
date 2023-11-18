import { Container } from "@chakra-ui/react";

// Layout Components
import Welcome from "./layouts/Welcome";

export default function Home() {
  return (
    <Container maxW={{ base: 'full', lg: 'container.lg' }}>
      <Welcome />
      {/* Others Components */}
    </Container>
  )
}