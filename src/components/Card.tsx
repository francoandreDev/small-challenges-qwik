import { component$ } from "@builder.io/qwik";
import styles from "../css-modules/styles.module.css";
import { propsCardComponent } from "../types/card";

export const CardComponent = component$(({ position, index }: propsCardComponent) => {

    if (position === 0) {
        return <div class={`${styles["card-component-0"]} ${styles["bg-" + index]} w-80 border-2 flex justify-center items-center gap-8 py-10 px-5 rounded-lg min-w-[10rem]`} ></div>
    }

    return <div class={`${styles["card-component"]} ${styles[position]} ${styles["bg-" + index]}
        w-80 border-2 flex justify-center items-center gap-8 py-10 px-5 rounded-lg min-w-[10rem]`}
        style={{ order: position }}>
    </div>
});