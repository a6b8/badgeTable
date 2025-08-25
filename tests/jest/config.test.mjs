import { describe, test, expect } from '@jest/globals'
import { configImported } from '../../src/data/config.mjs'


describe( 'Config Module', () => {
    describe( 'Structure Validation', () => {
        test( 'should export configImported object', () => {
            expect( configImported ).toBeDefined()
            expect( typeof configImported ).toBe( 'object' )
        } )


        test( 'should have all required top-level keys', () => {
            const requiredKeys = [ 'presets', 'badges', 'columns', 'html', 'markdown', 'styles' ]
            
            requiredKeys.forEach( key => {
                expect( configImported ).toHaveProperty( key )
                expect( configImported[ key ] ).toBeDefined()
            } )
        } )


        test( 'should have valid markdown configuration', () => {
            expect( configImported.markdown ).toHaveProperty( 'alignment' )
            expect( configImported.markdown ).toHaveProperty( 'footerText' )
            expect( typeof configImported.markdown.footerText ).toBe( 'string' )
        } )
    } )


    describe( 'Presets Configuration', () => {
        test( 'should have multiple presets defined', () => {
            const presets = Object.keys( configImported.presets )
            expect( presets.length ).toBeGreaterThan( 0 )
        } )


        test( 'each preset should have required properties', () => {
            Object.entries( configImported.presets ).forEach( ( [ presetName, preset ] ) => {
                expect( preset ).toHaveProperty( 'headline' )
                expect( preset ).toHaveProperty( 'validation' )
                expect( preset ).toHaveProperty( 'structs' )
                
                expect( typeof preset.headline ).toBe( 'string' )
                expect( Array.isArray( preset.validation ) ).toBe( true )
                expect( Array.isArray( preset.structs ) ).toBe( true )
            } )
        } )


        test( 'validation arrays should contain strings', () => {
            Object.values( configImported.presets ).forEach( preset => {
                preset.validation.forEach( field => {
                    expect( typeof field ).toBe( 'string' )
                } )
            } )
        } )


        test( 'structs should be valid array pairs', () => {
            Object.values( configImported.presets ).forEach( preset => {
                preset.structs.forEach( struct => {
                    expect( Array.isArray( struct ) ).toBe( true )
                    expect( struct.length ).toBe( 2 )
                    expect( typeof struct[ 0 ] ).toBe( 'string' )
                    expect( typeof struct[ 1 ] ).toBe( 'string' )
                } )
            } )
        } )


        test( 'should have npm package presets', () => {
            expect( configImported.presets ).toHaveProperty( 'npmPackages' )
            expect( configImported.presets ).toHaveProperty( 'npmPackagesCircleCi' )
        } )


        test( 'should have gem package presets', () => {
            expect( configImported.presets ).toHaveProperty( 'gemPackages' )
            expect( configImported.presets ).toHaveProperty( 'gemPackagesCircleCi' )
        } )


        test( 'should have github presets', () => {
            expect( configImported.presets ).toHaveProperty( 'githubMinimal' )
            expect( configImported.presets ).toHaveProperty( 'githubOverview' )
            expect( configImported.presets ).toHaveProperty( 'githubStats' )
        } )
    } )


    describe( 'Badges Configuration', () => {
        test( 'should have badges defined', () => {
            expect( configImported.badges ).toBeDefined()
            expect( typeof configImported.badges ).toBe( 'object' )
            expect( Object.keys( configImported.badges ).length ).toBeGreaterThan( 0 )
        } )


        test( 'each badge should have struct property', () => {
            Object.entries( configImported.badges ).forEach( ( [ badgeName, badge ] ) => {
                expect( badge ).toHaveProperty( 'struct' )
                expect( typeof badge.struct ).toBe( 'string' )
            } )
        } )


        test( 'badge structs should contain valid template syntax', () => {
            Object.values( configImported.badges ).forEach( badge => {
                if( badge.struct.includes( '<<' ) ) {
                    expect( badge.struct ).toMatch( /<<[^>]+>>/ )
                }
                
                if( badge.struct.includes( '{{' ) ) {
                    expect( badge.struct ).toMatch( /{{[^}]+}}/ )
                }
            } )
        } )
    } )


    describe( 'Columns Configuration', () => {
        test( 'should have columns defined', () => {
            expect( configImported.columns ).toBeDefined()
            expect( typeof configImported.columns ).toBe( 'object' )
            expect( Object.keys( configImported.columns ).length ).toBeGreaterThan( 0 )
        } )


        test( 'each column should have headline and row properties', () => {
            Object.entries( configImported.columns ).forEach( ( [ columnName, column ] ) => {
                expect( column ).toHaveProperty( 'headline' )
                expect( column ).toHaveProperty( 'row' )
                expect( typeof column.headline ).toBe( 'string' )
                expect( Array.isArray( column.row ) ).toBe( true )
            } )
        } )


        test( 'column rows should reference valid badges', () => {
            Object.values( configImported.columns ).forEach( column => {
                column.row.forEach( badgeRef => {
                    const badgeName = badgeRef.replace( 'tree__badges__', '' )
                    if( badgeRef.startsWith( 'tree__badges__' ) ) {
                        expect( configImported.badges ).toHaveProperty( badgeName )
                    }
                } )
            } )
        } )
    } )


    describe( 'HTML Configuration', () => {
        test( 'should have html configuration', () => {
            expect( configImported.html ).toBeDefined()
            expect( typeof configImported.html ).toBe( 'object' )
        } )


        test( 'should have valid HTML tags defined', () => {
            const expectedTags = [ 'wrapperUrl', 'shield' ]
            
            expectedTags.forEach( tag => {
                expect( configImported.html ).toHaveProperty( tag )
                expect( Array.isArray( configImported.html[ tag ] ) ).toBe( true )
                expect( configImported.html[ tag ].length ).toBe( 2 )
            } )
        } )


        test( 'HTML wrapper tags should contain valid opening and closing tags', () => {
            const wrapperUrl = configImported.html.wrapperUrl
            expect( wrapperUrl[ 0 ] ).toContain( '<' )
            expect( wrapperUrl[ 1 ] ).toContain( '</' )
        } )
    } )


    describe( 'Styles Configuration', () => {
        test( 'should have styles defined', () => {
            expect( configImported.styles ).toBeDefined()
            expect( typeof configImported.styles ).toBe( 'object' )
            expect( Object.keys( configImported.styles ).length ).toBeGreaterThan( 0 )
        } )


        test( 'each style should have parameters', () => {
            Object.values( configImported.styles ).forEach( style => {
                expect( style ).toHaveProperty( 'parameters' )
                expect( typeof style.parameters ).toBe( 'object' )
            } )
        } )


        test( 'style parameters should have valid values', () => {
            Object.values( configImported.styles ).forEach( style => {
                Object.entries( style.parameters ).forEach( ( [ param, value ] ) => {
                    expect( param ).toBeTruthy()
                    expect( value !== undefined ).toBe( true )
                } )
            } )
        } )


        test( 'should have default style configuration', () => {
            expect( configImported.styles ).toHaveProperty( 'default' )
            expect( configImported.styles.default.parameters ).toHaveProperty( 'color' )
            expect( configImported.styles.default.parameters ).toHaveProperty( 'logo' )
            expect( configImported.styles.default.parameters ).toHaveProperty( 'logoColor' )
            expect( configImported.styles.default.parameters ).toHaveProperty( 'style' )
            expect( configImported.styles.default.parameters ).toHaveProperty( 'label' )
        } )
    } )


    describe( 'Markdown Configuration', () => {
        test( 'should have alignment configurations', () => {
            expect( configImported.markdown.alignment ).toBeDefined()
            expect( typeof configImported.markdown.alignment ).toBe( 'object' )
        } )


        test( 'alignment should have left option', () => {
            expect( configImported.markdown.alignment ).toHaveProperty( 'left' )
            expect( configImported.markdown.alignment.left ).toBe( ':--' )
        } )


        test( 'should have footer text defined', () => {
            expect( configImported.markdown.footerText ).toBeDefined()
            expect( typeof configImported.markdown.footerText ).toBe( 'string' )
            expect( configImported.markdown.footerText.length ).toBeGreaterThan( 0 )
        } )
    } )


    describe( 'Cross-references Validation', () => {
        test( 'all column badge references should exist', () => {
            Object.values( configImported.columns ).forEach( column => {
                column.row.forEach( ref => {
                    if( ref.startsWith( 'tree__badges__' ) ) {
                        const badgeName = ref.replace( 'tree__badges__', '' )
                        expect( configImported.badges[ badgeName ] ).toBeDefined()
                    }
                } )
            } )
        } )


        test( 'all preset struct references should be valid', () => {
            Object.values( configImported.presets ).forEach( preset => {
                preset.structs.forEach( ( [ column, alignment ] ) => {
                    if( column.startsWith( 'tree__columns__' ) ) {
                        const columnName = column.replace( 'tree__columns__', '' )
                        expect( configImported.columns[ columnName ] ).toBeDefined()
                    }
                    
                    if( alignment.startsWith( 'tree__markdown__alignment__' ) ) {
                        const alignmentType = alignment.replace( 'tree__markdown__alignment__', '' )
                        expect( configImported.markdown.alignment[ alignmentType ] ).toBeDefined()
                    }
                } )
            } )
        } )
    } )


    describe( 'Data Integrity', () => {
        test( 'no empty strings in critical fields', () => {
            Object.values( configImported.presets ).forEach( preset => {
                expect( preset.headline ).not.toBe( '' )
                expect( preset.description ).not.toBe( '' )
                expect( preset.validation.length ).toBeGreaterThan( 0 )
                expect( preset.structs.length ).toBeGreaterThan( 0 )
            } )
        } )


        test( 'critical values should not be null or undefined', () => {
            expect( configImported ).not.toBeNull()
            expect( configImported ).not.toBeUndefined()
            expect( configImported.presets ).not.toBeNull()
            expect( configImported.badges ).not.toBeNull()
            expect( configImported.columns ).not.toBeNull()
        } )
    } )
} )