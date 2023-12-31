import Intro from "./components/Intro/Intro";
import Editorial from "./components/Editorial/Editorial";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";

import Advertisement from "./components/Advertisement/Advertisement";

export default function Home() {
  // const [mode, setMode] = useState<String | null | undefined>(null);

  // useEffect(() => {
  //   const handleThemeChange = () => {
  //     setMode(document.querySelector("body")?.getAttribute("data-theme"));
  //   };
  //   // Attach an event listener to the body element
  //   document.body.addEventListener("theme-change", handleThemeChange);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.body.removeEventListener("theme-change", handleThemeChange);
  //   };
  // }, []);

  return (
    <>
      <main>
        <Intro />
        <Editorial />
        <Tech />
        <Advertisement />
      </main>

      <Footer />
    </>
  );
}
