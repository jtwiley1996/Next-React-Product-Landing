import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 border-white bg-black border-opacity-25 border-0.05 w-[80%] mx-auto">
      <header className="w-full text-center py-10 text-white">
        <h1 className="text-8xl opacity-60 font-bold mb-7">About Us</h1>
        <p className="text-xl opacity-75 text-gradient mb-3">Learn more about our innovative smart light technology</p>
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
        <div className="mt-4 text-white">
          <p className="text-lg opacity-75">
            At LumaConnect, we are dedicated to transforming your living spaces with cutting-edge smart lighting technology. Our flagship product, the LumaConnect Smart Light Bulb, is designed to seamlessly integrate into your daily life, offering unparalleled convenience and customization. With advanced voice control, adjustable brightness settings, and an array of vibrant colors, our smart bulb provides both functionality and ambiance to suit any occasion. Engineered for energy efficiency and durability, the LumaConnect Smart Light Bulb is not only a smart choice for modern living but also a step towards a more sustainable future. Our mission is to illuminate your home with innovation, style, and ease, ensuring that every moment is perfectly lit.
          </p>
        </div>
      </section>
    </main>
  );
}
