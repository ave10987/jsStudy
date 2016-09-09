var assert = chai.assert;

describe( "Array indexOf() 메서드 테스트", function() {
	it( "값이 없을 때에는 -1 을 리턴함", function () {
		assert.equal( -1, [ 1, 2, 3 ].indexOf( 5 ) );
		assert.equal( -1, [ 1, 2, 3 ].indexOf( 0 ) );
	});
});

describe( "비동기 #setTimeout 코드 테스트", function () {
	it( "2초 이내에 완료되지 않으면 실패", function ( done ) {
		setTimeout(function () {
			done();
		}, 1500);
	});
});