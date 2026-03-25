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
