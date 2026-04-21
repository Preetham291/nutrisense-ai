/**
 * Basic Unit Tests for NutriSense AI validation logic.
 * Run using: node test.js
 */

// Simulated function from our index.html
function validateInput(input) {
    if (typeof input !== 'string') return false;
    return input.trim().length > 0;
}

let passed = 0;
let failed = 0;

function assertEqual(testName, actual, expected) {
    if (actual === expected) {
        console.log(`✅ PASS: ${testName}`);
        passed++;
    } else {
        console.error(`❌ FAIL: ${testName} | Expected: ${expected}, Got: ${actual}`);
        failed++;
    }
}

console.log("Running Tests for NutriSense AI...\n");

// Test 1: Valid input with standard text
assertEqual(
    "Should return true for valid Indian food input", 
    validateInput("2 idlis and a cup of sambar"), 
    true
);

// Test 2: Empty input
assertEqual(
    "Should return false for empty string", 
    validateInput(""), 
    false
);

// Test 3: Input with only whitespace
assertEqual(
    "Should return false for whitespace only", 
    validateInput("   \n  \t  "), 
    false
);

console.log(`\nTest Results: ${passed} passed, ${failed} failed.`);
