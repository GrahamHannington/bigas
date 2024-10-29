# Big As

Big As is a web page that displays text as big as possible.

You specify the text to display in the web address:

https://grahamhannington.github.io/bigas?text=Your/text/here

as a `text` parameter in the query string.

A slash (/) in the text represents a line break. If you want line breaks, you need to specify them. ("Big As don't wrap.")

Two consecutive slashes (//) represent a *page break*:

https://grahamhannington.github.io/bigas?text=Basement//Medicine//Pavement//Government//Trench/Coat

To page forward, swipe left or press Enter, Page Down, down arrow (&downarrow;), or right arrow (&rightarrow;).

To page back, swipe right or press Page Up, up arrow (&uparrow;), or left arrow (&leftarrow;).

You can also specify other [parameters](#parameters) such as the background color or image, or the name of a Google font to use.

**Tip:** Big As is best displayed in your browser's full-screen mode (for example, in a desktop browser, press F11).

Web developers: you can use Big As in your own web pages to display text as big as possible in any container element. For details, see the [examples](./examples) folder.

## Uses

- You're in an airport arrivals hall waiting to meet someone you've never met, and you forgot to tell them to look for the person wearing a blue carnation in their lapel.

- Learning to read sight words.

- Undecided what to have for lunch? Use the [`random`](#random) parameter!

- Any occasion that you want to display text as big as possible on your device.

## Examples

The query strings shown here are links to complete URLs. To show the example, click the link.

### DON'T PANIC

[googleFont=Bungee+Inline&background=%23336633&text=DON%27T/PANIC](https://grahamhannington.github.io/bigas?googleFont=Bungee+Inline&background=%23336633&text=DON%27T/PANIC)

### YES

[fontWeight=700&background=green&text=YES](https://grahamhannington.github.io/bigas/?fontWeight=700&background=green&text=YES)

### NO

[fontWeight=700&background=red&text=NO](https://grahamhannington.github.io/bigas/?fontWeight=700&background=red&text=NO)

### GO AWAY

Or words of your choice to that effect.

[googleFont=Creepster&textFill=darkred&background=black&text=GO+AWAY](https://grahamhannington.github.io/bigas/?googleFont=Creepster&textFill=darkred&background=black&text=GO+AWAY)

### Sans teeth, etc.

Excerpt of "All the World's a Stage" by William Shakespeare.

[textAlign=left&text=Sans+teeth,/sans+eyes,/sans+taste,/sans+everything](https://grahamhannington.github.io/bigas?textAlign=left&text=Sans+teeth,/sans+eyes,/sans+taste,/sans+everything)

### Road sign

[textAlign=left&text=Turn+right/onto/Hamersley+Road&googleFont=Overpass&background=%23305441](https://grahamhannington.github.io/bigas?textAlign=left&text=Turn+right/onto/Hamersley+Road&googleFont=Overpass&background=%23305441)

### SALE

[background=red&text=SALE](https://grahamhannington.github.io/bigas?background=red&text=SALE)

### Hello, world!

[&textStroke=%23000000&textStrokeWidth=0.3&height=70%&background=center/contain+no-repeat+url(https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg)&text=Hello,/world!&title=Hello,+world!](https://grahamhannington.github.io/bigas?textStroke=%23000000&textStrokeWidth=0.3&height=70%&background=center/contain+no-repeat+url(https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg)&text=Hello,/world!&title=Hello,+world!)

### Do your best

[background=%23262661&googleFont=Nunito+Sans&lineHeight=10&text=%26%23x269C%3B/dyb](https://grahamhannington.github.io/bigas?background=%23262661&googleFont=Nunito+Sans&lineHeight=10&text=%26%23x269C%3B/dyb)

### ace

This example demonstrates trimming the calculated text bounding box, which might be too big, especially if the text contains no ascenders and/or no descenders.

[trimTop=4&trimBottom=3&text=ace](https://grahamhannington.github.io/bigas?trimTop=4&trimBottom=3&text=ace)

### Sight words

For learning to read.

[background=darkgreen&text=apple//baby//back//ball//bear//bed//bell//bird//birthday//boat//box//boy//bread//brother//cake//car//cat//chair//chicken//children//Christmas//coat//corn//cow//day//dog//doll//door//duck//egg//eye//farm//farmer//father//feet//fire//fish//floor//flower//game//garden//girl//goat//grass//ground//hand//head//hill//home//horse//house//kitty//leg//letter//man//men//milk//money//morning//mother//name//nest//night//paper//party//picture//pig//rabbit//rain//ring//robin//Santa%20Claus//school//seed//sheep//shoe//sister//snow//song//squirrel//stick//street//sun//table//thing//time//top//toy//tree//watch//water//way//wind//window//woman//women//wood](https://grahamhannington.github.io/bigas?background=darkgreen&text=apple//baby//back//ball//bear//bed//bell//bird//birthday//boat//box//boy//bread//brother//cake//car//cat//chair//chicken//children//Christmas//coat//corn//cow//day//dog//doll//door//duck//egg//eye//farm//farmer//father//feet//fire//fish//floor//flower//game//garden//girl//goat//grass//ground//hand//head//hill//home//horse//house//kitty//leg//letter//man//men//milk//money//morning//mother//name//nest//night//paper//party//picture//pig//rabbit//rain//ring//robin//Santa%20Claus//school//seed//sheep//shoe//sister//snow//song//squirrel//stick//street//sun//table//thing//time//top//toy//tree//watch//water//way//wind//window//woman//women//wood)

### What's for lunch?

Who said Soylent Green was only on Tuesdays?

[random&background=darkgreen&text=Pizza//Burger//Nachos//Salad//Soylent/Green](https://grahamhannington.github.io/bigas?random&text=Pizza//Burger//Nachos//Salad//Soylent/Green)

### Roll a die

[random&trimTop=2&trimBottom=3&text=%26%23x2680%3B//%26%23x2681%3B//%26%23x2682%3B//%26%23x2683%3B//%26%23x2684%3B//%26%23x2685%3B](https://grahamhannington.github.io/bigas?random&trimTop=2&trimBottom=3&text=%26%23x2680%3B//%26%23x2681%3B//%26%23x2682%3B//%26%23x2683%3B//%26%23x2684%3B//%26%23x2685%3B)

## Encoding characters in URL parameters

Some characters have a special meaning in URLs and must be encoded when used in the value of a parameter. For example:

| Character                      | URL encoding     |
| ------------------------------ | ---------------- |
| Space                          | `+` (plus sign) or<br>`%20`|
| Ampersand (`&`)                | `%26`            |
| Hash (`#`)                     | `%23`            |
| Semicolon (`;`)                | `%3B`            |
| Fleur-de-lis (&#9884;, U+269C) | `%26%23x269C%3B` (URL-encoded numeric character reference `&#x269C;`) or<br>`%26%239884%3B` (URL-encoded numeric character reference `&#9884;`) or<br>`%E2%9A%9C` (UTF-8 encoding)|

**Note:** Big As contains code to interpret numeric character references. Browsers typically don't natively support this format in URL parameters.

Depending on your browser, you might not have to worry about URL encoding some characters, such as spaces; the browser does it for you.

## Displaying a slash in the text

A slash (`/`) has a special meaning in the `text` parameter of a Big As URL. To display a slash in the text, insert the slash as a URL-encoded numeric character reference:

- `%26%23x2F%3B` (URL-encoded numeric character reference `&#x2F;`)
or
- `%26%2347%3B` (URL-encoded numeric character reference `&#47;`)

Example ("and/or"):

[text=and%26%23x2F%3Bor](https://grahamhannington.github.io/bigas?text=and%26%23x2F%3Bor)

## Parameters

For general information about specifying parameters in a URL, see the Wikipedia article "[Query string](https://en.wikipedia.org/wiki/Query_string)".


### `background`

Background color and/or images.

Can be any value supported by the [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background) shorthand CSS property.

Default: `#000000` (black)

Example hex RGB value with a percent-encoded hash (`#` represented as `%23`):

`%23009900`

Example name value:

`red`

Example image:

`center/contain+no-repeat+url(https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg)`

### `fontWeight`

Default: `400` (normal)

Example: `700` (bold)

### `fontStyle`

Default: `normal`

Example: `italic`

### `googleFont`

[Google font](https://fonts.google.com/) family name.

Example: [`Bungee Inline`](https://fonts.google.com/specimen/Bungee+Inline)

### `height`

Height of the SVG element (that contains the text) within its parent (container) element.

Default: `100%`

Example: `50%`

See also: [`width`](#width)

### `lineHeight`

Text line height (vertical distance between each line of text).

Default: `16`

To set lines closer together, specify a value smaller than `16`. You can deliberately [overlap lines](https://grahamhannington.github.io/bigas/?text=Seeing+double/Seeing+double&lineHeight=3).

To set lines exactly on top of each other, set the line height to `0`. Why would you want to do this? I dunno. [Just for fun](https://grahamhannington.github.io/bigas/?googleFont=IBM+Plex+Mono&text=8/;/&lineHeight=0)?

### `margin`

Margin around the SVG element (that contains the text) within its parent (container) element.

Default: `2vh`

### `random`

Show a random page. Paging forward or background shows a different random page.

Only works for text that consists of multiple "pages" (where each "page" is separated by `//`).

Allowed values: `true` or `false`.

**Tip:** Specifying `random` (the parameter name by itself, with no trailing equal sign or value) has the same effect as `random=true`.

### `text`

Text that you want to display.

Use a slash (`/`) to represent a line break.

Examples:

`SALE`

`DON'T PANIC`

`DON'T/PANIC`

`Sans teeth,/sans eyes,/sans taste,/sans everything`

### `textAlign`

Text horizontal alignment.

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

### `textStroke`

Text outline color. (In SVG text, this is known as the stroke color.)

Default: none

Example:

`#FFFFFF` (white)

### `textStrokeWidth`

Text outline width. (In SVG text, this is known as the stroke width.)

Default: none

Example:

`0.3`

### `title`

Page (browser tab) title.

Default: `Big As`

### `trimBottom`

Trim the bottom edge of the text bounding box.

Default: `0`

Example: `2`

### `trimTop`

Trim the top edge of the text bounding box.

Default: `0`

Example: `2`

### `width`

Width of the SVG element (that contains the text) within its parent (container) element.

Default: `100%`

Example: `50%`

See also: [`height`](#height)

## Developer notes

Big As is tiny.
Essentially all Big As does is insert text in an SVG element, and then "shrinkwrap" the `viewBox` attribute of that SVG element to match the bounding box of the text.
For an overview of this technique, see [my answer in Stack Overflow](https://stackoverflow.com/a/79065021/1334619).

### Tricky parts

Tricky for me:

-   Waiting for a Google font to be "active" before calculating the bounding box. I used [Web Font Loader](https://github.com/typekit/webfontloader).

-   Conditionally synchronously loading the Web Font Loader script. The script is loaded only if the user specifies a Google font.

### Big As doesn't strictly live up to its name

The method that Big As uses to get the bounding box of the text, `getBBox`,
returns the bounding box of (what I'm going to call) the [body](https://en.wikipedia.org/wiki/Body_height_(typography))
of the text, not the bounding box of the space actually occupied by the glyphs. In practice, this means that,
in some cases, the bounding box is too big. For example, if the text consists only of lowercase characters with no
ascenders or descenders (for example: "[ace](https://grahamhannington.github.io/bigas?text=ace)", "unceremonious"), then the bounding box does not tightly fit the letters.

As a manual workaround (I acknowledge that this is a kludge), use the [`trimTop`](#trimtop) and [`trimBottom`]((#trimbottom)) parameters to trim the bounding box. 

## To do

Perhaps, if I have time:

-   Allow other built-in fonts. Not just either: (a) use the built-in browser "sans-serif" font or (b) load an external Google font.

-   Get my head around "full-screen" browser mode in Safari on iOS/iPadOS.

-   Optional *automatic* line wrapping that maximizes the font size for the specified text. This was a suggestion from my 11yo son. For now, I've set it aside as *too hard*.

-   Alternative (but still manually specified) line breaks for portrait versus landscape orientation.

-   Animated page transitions. For example, add some pizzazz to rolling a die.

-   Automated timed paging.

-   Named presets. Introduce a new `preset` parameter that supports a limited number of values that represent some combination of parameter values, as a shortcut to specifying all of those parameters.
    For example, `preset=earth` might display a background image of Earth without all that tedious messing around with the `background` parameter.

-   Dynamically generated Open Graph preview images. This would involve moving Big As to a website hosting environment that supports server-side scripting.

## History

| Date       | Description               |
| ---------- | --------------------------|
| 2024-10-06 | First published on GitHub |