# Rinon
Electon Browser

# Usage
1. `$ git clone git@github.com:kohei-takata/Rinon.git`
2. `$ cd Rinon`
3. `$ npm install`
4. Put`menu.json` to `/Users/<User Name>/Library/Application Support/Rinon`
5. `$ electron .`

`menu.json` looks like this.

```json
{
  "main" :{"url": "https://github.com/"},
  "sub" : [
  {"name": "github", 
   "url": "https://github.com/"},
  {"name": "google", 
   "url": "https://google.com/"},
  {"name": "yahoo",
   "url": "https://yahoo.com/"}
  ]
}
```
