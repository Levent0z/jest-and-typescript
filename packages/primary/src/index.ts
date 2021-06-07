import leftPad from 'left-pad';

export class Main {
    hello(name: string): string {
        const retVal: string = leftPad(`Hello ${name}!`, 12);
        return retVal;
    }
}
