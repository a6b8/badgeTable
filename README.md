![CircleCI](https://img.shields.io/circleci/build/github/a6b8/badgeTable/main)


# Badge Table Generator

Helps create summary tables for modules and websites by adding badges through shields.io. It generates complex Markdown code with a simple payload for an easy-to-understand visual overview.


## Example

**Code**
```js
import { BadgeTable } from 'badgetable'

const config = {
    "template": "npmPackages",
    "projects": [
        {
            "title": "Easy Mina",
            "packageName": "easymina",
            "githubUserName": "EasyMina",
            "githubRepository": "easyMina"
        },
        {
            "title": "Mina Data",
            "packageName": "minadata",
            "githubUserName": "EasyMina",
            "githubRepository": "minaData"
        }
    ]
}

const btg = new BadgeTable()
btg.getTable( value )
```

**Result**
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Easy Mina]() | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://www.npmjs.com/package/easymina"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Mina Data]() | <a href="https://www.npmjs.com/package/minadata?activeTab=versions"><img src="https://img.shields.io/npm/v/minadata?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/minaData"><img src="https://img.shields.io/github/last-commit/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://www.npmjs.com/package/minadata"><img src="https://img.shields.io/npm/dt/minadata?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData"><img src="https://img.shields.io/circleci/build/github/EasyMina/minaData?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

This table is generated using https://github.com/a6b8/BadgeTable.


## Table of Contents

1. [Example](#example)<br>
2. [Methods](#methods)
3. [Templates](#templates)
4. [Contributing](#contributing)<br>
5. [Limitations](#limitations)<br>
6.  [License](#license)<br>


## Methods

The module contains only two methods: `.getTable()` and `.setConfig()`.

```
npm init -y
npm i badgetable
```

### .getTable()

```.getTable( { template, projects, sort } )```

Table for `"template"`:

| Key      | Type    | Required |
|----------|---------|----|
| template | String  | `true` |  
| projects | Array of objects  | `true` |
| sort | Boolean  | `false` |

As default following keys are possible "npmPackages", "gemPackages" for "templates". To customize the output use [.setConfig() ](#setConfig())

For `projects` items will following key are expected:

| Key            | Type     | Required |
|----------------|----------|----|
|   title     | String   | `true` |
|   packageName | String | `true` |
|   githubUserName | String | `true` |
|   githubRepository | String | `true` |


### .getConfig()

```.getConfig()```

Retrieve the default configuration after auto-generation. This can be useful if you want to create your custom configuration.


### .setConfig()

```.getConfig( { config } )```

To customize your configuration, you can provide your own config. It is recommended to modify the [default configuration](https://github.com/a6b8/BadgeTable/blob/main/src/data/config.mjs). The configuration distinguishes between `Badges`, `Columns`, and `Templates`. Within `Badges`, each badge is defined using a `struct`. The `wrapperUrl` can be used to create a clickable link, and the `shield` represents the actual badge content. The `struct` expects pseudo-HTML enclosed in "<<" and ">>". Variables within the payload are denoted by "{{" and "}}".

```js
import { BadgeTable } from 'badgetable'
const btg = new BadgeTable( true )

const yourConfig = {}
const markDown = btg
    .setConfig( yourConfig )
    .getTable( { template, projects, sort } )

```

### Template

Currently, there are 3 different templates to choose from. Generation is done using `getTable()`.

| Template        | Headline            | Required Keys                               |
|-----------------|--------------------|---------------------------------------------|
| gemPackages     | Gem Packages        | title, packageName, githubUserName, githubRepository |
| npmPackages     | Npm Packages        | title, packageName, githubUserName, githubRepository |
| documentation   | Documentation       | title, imageUrl, uptimeRobotId, githubUserName, githubRepository |

**Example 'gemPackages'**

| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator]() | <a href="https://rubygems.org/gems/ascii_to_svg"><img src="https://img.shields.io/gem/v/ascii_to_svg?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><img src="https://img.shields.io/gem/dt/ascii_to_svg?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

**Example 'npmPackages'**

| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Easy Mina]() | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://www.npmjs.com/package/easymina"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

**Example 'documentation':**

| Title | Uptime | Url |
| :-- | :-- | :-- |
| <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://docs.statosio.com/assets/images/statosio.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |




## Limitations

- Currently in Alpha Stage

## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).