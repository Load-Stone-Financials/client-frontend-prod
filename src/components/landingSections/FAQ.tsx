import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    q: "What is Loanstone?",
    a: "Loanstone is a digital financial platform that provides accessible loans and investment opportunities.",
  },
  {
    q: "What are the benefits of using Loanstone?",
    a: "You get fast loan processing, flexible repayment, and secure investment options.",
  },
  {
    q: "How do I qualify for a Loanstone loan?",
    a: "You can qualify by meeting our basic requirements: valid ID, business verification, and good credit behavior.",
  },
  {
    q: "I just started my business, do I qualify for a loan?",
    a: "Yes, startup owners may qualify depending on eligibility checks and documentation.",
  },
  {
    q: "What happens when I cannot repay my loan on time?",
    a: "Late payments may attract penalties. Contact support early for repayment restructuring options.",
  },
  {
    q: "How does Insurance work on Loanstone?",
    a: "Insurance protects your business, ensuring your loan obligations are covered in unexpected situations.",
  },
  {
    q: "What are the Insurance Package Plan available?",
    a: "We offer multiple tiers of insurance depending on business size and loan type.",
  },
  {
    q: "How do I Save on Loanstone?",
    a: "You can save by joining our savings plans with competitive interest rates.",
  },
  {
    q: "What is the minimum amount I can invest?",
    a: "You can start investing with as little as ₦5,000 depending on the plan selected.",
  },
  {
    q: "Is Loanstone a Bank?",
    a: "No, Loanstone is a licensed financial services provider but operates digitally.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="faq"
      className="w-full max-w-6xl mx-auto flex flex-col gap-4 py-16 px-6"
    >
      <div
        className="md:col-span-1 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="md:text-5xl font-bold text-purple-700 leading-tight">
          Frequently Ask Questions
        </h2>
      </div>

      <div
        className="md:col-span-2 space-y-4"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-purple-100 rounded-3xl px-6 py-4 shadow-sm"
          >
            <button
              className="w-full font-semibold flex justify-between items-center text-left text-gray-900"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.q}</span>-------
              <ChevronDown
                className={`text-purple-700 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                size={18}
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 text-start text-sm text-gray-700 leading-relaxed">
                {item.a}
              </p>
            )}
          </div>
        ))}
        <div className="mt-14 text-sm text-gray-600">
          <p>Have more questions?</p>
          <button className="mt-2 inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
            Chat with us{" "}
            <ChevronRight
              className="border-2 rounded-full border-brand-purple-light"
              size={16}
            />
          </button>
        </div>{" "}
      </div>
    </div>

    // <div id="faq" className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-16 px-6">
    //   {/* left */}
    //   <div className="md:col-span-1 text-start" data-aos="fade-up" data-aos-duration="1000">
    //     <h2 className="text-4xl font-bold text-purple-700 leading-tight">
    //       Frequently Ask Questions
    //     </h2>
    //     <div className="mt-14 text-sm text-gray-600">
    //       <p>Have more questions?</p>
    //       <button className="mt-2 inline-flex items-center gap-1 text-purple-600 font-medium hover:underline">
    //         Chat with us <ChevronRight className="border-2 rounded-full border-brand-purple-light" size={16} />
    //       </button>
    //     </div>
    //   </div>

    //   {/* rigght faq list */}
    //   <div className="md:col-span-2 space-y-4" data-aos="fade-left" data-aos-duration="1000">
    //     {faqs.map((item, index) => (
    //       <div key={index} className="border-b border-gray-300 pb-3">
    //         <button
    //           className="w-full font-bold flex justify-between items-center text-left text-gray-800"
    //           onClick={() => setOpenIndex(openIndex === index ? null : index)}
    //         >
    //           {item.q}
    //           <ChevronDown
    //             className={`transition-transform ${
    //               openIndex === index ? "rotate-180" : "rotate-0"
    //             }`}
    //             size={18}
    //           />
    //         </button>
    //         {openIndex === index && (
    //           <p className="mt-3 text-start text-sm text-gray-600 leading-relaxed">
    //             {item.a}
    //           </p>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
