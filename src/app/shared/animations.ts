import {
  trigger,
  state,
  transition,
  style,
  animate,
} from "@angular/animations";

// TODO: centralizar todas as definicoes de animacão nesta classe
export class Animation {
  public static fadeTopToDown = trigger("fadeTopToDown", [
    state("in", style({ transform: "translateY(0)", opacity: 1 })),
    transition(":enter", [
      style({
        transform: "translateY(-2%)",
        opacity: 0,
      }),
      animate("400ms ease-out"),
    ]),
    transition(":leave", [
      animate(
        "200ms ease-out",
        style({
          transform: "translateY(-10%)",
          opacity: 0,
        })
      ),
    ]),
  ]);
}
