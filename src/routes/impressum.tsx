import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/Article";
import { SiteShell } from "@/components/SiteShell";
import { pageShareMeta } from "@/lib/seo/share-meta";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: pageShareMeta({
      title: "Impressum — GoldSilverHQ",
      description:
        "Legal notice for GoldSilverHQ (English and German): operator, contact, and editorial responsibility. Impressum: Diensteanbieter, Kontakt und redaktionelle Verantwortung. Medienangebot, keine Anlageberatung.",
      imagePath: "/og.jpg",
    }),
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Impressum" }]} />
        <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Impressum</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Legal notice</h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
          <section lang="de" className="min-w-0 lg:pr-10">
            <h2 className="font-display text-3xl">Deutsch</h2>
            <h3 className="mt-8 font-display text-2xl">Angaben gemäß § 5 DDG</h3>

            <h3 className="mt-8 font-display text-2xl">Diensteanbieter</h3>
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

            <h3 className="mt-8 font-display text-2xl">Kontakt</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              E-Mail:{" "}
              <a href="mailto:goldsilverhq@proton.me" className="text-gold hover:text-gold-soft">
                goldsilverhq@proton.me
              </a>
            </p>

            <h3 className="mt-8 font-display text-2xl">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Florian Lahr
              <br />
              c/o IP-Management #8221
              <br />
              Ludwig-Erhard-Str. 18
              <br />
              20459 Hamburg
            </p>

            <h3 className="mt-8 font-display text-2xl">Hinweis</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              GoldSilverHQ ist ein journalistisch-redaktionelles Medienangebot zu Sound Money,
              Währungsgeschichte und physischem Metall. Die Inhalte dienen der Information und
              Bildung. Sie sind keine Anlageberatung, keine Empfehlung und keine Aufforderung,
              Edelmetalle oder andere Finanzinstrumente zu kaufen oder zu verkaufen.
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

          <section
            lang="en"
            className="mt-12 min-w-0 border-t border-line pt-10 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
          >
            <h2 className="font-display text-3xl">English</h2>

            <h3 className="mt-8 font-display text-2xl">Information pursuant to § 5 DDG</h3>

            <h3 className="mt-8 font-display text-2xl">Service provider</h3>
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

            <h3 className="mt-8 font-display text-2xl">Contact</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Email:{" "}
              <a href="mailto:goldsilverhq@proton.me" className="text-gold hover:text-gold-soft">
                goldsilverhq@proton.me
              </a>
            </p>

            <h3 className="mt-8 font-display text-2xl">
              Responsible for content under § 18 (2) MStV
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Florian Lahr
              <br />
              c/o IP-Management #8221
              <br />
              Ludwig-Erhard-Str. 18
              <br />
              20459 Hamburg
            </p>

            <h3 className="mt-8 font-display text-2xl">Notice</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              GoldSilverHQ is a journalistic-editorial media offering on sound money, monetary
              history, and physical metal. The content is for information and education. It is not
              investment advice, not a recommendation, and not a solicitation to buy or sell
              precious metals or other financial instruments.
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
      </div>
    </SiteShell>
  );
}
