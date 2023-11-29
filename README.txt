![CircleCI](https://img.shields.io/circleci/build/github/a6b8/badgeTable/main)


# Badge Table Generator

```
    ____            __         ______      __    __   
   / __ )____ _____/ /___ ____/_  __/___ _/ /_  / /__ 
  / __  / __ `/ __  / __ `/ _ \/ / / __ `/ __ \/ / _ \
 / /_/ / /_/ / /_/ / /_/ /  __/ / / /_/ / /_/ / /  __/
/_____/\__,_/\__,_/\__, /\___/_/  \__,_/_.___/_/\___/ 
                  /____/                              
```

Helps create summary tables for modules and websites by adding badges through shields.io. It generates complex Markdown code with a simple payload for an easy-to-understand visual overview.


## Example

{{INSERT_EXAMPLE}}

See [#presets](#presets) for more examples.


## Table of Contents

1. [Example](#example)<br>
2. [Methods](#methods)
3. [Presets](#presets)
4.  [License](#license)<br>


## Methods

The module contains only two methods: `.getTable()` and `.setConfig()`.

```
npm init -y
npm i badgetable
```

### .getTable()

```.getTable( { preset, projects, sort } )```

Table for `"preset"`:

| Key      | Type                | Required | Default |
|----------|---------------------|----------|---------|
| preset   | String              | `true`   |         |
| projects | Array of objects    | `true`   |         |
| sort     | Boolean             | `false`  |  `true` |
| footer   | Boolean             | `false`  |  `true` |
| sort     | Boolean             | `false`  |  `false`|


As default following keys are possible "npmPackages", "gemPackages" for "presets". To customize the output use [.setConfig() ](#setConfig())


### .getConfig()

```.getConfig()```

Retrieve the default configuration after auto-generation. This can be useful if you want to create your custom configuration.


### .setConfig()

```.getConfig( { config } )```

To customize your configuration, you can provide your own config. It is recommended to modify the [default configuration](https://github.com/a6b8/BadgeTable/blob/main/src/data/config.mjs). The configuration distinguishes between `Badges`, `Columns`, and `Presets`. Within `Badges`, each badge is defined using a `struct`. The `wrapperUrl` can be used to create a clickable link, and the `shield` represents the actual badge content. The `struct` expects pseudo-HTML enclosed in "<<" and ">>". Variables within the payload are denoted by "{{" and "}}".

```js
import { BadgeTable } from 'badgetable'
const btg = new BadgeTable( true )

const yourConfig = {}

const myconfig = btg.getConfig()
myconfig['presets']['githubMinimal']['struct'] = [
    [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
    [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
    [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
]

const markDown = btg
    .setConfig( yourConfig )
    // .getTable( { 'preset': 'githubMinimal', projects, sort } )

```

## Presets

{{INSERT_PRESETS}}


## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).