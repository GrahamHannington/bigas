# Big As

Big As is a website that displays text as big as possible.

You specify the text to display in the web address:

https://grahamhannington.github.io/bigas?text=Your/text/here

as a `text` parameter in the query string.

A slash (`/`) in the text represents a line break. If you want line breaks, you need to specify them. ("Big As don't wrap.")

Two consecutive slashes (`//`) represent a *page break*:

https://grahamhannington.github.io/bigas?text=Basement//Medicine//Pavement//Government//Trench/Coat

You can flip between pages manually using touch gestures, a mouse, or a keyboard, or you can use the `interval` parameter to automatically flip to the next page after a number of seconds:

https://grahamhannington.github.io/bigas?interval=2&text=Basement//Medicine//Pavement//Government//Trench/Coat

| Action                                   | Touch or mouse gesture | Key |
| ---------------------------------------- | ---------------------- | --- |
| Page forward                             | Swipe left             | Enter<br>Page Down<br>Down arrow (&downarrow;)<br>Right arrow (&rightarrow;) |
| Page back                                | Swipe right            | Page Up<br>Up arrow (&uparrow;)<br>Left arrow (&leftarrow;) |
| Pause/restart<br>automatic page flipping | Tap or click           | Space bar |

You can also specify other [parameters](#parameters) such as the background color or image, or the name of a Google font to use.

**Tip:** Big As is best displayed in your browser's full-screen mode (for example, in a desktop browser, press F11).

Web developers: you can use Big As in your own web pages to display text as big as possible in any container element. For details, see the [examples](./examples) folder.


## Uses

- You're in an airport arrivals hall waiting to meet someone you've never met, and you forgot to tell them to look for the person wearing a blue carnation in their lapel.

- Flash cards for learning to read sight words.

- Undecided what to have for lunch? Use the [`random`](#random) parameter!

- Any occasion that you want to display text as big as possible on your device.

## Examples

Example query strings are shown here with line breaks for readability. To show an example, click the play button (&#x25B6;&#xFE0F;) following the query string.

For more examples, see the [examples](./examples) folder.

### Sight words

Dolch pre-primer word list.

```INI
background=indigo&
text=a//and//away//big//blue//can//come//down//find//for//
funny//go//help//here//I//in//is//it//jump//little//
look//make//me//my//not//one//play//red//run//said//
see//the//three//to//two//up//we//where//yellow//you
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?background=indigo&text=a//and//away//big//blue//can//come//down//find//for//funny//go//help//here//I//in//is//it//jump//little//look//make//me//my//not//one//play//red//run//said//see//the//three//to//two//up//we//where//yellow//you)

Want [more Dolch](https://grahamhannington.github.io/bigas/examples/dolch-word-list.html)?

### DON'T PANIC

```INI
googleFont=Bungee+Inline&
background=%23336633&
text=DON%27T/PANIC
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?googleFont=Bungee+Inline&background=%23336633&text=DON%27T/PANIC)

### YES

```INI
fontWeight=700&
background=green&
text=YES
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas/?fontWeight=700&background=green&text=YES)

### NO

```INI
fontWeight=700&
background=red&
text=NO
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas/?fontWeight=700&background=red&text=NO)

### GO AWAY

Or words of your choice to that effect.

```INI
googleFont=Creepster&
textFill=darkred&
background=black&
text=GO+AWAY
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas/?googleFont=Creepster&textFill=darkred&background=black&text=GO+AWAY)

### Sans teeth, etc.

Excerpt from "All the World's a Stage" by William Shakespeare.

```INI
textAlign=left&
text=Sans+teeth,/
sans+eyes,/
sans+taste,/
sans+everything.
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?textAlign=left&text=Sans+teeth,/sans+eyes,/sans+taste,/sans+everything.)

Same text split into multiple pages, with automatic page flipping:

```INI
interval=2&
fadeIn=1&
textAlign=left&
text=Sans+teeth,//
sans+eyes,//
sans+taste,//
sans+everything.
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas/?interval=2&fadeIn=1&textAlign=left&text=Sans+teeth,//sans+eyes,//sans+taste,//sans+everything.)

### Road sign

```INI
textAlign=left&
text=Turn+right/
onto/
Hamersley+Road&
googleFont=Overpass&
background=%23305441
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?textAlign=left&text=Turn+right/onto/Hamersley+Road&googleFont=Overpass&background=%23305441)

### SALE

```INI
background=red&
text=SALE
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?background=red&text=SALE)

### Hello, world!

```INI
textStroke=%23000000&
textStrokeWidth=0.3&
height=70%&
background=center/contain+no-repeat+url(https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg)&
text=Hello,/world!&
title=Hello,+world!
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?textStroke=%23000000&textStrokeWidth=0.3&height=70%&background=center/contain+no-repeat+url(https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57723/globe_west_2048.jpg)&text=Hello,/world!&title=Hello,+world!)

