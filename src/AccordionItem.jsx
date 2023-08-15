import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function AccordionItem({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex justify-between w-full border-t-2 border-slate-100 py-6"
        onClick={(e) => setOpen(!open)}
      >
        <p className="font-semibold">{title}</p>
        {open ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </button>
      {open && (
        <ul className="mb-6 list-disc">
          {items.map((item) => {
            return (
              <li className="ml-3" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
