"use client";

import { useMemo, useState } from "react";

export default function BreakEvenCPACalculator() {
  const [aov, setAov] = useState(5000);
  const [margin, setMargin] = useState(40);
  const [conversionRate, setConversionRate] = useState(5);

  const results = useMemo(() => {
    const grossProfitPerSale = aov * (margin / 100);

    // If conversion rate represents the percentage of leads/clicks
    // that become customers:
    const breakEvenCPA =
      grossProfitPerSale * (conversionRate / 100);

    const targetCPA = breakEvenCPA * 0.8;

    return {
      grossProfitPerSale,
      breakEvenCPA,
      targetCPA,
    };
  }, [aov, margin, conversionRate]);

  const currency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-[#fafafa] px-4 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-4 inline-block rounded-full border bg-white px-4 py-2 text-sm font-medium text-gray-600">
            Free Performance Marketing Tool
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Break-even CPA Calculator
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Find out the maximum amount you can afford to spend acquiring a
            customer before your campaign becomes unprofitable.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border bg-white shadow-sm md:grid-cols-2">
          {/* Inputs */}
          <section className="p-7 md:p-10">
            <h2 className="mb-8 text-xl font-semibold text-gray-900">
              Your numbers
            </h2>

            <div className="space-y-7">
              <Input
                label="Average Order Value"
                prefix="₹"
                value={aov}
                onChange={setAov}
              />

              <Input
                label="Gross Margin"
                suffix="%"
                value={margin}
                onChange={setMargin}
              />

              <Input
                label="Conversion Rate"
                suffix="%"
                value={conversionRate}
                onChange={setConversionRate}
              />
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-500">
              Your conversion rate is the percentage of leads or visitors that
              become paying customers.
            </div>
          </section>

          {/* Results */}
          <section className="bg-gray-950 p-7 text-white md:p-10">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
              Your Break-even CPA
            </p>

            <div className="mt-3 text-5xl font-bold tracking-tight">
              {currency(results.breakEvenCPA)}
            </div>

            <p className="mt-4 leading-6 text-gray-400">
              Spending more than this per acquisition would make the campaign
              unprofitable based on your current inputs.
            </p>

            <div className="my-8 h-px bg-gray-800" />

            <div className="space-y-5">
              <ResultRow
                label="Gross profit per sale"
                value={currency(results.grossProfitPerSale)}
              />

              <ResultRow
                label="Break-even CPA"
                value={currency(results.breakEvenCPA)}
              />

              <ResultRow
                label="Recommended target CPA"
                value={currency(results.targetCPA)}
                highlight
              />
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Recommended target
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Aim for approximately{" "}
                <span className="font-semibold text-white">
                  {currency(results.targetCPA)}
                </span>{" "}
                or lower to maintain a 20% safety buffer.
              </p>
            </div>
          </section>
        </div>

        {/* Formula */}
        <div className="mt-8 rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold text-gray-900">
            How it's calculated
          </p>

          <p className="mt-2 text-sm text-gray-500">
            AOV × Gross Margin × Conversion Rate = Break-even CPA
          </p>

          <div className="mt-4 font-mono text-sm text-gray-700">
            {currency(aov)} × {margin}% × {conversionRate}% ={" "}
            <strong>{currency(results.breakEvenCPA)}</strong>
          </div>
        </div>
      </div>
    </main>
  );
}

function Input({
  label,
  prefix,
  suffix,
  value,
  onChange,
}: {
  label: string;
  prefix?: string;
  suffix?: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900">
        {prefix && (
          <span className="mr-2 text-lg text-gray-400">{prefix}</span>
        )}

        <input
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-4 text-lg font-semibold text-gray-950 outline-none"
        />

        {suffix && (
          <span className="ml-2 text-gray-400">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-gray-400">{label}</span>

      <span
        className={`text-lg font-semibold ${
          highlight ? "text-emerald-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}