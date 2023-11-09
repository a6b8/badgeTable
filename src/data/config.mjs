export const configImported = {
    'templates': {
        'gemPackages': {
            'headline': 'Gem Packages',
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
        'documentation': {
            'headline': 'Documentation',
            'validation': [ 'title', 'imageUrl', 'uptimeRobotId', 'githubUserName', 'githubRepository' ],
            'structs': [
                [ 'tree__columns__image', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__uptime', 'tree__markdown__alignment__left' ],
                [ 'tree__columns__url', 'tree__markdown__alignment__left' ]
            ]
        }
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
        'continiousIntegration': {
            'headline': 'Tests',
            'row': [ 'tree__badges__circleCiBuild' ]
        },
        'gemStatistics': {
            'headline': 'Statistics',
            'row': [ 'tree__badges__gitHubRepositoryStars', 'tree__badges__gemDownloads' ]
        },
        'npmStatistics': {
            'headline': 'Statistics',
            'row': [ 'tree__badges__gitHubRepositoryStars', 'tree__badges__npmDownloads' ]
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
        'circleCiBuild': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://img.shields.io/circleci/build/github/{{githubUserName}}/{{githubRepository}}?{{tree__styles__buildPassing__url}}'
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
        'uptimeRobot': {
            'struct': '<<wrapperUrl>><<shield>><</wrapperUrl>>',
            'wrapperUrl': '{{tree__links__githubRepository}}',
            'shield': 'https://shields.io/uptimerobot/status/{{uptimeRobotId}}?{{tree__styles__default__url}}'
        }
    },
    'html': {
        'image': [ '<img src="{{imageUrl}}" style="max-width: 100%; height: 25px; filter: grayscale(1);">'],
        'markdownUrlX': [ '[X]({{tree__badges__self__wrapperUrl}})' ],
        'markdownUrlPure': [ '[{{tree__badges__self__wrapperUrl}}]({{tree__badges__self__wrapperUrl}})', '' ],
        'markdownUrlName': [ '[{{title}}]({{tree__badges__self__wrapperUrl}})', '' ],
        'wrapperUrl': [ '<a href="{{tree__badges__self__wrapperUrl}}">', '</a>' ],
        'shield': [ '<img src="{{tree__badges__self__shield}}">', '' ]
    },
    'links': {
        'githubLicense': 'https://github.com/{{githubUserName}}/{{githubRepository}}/blob/main/LICENSE',
        'githubRepository': 'https://github.com/{{githubUserName}}/{{githubRepository}}',
        'githubTraffic': 'https://github.com/{{githubUserName}}/{{githubRepository}}/graphs/traffic',
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