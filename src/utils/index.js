import React from 'react';
import omit from 'lodash.omit';

export function getDisplayName(Comp) {
  if (!Comp) return '';
  if (typeof Comp === 'string') { 
    return Comp; 
  }
  return Comp.displayName || Comp.name || 'Component';
}

export function findAllByType(children, type) {
  if (!children) return [];
  const result = [];
  let types = [];
  if (Array.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }
  React.Children.forEach(children, child => {
    const childType = child && child.type && (child.type.displayName || child.type.name);
    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
}

export function getOptions(props) {
  if (!props) return {};
  return omit(props, []);
}

export function invariant(check, message, thing) {
  if (!check)
    throw new Error('[react-ol] Invariant failed: ' + message + (thing ? ` in '${thing}'` : ''));
}
