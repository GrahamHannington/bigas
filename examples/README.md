# Examples

## [Burger](https://grahamhannington.github.io/bigas/examples/burger.html)

Uses the `formatSVGElementsByClassName()` function to format multiple SVG elements based on class name.

Demonstrates a problem with Big As: Big As shrinkwraps to the bounding box of the text, which encompasses the full line height of the text, which might be more than the area actually occupied by the text glyphs.
For instance, if the text doesn't include characters with descenders (such as a lowercase "g"), then the SVG element will have some unused whitespace at the bottom.
If you don't like this, then you need to manually apply formatting.