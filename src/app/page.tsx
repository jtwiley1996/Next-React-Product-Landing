import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 border-white bg-black border-opacity-25 border-0.05 w-[80%] mx-auto">
      <header className="w-full text-center py-10 text-white">
        <h1 className="md:text-8xl text-4xl font-bold mb-7 ">LumaConnect</h1>
        <p className="md:text-xl text-md opacity-75 text-gradient mb-3">Illuminate your home with smart light technology</p>
        <p className="text-xs opacity-75 italic"><span className="text-gradient">Starting at</span> $99</p>
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
        <ul className="list-inside mt-4 opacity-75 text-gradient">
          <li>Voice Control</li>
          <li>Adjustable Brightness</li>
          <li>Color Changing</li>
          <li>Energy Efficient</li>
        </ul>
      </section>
    </main>
  );
}
