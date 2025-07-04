export const configImported = {
    'presets': {
        'gemPackages': {
            'headline': 'Gem Packages',
            'description': 'Table for Ruby Gem Packages with version number, latest update, total download numbers, and license.', 
            'validation': [ 'title', 'packageName', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__gemVersion', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__gemStatistics', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'gemPackagesCircleCi': {
            'headline': 'Gem Packages',
            'description': 'Table for Ruby Gem Packages with version number, latest update, total download numbers, license, and test integration via CircleCI.', 
            'validation': [ 'title', 'packageName', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__gemVersion', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__gemStatistics', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'npmPackages': {
            'headline': 'Npm Packages',
            'description': 'Table for Node.js Packages with version number, latest update, total download numbers, and license.', 
            'validation': [ 'title', 'packageName', 'githubUserName', 'githubRepository' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmVersion', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmStatistics', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ]
        },
        'npmPackagesCircleCi': {
            'headline': 'Npm Packages',
            'description': 'Table for Node.js Packages with version number, latest update, total download numbers, license, and integration via CircleCI.', 
            'validation': [ 'title', 'packageName', 'githubUserName', 'githubRepository' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmVersion', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmStatistics', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ]
        },
        'npmPackagesCircleCiWithArticle': {
            'headline': 'Npm Packages',
            'description': 'Table for Node.js Packages with version number, latest update, total download numbers, license, and integration via CircleCI.', 
            'validation': [ 'title', 'packageName', 'githubUserName', 'githubRepository', 'url' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__article', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmVersion', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__npmStatistics', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ]
        },
        'documentation': {
            'headline': 'Documentation',
            'description': 'Table for displaying dedicated documentations with images, uptime status, and URLs.',
            'validation': [ 'title', 'imageUrl', 'uptimeRobotId', 'githubUserName', 'githubRepository', 'url' ],
            'structs': [
                [ 'tree__columns__image', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__uptime', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__url', 'tree__markdown__alignment__left' ]
            ]
        },
        'documentationRepository': {
            'headline': 'Website Repository',
            'description': 'Table for displaying website repositories with images, uptime status, GitHub repository details, and URLs.',
            'validation': [ 'title', 'imageUrl', 'uptimeRobotId', 'githubUserName', 'githubRepository', 'url' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__uptime', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubRelease', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubWorkflow', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__url', 'tree__markdown__alignment__left' ]
            ]
        },
        'documentationRepositoryCircleCi': {
            'headline': 'Website Repository',
            'description': 'Table for displaying website repositories with images, uptime status, GitHub repository details, and URLs.',
            'validation': [ 'title', 'imageUrl', 'uptimeRobotId', 'githubUserName', 'githubRepository', 'url' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__uptime', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubRelease', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__url', 'tree__markdown__alignment__left' ]
            ]
        },
        'githubDetailsCircleCi': {
            'headline': 'Developer Repository View',
            'description': null,
            'validation': [ 'title', 'githubUserName', 'githubRepository'],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubRelease', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubIssuesOpenAndClosed', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ]
        },
        'githubDetails': {
            'headline': 'Developer Repository View',
            'description': null,
            'validation': [ 'title', 'githubUserName', 'githubRepository', 'githubWorkflowPath' ],
            'structs': [
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubRelease', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubWorkflow', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubIssuesOpenAndClosed', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ]
        },
        'githubStats': {
            'headline': 'Github',
            'description': 'Table for GitHub Statistics such as Stars, Total File Size, Total File Count, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubStars', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubFileCount', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubSize', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'githubActivity': {
            'headline': 'Github',
            'description': 'Table for GitHub Activity Stats like Total Stars, Total Commits, Total Contributors, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubStars', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubCommits', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubContributors', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'githubOverview': {
            'headline': 'Github',
            'description': 'Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Tests, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubStars', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubCommits', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubIssues', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'githubOverviewWithArticle': {
            'headline': 'Github',
            'description': 'Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Tests, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository', 'url' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__article', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubStars', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubCommits', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubIssues', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__continiousIntegration', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'githubAdvanced': {
            'headline': 'Github',
            'description': 'Table for GitHub Statistics and Activity, including Total Stars, Total Commits, Total Contributors, Total File Size, Total File Count, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubStars', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubCommits', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubContributors', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubFileCount', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubSize', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'githubMinimal': {
            'headline': 'Github',
            'description': 'Table for GitHub with the last update date and License.', 
            'validation': [ 'title', 'githubUserName', 'githubRepository' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__license', 'tree__markdown__alignment__left' ]
            ],
        },
        'dynamicPackageSearch': {
            'headline': 'Github',
            'description': 'Table for GitHub with dynamic search for package.json, including last updated date, Total Stars, Total File Size, Total File Count, and License.',
            'validation': [ 'title', 'githubUserName', 'githubRepository', 'jsonPath' ],
            'structs': [ 
                [ 'tree__columns__text', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__githubUpdated', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__packageData', 'tree__markdown__alignment__left' ]
            ]
        },
    },
    'columns': {
        'text': {
            'headline': 'Title',
            'row': [ 'tree__badges__textDefault' ]
        },
        'image': {
            'headline': 'Title',
            'row': [ 'tree__badges__textImage' ],
        },
        'url': {
            'headline': 'Url',
            'row': [ 'tree__badges__textUrl' ],
        },
        'article': {
            'headline': 'Article',
            'row': [ 'tree__badges__articleUrl' ],
        },
        'gemVersion': {
            'headline': 'Version',
            'row': [ 'tree__badges__gemVersion' ] 
        },
        'npmVersion': {
            'headline': 'Version',
            'row': [ 'tree__badges__npmVersion' ] 
        },
        'githubUpdated': {
            'headline': 'Updated',
            'row': [ 'tree__badges__gitHubLastCommit' ]
        },
        'githubSize': {
            'headline': 'Size',
            'row': [ 'tree__badges__githubRepositorySize' ]
        },
        'packageData': {
            'headline': 'Package',
            'row': [ 'tree__badges__packageData' ]
        },
        'githubFileCount': {
            'headline': 'Files',
            'row': [ 'tree__badges__githubRepositoryFileCount' ]
        },
        'githubCommits': {
            'headline': 'Commits',
            'row': [ 'tree__badges__githubCommits' ]
        },
        'githubRelease': {
            'headline': 'Release',
            'row': [ 'tree__badges__gitHubRelease' ]
        },
        'githubIssues': {
            'headline': 'Issues',
            'row': [ 'tree__badges__gitHubIssuesOpen' ]
        },
        'githubIssuesOpenAndClosed': {
            'headline': 'Issues',
            'row': [ 'tree__badges__gitHubIssuesOpen', 'tree__badges__gitHubIssuesClosed' ]
        },
        'githubContributors': {
            'headline': 'Contributors',
            'row': [ 'tree__badges__githubContributors' ]
        },
        'continiousIntegration': {
            'headline': 'Tests',
            'row': [ 'tree__badges__circleCiBuild' ]
        },
        'githubWorkflow': {
            'headline': 'Workflow',
            'row': [ 'tree__badges__githubWorkflow' ]
        },
        'gemStatistics': {
            'headline': 'Statistics',
            'row': [ 'tree__badges__gitHubRepositoryStars', 'tree__badges__gemDownloads' ]
        },
        'npmStatistics': {
            'headline': 'Statistics',
            'row': [ 'tree__badges__gitHubRepositoryStars', 'tree__badges__npmDownloads' ]
        },
        'githubStars': {
            'headline': 'Stars',
            'row': [ 'tree__badges__gitHubRepositoryStars' ]
        },
        'license': {
            'headline': 'License',
            'row': [ 'tree__badges__githubLicense' ]
        },
        'uptime': {
            'headline': 'Uptime',
            'row': [ 'tree__badges__uptimeRobot' ]
        }
    },
    'badges': {
        'textDefault': {
            'struct': '<<markdownUrlName>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': ''
        },
        'textUrl': {
            'struct': '<<markdownUrlPure>>',
            'wrapperUrl': '{{url}}',
            'shield': ''
        },
        'articleUrl': {
            'struct': '<<markdownUrlX>>',
            'wrapperUrl': '{{url}}',
            'shield': ''
        },
        'textImage': {
            'struct':'<<wrapperUrl>><<image>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': ''
        },
        'gemVersion': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': 'https://rubygems.org/gems/{{packageName}}',
            'shield': 'https://img.shields.io/gem/v/{{packageName}}?{{tree__styles__default__url}}'
        },
        'npmVersion': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': 'https://www.npmjs.com/package/{{packageName}}?activeTab=versions',
            'shield': 'https://img.shields.io/npm/v/{{packageName}}?{{tree__styles__default__url}}'
        },
        'gitHubLastCommit': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': 'https://api.github.com/repos/{{githubUserName}}/{{githubRepository}}',
            'shield': 'https://img.shields.io/github/last-commit/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'gitHubIssuesClosed': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubIssues}}',
            'shield': 'https://img.shields.io/github/issues-closed/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'gitHubIssuesOpen': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubIssues}}',
            'shield': 'https://img.shields.io/github/issues/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'gitHubIssuesClosed': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubIssuesClosed}}',
            'shield': 'https://img.shields.io/github/issues-closed/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'gitHubRelease': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubReleases}}',
            'shield': 'https://img.shields.io/github/v/release/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'circleCiBuild': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://img.shields.io/circleci/build/github/{{githubUserName}}/{{githubRepository}}?{{tree__styles__buildPassing__url}}'
        },
        'githubWorkflow': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubActions}}',
            'shield': 'https://img.shields.io/github/actions/workflow/status/{{githubUserName}}/{{githubRepository}}/{{githubWorkflowPath}}?{{tree__styles__buildPassing__url}}'
        },
        'snykVulnerabilities': {
            'struct': '<<shield>>',
            'wrapperUrl': '',
            'shield': 'https://shields.io/snyk/vulnerabilities/github/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'gitHubRepositoryStars': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepositoryStars}}',
            'shield': 'https://img.shields.io/github/stars/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'githubRepositorySize': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://img.shields.io/github/repo-size/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },      
        'githubRepositoryFileCount': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://img.shields.io/github/directory-file-count/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },        
        'gemDownloads': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubTraffic}}',
            'shield': 'https://img.shields.io/gem/dt/{{packageName}}?{{tree__styles__default__url}}'
        },
        'npmDownloads': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubTraffic}}',
            'shield': 'https://img.shields.io/npm/dt/{{packageName}}?{{tree__styles__default__url}}'
        },
        'githubLicense': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubLicense}}',
            'shield': 'https://img.shields.io/github/license/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'githubCommits': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubCommits}}',
            'shield': 'https://img.shields.io/github/commit-activity/t/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'githubContributors': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubContributors}}',
            'shield': 'https://img.shields.io/github/contributors/{{githubUserName}}/{{githubRepository}}?{{tree__styles__default__url}}'
        },
        'uptimeRobot': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://shields.io/uptimerobot/status/{{uptimeRobotId}}?{{tree__styles__default__url}}'
        },
        'packageData': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': 'https://github.com/{{githubUserName}}/{{githubRepository}}/raw/{{githubBranch}}/package.json',
            'shield': 'https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2F{{githubUserName}}%2F{{githubRepository}}%2Fraw%2F{{githubBranch}}%2Fpackage.json&query=%24.{{jsonPath}}&{{tree__styles__default__url}}'
        }
    },
    'html': {
        'image': [ '<img src="{{imageUrl}}" style="max-width: 100%; height: 25px; filter: grayscale(1);">' ],
        'markdownUrlX': [ '[X]({{tree__badges__self__wrapperUrl}})' ],
        'markdownUrlPure': [ '[{{tree__badges__self__wrapperUrl}}]({{tree__badges__self__wrapperUrl}})', '' ],
        'markdownUrlName': [ '[{{title}}]({{tree__badges__self__wrapperUrl}})', '' ],
        'wrapperUrl': [ '<a href="{{tree__badges__self__wrapperUrl}}">', '</a>' ],
        'shield': [ '<img src="{{tree__badges__self__shield}}">', '' ]
    },
    'links': {
        'githubLicense': 'https://github.com/{{githubUserName}}/{{githubRepository}}/blob/{{githubBranch}}/LICENSE',
        'githubRepository': 'https://github.com/{{githubUserName}}/{{githubRepository}}',
        'githubTraffic': 'https://github.com/{{githubUserName}}/{{githubRepository}}/graphs/traffic',
        'githubCommits': 'https://github.com/{{githubUserName}}/{{githubRepository}}/commits/{{githubBranch}}',
        'githubIssues': 'https://github.com/{{githubUserName}}/{{githubRepository}}/issues/',
        'githubIssuesClosed': 'https://github.com/{{githubUserName}}/{{githubRepository}}/issues?q=is:issue%20state:closed',
        'githubActions': 'https://github.com/{{githubUserName}}/{{githubRepository}}/actions',
        'githubReleases': 'https://github.com/{{githubUserName}}/{{githubRepository}}/releases/',
        'githubContributors': 'https://github.com/{{githubUserName}}/{{githubRepository}}/graphs/contributors',
        'githubRepositoryStars': 'https://github.com/{{githubUserName}}/{{githubRepository}}/stargazers'
    },
    'markdown': {
        'alignment': {
            'left': ':--',
            'center': '-:-',
            'right': '--:'
        },
        'footerText': 'This table is generated using https://github.com/a6b8/badgeTable'
    },
    'styles': {
        'default': {
            'url': null,
            'parameters': {
                'color': '0E1116',
                'logo': 'F3A966',
                'logoColor': 'F3A966',
                'style': 'flat',
                'label': ''
            }
        },
        'buildPassing': {
            'url': null,
            'parameters': {
                'logo': 'F3A966',
                'logoColor': 'F3A966',
                'style': 'flat',
                'label': ''
            }
        }
    }
}