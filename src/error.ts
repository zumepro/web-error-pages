/// <reference lib="dom" />


function reveal_command(i: number) {
    const element = document.getElementById("command_" + i);
    if (element === null) { setTimeout(() => { reveal_output() }, 100); return; }
    element.style.opacity = "1";
    setTimeout(() => { reveal_command(i + 1); }, Math.random() * 50 + 50);
};
reveal_command(1);


function reveal_output() {
    const element = document.getElementById("output");
    if (element === null) { return; }
    element.style.opacity = "1";
}
