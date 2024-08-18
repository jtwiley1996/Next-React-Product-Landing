import Image from "next/image";
import Link from "next/link";

export default function LearnMore() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 border-white bg-black border-opacity-25 border-0.05 w-[80%] mx-auto">
      <header className="w-full text-center py-10 text-white">
        <h1 className="text-6xl opacity-60 font-bold mb-7">Learn More About LumaConnect</h1>
      </header>

      <section className="relative my-10 max-w-4xl mx-auto text-center">
        <p className="text-lg opacity-75 mb-6">
          The LumaConnect smart light bulb is designed to revolutionize how you experience lighting in your home. 
          With advanced voice control capabilities, you can effortlessly adjust the lighting settings using simple voice commands. 
          The bulb also features adjustable brightness and color-changing options, allowing you to create the perfect ambiance for any occasion.
        </p>
        <p className="text-lg opacity-75 mb-6">
          Our energy-efficient technology ensures that you save on electricity without compromising on performance. 
          The sleek and modern design fits seamlessly into any décor, while the easy-to-use app provides full control over your lighting preferences. 
          Discover the future of smart lighting with LumaConnect, and enjoy a personalized lighting experience like never before.
        </p>
        <Link href="/" className="text-white underline mt-4 inline-block">Back to Home</Link>
      </section>
    </main>
  );
}
