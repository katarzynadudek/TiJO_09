describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return false when argument is invalid', function () {
            expect(answer.calculateArea('error',3,5,7,3)).toEqual(false);
            expect(answer.calculateArea(5,'',5,7,3)).toEqual(false);
            expect(answer.calculateArea('','','','','')).toEqual(false);
            expect(answer.calculateArea(55,-3,'success',7,3)).toEqual(false);
            expect(answer.calculateArea('a','b','c','uu',5)).toEqual(false);
            expect(answer.calculateArea(-6,5,'c',0,5)).toEqual(false);
            expect(answer.calculateArea(55,3,0,7,'error')).toEqual(false);
            expect(answer.calculateArea('kasia','dudek','informatyka',0,5)).toEqual(false);
        });
     
    });
    it('should return error message and value', function () {
        expect(answer.calculateArea(10,4,3,'success','error')).toEqual({area: -2, message: 'error'});
        expect(answer.calculateArea(5,-3,-2,'success','no')).toEqual({area: -1, message: 'no'});
        expect(answer.calculateArea(-4,-3,-2,'success','no')).toEqual({area: -11, message: 'no'});
    });

    it('should return success message and value', function () {
        expect(answer.calculateArea(9,5,1,'success','error')).toEqual({area: 4, message: 'success'});
        expect(answer.calculateArea(13,5,0,'ok','error')).toEqual({area: 13, message: 'ok'});
        expect(answer.calculateArea(5,3,1,'success','error')).toEqual({area: 2, message: 'success'});
        expect(answer.calculateArea(22,5,2,'success','no')).toEqual({area: 12, message: 'success'});


    });

    it('should return area equal 0 and big null message', function () {
        expect(answer.calculateArea(24,12,2,'ok','false')).toEqual({area: 0, message: 'Big null'});
        expect(answer.calculateArea(0,0,0,'ok','false')).toEqual({area: 0, message: 'Big null'});
    });
});