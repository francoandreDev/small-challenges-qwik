import { component$, useSignal, $ } from "@builder.io/qwik";
import { CardComponent as Card } from "./Card";

export const CarrouselComponent = component$(({ totalCards }: { totalCards: number }) => {
    const currentPos = useSignal<number>(0);

    const previousCard = $(() => {
        currentPos.value = (currentPos.value === 0) ? totalCards - 1 :
            currentPos.value - 1
    })

    const nextCard = $(() => {
        currentPos.value = (currentPos.value === totalCards - 1) ? 0 :
            currentPos.value + 1
    })

    return <div class="carrousel-component flex flex-col gap-11 w-96">
        <h2 class="text-center">Carrousel</h2>
        <div class="cards flex flex-nowrap gap-40 mt-7 z-10">
            {new Array(totalCards).fill(0).map((_e, index) => {
                const pos = (currentPos.value + index) % totalCards
                return <Card position={pos} key={index} />
            })}
        </div>
        <div class="flex flex-nowrap gap-56 justify-center items-center w-96 relative z-10">
            <button onClick$={previousCard}>Before</button>
            <button onClick$={nextCard}>Next</button>
        </div>
    </div>

});