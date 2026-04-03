declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | string[] | Element | NodeList | Element[], vars?: any);
    lines: Element[];
    words: Element[];
    chars: Element[];
    revert(): void;
  }
}
declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: string | Element, smooth: boolean, position: string): void;
    static refresh(force?: boolean): void;
  }
}
