# Examples

In addition to the [examples in the main readme](../README.md#examples).

## Word lists

- [Dolch](https://grahamhannington.github.io/bigas/examples/dolch-word-list.html)

- [Days of the week](https://grahamhannington.github.io/bigas?text=Monday//Tuesday//Wednesday//Thursday//Friday//Saturday//Sunday)

- [Months of the year](https://grahamhannington.github.io/bigas?text=January//February//March//April//May//June//July//August//September//October//November//December)

## [Multiplication tables](https://grahamhannington.github.io/bigas/examples/multiplication)

This example demonstrates programmatically generated Big As URLs.

By default, this example lists multiplication tables from 1 to 12, and then shows the selected table as a set of flash cards, in pairs of "questions" (*a* &times; *b*) and "answers" (*a* &times; *b* = *c*).

### Parameters

You can optionally specify parameters in the query string of the `examples/multiplication` URL to customize behavior.

In these paremeters, the term *multiplicand* refers to the first factor and *multiplier* refers to the second factor:

*multiplicand* &times; *multiplier*

(acknowledging that not everyone agrees with this order)

#### `interval`

Automates page flipping, specifying the interval in seconds between flips.

Default: `0` (manual page flipping)

Example:

- Flip every second: [`interval=1`](https://grahamhannington.github.io/bigas/examples/multiplication/?interval=1)

Even with automatic page flipping, you can still manually flip between pages. For example, if you quickly manually flip past some pages, automatic page flipping will then resume.

**Note:** This is simply a "passthrough" to the underlying Big As `interval` parameter.

#### `maxMultiplicand`

Maximum multiplicand.

Default: `12`

Example:

- List tables all the way up to 24 &times; 24: [`maxMultiplicand=24&maxMultiplier=24`](https://grahamhannington.github.io/bigas/examples/multiplication/?maxMultiplicand=24&maxMultiplier=24)

#### `maxMultiplier`

Maximum multiplier.

Default: `12`

#### `minMultiplicand`

Minimum multiplicand.

Default: `1`

#### `minMultiplier`

Minimum multiplier.

Default: `1`

#### `multiplicand`

Go directly to the table for a specific multiplicand, bypassing the list of tables.

Examples:

- 15 &times; 1 &hellip; 10: [`multiplicand=15&maxMultiplier=10`](https://grahamhannington.github.io/bigas/examples/multiplication/?multiplicand=15&maxMultiplier=10)

- 13 &times; -3 &hellip; 9: [`multiplicand=13&minMultiplier=-3&maxMultiplier=9`](https://grahamhannington.github.io/bigas/examples/multiplication/?multiplicand=13&minMultiplier=-3&maxMultiplier=9)

### To do

- New `random` parameter to change the next/previous page behavior to go to a random page instead.

## [Burger](https://grahamhannington.github.io/bigas/examples/burger.html)

Web developers: this example uses the `formatSVGElementsByClassName()` function to format multiple SVG elements based on class name.

This example demonstrates two problems with Big As:

- Big As shrinkwraps to the bounding box of the text, which encompasses the full line height of the text, which might be more than the area actually occupied by the text glyphs.
For instance, if the text doesn't include characters with descenders (such as a lowercase "g"), then the SVG element will have some unused whitespace at the bottom. If you don't like this, then you need to manually apply formatting.
- On the mobile Safari browser, the serif word "PATTY" isn't the same width as other words. I don't understand why. It's the same width on desktop browsers.
