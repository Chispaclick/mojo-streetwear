import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const heroImages = [
    "/hero.jpg",
    "/hero-2.png",
    "/hero-3.png",
    "/hero-4.png",
    "/hero-5.png",
];

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            style={{
                backgroundImage: `url(${heroImages[currentImage]})`,
            }}
            className="
        relative
        flex min-h-screen w-full items-center justify-center
        overflow-hidden
        bg-cover bg-top
        transition-all duration-1000
      "
        >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30" />

            {/* CONTENT */}
            <div
                className="
          relative z-10
          mx-auto
          flex w-full max-w-6xl
          flex-col
          items-center
          px-6
          text-center
          ml-40
        "
            >
                <h1 className="text-display text-white">
                    Una marca creada para los que rompen <br />
                    reglas y marcan su camino.
                </h1>

                <p className="text-body mt-6 max-w-xl text-white/80">
                    Diseños urbanos, edición limitada y calidad premium.
                </p>

                {/* CTA */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                    <Link
                        to="/hoodieMan"
                        className="
              w-56
              bg-black px-8 py-4
              text-white font-semibold text-center
              transition hover:bg-gray-200 hover:text-black
            "
                    >
                        Ver sudaderas
                    </Link>

                    <Link
                        to="/tshirtsMan"
                        className="
              w-56
              border border-white px-8 py-4
              text-white font-semibold text-center
              transition hover:bg-gray-200 hover:text-black
            "
                    >
                        Ver camisetas
                    </Link>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/80 pt-2">
                    <div className="h-2 w-1 rounded-full bg-white/80" />
                </div>
            </div>
        </section>
    );
};
