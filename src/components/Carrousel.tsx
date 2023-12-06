import { propsCarrouselComponent } from "../types/carrousel";
import { component$, useSignal, $ } from "@builder.io/qwik";
import { calcPos, updateStart } from "../utils/list-functions";
import { CardComponent as Card } from "./Card";

export const CarrouselComponent = component$(({ totalCards }: propsCarrouselComponent) => {
    const allCards = new Array(totalCards).fill(0).map((_, index) => { return { id: Math.random(), Component: Card, index } })
    const currentPos = useSignal<number>(0);

    const previousCard = $(() => { currentPos.value = updateStart("previous", currentPos.value, totalCards) })
    const nextCard = $(() => { currentPos.value = updateStart("next", currentPos.value, totalCards) })


    return <div class="carrousel-component flex flex-col gap-11 w-96">
        <h2 class="text-center">Carrousel</h2>
        <div class="cards flex flex-nowrap gap-3 mt-7 z-10">
            {allCards.map((card, index) => {
                return <card.Component key={card.id} position={calcPos(currentPos.value, index, totalCards)} />
            })}
        </div>
        <div class="flex flex-nowrap gap-56 justify-center items-center w-96 relative z-10">
            <button onClick$={[previousCard]}>Before</button>
            <button onClick$={[nextCard]}>Next</button>
        </div>
    </div>

});