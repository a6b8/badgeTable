import { describe, test, expect, beforeEach, jest } from '@jest/globals'
import { BadgeTable } from '../../src/BadgeTable.mjs'


describe( 'BadgeTable Class', () => {
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


    describe( 'Constructor', () => {
        test( 'should initialize successfully', () => {
            expect( badgeTable ).toBeInstanceOf( BadgeTable )
        } )


        test( 'should set config during initialization', () => {
            const config = badgeTable.getConfig()
            expect( config ).toBeDefined()
            expect( config ).toHaveProperty( 'presets' )
            expect( config ).toHaveProperty( 'styles' )
            expect( config ).toHaveProperty( 'markdown' )
        } )
    } )


    describe( 'getConfig()', () => {
        test( 'should return the current configuration', () => {
            const config = badgeTable.getConfig()
            expect( config ).toBeDefined()
            expect( typeof config ).toBe( 'object' )
        } )


        test( 'should contain required config keys', () => {
            const config = badgeTable.getConfig()
            expect( config ).toHaveProperty( 'presets' )
            expect( config ).toHaveProperty( 'badges' )
            expect( config ).toHaveProperty( 'columns' )
            expect( config ).toHaveProperty( 'html' )
            expect( config ).toHaveProperty( 'markdown' )
            expect( config ).toHaveProperty( 'styles' )
        } )
    } )


    describe( 'getPresets()', () => {
        test( 'should return an array of preset names', () => {
            const presets = badgeTable.getPresets()
            expect( Array.isArray( presets ) ).toBe( true )
            expect( presets.length ).toBeGreaterThan( 0 )
        } )


        test( 'should include expected presets', () => {
            const presets = badgeTable.getPresets()
            const expectedPresets = [
                'gemPackages',
                'gemPackagesCircleCi',
                'npmPackages',
                'npmPackagesCircleCi',
                'githubMinimal',
                'githubOverview',
                'githubStats'
            ]
            
            expectedPresets.forEach( preset => {
                expect( presets ).toContain( preset )
            } )
        } )
    } )


    describe( 'setConfig()', () => {
        test( 'should set a new configuration', () => {
            const customConfig = badgeTable.getConfig()
            customConfig.customField = 'testValue'
            
            const result = badgeTable.setConfig( { config: customConfig } )
            expect( result ).toBe( badgeTable )
            
            const newConfig = badgeTable.getConfig()
            expect( newConfig.customField ).toBe( 'testValue' )
        } )


        test( 'should throw error when config is undefined', () => {
            expect( () => {
                badgeTable.setConfig( { config: undefined } )
            } ).toThrow()
        } )


        test( 'should throw error when config is missing required keys', () => {
            const invalidConfig = { invalid: 'config' }
            
            expect( () => {
                badgeTable.setConfig( { config: invalidConfig } )
            } ).toThrow()
        } )


        test( 'should process styles URLs correctly', () => {
            const config = badgeTable.getConfig()
            badgeTable.setConfig( { config, init: false } )
            
            const newConfig = badgeTable.getConfig()
            Object.values( newConfig.styles ).forEach( style => {
                expect( style ).toHaveProperty( 'url' )
                expect( typeof style.url ).toBe( 'string' )
            } )
        } )
    } )


    describe( 'getTable()', () => {
        const validProjects = [
            {
                title: 'Test Project 1',
                packageName: 'test-package-1',
                githubUserName: 'testuser1',
                githubRepository: 'testrepo1'
            },
            {
                title: 'Test Project 2',
                packageName: 'test-package-2',
                githubUserName: 'testuser2',
                githubRepository: 'testrepo2'
            }
        ]


        test( 'should generate table with valid parameters', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: validProjects
            } )
            
            expect( typeof result ).toBe( 'string' )
            expect( result ).toContain( '|' )
            expect( result ).toContain( 'Test Project 1' )
            expect( result ).toContain( 'Test Project 2' )
        } )


        test( 'should sort projects alphabetically when sort is true', () => {
            const unsortedProjects = [
                { ...validProjects[ 1 ] },
                { ...validProjects[ 0 ] }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: unsortedProjects,
                sort: true
            } )
            
            const lines = result.split( '\n' )
            const project1Index = lines.findIndex( line => line.includes( 'Test Project 1' ) )
            const project2Index = lines.findIndex( line => line.includes( 'Test Project 2' ) )
            
            expect( project1Index ).toBeLessThan( project2Index )
        } )


        test( 'should not sort when sort is false', () => {
            const unsortedProjects = [
                { ...validProjects[ 1 ] },
                { ...validProjects[ 0 ] }
            ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: unsortedProjects,
                sort: false
            } )
            
            const lines = result.split( '\n' )
            const project1Index = lines.findIndex( line => line.includes( 'Test Project 1' ) )
            const project2Index = lines.findIndex( line => line.includes( 'Test Project 2' ) )
            
            expect( project2Index ).toBeLessThan( project1Index )
        } )


        test( 'should include footer when footer is true', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: validProjects,
                footer: true
            } )
            
            expect( result ).toContain( 'This table is generated using' )
        } )


        test( 'should not include footer when footer is false', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: validProjects,
                footer: false
            } )
            
            expect( result ).not.toContain( 'Implementation:' )
        } )


        test( 'should include header when header is true', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: validProjects,
                header: true
            } )
            
            expect( result ).toContain( '**Npm Packages**' )
        } )


        test( 'should not include header when header is false', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: validProjects,
                header: false
            } )
            
            expect( result ).not.toContain( '**Npm Packages**' )
        } )


        test( 'should add default githubBranch if not provided', () => {
            const projectsWithoutBranch = [ {
                title: 'Test',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'githubMinimal',
                projects: projectsWithoutBranch
            } )
            
            expect( result ).toContain( 'main' )
        } )


        test( 'should throw error with invalid preset', () => {
            expect( () => {
                badgeTable.getTable( {
                    preset: 'invalidPreset',
                    projects: validProjects
                } )
            } ).toThrow()
        } )


        test( 'should throw error when preset is undefined', () => {
            expect( () => {
                badgeTable.getTable( {
                    preset: undefined,
                    projects: validProjects
                } )
            } ).toThrow()
        } )


        test( 'should throw error when projects is undefined', () => {
            expect( () => {
                badgeTable.getTable( {
                    preset: 'npmPackages',
                    projects: undefined
                } )
            } ).toThrow()
        } )


        test( 'should throw error when projects is not an array', () => {
            expect( () => {
                badgeTable.getTable( {
                    preset: 'npmPackages',
                    projects: 'not an array'
                } )
            } ).toThrow()
        } )


        test( 'should throw error when project is missing required fields', () => {
            const invalidProjects = [ {
                title: 'Test Project'
            } ]
            
            expect( () => {
                badgeTable.getTable( {
                    preset: 'npmPackages',
                    projects: invalidProjects
                } )
            } ).toThrow()
        } )


        test( 'should handle empty projects array', () => {
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: []
            } )
            
            expect( typeof result ).toBe( 'string' )
            expect( result ).toContain( '|' )
        } )


        test( 'should work with basic npm presets', () => {
            const basicPresets = [ 'npmPackages', 'githubMinimal' ]
            
            basicPresets.forEach( preset => {
                const result = badgeTable.getTable( {
                    preset: preset,
                    projects: validProjects
                } )
                
                expect( typeof result ).toBe( 'string' )
                expect( result ).toContain( '|' )
            } )
        } )


        test( 'should handle projects with article URLs', () => {
            const projectsWithArticle = [ {
                title: 'Test Project',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo',
                url: 'https://example.com/article'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackagesCircleCiWithArticle',
                projects: projectsWithArticle
            } )
            
            expect( result ).toContain( 'https://example.com/article' )
        } )


        test( 'should handle projects with empty article URLs', () => {
            const projectsWithEmptyArticle = [ {
                title: 'Test Project',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo',
                url: ''
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackagesCircleCiWithArticle',
                projects: projectsWithEmptyArticle
            } )
            
            expect( typeof result ).toBe( 'string' )
        } )
    } )


    describe( 'Edge Cases and Error Handling', () => {
        test( 'should handle special characters in project titles', () => {
            const projectsWithSpecialChars = [ {
                title: 'Test & Project <special>',
                packageName: 'test-package',
                githubUserName: 'user',
                githubRepository: 'repo'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: projectsWithSpecialChars
            } )
            
            expect( result ).toContain( 'Test & Project <special>' )
        } )


        test( 'should handle very long project names', () => {
            const longName = 'A'.repeat( 200 )
            const projectsWithLongNames = [ {
                title: longName,
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: projectsWithLongNames
            } )
            
            expect( result ).toContain( longName )
        } )


        test( 'should handle numeric values in string fields', () => {
            const projectsWithNumbers = [ {
                title: '123',
                packageName: '456',
                githubUserName: '789',
                githubRepository: '000'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: projectsWithNumbers
            } )
            
            expect( result ).toContain( '123' )
        } )
    } )


    describe( 'Table Structure', () => {
        test( 'should generate valid markdown table structure', () => {
            const projects = [ {
                title: 'Test',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: projects
            } )
            
            const lines = result.split( '\n' ).filter( line => line.trim() )
            
            expect( lines[ 0 ] ).toMatch( /^\|.*\|$/ )
            
            expect( lines[ 1 ] ).toMatch( /^\|[\s:|-]+\|$/ )
            
            expect( lines[ 2 ] ).toMatch( /^\|.*\|$/ )
        } )


        test( 'should have correct number of columns', () => {
            const projects = [ {
                title: 'Test',
                packageName: 'test',
                githubUserName: 'user',
                githubRepository: 'repo'
            } ]
            
            const result = badgeTable.getTable( {
                preset: 'npmPackages',
                projects: projects
            } )
            
            const headerLine = result.split( '\n' )[ 0 ]
            const columnCount = ( headerLine.match( /\|/g ) || [] ).length - 1
            
            expect( columnCount ).toBeGreaterThan( 0 )
            expect( columnCount ).toBeLessThanOrEqual( 10 )
        } )
    } )
} )