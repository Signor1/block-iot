import Hero from "./components/Hero"
import MapWrapper from "./components/MapWrapper"
import MaxWrapper from "./components/MaxWrapper"
import NavBar from "./components/NavBar"
import Reports from "./components/Reports"


const App = () => {
  return (
    <main className='AppBg min-h-screen px-2 pt-2'>
      <MaxWrapper className="lg:px-14 md:px-8 px-4">
        <NavBar />
        <Hero />
        <MapWrapper />
        <Reports />
      </MaxWrapper>
    </main>
  )
}

export default App
