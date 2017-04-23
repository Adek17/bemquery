/* global chai */

import helloWorld from '../src/index';

const expect = chai.expect;

describe( 'helloWorld', () => {
	it( 'is a function', () => {
		expect( helloWorld ).to.be.a( 'function' );
	} );

	it( 'returns "helloWorld"', () => {
		const result = helloWorld();
		expect( result ).to.equal( 'hello World!' );
	} );
} );
