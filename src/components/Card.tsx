import { component$ } from "@builder.io/qwik";
import styles from "../css-modules/styles.module.css";

export const CardComponent = component$(({ position }: { position: number }) => {
    return <div class={`${styles["card-component"]}
     ${styles[`style-card-${position % 5}`]}
     w-80 border-2 flex justify-center items-center gap-8 py-10 px-5 rounded-lg min-w-[10rem]`}>
    </div>
});