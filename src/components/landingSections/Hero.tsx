export default function Hero() {
  return (
    <section className=" h-screen grid grid-cols-2 bg-linear-to-br from-blue-400 via-purple-500 to-pink-600 text-center items-center  justify-between">
      <div className="text-white">
        <h1 className="text-5xl font-bold mb-4">Text</h1>
        <p className="text-xl">Hero content goes here</p>
      </div>
      <div className="flex items-center justify-center text-white">Image</div>
    </section>
  );
}
