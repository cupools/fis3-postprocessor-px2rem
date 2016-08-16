# fis3-postprocessor-px2rem
> According to one stylesheet, generate rem version and @1x, @2x and @3x stylesheet

Base on [px2rem](https://github.com/songsiqi/px2rem)

## Getting started

```bash
npm i git+ssh@github.com:cupools/fis3-postprocessor-px2rem.git 
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
