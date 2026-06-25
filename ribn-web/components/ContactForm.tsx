"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";

const initialState = { success: false, message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="space-y-10">
      <div>
        <label
          htmlFor="name"
          className="block text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre"
          className="w-full bg-transparent border-b border-[#1f1f1f] pb-3 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors duration-300"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full bg-transparent border-b border-[#1f1f1f] pb-3 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors duration-300"
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3"
        >
          Presupuesto estimado
        </label>
        <div className="relative">
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className="w-full bg-transparent border-b border-[#1f1f1f] pb-3 text-white text-base focus:outline-none focus:border-zinc-400 transition-colors duration-300 appearance-none rounded-none cursor-pointer"
          >
            <option value="" disabled className="bg-[#0a0a0a] text-zinc-500">
              Seleccioná un rango
            </option>
            <option value="150-300" className="bg-[#0a0a0a] text-white">
              $150 a $300 USD
            </option>
            <option value="300-800" className="bg-[#0a0a0a] text-white">
              $300 a $800 USD
            </option>
            <option value="800-1500" className="bg-[#0a0a0a] text-white">
              $800 a $1500 USD
            </option>
            <option value="+1500" className="bg-[#0a0a0a] text-white">
              +$1500 USD
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-500 pb-3">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="project"
          className="block text-[11px] uppercase tracking-[0.2em] text-zinc-600 mb-3"
        >
          Sobre tu proyecto
        </label>
        <textarea
          id="project"
          name="project"
          rows={3}
          required
          placeholder="Contanos brevemente sobre tu proyecto..."
          className="w-full bg-transparent border-b border-[#1f1f1f] pb-3 text-white text-base placeholder:text-zinc-700 focus:outline-none focus:border-zinc-400 transition-colors duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending || state.success}
        className="inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isPending
          ? "Enviando..."
          : state.success
          ? "¡Mensaje enviado! ✓"
          : "Enviar mensaje"}
        {!isPending && !state.success && (
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </button>

      {state.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
