import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 border-white border-0.05 w-[90%] mx-auto">
      <header className="w-full text-center py-10 text-white">
        <h1 className="text-8xl opacity-75 font-bold mb-9">Smart Light Bulb</h1>
        <p className="text-m mt-3 opacity-75">Illuminate your home with smart technology</p>
      </header>

      <section className="relative my-10 max-w-4xl mx-auto text-center">
        <div className="relative w-full h-auto">
          <Image
            src="/smart-light-bulb.jpg"
            alt="Smart Light Bulb"
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/60 to-transparent pointer-events-none"></div>
        </div>
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
