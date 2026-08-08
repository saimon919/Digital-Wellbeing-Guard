import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Digital Wellbeing Guard
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Take control of your digital habits.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Download the Android app to track screen time, build healthier routines,
            and stay mindful in the moments that matter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/app-debug.apk"
              download
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download APK
            </a>
            <Link
              href="https://github.com"
              className="text-sm font-medium text-slate-300 underline-offset-4 hover:underline"
            >
              Learn more
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
