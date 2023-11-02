// test.js
import { Circle, Square, Triangle } from '../library/shapes.js';

test('Circle render() method should return the correct SVG string', () => {
    const circle = new Circle('red', 50);
    const result = circle.render();

    expect(result).toContain('<circle');
    expect(result).toContain('fill="red"');
    expect(result).toContain('r="50"');
});

test('Square render() method should return the correct SVG string', () => {
    const square = new Square('blue', 50);
    const result = square.render();

    expect(result).toContain('<rect');
    expect(result).toContain('fill="blue"');
    expect(result).toContain('width="50"');
    expect(result).toContain('height="50"');
});

test('Triangle render() method should return the correct SVG string', () => {
    const triangle = new Triangle('green', 100, 100);
    const result = triangle.render();

    expect(result).toContain('<polygon');
    expect(result).toContain('fill="green"');
    expect(result).toContain('points="0,100 100,0 100,100"');
});
