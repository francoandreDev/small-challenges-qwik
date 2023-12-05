import { component$ } from "@builder.io/qwik";
import { CarrouselComponent as Carrousel } from "./Carrousel";

export const App = component$(() => {
    return <div class="text-neutral-400 bg-gray-900 h-full min-h-screen flex flex-col flex-wrap gap-20 items-center py-10 font-bold text-5xl overflow-x-hidden">
        <h1>My App</h1>
        <Carrousel />
    </div>
})