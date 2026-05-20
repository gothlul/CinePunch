import { useRef, useEffect, useCallback } from 'react';

interface CarrocelParametters {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
}

export default function Carrocel({ items, renderItem }: CarrocelParametters) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items];

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth / 4;
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2;

    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (el.scrollLeft <= 0)    el.scrollLeft += half;
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex gap-3 overflow-x-auto"
      style={{ scrollbarWidth: 'none' }}
    >
      {duplicated.map((item, i) => (
        <div key={i} className="shrink-0">
          {renderItem(item, i % items.length)}
        </div>
      ))}
    </div>
  );
}