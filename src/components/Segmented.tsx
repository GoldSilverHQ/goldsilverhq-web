export function Segmented<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (v: T) => void;
  options: { id: T; label: string }[];
  label: string;
}) {
  return (
    <div
      className="inline-flex rounded-full bg-surface p-1 shadow-[var(--shadow-border)]"
      role="tablist"
      aria-label={label}
    >
      {options.map((opt) => {
        const on = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(opt.id)}
            className={`min-h-10 rounded-full px-4 text-sm transition-[color,background-color] duration-150 ease-out active:scale-[0.96] ${
              on ? "bg-gold text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
