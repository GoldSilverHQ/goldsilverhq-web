import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: pageShareMeta({
      title: "Impressum — GoldSilverHQ",
      description:
        "Impressum von GoldSilverHQ: Diensteanbieter, Kontakt und redaktionelle Verantwortung. Medienangebot, keine Anlageberatung.",
      imagePath: "/og.jpg",
    }),
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Impressum" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Impressum</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Angaben gemäß § 5 DDG</h1>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Diensteanbieter</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Florian Lahr
            <br />
            GoldSilverHQ
            <br />
            c/o IP-Management #8221
            <br />
            Ludwig-Erhard-Str. 18
            <br />
            20459 Hamburg
            <br />
            <a href="https://www.goldsilverhq.com" className="text-gold hover:text-gold-soft">
              www.goldsilverhq.com
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Kontakt</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            E-Mail:{" "}
            <a href="mailto:goldsilverhq@proton.me" className="text-gold hover:text-gold-soft">
              goldsilverhq@proton.me
            </a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            Florian Lahr
            <br />
            c/o IP-Management #8221
            <br />
            Ludwig-Erhard-Str. 18
            <br />
            20459 Hamburg
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl">Hinweis</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            GoldSilverHQ ist ein journalistisch-redaktionelles Medienangebot zu Sound Money, Währungsgeschichte und
            physischem Metall. Die Inhalte dienen der Information und Bildung. Sie sind keine Anlageberatung, keine
            Empfehlung und keine Aufforderung, Edelmetalle oder andere Finanzinstrumente zu kaufen oder zu verkaufen.
          </p>
          <p className="mt-3 text-sm">
            <Link
              to="/sound-money/$slug"
              params={{ slug: "information-not-advice" }}
              className="text-gold hover:text-gold-soft"
            >
              Information vs investment advice →
            </Link>
          </p>
        </section>
      </div>
    </SiteShell>
  );
}
