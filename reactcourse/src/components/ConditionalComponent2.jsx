import Code from "./Code";
import Code2 from "./Code2";

export default function ConditionalComponent2() {

    const display = true;

    if (display) {
        return <Code />
    } else {
        return <Code2 />
    }
}