import { component$ } from "@builder.io/qwik";

export const CardComponent = component$(({ position }: { position: number }) => {
    return <div class={`card-component ${position === 0 ? "max-size" : "default-size"} w-80 border-2 flex justify-center items-center gap-8 py-10 px-5 rounded-lg`}>
        <h3>My Card {position}</h3>
    </div>
});