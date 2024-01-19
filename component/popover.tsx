"use client";
import * as Popover from '@radix-ui/react-popover';

export default function Home() {
    return(

<div className="m-8">
<Popover.Root>
<Popover.Trigger className="bg-white rounded-sm ml-96 mt-60">
  More info</Popover.Trigger>
<Popover.Portal>
  <Popover.Content className="rounded-sm p-4 w-[260px] bg-white">
    Some more info…
    <Popover.Arrow className="fill-white"/>
  </Popover.Content>
</Popover.Portal>
</Popover.Root>
</div>

    );

}
