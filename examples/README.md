# Examples

## Word lists

- [Dolch](https://grahamhannington.github.io/bigas/examples/dolch-word-list.html)

- [Days of the week](https://grahamhannington.github.io/bigas?text=Monday//Tuesday//Wednesday//Thursday//Friday//Saturday//Sunday)

## [Multiplication tables](https://grahamhannington.github.io/bigas/examples/multiplication)

By default, this example lists multiplication tables from 1 to 12, and then shows the selected table as a set of flash cards, in pairs of "questions" and "answers".

Alternatively, you can specify a query string to go directly to a multiplication table.

Examples:

[`multiplicand=15&maxMultiplier=10`](https://grahamhannington.github.io/bigas/examples/multiplication/?multiplicand=15&maxMultiplier=10)


[`multiplicand=13&minMultiplier=-3&maxMultiplier=9`](https://grahamhannington.github.io/bigas/examples/multiplication/?multiplicand=13&minMultiplier=-3&maxMultiplier=9)

## [Burger](https://grahamhannington.github.io/bigas/examples/burger.html)

Web developers: this example uses the `formatSVGElementsByClassName()` function to format multiple SVG elements based on class name.

This example demonstrates two problems with Big As:

- Big As shrinkwraps to the bounding box of the text, which encompasses the full line height of the text, which might be more than the area actually occupied by the text glyphs.
For instance, if the text doesn't include characters with descenders (such as a lowercase "g"), then the SVG element will have some unused whitespace at the bottom. If you don't like this, then you need to manually apply formatting.
- On the mobile Safari browser, the serif word "PATTY" isn't the same width as other words. I don't understand why. It's the same width on desktop browsers.
