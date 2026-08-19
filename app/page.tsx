export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-slate-950">
              F
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">FinTrack AI</h1>
              <p className="text-xs text-slate-400">
                Smart personal finance
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How it works
            </a>
            <a href="#security" className="transition hover:text-white">
              Security
            </a>
          </div>

          <a
            href="#get-started"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="get-started"
        className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Smarter money management
          </div>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Understand your money.
            <span className="text-emerald-400"> Build better habits.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            FinTrack AI helps you track spending, manage budgets, understand
            financial patterns and turn your everyday transactions into useful
            insights.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="rounded-xl bg-emerald-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore FinTrack
            </a>

            <a
              href="#how-it-works"
              className="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>✓ Secure architecture</span>
            <span>✓ Personal analytics</span>
            <span>✓ AI-powered insights</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Total balance</p>
                <p className="mt-2 text-4xl font-bold">₹84,250</p>
              </div>

              <div className="rounded-xl bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
                +8.4%
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Income</p>
                <p className="mt-2 text-xl font-semibold text-emerald-400">
                  ₹52,000
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Expenses</p>
                <p className="mt-2 text-xl font-semibold text-rose-400">
                  ₹31,750
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium">Monthly spending</p>
                <p className="text-sm text-slate-400">This month</p>
              </div>

              <div className="mt-6 flex h-32 items-end gap-3">
                {[45, 70, 52, 88, 62, 76, 48, 92, 65, 80, 55, 72].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-emerald-500/70 transition hover:bg-emerald-400"
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Core platform
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Everything you need to understand your finances.
            </h3>

            <p className="mt-4 text-slate-400">
              The platform will grow from a simple finance tracker into a
              complete personal finance intelligence system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expense Tracking",
                description:
                  "Record, categorize and search your everyday transactions.",
              },
              {
                title: "Smart Budgets",
                description:
                  "Create monthly budgets and understand where your money goes.",
              },
              {
                title: "Financial Analytics",
                description:
                  "Turn transaction data into useful spending and cash-flow insights.",
              },
              {
                title: "AI Insights",
                description:
                  "Get personalized explanations and suggestions based on your financial patterns.",
              },
              {
                title: "Goals",
                description:
                  "Create savings goals and track progress over time.",
              },
              {
                title: "Reports",
                description:
                  "Generate clear summaries of your financial activity.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  ✓
                </div>

                <h4 className="text-lg font-semibold">{feature.title}</h4>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Simple workflow
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              From transaction to insight.
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Add your transactions", "Record your income and expenses."],
              ["02", "Analyze your activity", "FinTrack organizes your financial data."],
              ["03", "Improve your decisions", "Use analytics and AI insights to plan better."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-7"
              >
                <p className="text-sm font-bold text-emerald-400">{number}</p>
                <h4 className="mt-5 text-xl font-semibold">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/5 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Built for trust
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Privacy and security will be part of the architecture.
            </h3>

            <p className="mt-5 max-w-3xl leading-7 text-slate-400">
              Authentication, authorization, database security, validation,
              protected API routes and secure handling of sensitive information
              will be implemented as the application evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 FinTrack AI. Built as a production-style portfolio project.</p>
          <p>Finance • Analytics • AI</p>
        </div>
      </footer>
    </main>
  );
}