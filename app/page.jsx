export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold tracking-wide">
          REELCRAFTSTUDIO
        </h1>
        <p className="mt-6 text-xl text-zinc-300">
          Dark cinematic video editing for creators, brands & films
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-8 py-3 rounded-2xl bg-white text-black font-semibold">
            Book Now
          </button>
          <button className="px-8 py-3 rounded-2xl border border-zinc-600">
            View Instagram
          </button>
        </div>
      </section>

      <section className="px-8 py-20">
        <h2 className="text-4xl font-semibold mb-10">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="h-56 rounded-2xl bg-zinc-900 flex items-center justify-center">
            Cinematic Viral Reel
          </div>
          <div className="h-56 rounded-2xl bg-zinc-900 flex items-center justify-center">
            Netflix Style Trailer
          </div>
          <div className="h-56 rounded-2xl bg-zinc-900 flex items-center justify-center">
            Luxury Brand Promo
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-zinc-950">
        <h2 className="text-4xl font-semibold mb-10">Pricing</h2>
        <p>Instagram Reels — ₹999+</p>
        <p>Trailer Edit — ₹2499+</p>
        <p>Brand Promo — ₹3999+</p>
      </section>
    </div>
  );
}
