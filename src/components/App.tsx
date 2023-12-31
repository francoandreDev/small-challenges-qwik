import { component$ } from "@builder.io/qwik";
import { CarrouselComponent as Carrousel } from "./Carrousel";

export const App = component$(() => {
    return <div class="text-neutral-800 bg-teal-50 h-full min-h-screen flex flex-col gap-20 justify-center items-center py-10 font-bold text-5xl overflow-x-hidden relative">
        <h1>My App</h1>
        <Carrousel totalCards={5} />
    </div>
})