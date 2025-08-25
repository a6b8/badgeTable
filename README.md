![CircleCI](https://img.shields.io/circleci/build/github/a6b8/badgeTable/main) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

# Badge Table Generator

Helps create summary tables for modules and websites by adding badges through shields.io. It generates complex Markdown code with a simple payload for an easy-to-understand visual overview.

## Features

- Creates an overview in the form of a `markdown` table.
- Users can choose from various predefined `presets`.
- Dynamic information can be inserted into individual cells using, for example, `shields.io` badges.
- Customized to meet the needs of open-source repository maintainers. To efficiently monitor metrics from various repositories.

```shell
npm init -y
npm i badgetable
```

## Example

| Title | Article | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) |  | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/commits/main"><img src="https://img.shields.io/github/commit-activity/t/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/circleci/build/github/flowmcp/flowmcp-core?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](https://medium.com/@a6b8) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubOverviewWithArticle](./presets.md#githubOverviewWithArticle)



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

```shell
npm init -y
npm i badgetable
```

### .getTable()

This method generates the desired table. The form is determined by the `preset` parameter.

**Method**
```javascript
.getTable( { preset, projects, sort=true, footer=true, header=false } )
```

| Name          | Type                  | Default | Description                                         | Required |
| ------------- | --------------------- | ------- | --------------------------------------------------- | -------- |
| preset        | String                |         | The preset to use for generating the table.        | `true`   |
| projects      | Array of Objects      |         | The projects to include in the table.              | `true`   |
| sort          | Boolean               | `true`  | Whether to sort the table.                         | `false`  |
| footer        | Boolean               | `true`  | Whether to include a footer in the table.          | `false`  |
| header        | Boolean               | `false` | Whether to include a header in the table.          | `false`  |

