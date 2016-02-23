# Rinon
Electon Browser using [jolteon](https://github.com/vulpino/jolteon)

# Usage
- `$ git clone git@github.com:kohei-takata/Rinon.git`
- `$ npm install`
- Put `/Users/<User Name>/Library/Application Support/Rinon` `menu.json`

`menu.json` looks like this.

```json
{
  "main" : "https://github.com/",
  "sub" : [
    "https://google.com/",
    "https://yahoo.com/"
  ]
}

```

- `$ cd Rinon`
- `$ electron .`
