import { propsCarrouselComponent } from "../types/carrousel";
import { component$, useSignal, $, useComputed$ } from "@builder.io/qwik";
import { updateStart } from "../utils/list-functions";
import { CardComponent as Card } from "./Card";

export const CarrouselComponent = component$(({ totalCards }: propsCarrouselComponent) => {
    const currentPos = useSignal<number>(0);
    const arrayComputed = useComputed$(() => new Array(totalCards).fill(0).map((o, i) => o = { pos: ((currentPos.value + i) % totalCards), id: Math.random(), index: i }))

    const previousCard = $(() => { currentPos.value = updateStart("previous", currentPos.value, totalCards) })
    const nextCard = $(() => { currentPos.value = updateStart("next", currentPos.value, totalCards) })

    return (<div class="flex flex-col gap-3 justify-center items-center w-full text-3xl">
        <h2 class="text-center relative z-20">Carrousel</h2>
        <div class="flex flex-col gap-11 w-full min-h-[30rem] relative inset-0 justify-center items-center">
            <div class="cards flex flex-nowrap gap-3 mt-7 z-10">
                {arrayComputed.value.map(o =>
                    <Card key={o.id} position={o.pos} index={o.index} />
                )}
            </div>
            <div class="flex flex-nowrap gap-56 justify-center items-center w-96 relative z-10">
                <button class="px-3 py-2 bg-slate-300 rounded-md border-stone-200 border-2 hover:bg-stone-900 hover:text-zinc-300 transition-colors duration-300" onClick$={[previousCard]}>Before</button>
                <button class="px-3 py-2 bg-slate-300 rounded-md border-stone-200 border-2 hover:bg-stone-900 hover:text-zinc-300 transition-colors duration-300" onClick$={[nextCard]}>Next</button>
            </div>
        </div>
    </div>);

});