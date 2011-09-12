// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The value of Math.floor(x) is the same as the value of -Math.ceil(-x)
 *
 * @section 15.8.2.9
 * @path 15_Native/15.8_The_Math_Object/15.8.2_Function_Properties_of_the_Math_Object/15.8.2.9_floor/S15.8.2.9_A7.js
 * @description Checking if Math.floor(x) is equal to -Math.ceil(-x) on 2000 floating-point argument values
 */

// CHECK#1
for (i=-1000; i<1000; i++)
{
	x = i/10.0;
	if (-Math.ceil(-x) !== Math.floor(x))
	{
		$ERROR("#1: 'x = " + x + "; Math.floor(x) !== -Math.ceil(-x)'");
	}
}
