# Presets

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

Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Tests, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubOverview",
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
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Tests, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository


**Code:**
```js
import { BadgeTable } from 'badgetable'
const badgeTable = new BadgeTable()
const values = {
    "preset": "githubOverviewWithArticle",
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
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

Implementation: [./tests/results/presets.md#githubOverviewWithArticle](./tests/results/presets.md#githubOverviewWithArticle)

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
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

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
            "title": "Easy Mina",
            "packageName": "easymina",
            "githubUserName": "EasyMina",
            "githubRepository": "easyMina",
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
| [Ascii to svg Generator](https://github.com/a6b8/ascii-to-svg-generator-for-ruby) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/github/last-commit/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/stargazers"><img src="https://img.shields.io/github/stars/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/issues/main"><img src="https://img.shields.io/github/issues/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby"><img src="https://img.shields.io/circleci/build/github/a6b8/ascii-to-svg-generator-for-ruby?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/ascii-to-svg-generator-for-ruby/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/ascii-to-svg-generator-for-ruby?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |
| [Badge Table](https://github.com/a6b8/badgeTable) | [X](undefined) | <a href="https://api.github.com/repos/a6b8/badgeTable"><img src="https://img.shields.io/github/last-commit/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/stargazers"><img src="https://img.shields.io/github/stars/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/commits/main"><img src="https://img.shields.io/github/commit-activity/t/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/issues/main"><img src="https://img.shields.io/github/issues/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable"><img src="https://img.shields.io/circleci/build/github/a6b8/badgeTable?logo=F3A966&logoColor=F3A966&style=flat&label="></a> | <a href="https://github.com/a6b8/badgeTable/blob/main/LICENSE"><img src="https://img.shields.io/github/license/a6b8/badgeTable?color=0E1116&logo=F3A966&logoColor=F3A966&style=flat&label="></a> |

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
            "title": "Easy Mina",
            "packageName": "easymina",
            "githubUserName": "EasyMina",
            "githubRepository": "easyMina",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

