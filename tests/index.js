/* global chai */

'use strict';

import * as index from '../src/index';

import SelectorEngine from '../src/SelectorEngine';
import Converter from '../src/converter/Converter';
import Selector from '../src/converter/Selector';

const expect = chai.expect;

describe( 'index', () => {
	it( 'is a class', () => {
		expect( index.default ).to.be.a( 'function' );
	} );

	it( 'returns a SelectorEngine instance', () => {
		const Conv = index.default();
		expect( Conv ).to.be.an.instanceof( SelectorEngine );
	} );

	it( 'exports Converter', () => {
		expect( index.Converter ).to.equal( Converter );
	} );

	it( 'exports Selector', () => {
		expect( index.Selector ).to.equal( Selector );
	} );

	it( 'exports SelectorEngine', () => {
		expect( index.SelectorEngine ).to.equal( SelectorEngine );
	} );
} );
