import Layoute from "@/components/Layoute";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Layoute className=''>
        <Component {...pageProps} />
      </Layoute>
    </ThemeProvider>
  );
}
