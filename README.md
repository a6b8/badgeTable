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

| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Easy Mina]() | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://www.npmjs.com/package/easymina"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Mina Data]() | <a href="https://www.npmjs.com/package/minadata?activeTab=versions"><img src="https://img.shields.io/npm/v/minadata?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/minaData"><img src="https://img.shields.io/github/last-commit/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://www.npmjs.com/package/minadata"><img src="https://img.shields.io/npm/dt/minadata?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData"><img src="https://img.shields.io/circleci/build/github/EasyMina/minaData?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |


**Code**
```js
import { BadgeTable } from 'badgetable'

const btg = new BadgeTable()
btg.getTable( {
    'preset': 'npmPackages',
    'projects': [
        {
            'title': 'Easy Mina',
            'packageName': 'easymina',
            'githubUserName': 'EasyMina',
            'githubRepository': 'easyMina'
        },
        {
            'title': 'Mina Data',
            'packageName': 'minadata',
            'githubUserName': 'EasyMina',
            'githubRepository': 'minaData'
        }
    ]
} )
```


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

### gemPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for Ruby Gem Packages with version number, latest update, total download numbers, and license.

**Required Keys:**
- title
- packageName
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "gemPackages",
    "projects": [
        {
            "title": "Feed Into",
            "packageName": "feed_into",
            "githubUserName": "a6b8",
            "githubRepository": "feed-into-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Masked Ape Club",
            "packageName": "masked_ape_club",
            "githubUserName": "a6b8",
            "githubRepository": "masked-ape-club-for-ruby",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### gemPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/feed-into-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/masked-ape-club-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for Ruby Gem Packages with version number, latest update, total download numbers, license, and test integration via CircleCI.

**Required Keys:**
- title
- packageName
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "gemPackagesCircleCi",
    "projects": [
        {
            "title": "Feed Into",
            "packageName": "feed_into",
            "githubUserName": "a6b8",
            "githubRepository": "feed-into-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Masked Ape Club",
            "packageName": "masked_ape_club",
            "githubUserName": "a6b8",
            "githubRepository": "masked-ape-club-for-ruby",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### npmPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Ethereum Sanction Check](https://github.com/a6b8/ethereum-sanction-check-for-nodejs) | <a href="https://www.npmjs.com/package/ethereum-sanction-check?activeTab=versions"><img src="https://img.shields.io/npm/v/ethereum-sanction-check?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/ethereum-sanction-check-for-nodejs"><img src="https://img.shields.io/github/last-commit/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/graphs/traffic"><img src="https://img.shields.io/npm/dt/ethereum-sanction-check?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for Node.js Packages with version number, latest update, total download numbers, and license.

**Required Keys:**
- title
- packageName
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "npmPackages",
    "projects": [
        {
            "title": "Badge Table",
            "packageName": "badgetable",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        },
        {
            "title": "Ethereum Sanction Check",
            "packageName": "ethereum-sanction-check",
            "githubUserName": "a6b8",
            "githubRepository": "ethereum-sanction-check-for-nodejs",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### npmPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Ethereum Sanction Check](https://github.com/a6b8/ethereum-sanction-check-for-nodejs) | <a href="https://www.npmjs.com/package/ethereum-sanction-check?activeTab=versions"><img src="https://img.shields.io/npm/v/ethereum-sanction-check?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/ethereum-sanction-check-for-nodejs"><img src="https://img.shields.io/github/last-commit/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/graphs/traffic"><img src="https://img.shields.io/npm/dt/ethereum-sanction-check?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs"><img src="https://img.shields.io/circleci/build/github/a6b8/ethereum-sanction-check-for-nodejs?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ethereum-sanction-check-for-nodejs/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ethereum-sanction-check-for-nodejs?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for Node.js Packages with version number, latest update, total download numbers, license, and integration via CircleCI.

**Required Keys:**
- title
- packageName
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "npmPackagesCircleCi",
    "projects": [
        {
            "title": "Badge Table",
            "packageName": "badgetable",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        },
        {
            "title": "Ethereum Sanction Check",
            "packageName": "ethereum-sanction-check",
            "githubUserName": "a6b8",
            "githubRepository": "ethereum-sanction-check-for-nodejs",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### documentation
| Title | Uptime | Url |
| :-- | :-- | :-- |
| <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://docs.statosio.com/assets/images/statosio.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |
| <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://docs.writeinvoice.com/assets/images/logo.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://shields.io/uptimerobot/status/m790382405-ad7bffbdf0263dd6daec2d27?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |

Table for displaying dedicated documentations with images, uptime status, and URLs.

**Required Keys:**
- title
- imageUrl
- uptimeRobotId
- githubUserName
- githubRepository
- url


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "documentation",
    "projects": [
        {
            "title": "Statosio",
            "imageUrl": "https://docs.statosio.com/assets/images/statosio.png",
            "uptimeRobotId": "m786809205-43089a21ef2cbf3c086bad86",
            "githubUserName": "a6b8",
            "githubRepository": "statosio-for-ruby",
            "url": "https://docs.statosio.com/",
            "githubBranch": "main"
        },
        {
            "title": "Write Invoice",
            "imageUrl": "https://docs.writeinvoice.com/assets/images/logo.png",
            "uptimeRobotId": "m790382405-ad7bffbdf0263dd6daec2d27",
            "githubUserName": "a6b8",
            "githubRepository": "write-invoice-for-ruby",
            "url": "https://docs.statosio.com/",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### githubStats
| Title | Updated | Stars | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/directory-file-count/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/repo-size/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub Statistics such as Stars, Total File Size, Total File Count, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubStats",
    "projects": [
        {
            "title": "Ascii to svg Generator",
            "githubUserName": "a6b8",
            "githubRepository": "ascii-to-svg-generator-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Badge Table",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### githubActivity
| Title | Updated | Stars | Commits | Contributors | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commit/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commit/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub Activity Stats like Total Stars, Total Commits, Total Contributors, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubActivity",
    "projects": [
        {
            "title": "Ascii to svg Generator",
            "githubUserName": "a6b8",
            "githubRepository": "ascii-to-svg-generator-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Badge Table",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### githubAdvanced
| Title | Updated | Stars | Commits | Contributors | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commit/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/directory-file-count/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/repo-size/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commit/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Total Contributors, Total File Size, Total File Count, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubAdvanced",
    "projects": [
        {
            "title": "Ascii to svg Generator",
            "githubUserName": "a6b8",
            "githubRepository": "ascii-to-svg-generator-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Badge Table",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### githubMinimal
| Title | Updated | License |
| :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub with the last update date and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubMinimal",
    "projects": [
        {
            "title": "Ascii to svg Generator",
            "githubUserName": "a6b8",
            "githubRepository": "ascii-to-svg-generator-for-ruby",
            "githubBranch": "main"
        },
        {
            "title": "Badge Table",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### dynamicPackageSearch
| Title | Updated | Package |
| :-- | :-- | :-- |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FeasyMina%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Mina Data](https://github.com/EasyMina/minaData) | <a href="https://api.github.com/repos/EasyMina/minaData"><img src="https://img.shields.io/github/last-commit/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FminaData%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub with dynamic search for package.json, including last updated date, Total Stars, Total File Size, Total File Count, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository
- jsonPath


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "dynamicPackageSearch",
    "projects": [
        {
            "title": "Easy Mina",
            "githubUserName": "EasyMina",
            "githubRepository": "easyMina",
            "jsonPath": "dependencies.o1js",
            "githubBranch": "main"
        },
        {
            "title": "Mina Data",
            "githubUserName": "EasyMina",
            "githubRepository": "minaData",
            "jsonPath": "dependencies.o1js",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```




## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).