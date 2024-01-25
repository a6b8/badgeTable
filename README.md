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

Features:
- Creates an overview in the form of a `markdown` table.
- Users can choose from various predefined `presets`.
- Dynamic information can be inserted into individual cells using, for example, `shields.io` badges.
- Customized to meet the needs of open-source repository maintainers. To efficiently monitor metrics from various repositories.


## Example

| Title | Article | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) |  | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](https://dedeed) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubOverviewWithArticle](./tests/results/presets.md#githubOverviewWithArticle)



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

### documentation
| Title | Uptime | Url |
| :-- | :-- | :-- |
| <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://docs.statosio.com/assets/images/statosio.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |
| <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://docs.writeinvoice.com/assets/images/logo.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://shields.io/uptimerobot/status/m790382405-ad7bffbdf0263dd6daec2d27?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |

Implementation: [./tests/results/presets.md#documentation](./tests/results/presets.md#documentation)

### dynamicPackageSearch
| Title | Updated | Package |
| :-- | :-- | :-- |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FeasyMina%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Mina Data](https://github.com/EasyMina/minaData) | <a href="https://api.github.com/repos/EasyMina/minaData"><img src="https://img.shields.io/github/last-commit/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FminaData%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#dynamicPackageSearch](./tests/results/presets.md#dynamicPackageSearch)

### gemPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#gemPackages](./tests/results/presets.md#gemPackages)

### gemPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/feed-into-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/masked-ape-club-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#gemPackagesCircleCi](./tests/results/presets.md#gemPackagesCircleCi)

### githubActivity
| Title | Updated | Stars | Commits | Contributors | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubActivity](./tests/results/presets.md#githubActivity)

### githubAdvanced
| Title | Updated | Stars | Commits | Contributors | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/directory-file-count/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/repo-size/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubAdvanced](./tests/results/presets.md#githubAdvanced)

### githubMinimal
| Title | Updated | License |
| :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubMinimal](./tests/results/presets.md#githubMinimal)

### githubOverview
| Title | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubOverview](./tests/results/presets.md#githubOverview)

### githubOverviewWithArticle
| Title | Article | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) |  | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](https://dedeed) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubOverviewWithArticle](./tests/results/presets.md#githubOverviewWithArticle)

### githubStats
| Title | Updated | Stars | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/directory-file-count/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/repo-size/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubStats](./tests/results/presets.md#githubStats)

### npmPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/EasyMina/easyMina/graphs/traffic"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#npmPackages](./tests/results/presets.md#npmPackages)

### npmPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/EasyMina/easyMina/graphs/traffic"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#npmPackagesCircleCi](./tests/results/presets.md#npmPackagesCircleCi)




## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).