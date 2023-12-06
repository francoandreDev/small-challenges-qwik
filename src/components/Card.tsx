import { component$ } from "@builder.io/qwik";
import styles from "../css-modules/styles.module.css";
import { propsCardComponent } from "../types/card";

export const CardComponent = component$(({ position }: propsCardComponent) => {
    return <div class={`${styles["card-component"]} ${styles["card-component-" + position]}
        w-80 border-2 flex justify-center items-center gap-8 py-10 px-5 rounded-lg min-w-[10rem]`}>
    </div>
});