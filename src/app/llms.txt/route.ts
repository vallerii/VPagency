// /llms.txt: a plain-text map of the site for AI assistants and crawlers
// (llmstxt.org format). Built from the same catalog the pages render, so it
// never drifts from the site. German only, like the public site.
import { services, techs, items } from "@/content/catalog";
import { SITE, absoluteUrl } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const line = (id: string) => (items[id] ? `  - ${items[id].de}: ${items[id].dde}` : "");
  const out: string[] = [
    `# ${SITE.name}`,
    "",
    "> Wir bauen Websites, Online-Shops, Systeme und Automatisierungen für Unternehmen. Ob etwas nicht funktioniert, ein fertiges Pflichtenheft vorliegt oder etwas Neues starten soll: Wir prüfen es und setzen es um.",
    "",
    "## Leistungen",
    ...services.map((s) => `- [${s.nav.de}](${absoluteUrl(`/leistungen/${s.id}`)}): ${s.title.de}. ${s.lead.de}`),
    "",
    "## Technologien",
    ...techs.map((t) => `- [${t.title.de}](${absoluteUrl(`/technologien/${t.id}`)}): ${t.lead.de}`),
    "",
    "## Leistungen im Detail",
  ];
  for (const s of services) {
    out.push("", `### ${s.nav.de}`);
    for (const g of s.groups) out.push(`- ${g.title.de}`, ...g.ids.map(line).filter(Boolean));
  }
  out.push("", "## Kontakt", `- [Anfrage stellen](${absoluteUrl("/#anfrage")})`, "");
  return new Response(out.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
