# fis3-postprocessor-px2rem
> According to one stylesheet, generate rem version and @1x, @2x and @3x stylesheet

Base on [px2rem](https://github.com/songsiqi/px2rem)

## Getting started

```bash
npm install --save-dev git+ssh://git@git.ucweb.local:lyh106415/fis3-postprocessor-px2rem.git
```

## Usage

```js
fis.match('*.css', {
    postprocessor: fis.plugin('px2rem', {
        remUnit: 64
    })
})
```
