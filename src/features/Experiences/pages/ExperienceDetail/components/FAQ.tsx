import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  const defaultFaqs = [
    {
      q: "When will the decorator arrive?",
      a: "Our team arrives 2 hours before your selected time slot.",
    },
    {
      q: "Can I customize the decoration?",
      a: "Yes, you can contact our support team for customization.",
    },
    {
      q: "Is cake included in this package?",
      a: "Cake is not included but you can add it from add-ons.",
    },
  ];

  const faqs = items && items.length > 0 ? items : defaultFaqs;

  const toggle = (i:number)=>{
    setOpen(open===i ? null : i)
  }

  return(

    <div className="space-y-4">

      {faqs.map((faq,i)=>(
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow-[var(--shadow-soft)]"
        >

          <button
            onClick={()=>toggle(i)}
            className="w-full text-left font-medium"
          >
            {faq.q}
          </button>

          {open===i && (
            <p className="text-sm text-gray-600 mt-3">
              {faq.a}
            </p>
          )}

        </div>
      ))}

    </div>

  )
}