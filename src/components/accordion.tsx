import React, { useState, useRef } from "react";

export type Item = {
  id: string | number;
  question: string;
  answer: React.ReactNode;
};

type Props = {
  items: Item[];
  allowMultiple?: boolean; // default false => single open
  className?: string;
};

export default function Accordion({ items, allowMultiple = false, className = "" }: Props) {
  const [openIds, setOpenIds] = useState<Array<string | number>>([]);
  const contentRefs = useRef<Record<string | number, HTMLDivElement | null>>({});

  const isOpen = (id: string | number) => openIds.includes(id);

  const toggle = (id: string | number) => {
    setOpenIds(prev => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  const onKey = (e: React.KeyboardEvent, id: string | number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <div className={`border border-b-0 rounded  ${className}`}>
      {items.map(item => {
        const open = isOpen(item.id);
        return (
          <div key={item.id} className="bg-white shadow-sm overflow-hidden border-b ">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`acc-panel-${item.id}`}
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => onKey(e, item.id)}
              className="w-full flex items-center justify-between px-4 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="font-medium text-gray-800 text-lg">{item.question}</span>
              <svg
                className={`w-7 h-7 text-gray-500 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20" fill="none" stroke="currentColor"
              >
                <path d="M6 8l4 4 4-4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              id={`acc-panel-${item.id}`}
              ref={(el) => (contentRefs.current[item.id] = el)}
              className="px-4 overflow-hidden transition-[max-height] duration-300"
              style={{
                maxHeight: open ? `${contentRefs.current[item.id]?.scrollHeight ?? 200}px` : "0px"
              }}
            >
              <div className="py-3 text-gray-600 text-sm">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}