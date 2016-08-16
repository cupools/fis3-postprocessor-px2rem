# fis3-postprocessor-px2rem
> According to one stylesheet, generate rem version and @1x, @2x and @3x stylesheet

Dependence on [px2rem](https://github.com/songsiqi/px2rem)

## Getting started

```bash
npm i -D fis3-postprocessor-px2rem
```

## Usage

```js
fis.match('*.css', {
    postprocessor: fis.plugin('px2rem', {
        remUnit: 75,
        threeVersion: false,
        remVersion: true,
        baseDpr: 2,
        remPrecision: 6
    })
})
```

## Options
- remUnit: set `rem` unit value (default: 75)
- threeVersion: whether to generate @1x, @2x and @3x version stylesheet (default: false)
- remVersion: whether to generate rem version stylesheet (default: true)
- baseDpr: set base device pixel ratio (default: 2)
- remPrecision: set rem value precision (default: 6)

## Example

#### Pre processing:

One raw stylesheet: `test.css`

```css
.selector {
  width: 150px;
  height: 64px; /*px*/
  font-size: 28px; /*px*/
  border: 1px solid #ddd; /*no*/
}
```

#### After processing:

Rem version: `test.debug.css`

```css
.selector {
  width: 2rem;
  border: 1px solid #ddd;
}
[data-dpr="1"] .selector {
  height: 32px;
  font-size: 14px;
}
[data-dpr="2"] .selector {
  height: 64px;
  font-size: 28px;
}
[data-dpr="3"] .selector {
  height: 96px;
  font-size: 42px;
}
```

@1x version: `test1x.debug.css`

```css
.selector {
  width: 75px;
  height: 32px;
  font-size: 14px;
  border: 1px solid #ddd;
}
```

@2x version: `test2x.debug.css`

```css
.selector {
  width: 150px;
  height: 64px;
  font-size: 28px;
  border: 1px solid #ddd;
}
```

@3x version: `test3x.debug.css`

```css
.selector {
  width: 225px;
  height: 96px;
  font-size: 42px;
  border: 1px solid #ddd;
}
```