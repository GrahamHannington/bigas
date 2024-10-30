# Examples

## Word lists

[Days of the week](https://grahamhannington.github.io/bigas?text=Monday//Tuesday//Wednesday//Thursday//Friday//Saturday//Sunday)

## [Burger](https://grahamhannington.github.io/bigas/examples/burger.html)

Web developers: this example uses the `formatSVGElementsByClassName()` function to format multiple SVG elements based on class name.

This example demonstrates two problems with Big As:

- Big As shrinkwraps to the bounding box of the text, which encompasses the full line height of the text, which might be more than the area actually occupied by the text glyphs.
For instance, if the text doesn't include characters with descenders (such as a lowercase "g"), then the SVG element will have some unused whitespace at the bottom. If you don't like this, then you need to manually apply formatting.
- On the mobile Safari browser, the serif word "PATTY" isn't the same width as other words. I don't understand why. It's the same width on desktop browsers.
