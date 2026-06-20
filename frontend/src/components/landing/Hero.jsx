export default function Hero({ onGetStarted }) {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
      <div className="grid w-full gap-16 lg:grid-cols-2">

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500">
            Project Intelligence
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Transform ideas into successful projects.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Forge helps student teams validate ideas, assign responsibilities,
            manage scope, track progress, and deliver projects with confidence.
          </p>

          <div className="mt-10 flex gap-4">
            <button 
              onClick={(e) => onGetStarted(e)}
              className="rounded-lg bg-[#D97706] px-6 py-3 font-medium text-white transition hover:bg-[#b46205]"
            >
              Start Forging
            </button>

            <button className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:bg-zinc-900">
              View Demo
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-[#111111] p-8">

            <div className="space-y-4">

              <div className="rounded-xl border border-zinc-800 p-4">
                 Idea
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-800 p-4">
                 Validation
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-zinc-800 p-4">
                 Planning
              </div>

              <div className="text-center text-zinc-500">↓</div>

              <div className="rounded-xl border border-amber-600 bg-amber-600/10 p-4">
                 Launch
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}