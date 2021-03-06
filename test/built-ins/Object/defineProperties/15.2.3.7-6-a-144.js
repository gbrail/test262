// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-144
description: >
    Object.defineProperties -  'O' is an Array, 'name' is the length
    property of 'O', test the [[Value]] field of 'desc' is an Object
    which has an own valueOf method that returns an object and
    toString method that returns a string (15.4.5.1 step 3.c)
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        var toStringAccessed = false;
        var valueOfAccessed = false;

        Object.defineProperties(arr, {
            length: {
                value: {
                    toString: function () {
                        toStringAccessed = true;
                        return '2';
                    },

                    valueOf: function () {
                        valueOfAccessed = true;
                        return {};
                    }
                }
            }
        });
        return arr.length === 2 && toStringAccessed && valueOfAccessed;
    }
runTestCase(testcase);
