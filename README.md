## Installation

### Installation of packages

Install the dependencies:

```sh
npm i
```

### Installation of chrome extensions

1. Open your Chrome browser and navigate to chrome://extensions. 
2. Enable Developer Mode by clicking the toggle switch next to Developer mode. 
3. Click the Load unpacked button and select this directory

### Features

1. Outline all facts in an inline instance (ix:nonNumeric and ix:continuation in blue, ix:nonFraction in green).
2. View where there are multiple nested tags easier. 
3. Write to the console the number of XBRL tags in the instance. 
4. Warn in the console when empty continuations exist.

### Limitations

1. The extension works best for plain *.htm / *.html inline instances. It was created specifically to keep things clean compared to other XBRL viewers that are injecting their custom markup in DOM.
2. When loaded via XBRL renderers the extension should not add extra markup. Tested only with the Edgar Renderer and Workiva's renderer.
3. Depending on how inline instances are created, e.g. inline styles vs CSS classes, you might find HTML rendering issues. Feel free to get in touch and raise the problems you encountered.
4. No guarantees offered, this repo was a few minutes effort :)
