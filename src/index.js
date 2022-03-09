'use strict';

exports.checkTrue = constant => {
  if (!!constant === true) return true;
  else return false;
};

exports.checkFalse = constant => {
  if (!!constant === false) return true;
  else return false;
};

exports.toBoolean = constant => {
  return !!constant;
};
