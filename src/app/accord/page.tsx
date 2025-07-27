import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordPage() {

  return (
   <div className="flex justify-center items-center ">
     <main className="w-[500px] p-4">
       <Accordion type="single" collapsible>
         <AccordionItem value="item-1">
           <AccordionTrigger>Is it accessible?</AccordionTrigger>
           <AccordionContent>
             Yes. It adheres to the WAI-ARIA design pattern.
           </AccordionContent>
         </AccordionItem>
       </Accordion>
     </main>
   </div>
  );
}