### Do your best

```INI
background=%23262661&
googleFont=Nunito+Sans&lineHeight=10&
text=%26%23x269C%3B/dyb
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?background=%23262661&googleFont=Nunito+Sans&lineHeight=10&text=%26%23x269C%3B/dyb)

### What's for lunch?

Who said Soylent Green was only on Tuesdays?

```INI
random&
background=darkgreen&
text=Pizza//Burger//Nachos//Salad//Soylent/Green
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?random&text=Pizza//Burger//Nachos//Salad//Soylent/Green)

### Roll a die

```INI
random&
trimTop=2&
trimBottom=3&
text=%26%23x2680%3B//
%26%23x2681%3B//
%26%23x2682%3B//
%26%23x2683%3B//
%26%23x2684%3B//
%26%23x2685%3B
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?random&trimTop=2&trimBottom=3&text=%26%23x2680%3B//%26%23x2681%3B//%26%23x2682%3B//%26%23x2683%3B//%26%23x2684%3B//%26%23x2685%3B)

### Countdown

Automatic page flips, one per second, in reverse order.

```INI
interval=1&
reverse&
text=1//2//3//4//5//6//7//8//9//10
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?interval=1&reverse&text=1//2//3//4//5//6//7//8//9//10)

### ace

This example demonstrates trimming the calculated text bounding box, which might be too big, especially if the text contains no ascenders and/or no descenders.

