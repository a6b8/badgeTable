import { describe, test, expect, beforeEach, afterEach, jest } from '@jest/globals'
import { printMessages } from '../../src/helpers/mixed.mjs'


describe( 'Mixed Helper Module', () => {
    let consoleSpy
    let consoleLogCalls


    beforeEach( () => {
        consoleLogCalls = []
        consoleSpy = jest.spyOn( console, 'log' ).mockImplementation( ( ...args ) => {
            consoleLogCalls.push( args.join( ' ' ) )
        } )
    } )


    afterEach( () => {
        consoleSpy.mockRestore()
    } )


    describe( 'printMessages()', () => {
        test( 'should be a function', () => {
            expect( typeof printMessages ).toBe( 'function' )
        } )


        test( 'should return true', () => {
            const result = printMessages( { messages: [], comments: [] } )
            expect( result ).toBe( true )
        } )


        test( 'should handle empty arrays', () => {
            const result = printMessages( { messages: [], comments: [] } )
            expect( result ).toBe( true )
            expect( consoleLogCalls.length ).toBe( 0 )
        } )


        test( 'should handle undefined parameters with defaults', () => {
            const result = printMessages( {} )
            expect( result ).toBe( true )
            expect( consoleLogCalls.length ).toBe( 0 )
        } )


        test( 'should print single comment', () => {
            printMessages( { 
                comments: [ 'Test comment' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '\nComment:' )
            expect( consoleLogCalls ).toContain( '  - Test comment' )
        } )


        test( 'should print multiple comments', () => {
            printMessages( { 
                comments: [ 'Comment 1', 'Comment 2', 'Comment 3' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '\nComments:' )
            expect( consoleLogCalls ).toContain( '  - Comment 1' )
            expect( consoleLogCalls ).toContain( '  - Comment 2' )
            expect( consoleLogCalls ).toContain( '  - Comment 3' )
        } )


        test( 'should print single message and throw error', () => {
            expect( () => {
                printMessages( { 
                    messages: [ 'Error message' ],
                    comments: []
                } )
            } ).toThrow()
            
            expect( consoleLogCalls ).toContain( '\nMessage:' )
            expect( consoleLogCalls ).toContain( '  - Error message' )
        } )


        test( 'should print multiple messages and throw error', () => {
            expect( () => {
                printMessages( { 
                    messages: [ 'Error 1', 'Error 2' ],
                    comments: []
                } )
            } ).toThrow()
            
            expect( consoleLogCalls ).toContain( '\nMessages:' )
            expect( consoleLogCalls ).toContain( '  - Error 1' )
            expect( consoleLogCalls ).toContain( '  - Error 2' )
        } )


        test( 'should print both comments and messages, then throw', () => {
            expect( () => {
                printMessages( { 
                    comments: [ 'Comment 1', 'Comment 2' ],
                    messages: [ 'Error 1', 'Error 2' ]
                } )
            } ).toThrow()
            
            expect( consoleLogCalls ).toContain( '\nComments:' )
            expect( consoleLogCalls ).toContain( '  - Comment 1' )
            expect( consoleLogCalls ).toContain( '  - Comment 2' )
            expect( consoleLogCalls ).toContain( '\nMessages:' )
            expect( consoleLogCalls ).toContain( '  - Error 1' )
            expect( consoleLogCalls ).toContain( '  - Error 2' )
        } )


        test( 'should handle empty strings in arrays', () => {
            printMessages( { 
                comments: [ '', 'Valid comment', '' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - ' )
            expect( consoleLogCalls ).toContain( '  - Valid comment' )
        } )


        test( 'should handle special characters', () => {
            printMessages( { 
                comments: [ 'Comment with <special> &characters@!' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - Comment with <special> &characters@!' )
        } )


        test( 'should handle very long messages', () => {
            const longMessage = 'A'.repeat( 500 )
            printMessages( { 
                comments: [ longMessage ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( `  - ${longMessage}` )
        } )


        test( 'should use singular form for single item', () => {
            printMessages( { 
                comments: [ 'Single comment' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '\nComment:' )
            expect( consoleLogCalls ).not.toContain( '\nComments:' )
        } )


        test( 'should use plural form for multiple items', () => {
            printMessages( { 
                comments: [ 'Comment 1', 'Comment 2' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '\nComments:' )
            expect( consoleLogCalls ).not.toContain( '\nComment:' )
        } )


        test( 'should process comments before messages', () => {
            expect( () => {
                printMessages( { 
                    messages: [ 'Error message' ],
                    comments: [ 'Comment message' ]
                } )
            } ).toThrow()
            
            const commentIndex = consoleLogCalls.findIndex( log => log.includes( 'Comment:' ) )
            const messageIndex = consoleLogCalls.findIndex( log => log.includes( 'Message:' ) )
            
            expect( commentIndex ).toBeLessThan( messageIndex )
        } )


        test( 'should throw error only for messages, not comments', () => {
            const result = printMessages( { 
                comments: [ 'Comment 1', 'Comment 2', 'Comment 3' ],
                messages: []
            } )
            
            expect( result ).toBe( true )
            
            expect( () => {
                printMessages( { 
                    comments: [],
                    messages: [ 'Error 1' ]
                } )
            } ).toThrow()
        } )


        test( 'should handle numeric values converted to strings', () => {
            printMessages( { 
                comments: [ 123, 456.789, 0 ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - 123' )
            expect( consoleLogCalls ).toContain( '  - 456.789' )
            expect( consoleLogCalls ).toContain( '  - 0' )
        } )


        test( 'should handle null and undefined in arrays', () => {
            printMessages( { 
                comments: [ null, undefined, 'Valid' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - null' )
            expect( consoleLogCalls ).toContain( '  - undefined' )
            expect( consoleLogCalls ).toContain( '  - Valid' )
        } )


        test( 'should handle boolean values', () => {
            printMessages( { 
                comments: [ true, false ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - true' )
            expect( consoleLogCalls ).toContain( '  - false' )
        } )


        test( 'should handle objects converted to strings', () => {
            printMessages( { 
                comments: [ { key: 'value' }, [ 1, 2, 3 ] ],
                messages: []
            } )
            
            expect( consoleLogCalls.some( log => log.includes( '[object Object]' ) ) ).toBe( true )
            expect( consoleLogCalls ).toContain( '  - 1,2,3' )
        } )


        test( 'error should have empty message', () => {
            try {
                printMessages( { 
                    messages: [ 'Error' ],
                    comments: []
                } )
            } catch( error ) {
                expect( error.message ).toBe( '' )
            }
        } )


        test( 'should handle exactly 100 messages', () => {
            const manyMessages = Array( 100 ).fill( 'Message' )
            
            expect( () => {
                printMessages( { 
                    messages: manyMessages,
                    comments: []
                } )
            } ).toThrow()
            
            expect( consoleLogCalls.filter( log => log === '  - Message' ).length ).toBe( 100 )
        } )


        test( 'should handle mixed types in same array', () => {
            printMessages( { 
                comments: [ 
                    'String',
                    123,
                    true,
                    null,
                    undefined,
                    { obj: 'test' },
                    [ 'array' ]
                ],
                messages: []
            } )
            
            expect( consoleLogCalls.length ).toBeGreaterThan( 0 )
            expect( consoleLogCalls ).toContain( '\nComments:' )
        } )
    } )


    describe( 'Edge Cases', () => {
        test( 'should handle very large arrays', () => {
            const largeComments = Array( 1000 ).fill( 'Comment' )
            
            const result = printMessages( { 
                comments: largeComments,
                messages: []
            } )
            
            expect( result ).toBe( true )
            expect( consoleLogCalls.filter( log => log === '  - Comment' ).length ).toBe( 1000 )
        } )


        test( 'should handle unicode characters', () => {
            printMessages( { 
                comments: [ '测试', '🚀', '© Symbol', 'Ñoño' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - 测试' )
            expect( consoleLogCalls ).toContain( '  - 🚀' )
            expect( consoleLogCalls ).toContain( '  - © Symbol' )
            expect( consoleLogCalls ).toContain( '  - Ñoño' )
        } )


        test( 'should handle newlines in messages', () => {
            printMessages( { 
                comments: [ 'Line1\nLine2\nLine3' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - Line1\nLine2\nLine3' )
        } )


        test( 'should handle tabs and spaces', () => {
            printMessages( { 
                comments: [ '\tTabbed', '  Spaced  ', 'Normal' ],
                messages: []
            } )
            
            expect( consoleLogCalls ).toContain( '  - \tTabbed' )
            expect( consoleLogCalls ).toContain( '  -   Spaced  ' )
            expect( consoleLogCalls ).toContain( '  - Normal' )
        } )
    } )
} )