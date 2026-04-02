export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl font-bold">REELCRAFTSTUDIO</h1>
        <p className="mt-4">Dark cinematic video editing for creators & brands</p>
      </section>

      <section className="p-10">
        <h2 className="text-3xl mb-6">Pricing</h2>
        <p>Instagram Reels — ₹999+</p>
        <p>Trailer Edit — ₹2499+</p>
        <p>Brand Promo — ₹3999+</p>
      </section>

      <section className="p-10">
        <h2 className="text-3xl mb-6">Reviews</h2>
        <p>⭐ Amazing cinematic edits!</p>
      </section>
    </div>
  );
}
