import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import photo from "@/assets/gabriel.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabriel Francisco — Engenharia de Software, Maringá" },
      { name: "description", content: "Portfólio de Gabriel Francisco Bezerra, estudante de Engenharia de Software focado em backend e Java." },
      { property: "og:title", content: "Gabriel Francisco — Portfólio" },
      { property: "og:description", content: "Estudante de Engenharia de Software. Backend, Java, C e Python." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cmds: Record<string, string[]> = {
  whoami: ["gabriel francisco de almeida bezerra", "20 anos · maringá, pr"],
  "cat objetivo.txt": ["quero construir o lado do sistema que ninguém vê:", "apis, servidores, dados. foco em java + backend."],
  "ls skills/": ["java/  c/  python/  algoritmos/  redes/  arquitetura/"],
  "echo $IDIOMAS": ["pt-BR (nativo) · en (intermediário)"],
};

function Terminal() {
  const [hist, setHist] = useState<string[]>(["whoami"]);
  return (
    <div className="rounded-2xl border border-border bg-card p-5 font-mono text-sm">
      <div className="mb-4 flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-primary" />
      </div>
      <div className="min-h-44 space-y-3">
        {hist.map((c, i) => (
          <div key={i}>
            <p><span className="text-primary">gabriel@maringa</span>:~$ {c}</p>
            {(cmds[c] ?? []).map((l) => <p key={l} className="text-muted-foreground">{l}</p>)}
          </div>
        ))}
        <p><span className="text-primary">gabriel@maringa</span>:~$ <span className="caret">▌</span></p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
        {Object.keys(cmds).map((c) => (
          <button key={c} onClick={() => setHist((h) => [...h.slice(-2), c])}
            className="rounded-full border border-border px-3 py-1 text-xs transition hover:border-primary hover:text-primary">
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

const learning = [
  ["Java", 45], ["C", 55], ["Python", 35], ["Lógica & algoritmos", 65],
] as const;

function Index() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 text-foreground md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between text-sm">
          <span className="font-display text-xl font-extrabold">gf<span className="text-primary">.</span></span>
          <a href="mailto:gf.bezerra10@gmail.com" className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition hover:scale-105">
            vamos conversar →
          </a>
        </header>

        <div className="grid gap-4 md:grid-cols-6">
          {/* name */}
          <section className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:col-span-4 md:row-span-2 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">eng. de software · unicesumar</p>
            <h1 className="mt-16 font-display text-6xl font-extrabold leading-[0.9] tracking-tight md:text-8xl">
              Oi, eu sou o<br />
              <span className="text-primary">Gabriel.</span>
            </h1>
            <p className="mt-6 max-w-lg text-muted-foreground">
              Estou no começo da faculdade e já sei pra onde quero ir: <span className="text-foreground">backend</span>.
              Gosto de entender como as coisas se conectam — do código até o cabo de rede.
            </p>
          </section>

          {/* photo */}
          <figure className="group relative overflow-hidden rounded-2xl border border-border md:col-span-2 md:row-span-2">
            <img src={photo.url} alt="Gabriel Francisco"
              className="photo-duotone h-80 w-full object-cover object-[50%_72%] transition duration-500 group-hover:scale-105 group-hover:filter-none md:h-full" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs backdrop-blur">
              📍 Maringá, PR
            </figcaption>
          </figure>

          {/* terminal */}
          <div className="md:col-span-3"><Terminal /></div>

          {/* learning */}
          <section className="rounded-2xl border border-border bg-card p-6 md:col-span-3">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-2xl font-bold">Aprendendo</h2>
              <span className="text-xs text-muted-foreground">progresso estimado</span>
            </div>
            <ul className="mt-6 space-y-5">
              {learning.map(([n, v]) => (
                <li key={n}>
                  <div className="mb-2 flex justify-between text-sm"><span>{n}</span><span className="text-muted-foreground">{v}%</span></div>
                  <div className="h-1.5 rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${v}%` }} /></div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">+ fundamentos de redes e arquitetura de computadores</p>
          </section>

          {/* project */}
          <article className="glow rounded-2xl bg-primary p-6 text-primary-foreground md:col-span-4 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">projeto em destaque</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold md:text-7xl">ClassCall</h2>
            <p className="mt-4 max-w-xl">
              Sistema de chamada automática com reconhecimento facial. Planejei a infraestrutura,
              os servidores, os equipamentos e toda a arquitetura de rede.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["infraestrutura", "redes", "visão computacional", "arquitetura"].map((t) => (
                <span key={t} className="rounded-full border border-primary-foreground/40 px-3 py-1">{t}</span>
              ))}
            </div>
          </article>

          <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">acadêmico</p>
            <div>
              <h3 className="mt-8 font-display text-3xl font-bold">Programas em C</h3>
              <p className="mt-2 text-sm text-muted-foreground">Lógica, ponteiros e estruturas na prática.</p>
            </div>
          </article>

          {/* contact */}
          {[
            ["GitHub", "/gfbezerra", "https://github.com/gfbezerra"],
            ["LinkedIn", "/in/gfbezerra", "https://linkedin.com/in/gfbezerra"],
            ["WhatsApp", "(44) 99107-9555", "https://wa.me/5544991079555"],
          ].map(([n, h, url]) => (
            <a key={n} href={url} target="_blank" rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition hover:border-primary md:col-span-2">
              <div><p className="font-display text-2xl font-bold">{n}</p><p className="text-sm text-muted-foreground">{h}</p></div>
              <span className="text-2xl transition group-hover:-rotate-45 group-hover:text-primary">→</span>
            </a>
          ))}
        </div>

        <footer className="mt-8 flex justify-between text-xs text-muted-foreground">
          <span>© 2026 Gabriel Francisco</span>
          <span>gf.bezerra10@gmail.com</span>
        </footer>
      </div>
    </main>
  );
}
