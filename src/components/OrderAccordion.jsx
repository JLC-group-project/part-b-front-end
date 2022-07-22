import React from "react";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";

function OrderAccordion({ children, title }) {
  return (
    <Accordion atomic={true}>
      <AccordionItem title={`Title: ${title}`}>{children}</AccordionItem>
    </Accordion>
  );
}

export default OrderAccordion;
