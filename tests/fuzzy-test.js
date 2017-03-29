import expect from 'expect'
import React from 'react'

import { match, filterItems } from '../src/fuzzy'


describe('match', () => {
  describe('startsWith=true', () => {
    it('match when text and query starts with the same', () => {
      expect(match('zenphone', 'Zen', true)).toEqual(true)
    });
    it('dont match when query starts differently', () => {
      expect(match('zenphone', 'notZen', true)).toEqual(false)
    });
    it('dont match when text starts differently', () => {
      expect(match('azenphone', 'Zen', true)).toEqual(false)
    });
  });
  describe('startsWith=false', () => {
    it('dont match when text and query starts with the same', () => {
      expect(match('zenphone', 'Zen', false)).toEqual(false)
    });
    it('dont match when query starts differently', () => {
      expect(match('zenphone', 'notZen', false)).toEqual(false)
    });
    it('dont match when text starts differently', () => {
      expect(match('azenphone', 'Zen', false)).toEqual(true)
    });
  })
});

