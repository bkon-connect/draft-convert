"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateMutation;
function updateMutation(mutation, originalOffset, originalLength, newLength, prefixLength) {
  // three cases we can reasonably adjust - disjoint mutations that
  // happen later on where the offset will need to be changed,
  // mutations that completely contain the new one where we can adjust
  // the length, and mutations that occur partially within the new one.
  var lengthDiff = newLength - originalLength;

  if (originalOffset + originalLength <= mutation.offset) {
    return Object.assign({}, mutation, {
      offset: mutation.offset + lengthDiff
    });
  }
  if (originalOffset >= mutation.offset && originalOffset + originalLength <= mutation.offset + mutation.length) {
    return Object.assign({}, mutation, {
      length: mutation.length + lengthDiff
    });
  }
  if (originalOffset <= mutation.offset) {
    return Object.assign({}, mutation, {
      offset: mutation.offset + prefixLength
    });
  }

  return mutation;
}