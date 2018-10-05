import {reverseArgs} from "./reverseArgs";

export function reverseCurry(func) {
    const curryImpl = (provided_args) => (...args) => {
        const concat_args = provided_args.concat(args);
        if(concat_args.length < func.length) {
            return curryImpl(concat_args);
        }
        return reverseArgs(func)(...concat_args);
    };

    return curryImpl([]);
}
