# Presets

### documentation
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

### dynamicPackageSearch
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

### gemPackages
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

### githubActivity
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

### githubOverview
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

### githubOverviewWithArticle
Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Tests, and License.

**Required Keys:**
- title
- githubUserName
- githubRepository
- url


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
            "url": "",
            "githubBranch": "main"
        },
        {
            "title": "Badge Table",
            "githubUserName": "a6b8",
            "githubRepository": "badgeTable",
            "url": "https://medium.com/@a6b8",
            "githubBranch": "main"
        }
    ]
}
badgeTable.getTable( values )
```

### githubStats
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

### npmPackages
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

### npmPackagesCircleCi
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

