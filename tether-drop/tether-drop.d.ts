// Type definitions for Drop v1.4
// Project: http://github.hubspot.com/drop/
// Definitions by: Adi Dahiya <https://github.com/adidahiya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../tether/tether.d.ts" />

// global Drop constructor
declare class Drop {
    constructor(options: Drop.IDropOptions);

    public content: HTMLElement;
    public tether: Tether;
    public open(): void;
    public close(): void;
    public remove(): void;
    public toggle(): void;
    public isOpened(): boolean;
    public position(): void;
    public destroy(): void;

    /*
     * Drop instances fire "open" and "close" events.
     */
    public on(event: string, handler: Function, context?: any): void;
    public once(event: string, handler: Function, context?: any): void;
    public off(event: string, handler?: Function): void;

    public static createContext(options: Drop.IDropContextOptions): typeof Drop;
}

declare namespace Drop {
    interface IDropContextOptions {
        classPrefix?: string;
        defaults?: IDropOptions;
    }

    interface IDropOptions {
        target?: Element;
        content?: Element | string | ((drop?: Drop) => string) | ((drop?: Drop) => Element);
        position?: string;
        openOn?: string;
        classes?: string;
        constrainToWindow?: boolean;
        constrainToScrollParent?: boolean;
        remove?: boolean;
        beforeClose?: () => boolean;
        openDelay?: number;
        closeDelay?: number;
        focusDelay?: number;
        blurDelay?: number;
        hoverOpenDelay?: number;
        hoverCloseDelay?: number;
        tetherOptions?: Tether.ITetherOptions;
    }
}

declare module "tether-drop" {
    export = Drop;
}
