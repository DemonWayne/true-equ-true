'use strict';

exports.isTrue = _requestedContextForCheck => 
{
  if 
  (
    typeof _requestedContextForCheck === 'boolean' &&
    typeof _requestedContextForCheck !== 'string' &&
    typeof _requestedContextForCheck !== 'number' &&
    typeof _requestedContextForCheck !== 'object' &&
    typeof _requestedContextForCheck !== 'symbol' &&
    typeof _requestedContextForCheck !== 'undefined' &&
    typeof _requestedContextForCheck !== 'bigint' &&
    typeof _requestedContextForCheck !== 'function'
  )
  {
    return Boolean(_requestedContextForCheck) === true;
  } 
  else if 
  (
    typeof _requestedContextForConvert !== 'boolean' &&
    typeof _requestedContextForConvert === 'string' ||
    typeof _requestedContextForConvert === 'number' ||
    typeof _requestedContextForConvert === 'object' ||
    typeof _requestedContextForConvert === 'symbol' ||
    typeof _requestedContextForConvert === 'undefined' ||
    typeof _requestedContextForConvert === 'bigint' ||
    typeof _requestedContextForConvert === 'function'
  )
  {
    return Boolean(_requestedContextForCheck) === true;
  }
};

exports.isFalse = _requestedContextForCheck => 
{
  if 
  (
    typeof _requestedContextForCheck === 'boolean' &&
    typeof _requestedContextForCheck !== 'string' &&
    typeof _requestedContextForCheck !== 'number' &&
    typeof _requestedContextForCheck !== 'object' &&
    typeof _requestedContextForCheck !== 'symbol' &&
    typeof _requestedContextForCheck !== 'undefined' &&
    typeof _requestedContextForCheck !== 'bigint' &&
    typeof _requestedContextForCheck !== 'function'
  )
  {
    return Boolean(_requestedContextForCheck) === false;
  }
  else if 
  (
    typeof _requestedContextForConvert !== 'boolean' &&
    typeof _requestedContextForConvert === 'string' ||
    typeof _requestedContextForConvert === 'number' ||
    typeof _requestedContextForConvert === 'object' ||
    typeof _requestedContextForConvert === 'symbol' ||
    typeof _requestedContextForConvert === 'undefined' ||
    typeof _requestedContextForConvert === 'bigint' ||
    typeof _requestedContextForConvert === 'function'
  )
  {
    return Boolean(_requestedContextForCheck) === false;
  }
};

exports.toBoolean = _requestedContextForConvert => 
{
  if 
  (
    typeof _requestedContextForConvert !== 'boolean' &&
    typeof _requestedContextForConvert === 'string' ||
    typeof _requestedContextForConvert === 'number' ||
    typeof _requestedContextForConvert === 'object' ||
    typeof _requestedContextForConvert === 'symbol' ||
    typeof _requestedContextForConvert === 'undefined' ||
    typeof _requestedContextForConvert === 'bigint' ||
    typeof _requestedContextForConvert === 'function'
  )
  {
    return Boolean(_requestedContextForConvert);
  }
  else if 
  (
    typeof _requestedContextForConvert === 'boolean' &&
    typeof _requestedContextForConvert !== 'string' ||
    typeof _requestedContextForConvert !== 'number' ||
    typeof _requestedContextForConvert !== 'object' ||
    typeof _requestedContextForConvert !== 'symbol' ||
    typeof _requestedContextForConvert !== 'undefined' ||
    typeof _requestedContextForConvert !== 'bigint' ||
    typeof _requestedContextForConvert !== 'function'
  )
  {
    return Boolean(_requestedContextForConvert);
  }
};
