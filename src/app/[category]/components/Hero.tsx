export function Hero({ category }: { category: string }) {
  return (
    <section className="relative bg-gray-600 category-height before:content-[''] before:block before:w-full before:h-full before:bg-gray-950/50 before:absolute before:top-0 before:left-0">
      <div className="container absolute top-0 z-10 flex flex-col items-center justify-center h-full max-w-2xl text-center -translate-x-1/2 left-1/2">
        <h1 className="mb-4 text-5xl font-bold text-gray-200 capitalize">
          {category}
        </h1>
        <p className="text-gray-200">2 artigos com este marcador</p>
      </div>
    </section>
  )
}
