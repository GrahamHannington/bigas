# Big As

Big As is a web page that displays text as big as possible.

You specify the text to display as a URL parameter:

https://grahamhannington.github.io/bigas?text=Your/text/here

where a slash (/) represents a line break.

**Tip:** Big As is best displayed in your browser's full-screen mode (e.g. press F11).

## Examples

[DON'T PANIC](https://grahamhannington.github.io/bigas?text=DON%27T/PANIC&googleFont=Bungee%20Inline&backgroundColor=%23336633)

[YES](https://grahamhannington.github.io/bigas/?text=YES&fontWeight=700&backgroundColor=green)

[NO](https://grahamhannington.github.io/bigas/?text=NO&fontWeight=700&backgroundColor=red)

[GO AWAY](https://grahamhannington.github.io/bigas/?fontWeight=700&backgroundColor=red&text=GO/AWAY) (or words of your choice to that effect)

[Sans teeth, etc.](https://grahamhannington.github.io/bigas?text=Sans%20teeth,/sans%20eyes,/sans%20taste,/sans%20everything.&textAlign=left) (excerpt of "All the World's a Stage" by William Shakespeare)

[Road sign](https://grahamhannington.github.io/bigas?text=Turn%20right/onto/Hamersley%20Road&googleFont=Overpass&backgroundColor=%23305441&textAlign=left)

[SALE](https://grahamhannington.github.io/bigas?text=SALE&backgroundColor=red)

See also the [examples](./examples) folder.

## URL parameters

### `backgroundColor`

Sets the background color of the page body.

Default: `#000000` (black)

Example hex RGB value:

`%23009900`

where `%23` is a percent-encoded hash (`#`)

Example name value:

`red`

### `fontWeight`

Default: `400` (normal)

Example: `700` (bold)

### `fontStyle`

Default: `normal`

Example: `italic`

### `googleFont`

Google Fonts font family name.

### `lineHeight`

Default: `16`

### `margin`

Default: `2vh`

### `text`

The text that you want to display.

Use a slash (`/`) to represent a line break.

Examples:

`SALE`

`DON'T PANIC`

`DON'T/PANIC`

`Sans teeth,/sans eyes,/sans taste,/sans everything.`


### `textAlign`

Default: `center`

Example: `left`

### `textFill`

Text color. (In SVG text, this is known as the fill color.)

Default: `#FFFFFF` (white)

Examples:

`red`

`green`

`blue`

`#CC8899`

### `height`

Default: `100%`

Example: `50%`

### `width`

Default: `100%`

Example: `50%`

## Developer notes

Essentially all Big As does is insert text in an SVG element, and then "shrinkwrap" the `viewBox` attribute of that SVG element to match the bounding box of the text.

Some tricky parts (for me):

-   Waiting for a Google font to be "active" before calculating the bounding box. I used [Web Font Loader](https://github.com/typekit/webfontloader).
-   Conditionally synchronously loading the Web Font Loader script. The script is loaded only if the user specifies a Google font.

## To do

Perhaps, if I have time:

-   Allow other built-in fonts. Not just either: (a) use the built-in browser "sans-serif" font or (b) load an external Google font.

-   Get my head around "full-screen" browser mode in Safari on iOS/iPadOS