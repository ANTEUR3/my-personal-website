import Layoute from "@/components/Layoute";
import { DataContextProvider } from "@/DataContext.js";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <DataContextProvider>
      <Layoute className=''>
        <Component {...pageProps} />
      </Layoute>
      </DataContextProvider>
    </ThemeProvider>
  );
}
