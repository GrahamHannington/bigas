# Big As

Big As is a web page that displays text as big as possible.

You specify the text to display as a URL parameter:

https://grahamhannington.github.io/bigas?text=Your/text/here

where a slash (/) represents a line break.

**Tip:** Big As is best displayed in your browser's full-screen mode (e.g. press F11).

## Examples

[DON'T PANIC](https://grahamhannington.github.io/bigas?text=DON%27T/PANIC&googleFont=Bungee%20Inline&backgroundColor=%23336633&textAlign=center)

[Sans teeth, etc.](https://grahamhannington.github.io/bigas?text=Sans%20teeth,/sans%20eyes,/sans%20taste,/sans%20everything.&textAlign=left) (excerpt of "All the World's a Stage" by William Shakespeare")

[Road sign](https://grahamhannington.github.io/bigas?text=Turn%20right/onto/Hamersley%20Road&googleFont=Overpass&backgroundColor=%23305441&textAlign=left)

[SALE](https://grahamhannington.github.io/bigas?text=SALE&backgroundColor=red)

## URL parameters

### `backgroundColor`

Sets the background color of the page body.

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

### `height`

Default: `100vh`

Example: `50vh`


### `width`

Default: `100vw`

Example: `50vw`