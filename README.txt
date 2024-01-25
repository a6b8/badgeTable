![CircleCI](https://img.shields.io/circleci/build/github/a6b8/badgeTable/main) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)


# Badge Table Generator

Helps create summary tables for modules and websites by adding badges through shields.io. It generates complex Markdown code with a simple payload for an easy-to-understand visual overview.

Features:
- Creates an overview in the form of a `markdown` table.
- Users can choose from various predefined `presets`.
- Dynamic information can be inserted into individual cells using, for example, `shields.io` badges.
- Customized to meet the needs of open-source repository maintainers. To efficiently monitor metrics from various repositories.

```
npm init -y
npm i badgetable
```


## Example

{{INSERT_EXAMPLE}}

See [#presets](#presets) for more examples.


## Table of Contents

  - [Example](#example)
  - [Table of Contents](#table-of-contents)
  - [Methods](#methods)
    - [.getTable()](#gettable)
    - [.getPresets()](#getpresets)
    - [.getConfig()](#getconfig)
    - [.setConfig()](#setconfig)
  - [Presets](#presets)
    - [documentation](#documentation)
    - [dynamicPackageSearch](#dynamicpackagesearch)
    - [gemPackages](#gempackages)
    - [gemPackagesCircleCi](#gempackagescircleci)
    - [githubActivity](#githubactivity)
    - [githubAdvanced](#githubadvanced)
    - [githubMinimal](#githubminimal)
    - [githubOverview](#githuboverview)
    - [githubOverviewWithArticle](#githuboverviewwitharticle)
    - [githubStats](#githubstats)
    - [npmPackages](#npmpackages)
    - [npmPackagesCircleCi](#npmpackagescircleci)
  - [License](#license)


## Methods

The following methods are publicly accessible. `getTable` generates the actual table, while all other methods assist in displaying manually created tables.

```
npm init -y
npm i badgetable
```

### .getTable()

This method generates the desired table. The form is determined by the `preset` parameter.

**Method**
```.getTable( { preset, projects, sort=true, footer=true, header=false } )```

| Name          | Type    | Default | Description                                         | Required |
| ------------- | ------- | ------- | --------------------------------------------------- | -------- |
| preset        | Any     |         | The preset to use for generating the table.        | `true`   |
| projects      | Any     |         | The projects to include in the table.              | `true`   |
| sort          | Boolean | `true`  | Whether to sort the table.                         | `false`  |
| footer        | Boolean | `true`  | Whether to include a footer in the table.          | `false`  |
| header        | Boolean | `false` | Whether to include a header in the table.          | `false`  |

See [Presets](#presets) for examples.

**Returns**
```String (markdown)```


### .getPresets()

This helper method returns an array of strings containing all available `presets`.

**Method**
```
getPresets()
```

**Return**
```
Array of Strings
```


### .getConfig()

This method returns the currently active configuration. This object also contains the respective presets needed to generate a table. To create a custom table, see [.setConfig()](#setconfig).

**Method**
```.getConfig()```

**Returns**
```Object```


Retrieve the default configuration after auto-generation. This can be useful if you want to create your custom configuration.


### .setConfig()

This method allows you to adjust the configuration, for example, to insert your custom template.

> Contribution welcome, we are happy to expand the standard presets. Please send us your suggestions.

**Method**
```.setConfig( { config, init=false } ) ```

| Name          | Type    | Default | Description                                         | Required |
| ------------- | ------- | ------- | --------------------------------------------------- | -------- |
| config        | Object     |         | The configuration to set for the function.          | `true`   |
| init          | Boolean | `false` | Do not provide this parameter.           | `false`  |


**Example**
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
 
**Returns**
```
Boolean
```

## Presets

{{INSERT_PRESETS}}


## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).