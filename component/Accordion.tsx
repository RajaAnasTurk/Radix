"use client";
import React from 'react';
import * as  Accordion from '@radix-ui/react-accordion';

  const  Component = () => {
    return(

    <div>
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item className="AccordionItem" value="item-1">
      <Accordion.Trigger>
        Is it accessible?
        </Accordion.Trigger>
      <Accordion.Content>
        Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <Accordion.Trigger>
        Is it unstyled?
        </Accordion.Trigger>
      <Accordion.Content>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <Accordion.Trigger>
        Can it be animated?
      </Accordion.Trigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>

    </div>
    );
}

export default Component;
