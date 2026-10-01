import { useId, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { SectionFigure } from "@/lib/content/bodies";
import { cn } from "@/lib/utils";

const layoutClass: Record<NonNullable<SectionFigure["layout"]>, string> = {
  /** Full prose-column width — landscapes / panoramas. */
  breakout: "article-figure--breakout my-8 w-full clear-both",
  /** Narrower centered band — coin plates, maps. */
  inset: "article-figure--inset my-8 mx-auto w-full max-w-[22rem] clear-both sm:max-w-[26rem]",
  /** Text-wrap left (desktop); stacks full-width on small screens. */
  "float-start":
    "article-figure--float-start my-4 w-full clear-both sm:float-left sm:mr-6 sm:mb-3 sm:w-[min(46%,18rem)] sm:clear-left",
  /** Text-wrap right (desktop); stacks full-width on small screens. */
  "float-end":
    "article-figure--float-end my-4 w-full clear-both sm:float-right sm:ml-6 sm:mb-3 sm:w-[min(46%,18rem)] sm:clear-right",
};

function FigureCaption({
  caption,
  credit,
  id,
  className,
}: {
  caption?: string;
  credit?: string;
  id?: string;
  className?: string;
}) {
  if (!caption && !credit) return null;
  return (
    <figcaption id={id} className={cn("mt-2 max-w-prose text-sm leading-snug text-muted", className)}>
      {caption ? <span className="block">{caption}</span> : null}
      {credit ? <span className="mt-0.5 block text-xs text-faint">{credit}</span> : null}
    </figcaption>
  );
}

/**
 * Mid-article figure with optional layout variants + click-to-enlarge lightbox.
 * Default (no `layout`) preserves the legacy stacked figure. Set `lightbox`
 * (or any `layout`) to opt into the WebHispania-style enlarge pattern.
 *
 * Body figures keep the asset’s **intrinsic aspect ratio** (no 5:2 / square
 * crop frame). Use natural-format JPEGs here — do not reuse hero `cover52`
 * crops for coin plates. Hero/OG stay on `ArticleHeroImage` (5:2 cover).
 */
export function ArticleFigure({ figure }: { figure: SectionFigure }) {
  const captionId = useId();
  const layout = figure.layout;
  const lightbox = figure.lightbox ?? Boolean(layout);
  const [open, setOpen] = useState(false);

  const frame = (
    <div
      className={cn(
        // No aspect-* / object-cover — frame follows the image, not a site crop.
        "overflow-hidden rounded-xl bg-raised",
        lightbox && "ring-0 transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
      )}
    >
      <img
        src={figure.src}
        alt={figure.alt}
        width={figure.width ?? 800}
        height={figure.height ?? 480}
        className="block h-auto w-full max-w-full object-contain"
        decoding="async"
        loading="lazy"
      />
    </div>
  );

  const caption = (
    <FigureCaption caption={figure.caption} credit={figure.credit} id={captionId} />
  );

  if (!lightbox) {
    return (
      <figure className={cn(layout ? layoutClass[layout] : "my-8 w-full max-w-[42rem]")}>
        {frame}
        {caption}
      </figure>
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <figure className={cn(layout ? layoutClass[layout] : "my-8 w-full max-w-[42rem]")}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="group block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
            aria-haspopup="dialog"
            aria-describedby={captionId}
          >
            {frame}
            <span className="sr-only">Enlarge image</span>
          </button>
        </Dialog.Trigger>
        {caption}
      </figure>

      <Dialog.Portal>
        <Dialog.Overlay className="article-lightbox-overlay fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px]" />
        <Dialog.Content
          className="article-lightbox-content fixed top-1/2 left-1/2 z-50 flex max-h-[min(92vh,56rem)] w-[min(92vw,52rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl bg-[#f7f4ef] text-[#1a1814] shadow-[0_24px_80px_rgba(0,0,0,0.45)] outline-none"
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => {
            // Prefer the close control so keyboard users can dismiss immediately.
            const close = (e.currentTarget as HTMLElement).querySelector<HTMLElement>(
              "[data-article-lightbox-close]",
            );
            if (close) {
              e.preventDefault();
              close.focus();
            }
          }}
        >
          <div className="flex items-center justify-end px-2 pt-2">
            <Dialog.Close asChild>
              <button
                type="button"
                data-article-lightbox-close
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-[#3d3830] transition-colors hover:bg-black/6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a227]"
                aria-label="Close enlarged image"
              >
                <X className="size-5" aria-hidden />
              </button>
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-4 pb-4 sm:px-6 sm:pb-5">
            <img
              src={figure.src}
              alt={figure.alt}
              width={figure.width ?? 1200}
              height={figure.height ?? 720}
              className="mx-auto h-auto max-h-[min(70vh,40rem)] w-auto max-w-full object-contain"
              decoding="async"
            />
            <div className="mx-auto mt-4 max-w-2xl text-center text-sm leading-snug text-[#5a5348]">
              <Dialog.Title asChild>
                <p className={cn("m-0 font-normal", !figure.caption && "sr-only")}>
                  {figure.caption || figure.alt}
                </p>
              </Dialog.Title>
              {figure.credit ? (
                <p className="mt-1 text-xs text-[#7a7368]">{figure.credit}</p>
              ) : null}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
