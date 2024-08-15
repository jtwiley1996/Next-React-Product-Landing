import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <header className="w-full text-center py-10 text-white">
        <h1 className="text-4xl font-bold">Smart Light Bulb</h1>
        <p className="text-xl mt-2">Illuminate your home with smart technology</p>
      </header>

      <section className="my-10 max-w-4xl mx-auto text-center">
        <Image
          src="/smart-light-bulb.jpg" // Make sure this image exists in the public folder
          alt="Smart Light Bulb"
          width={900}
          height={600}
          className="mx-auto"
        />
        <h2 className="text-2xl font-semibold mt-4">Features</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Voice Control</li>
          <li>Adjustable Brightness</li>
          <li>Color Changing</li>
          <li>Energy Efficient</li>
        </ul>
      </section>
    </main>
  );
}
