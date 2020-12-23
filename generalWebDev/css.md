# CSS NOTES

## NOTE 1... many other notes right inside of myStyles.css

When it comes to inheritance you can use something like this
```
button {
  color: inherit
}
```
And that would have the button inherit the color from whatever "container" it's part of. 

## CSS BOX MODEL ... EVERYTHING IS A BOX!

- height
- width
- border-width
- border-color
- border-style
- border-sizing (control whether border is added on top of what exists, or if it's subtracted from size of the box)

border shorthand: width | style | color

## use border-radius at 50% to make a circle

padding shorthands:
- all four sides...  
  padding: 10px
- vertical | horizontal  
  padding: 5px 10px
- top | horizontal | bottom  
  padding: 1px, 2px, 3px
- top | right | bottom | left  
  padding: 5px 1px 0 2px

padding is on the inside of a box, margin is on the outside

## DISPLAY PROPERTY

if you set a span's `display` to `block` it will transform the inline element into a block line element...
`display: inline` width and height are ignored, margin and padding push elements away horizontally, but not vertically...
`display: block` block elements break the flow of a document. Width, height, margin & padding are respected...
`display: inline-block` behaves like an inline element except Width, height, margin & padding are respected
`display: none` hides the box

## UNITS
 
2ems would be 2 * whatever the parent's font size is
using ems for padding margins etc will cause paddings/margins to scale with the relative font size.  Ems are great for making sure things maintain distance in scale/proportion
  
The main shortcoming with ems is... that they don't work with lists because they adjust with whatever the preceding/parent element is...

## OPACITY AND ALPHA CHANNEL
Easier to work with when using `rgba` ... the `a` stands for alpha
  
Alpha Channel 0 - 1 for transparency, 0 completely transparent, 1 is not at all
`opacity: .5` 50% opacity 0 is completely transparent, 1 is not at all

## POSITION
Static, Relative, Middle, Absolute, Fixed, and Sticky
  
Fixed and Sticky will "scroll" with the screen... essentially if you have something in a fixed position, it's almost as if it lays on top of the screen.

## TRANSITIONS
set `transition: 3s`  
can choose PROPERTY NAME | DURATION | TIMING FUNCTION | DELAY

can use `transition-timing-function` to "stack" on top of a regular transition... set to stuff like `ease-in` `ease-out`, `cubic-bezier` ... the last one cubic-bezier takes arguments, can google around to see what settings for various transitions...

## TRANSFORM
can warp contents!!!!! 

## GOOGLE FONTS 