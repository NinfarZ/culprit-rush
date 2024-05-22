import Image from "next/image";
import { Map } from "./components/map";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Map />
    </main>
  );
}
