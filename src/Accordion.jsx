import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const features = [
    "Multiple strap configurations",
    "Spacious interior with top zip",
    "Leather handle and tabs",
    "Interior dividers",
    "Stainless strap loops",
    "Double stitched construction",
    "Water-resistant",
  ];

  const care = [
    "Spot clean as needed",
    "Hand wash with mild soap",
    "Machine wash interior dividers",
    "Treat handle and tabs with leather conditioner",
  ];

  const shipping = [
    "Free shipping on orders over $300",
    "International shipping available",
    "Expedited shipping options",
    "Signature required upon delivery",
  ];

  const returns = [
    "Easy return requests",
    "Pre-paid shipping label included",
    "10% restocking fee for returns",
    "60 day return window",
  ];

  return (
    <section className="w-full mt-12 ">
      <AccordionItem title="Features" items={features} />
      <AccordionItem title="Care" items={care} />
      <AccordionItem title="Shipping" items={shipping} />
      <AccordionItem title="Returns" items={returns} />
    </section>
  );
}