```INI
trimTop=4&
trimBottom=3&
text=ace
```
[&#x25B6;&#xFE0F;](https://grahamhannington.github.io/bigas?trimTop=4&trimBottom=3&text=ace)

## Editing the query string

Editing a long query string in the address bar of a web browser can be awkward.

You can press a key to copy/paste the query string to/from the text editor of your choice via the Clipboard:

| Action | Key |
| ------ | --- |
| Copy the query string to the Clipboard. Big As inserts line breaks to make the string more readable and easier to edit. | `C` (just the `C` key by itself; the key combination `Ctrl`+`C` retains its original function) |
| Paste a query string from the Clipboard. Big As removes any line breaks, and then sets the query string of the current page to the pasted text, triggering a page load. | `V` (just the `V` key) | 

**Tip:** The query string doesn't contain a leading question mark (`?`). The question mark is used as a separator in the URL. The question mark is not part of the query string.
However, if you paste a query string with a leading question mark into Big As, it will work.

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

[`text=and%26%23x2F%3Bor`](https://grahamhannington.github.io/bigas?text=and%26%23x2F%3Bor)

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

### `backBackground`

Overrides `background` on even-numbered pages.

For allowed values, see `background`.

### `fadeIn`

Time in seconds to fade-in the next page.

A value of `0` means no fade-in.

Default: `0.5`

Example: `2`

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

### `infoButton`

Show an information button at the bottom left corner of the screen:

![info](./images/info-icon.svg)

The information button is a link to this page.

If you want "kiosk" mode with no external links, set `infoButton=false`.

Allowed values: `true` or `false`

Default: `true`

### `interval`

Automates page flipping, specifying the interval in seconds between flips.

Default: `0` (manual page flipping)

Example: `1` (flip every second)

Even with automatic page flipping, you can still manually flip between pages. For example, if you quickly manually flip past some pages, automatic page flipping will then resume.

### `lineHeight`

Text line height (vertical distance between each line of text).

Default: `16`

To set lines closer together, specify a value smaller than `16`. You can deliberately [overlap lines](https://grahamhannington.github.io/bigas/?text=Seeing+double/Seeing+double&lineHeight=3).

To set lines exactly on top of each other, set the line height to `0`. Why would you want to do this? I dunno. [Just for fun](https://grahamhannington.github.io/bigas/?googleFont=IBM+Plex+Mono&text=8/;/&lineHeight=0)?

### `margin`

Margin around the SVG element (that contains the text) within its parent (container) element.

Default: `2vh`

### `paused`

Start in paused mode. The text will appear dimmed.

Only relevant for multipage text with automatic page flipping (`interval` greater than 0).

To start automatic page flipping, tap the text or press the space bar.

Allowed values: `true` or `false`

Default: `false`

**Tip:** Specifying `paused` (the parameter name by itself, with no trailing equal sign or value) has the same effect as `paused=true`.

### `random`

Show a random page. Paging forward or background shows a different random page.

Only relevant for multipage text.

Allowed values: `true` or `false`

Default: `false`

**Tip:** Specifying `random` (the parameter name by itself, with no trailing equal sign or value) has the same effect as `random=true`.

### `reverse`

Reverse the page order.

Only works for text that consists of multiple "pages" (where each "page" is separated by `//`).

Allowed values: `true` or `false`

Default: `false`

**Tip:** Specifying `reverse` (the parameter name by itself, with no trailing equal sign or value) has the same effect as `reverse=true`.

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

### `wordPerLineInPortrait`

In portrait screen orientation, show each word on a separate line; treat each space as a line break.

Allowed values: `true` or `false`

Default: `false`

**Tip:** Specifying `wordPerLineInPortrait` (the parameter name by itself, with no trailing equal sign or value) has the same effect as `wordPerLineInPortrait=true`.

## Conditional orientation-specific content

To conditionally display text depending on the screen orientation, wrap the text in conditional markup.

Portrait-only:

`[p:Your portrait-only text here]`

Landscape-only:

`[l:Your landscape-only text here]`

Conditional text can include, or consist only of, a line break or a space. For example, to display a line break in portrait but a space in landscape, specify:

`[p:/][l:+]`

## Developer notes

Big As is tiny.
Essentially all Big As does is insert text in an SVG element, and then "shrinkwrap" the `viewBox` attribute of that SVG element to fit the bounding box of the text.
For an overview of this technique, see [my answer in Stack Overflow](https://stackoverflow.com/a/79065021/1334619).

### Tricky parts

Tricky for me:

-   Waiting for a Google font to be "active" before calculating the bounding box. I used [Web Font Loader](https://github.com/typekit/webfontloader).

-   Conditionally synchronously loading the Web Font Loader script. The script is loaded only if the user specifies a Google font.

### Big As doesn't exactly live up to its name

The method that Big As uses to get the bounding box of the text, `getBBox`,
returns the bounding box of (what I'm going to call) the [body](https://en.wikipedia.org/wiki/Body_height_(typography))
of the text, not the bounding box of the space actually occupied by the glyphs. In practice, this means that,
in some cases, the bounding box is too big. For example, if the text consists only of lowercase characters with no
ascenders or descenders (for example: "[ace](https://grahamhannington.github.io/bigas?text=ace)", "unceremonious"), then the bounding box does not tightly fit the letters.

As a manual workaround (I acknowledge that this is a kludge), use the [`trimTop`](#trimtop) and [`trimBottom`]((#trimbottom)) parameters to trim the bounding box. 

## Coding standards

- [JavaScript Standard Style](https://standardjs.com/)

## To do

Perhaps, if I have time:

-   Somehow re-enable copying the text of the current page to the Clipboard. To enable swiping with the mouse, I had to make the text unselectable; otherwise, swiping with the mouse could inadvertently select text.
    This means the user can't select the text to copy it to the Clipboard. I'm considering adding a custom event handler for `Ctrl`+`C` to do this.

-   `loop=true|false` parameter. Current behavior is to loop continuously (effectively, `loop=true`) rather than stop at the last page (`loop=false`).

-   Add a parameter to show the page number (*current*/*last*), probably at the bottom right corner of the screen.

-   Allow other built-in fonts. Not just either: (a) use the built-in browser "sans-serif" font or (b) load an external Google font.

-   Get my head around "full-screen" browser mode in Safari on iOS/iPadOS.

-   Optional *automatic* line wrapping that maximizes the font size for the specified text. This was a suggestion from my 11yo son. For now, I've set it aside as *too hard*.

-   Alternative (but still manually specified) line breaks for portrait versus landscape orientation.

-   Named presets. Introduce a new `preset` parameter that supports a limited number of values that represent some combination of parameter values, as a shortcut to specifying all of those parameters.
    For example, `preset=earth` might display a background image of Earth without all that tedious messing around with the `background` parameter.
    
-   Move user docs away from the potentially off-putting developer-centric context of this GitHub readme to more user-friendly static HTML pages. Change the destination of the information button to those pages.

-   Revisit support for multiple instances of "Big As"-formatted SVG element in a single page. This might involve maintaining a separate "state" object to manage each SVG element.
    I acknowledge that I've focussed on the functionality of the `index.html` page, which uses a single call to `formatSVGElementsByID()`, at the expense of, say, the `formatSVGElementsByClassName()` function.
    
-   Replace (or augment) the information button with a menu button. I have mixed feelings about this. I want a minimal user interface. It took me a while to come around to the idea of even showing an information button.

-   Add a parameter for multipage text that calculates the largest font size that works for most pages, and then use that font size for most pages.

-   Dynamically generated Open Graph preview images. This would involve moving Big As to a website hosting environment that supports server-side scripting.

## Won't do

Unless I change my mind:

- An integrated query string editor. Instead, see [Editing the query string](#editing-the-query-string).

## History

| Date       | Description               |
| ---------- | --------------------------|
| 2024-10-06 | First published on GitHub |