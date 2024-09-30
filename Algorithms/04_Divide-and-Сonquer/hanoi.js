function hanoi(n, fromRod, toRod, tempRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    hanoi(n - 1, fromRod, tempRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    hanoi(n - 1, tempRod, toRod, fromRod);
}

const numberOfDisks = 7;
hanoi(numberOfDisks, 'A', 'C', 'B');
