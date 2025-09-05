import {add} from './add';

test ("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
});

test ("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
});