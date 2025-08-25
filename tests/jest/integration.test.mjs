import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { BadgeTable } from '../../src/BadgeTable.mjs'


describe( 'Integration Tests', () => {
    let badgeTable
    let consoleSpy
    let processExitSpy


    beforeEach( () => {
        consoleSpy = jest.spyOn( console, 'log' ).mockImplementation( () => {} )
        processExitSpy = jest.spyOn( process, 'exit' ).mockImplementation( () => {} )
        badgeTable = new BadgeTable()
        consoleSpy.mockClear()
        processExitSpy.mockClear()
    } )


    afterEach( () => {
        consoleSpy.mockRestore()
        processExitSpy.mockRestore()
    } )


    describe( 'Full Workflow Tests', () => {
        const sampleProjects = [
            {
                title: 'Test Project Alpha',
                packageName: 'test-alpha',
                githubUserName: 'testuser',
                githubRepository: 'testrepo-alpha'
            },
            {
                title: 'Beta Project',
                packageName: 'beta-pkg',
                githubUserName: 'betauser',
                githubRepository: 'beta-repo',
                articleUrl: 'https://medium.com/@betauser/article'
            }
        ]


        test( 'should create complete npm package table', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: sampleProjects,
                sort: true,
                footer: true,
                header: true
            } )
            
            expect( result ).toContain( '**Npm Packages**' )
            expect( result ).toContain( 'Beta Project' )
            expect( result ).toContain( 'Test Project Alpha' )
            expect( result ).toContain( 'This table is generated using' )
            expect( result.split( '\n' ).length ).toBeGreaterThan( 5 )
        } )


        test( 'should create gem package table with CircleCI', () => {
            const result = badgeTable.getTable( {
                preset: 'gemPackagesCircleCi',
                projects: sampleProjects,
                sort: false,
                footer: false,
                header: false
            } )
            
            expect( result ).not.toContain( '**' )
            expect( result ).not.toContain( 'This table is generated using' )
            expect( result ).toContain( 'Test Project Alpha' )
            expect( result ).toContain( 'Beta Project' )
            
            const lines = result.split( '\n' )
            const alphaIndex = lines.findIndex( line => line.includes( 'Test Project Alpha' ) )
            const betaIndex = lines.findIndex( line => line.includes( 'Beta Project' ) )
            expect( alphaIndex ).toBeGreaterThan( betaIndex )
        } )


        test( 'should handle all github presets', () => {
            const githubPresets = [ 
                'githubMinimal', 
                'githubOverview', 
                'githubStats', 
                'githubActivity',
                'githubAdvanced'
            ]
            
            githubPresets.forEach( preset => {
                const result = badgeTable.getTable( {
                    preset: preset,
                    projects: sampleProjects
                } )
                
                expect( result ).toContain( '|' )
                expect( result ).toContain( 'Test Project Alpha' )
                expect( result.split( '\n' ).length ).toBeGreaterThan( 3 )
            } )
        } )


        test( 'should create documentation table', () => {
            const docProjects = [
                {
                    title: 'My Documentation Site',
                    githubUserName: 'docuser',
                    githubRepository: 'docsrepo',
                    url: 'https://docs.example.com',
                    uptimeRobotId: 'm786809205-43089a21ef2cbf3c086bad86',
                    logo: 'https://example.com/logo.png'
                }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'documentation',
                projects: docProjects
            } )
            
            expect( result ).toContain( '|' )
            expect( result ).toContain( 'My Documentation Site' )
        } )
    } )


    describe( 'Error Handling Integration', () => {
        test( 'should handle malformed project data gracefully', () => {
            const malformedProjects = [
                {
                    title: 'Valid Project',
                    packageName: 'valid-pkg',
                    githubUserName: 'validuser',
                    githubRepository: 'validrepo'
                },
                {
                    title: 'Invalid Project'
                }
            ]
            
            expect( () => {
                badgeTable.getTable( {
                    preset: 'npmPackages',
                    projects: malformedProjects
                } )
            } ).toThrow()
        } )


        test( 'should validate all required fields for each preset', () => {
            const incompleteProject = {
                title: 'Incomplete Project',
                packageName: 'incomplete-pkg'
            }
            
            const presets = badgeTable.getPresets()
            
            presets.forEach( preset => {
                expect( () => {
                    badgeTable.getTable( {
                        preset: preset,
                        projects: [ incompleteProject ]
                    } )
                } ).toThrow()
            } )
        } )
    } )


    describe( 'Configuration Integration', () => {
        test( 'should work with custom configuration', () => {
            const originalConfig = badgeTable.getConfig()
            const customConfig = JSON.parse( JSON.stringify( originalConfig ) )
            
            customConfig.markdown.footerText = 'Custom Footer Text'
            
            badgeTable.setConfig( { config: customConfig } )
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: [{
                    title: 'Test',
                    packageName: 'test',
                    githubUserName: 'user',
                    githubRepository: 'repo'
                }],
                footer: true
            } )
            
            expect( result ).toContain( 'Custom Footer Text' )
        } )


        test( 'should preserve configuration integrity after operations', () => {
            const originalConfig = badgeTable.getConfig()
            
            badgeTable.getTable( {
                preset: 'npmPackages',
                projects: [{
                    title: 'Test',
                    packageName: 'test',
                    githubUserName: 'user',
                    githubRepository: 'repo'
                }]
            } )
            
            const configAfter = badgeTable.getConfig()
            expect( originalConfig ).toEqual( configAfter )
        } )
    } )


    describe( 'Large Data Sets', () => {
        test( 'should handle many projects efficiently', () => {
            const manyProjects = Array( 50 ).fill( null ).map( ( _, index ) => ({
                title: `Project ${index + 1}`,
                packageName: `package-${index + 1}`,
                githubUserName: `user${index + 1}`,
                githubRepository: `repo${index + 1}`
            }) )
            
            const start = Date.now()
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: manyProjects
            } )
            const end = Date.now()
            
            expect( result ).toContain( 'Project 1' )
            expect( result ).toContain( 'Project 50' )
            expect( end - start ).toBeLessThan( 1000 )
        } )


        test( 'should maintain correct sorting with large datasets', () => {
            const unsortedProjects = [
                { title: 'Z Project', packageName: 'z', githubUserName: 'z', githubRepository: 'z' },
                { title: 'A Project', packageName: 'a', githubUserName: 'a', githubRepository: 'a' },
                { title: 'M Project', packageName: 'm', githubUserName: 'm', githubRepository: 'm' }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: unsortedProjects,
                sort: true
            } )
            
            const lines = result.split( '\n' )
            const aIndex = lines.findIndex( line => line.includes( 'A Project' ) )
            const mIndex = lines.findIndex( line => line.includes( 'M Project' ) )
            const zIndex = lines.findIndex( line => line.includes( 'Z Project' ) )
            
            expect( aIndex ).toBeLessThan( mIndex )
            expect( mIndex ).toBeLessThan( zIndex )
        } )
    } )


    describe( 'Markdown Structure Validation', () => {
        test( 'should generate valid markdown table structure for all presets', () => {
            const testProject = {
                title: 'Test Project',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo'
            }
            
            const presets = badgeTable.getPresets()
            
            presets.forEach( preset => {
                const result = badgeTable.getTable( {
                    preset: preset,
                    projects: [ testProject ]
                } )
                
                const lines = result.split( '\n' ).filter( line => line.trim() )
                
                const headerLine = lines.find( line => line.includes( '|' ) )
                expect( headerLine ).toMatch( /^\|.*\|$/ )
                
                const alignmentLine = lines.find( line => line.match( /^\|[\s:]-+.*\|$/ ) )
                expect( alignmentLine ).toBeDefined()
                
                const dataLine = lines.find( line => line.includes( 'Test Project' ) )
                expect( dataLine ).toMatch( /^\|.*\|$/ )
                
                const headerCols = ( headerLine.match( /\|/g ) || [] ).length
                const alignmentCols = ( alignmentLine.match( /\|/g ) || [] ).length
                const dataCols = ( dataLine.match( /\|/g ) || [] ).length
                
                expect( headerCols ).toBe( alignmentCols )
                expect( alignmentCols ).toBe( dataCols )
            } )
        } )


        test( 'should handle special markdown characters properly', () => {
            const specialProject = {
                title: 'Project [with] <special> & *characters*',
                packageName: 'special-pkg',
                githubUserName: 'special|user',
                githubRepository: 'repo_with_underscores'
            }
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: [ specialProject ]
            } )
            
            expect( result ).toContain( 'Project [with] <special> & *characters*' )
            expect( result ).toContain( 'special|user' )
            expect( result ).toContain( 'repo_with_underscores' )
        } )
    } )


    describe( 'Badge Generation Integration', () => {
        test( 'should generate shields.io URLs correctly', () => {
            const project = {
                title: 'Badge Test',
                packageName: 'badge-test',
                githubUserName: 'badgeuser',
                githubRepository: 'badgerepo'
            }
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: [ project ]
            } )
            
            expect( result ).toContain( 'shields.io' )
            expect( result ).toContain( 'badgeuser' )
            expect( result ).toContain( 'badgerepo' )
            expect( result ).toContain( 'badge-test' )
        } )


        test( 'should handle empty badge values gracefully', () => {
            const projectWithEmptyValues = {
                title: 'Empty Values Test',
                packageName: 'empty-test',
                githubUserName: 'emptyuser',
                githubRepository: 'emptyrepo',
                articleUrl: ''
            }
            
            const result = badgeTable.getTable( {
                preset: 'npmPackagesCircleCiWithArticle',
                projects: [ projectWithEmptyValues ]
            } )
            
            expect( result ).toContain( 'Empty Values Test' )
            expect( typeof result ).toBe( 'string' )
        } )
    } )


    describe( 'Real-world Usage Patterns', () => {
        test( 'should handle typical npm package scenario', () => {
            const realProjects = [
                {
                    title: 'Express.js Server',
                    packageName: 'express-server',
                    githubUserName: 'myorg',
                    githubRepository: 'express-api'
                },
                {
                    title: 'React Components Library',
                    packageName: '@myorg/react-components',
                    githubUserName: 'myorg',
                    githubRepository: 'react-lib'
                }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackagesCircleCi',
                projects: realProjects,
                sort: true,
                footer: true,
                header: true
            } )
            
            expect( result ).toContain( '**Npm Packages**' )
            expect( result ).toContain( 'Express.js Server' )
            expect( result ).toContain( 'React Components Library' )
            expect( result ).toContain( '@myorg/react-components' )
            expect( result ).toContain( 'This table is generated using' )
            
            const lines = result.split( '\n' )
            expect( lines.length ).toBeGreaterThan( 8 )
        } )


        test( 'should handle github repository overview scenario', () => {
            const githubProjects = [
                {
                    title: 'Machine Learning Tools',
                    githubUserName: 'mlteam',
                    githubRepository: 'ml-tools'
                },
                {
                    title: 'Data Visualization Suite',
                    githubUserName: 'dataviz',
                    githubRepository: 'viz-suite'
                }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'githubActivity',
                projects: githubProjects,
                sort: false,
                footer: false
            } )
            
            expect( result ).toContain( 'Machine Learning Tools' )
            expect( result ).toContain( 'Data Visualization Suite' )
            expect( result ).toContain( 'mlteam' )
            expect( result ).toContain( 'dataviz' )
            expect( result ).not.toContain( 'This table is generated using' )
        } )
    } )
} )