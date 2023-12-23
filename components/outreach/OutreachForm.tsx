'use client';

import { useState } from 'react';

import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function OutreachForm({
  politiciansData,
  session,
  templates
}: {
  politiciansData: any;
  session: any;
  templates: any;
}) {
  const [openItem, setOpenItem] = useState(null);

  // Function to handle opening/closing accordion items
  const handleAccordionClick = (itemId: any) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <>
      <Accordion
        className="mx-auto w-full"
        type="single"
        collapsible
        // defaultValue={`item-${politician.id}`}
      >
        {politiciansData.data!.map((politician: any) => {
          const formattedName = formatName(
            politician.position!,
            politician.name!
          );
          const itemId = `item-${politician.id}`;
          const isItemOpen = openItem === itemId;

          return (
            <AccordionItem
              className="items-start text-left"
              value={`item-${politician.id}`}
              key={politician.id}
            >
              <AccordionTrigger
                onClick={() => handleAccordionClick(`item-${politician.id}`)}
              >
                <div className="flex items-center gap-4">
                  <Image
                    width={100}
                    height={100}
                    src={politician?.pictureUrl!}
                    alt={`Photo of ${politician?.name}`}
                    className={
                      'aspect-square h-12 w-12 rounded-full object-cover'
                    }
                  />
                  <div className="flex flex-col">
                    <p className="">{formattedName}</p>
                    <p className="text-left text-xs uppercase">
                      {politician.state}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

function formatName(position: string, name: string) {
  if (position === 'Senator') {
    return 'Sen. ' + name;
  } else if (position === 'Representative') {
    return 'Rep. ' + name;
  } else {
    return position + ' ' + name;
  }
}