See [Presets](#presets) for examples.

**Returns**
```String (markdown)```

### .getPresets()

This helper method returns an array of strings containing all available `presets`.

**Method**
```javascript
.getPresets()
```

**Return**
```
Array of Strings
```

### .getConfig()

This method returns the currently active configuration. This object also contains the respective presets needed to generate a table. To create a custom table, see [.setConfig()](#setconfig).

**Method**
```javascript
.getConfig()
```

**Returns**
```Object```

Retrieve the default configuration after auto-generation. This can be useful if you want to create your custom configuration.

### .setConfig()

This method allows you to adjust the configuration, for example, to insert your custom template.

> Contribution welcome, we are happy to expand the standard presets. Please send us your suggestions.

**Method**
```javascript
.setConfig( { config, init=false } )
```

| Name          | Type                  | Default | Description                                         | Required |
| ------------- | --------------------- | ------- | --------------------------------------------------- | -------- |
| config        | Object                |         | The configuration to set for the function.          | `true`   |
| init          | Boolean               | `false` | Do not provide this parameter.           | `false`  |

**Example**
To customize your configuration, you can provide your own config. It is recommended to modify the [default configuration](https://github.com/a6b8/BadgeTable/blob/main/src/data/config.mjs). The configuration distinguishes between `Badges`, `Columns`, and `Presets`. Within `Badges`, each badge is defined using a `struct`. The `wrapperUrl` can be used to create a clickable link, and the `shield` represents the actual badge content. The `struct` expects pseudo-HTML enclosed in "<<" and ">>". Variables within the payload are denoted by "{{" and "}}".

```javascript
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
```Boolean```

## Presets
Here are all the presets listed as an overview. A detailed description for each example is stored in [./preset.md](./presets.md).

### documentation
| Title | Uptime | Url |
| :-- | :-- | :-- |
| <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://docs.statosio.com/assets/images/statosio.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |
| <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://docs.writeinvoice.com/assets/images/logo.png" style="max-width: 100%; height: 25px; filter: grayscale(1);"></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://shields.io/uptimerobot/status/m790382405-ad7bffbdf0263dd6daec2d27?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |

Implementation: [./presets.md#documentation](./presets.md#documentation)

### documentationRepository
| Title | Updated | Uptime | Release | Workflow | Url |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Statosio](https://github.com/a6b8/statosio-for-ruby) | <a href="https://api.github.com/repos/a6b8/statosio-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/statosio-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby/releases/"><img src="https://img.shields.io/github/v/release/a6b8/statosio-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby/actions"><img src="https://img.shields.io/github/actions/workflow/status/a6b8/statosio-for-ruby/undefined?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |
| [Write Invoice](https://github.com/a6b8/write-invoice-for-ruby) | <a href="https://api.github.com/repos/a6b8/write-invoice-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/write-invoice-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://shields.io/uptimerobot/status/m790382405-ad7bffbdf0263dd6daec2d27?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby/releases/"><img src="https://img.shields.io/github/v/release/a6b8/write-invoice-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby/actions"><img src="https://img.shields.io/github/actions/workflow/status/a6b8/write-invoice-for-ruby/undefined?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |

Implementation: [./presets.md#documentationRepository](./presets.md#documentationRepository)

### documentationRepositoryCircleCi
| Title | Updated | Uptime | Release | Tests | Url |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Statosio](https://github.com/a6b8/statosio-for-ruby) | <a href="https://api.github.com/repos/a6b8/statosio-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/statosio-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://shields.io/uptimerobot/status/m786809205-43089a21ef2cbf3c086bad86?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby/releases/"><img src="https://img.shields.io/github/v/release/a6b8/statosio-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/statosio-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/statosio-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |
| [Write Invoice](https://github.com/a6b8/write-invoice-for-ruby) | <a href="https://api.github.com/repos/a6b8/write-invoice-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/write-invoice-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://shields.io/uptimerobot/status/m790382405-ad7bffbdf0263dd6daec2d27?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby/releases/"><img src="https://img.shields.io/github/v/release/a6b8/write-invoice-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/write-invoice-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/write-invoice-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | [https://docs.statosio.com/](https://docs.statosio.com/) |

Implementation: [./presets.md#documentationRepositoryCircleCi](./presets.md#documentationRepositoryCircleCi)

### dynamicPackageSearch
| Title | Updated | Package |
| :-- | :-- | :-- |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FeasyMina%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Mina Data](https://github.com/EasyMina/minaData) | <a href="https://api.github.com/repos/EasyMina/minaData"><img src="https://img.shields.io/github/last-commit/EasyMina/minaData?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/minaData/raw/main/package.json"><img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2FEasyMina%2FminaData%2Fraw%2Fmain%2Fpackage.json&query=%24.dependencies.o1js&color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#dynamicPackageSearch](./presets.md#dynamicPackageSearch)

### gemPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#gemPackages](./presets.md#gemPackages)

### gemPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Feed Into](https://github.com/a6b8/feed-into-for-ruby) | <a href="https://rubygems.org/gems/feed_into"><img src="https://img.shields.io/gem/v/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/feed-into-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/feed_into?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/feed-into-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/feed-into-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/feed-into-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Masked Ape Club](https://github.com/a6b8/masked-ape-club-for-ruby) | <a href="https://rubygems.org/gems/masked_ape_club"><img src="https://img.shields.io/gem/v/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/masked-ape-club-for-ruby/graphs/traffic"><img src="https://img.shields.io/gem/dt/masked_ape_club?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/masked-ape-club-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/masked-ape-club-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/masked-ape-club-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#gemPackagesCircleCi](./presets.md#gemPackagesCircleCi)

### githubActivity
| Title | Updated | Stars | Commits | Contributors | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/commits/main"><img src="https://img.shields.io/github/commit-activity/t/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/graphs/contributors"><img src="https://img.shields.io/github/contributors/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubActivity](./presets.md#githubActivity)

### githubAdvanced
| Title | Updated | Stars | Commits | Contributors | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/commits/main"><img src="https://img.shields.io/github/commit-activity/t/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/graphs/contributors"><img src="https://img.shields.io/github/contributors/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/directory-file-count/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/repo-size/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/graphs/contributors"><img src="https://img.shields.io/github/contributors/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubAdvanced](./presets.md#githubAdvanced)

### githubDetails
| Title | Updated | Release | Workflow | Issues | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/releases/"><img src="https://img.shields.io/github/v/release/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/actions"><img src="https://img.shields.io/github/actions/workflow/status/flowmcp/flowmcp-core/test-on-release.yml?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/flowmcp/flowmcp-core/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/releases/"><img src="https://img.shields.io/github/v/release/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/actions"><img src="https://img.shields.io/github/actions/workflow/status/a6b8/badgeTable/test-on-release.yml?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubDetails](./presets.md#githubDetails)

### githubDetailsCircleCi
| Title | Updated | Release | Tests | Issues | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/releases/"><img src="https://img.shields.io/github/v/release/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/circleci/build/github/flowmcp/flowmcp-core?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/flowmcp/flowmcp-core/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/releases/"><img src="https://img.shields.io/github/v/release/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubDetailsCircleCi](./presets.md#githubDetailsCircleCi)

### githubDetailsCodeCoverage
| Title | Updated | Release | Workflow | Issues | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/releases/"><img src="https://img.shields.io/github/v/release/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/actions"><img src="https://img.shields.io/github/actions/workflow/status/flowmcp/flowmcp-core/test-on-release.yml?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/flowmcp/flowmcp-core/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/releases/"><img src="https://img.shields.io/github/v/release/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/actions"><img src="https://img.shields.io/github/actions/workflow/status/a6b8/badgeTable/test-on-release.yml?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/issues?q=is:issue%20state:closed"><img src="https://img.shields.io/github/issues-closed/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubDetailsCodeCoverage](./presets.md#githubDetailsCodeCoverage)

### githubMinimal
| Title | Updated | License |
| :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubMinimal](./presets.md#githubMinimal)

### githubOverview
| Title | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/commits/main"><img src="https://img.shields.io/github/commit-activity/t/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/circleci/build/github/flowmcp/flowmcp-core?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubOverview](./presets.md#githubOverview)

### githubOverviewWithArticle
| Title | Article | Updated | Stars | Commits | Issues | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) |  | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/commits/main"><img src="https://img.shields.io/github/commit-activity/t/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/issues/"><img src="https://img.shields.io/github/issues/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/circleci/build/github/flowmcp/flowmcp-core?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](https://medium.com/@a6b8) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubOverviewWithArticle](./presets.md#githubOverviewWithArticle)

### githubStats
| Title | Updated | Stars | Files | Size | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Ascii to svg Generator](https://github.com/flowmcp/flowmcp-core) | <a href="https://api.github.com/repos/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/last-commit/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/stargazers"><img src="https://img.shields.io/github/stars/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/directory-file-count/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core"><img src="https://img.shields.io/github/repo-size/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/flowmcp/flowmcp-core/blob/main/LICENSE"><img src="https://img.shields.io/github/license/flowmcp/flowmcp-core?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/directory-file-count/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/github/repo-size/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#githubStats](./presets.md#githubStats)

### npmPackages
| Title | Version | Updated | Statistics | License |
| :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/EasyMina/easyMina/graphs/traffic"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#npmPackages](./presets.md#npmPackages)

### npmPackagesCircleCi
| Title | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Easy Mina](https://github.com/EasyMina/easyMina) | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/EasyMina/easyMina/graphs/traffic"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#npmPackagesCircleCi](./presets.md#npmPackagesCircleCi)

### npmPackagesCircleCiWithArticle
| Title | Article | Version | Updated | Statistics | Tests | License |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](https://medium.com/@a6b8) | <a href="https://www.npmjs.com/package/badgetable?activeTab=versions"><img src="https://img.shields.io/npm/v/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/a6b8/badgeTable/graphs/traffic"><img src="https://img.shields.io/npm/dt/badgetable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Easy Mina](https://github.com/EasyMina/easyMina) |  | <a href="https://www.npmjs.com/package/easymina?activeTab=versions"><img src="https://img.shields.io/npm/v/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://api.github.com/repos/EasyMina/easyMina"><img src="https://img.shields.io/github/last-commit/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/stargazers"><img src="https://img.shields.io/github/stars/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a><a href="https://github.com/EasyMina/easyMina/graphs/traffic"><img src="https://img.shields.io/npm/dt/easymina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina"><img src="https://img.shields.io/circleci/build/github/EasyMina/easyMina?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/EasyMina/easyMina/blob/main/LICENSE"><img src="https://img.shields.io/github/license/EasyMina/easyMina?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./presets.md#npmPackagesCircleCiWithArticle](./presets.md#npmPackagesCircleCiWithArticle)



## License

The module is available as open source under the terms of the [MIT](https://github.com/a6b8/BadgeTable/blob/main/LICENSE).