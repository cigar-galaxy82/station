/* eslint-disable jest/no-export */

import { describe, expect } from '@jest/globals';
import { SuperfaceTest } from '@superfaceai/testing';

import { createPlan } from '../../create-plan/maps/create-plan';

export function getPlanTest(providerName: string): void {
  describe(`payments/read-plans/get/${providerName}`, () => {
    let superface: SuperfaceTest;

    beforeEach(() => {
      superface = new SuperfaceTest({
        profile: 'payments/read-plans',
        provider: providerName,
        testInstance: expect,
      });
    });

    describe('GetPlan', () => {
      describe('when plan exists', () => {
        it('gets a plan', async () => {
          const id = await createPlan(providerName);
          const result = await superface.run(
            {
              useCase: 'GetPlan',
              input: {
                id,
              },
            },
            {
              hideInput: ['id'],
            }
          );
          expect(() => result.unwrap()).not.toThrow();
          expect(result.unwrap()).toMatchSnapshot();
        });
      });
    });
  });
}

export function listPlansTest(providerName: string): void {
  describe(`payments/read-plans/list/${providerName}`, () => {
    let superface: SuperfaceTest;

    beforeEach(() => {
      superface = new SuperfaceTest({
        profile: 'payments/read-plans',
        provider: providerName,
        testInstance: expect,
      });
    });

    describe('ListPlans', () => {
      describe('when all inputs are correct', () => {
        it('lists all plans', async () => {
          const result = await superface.run({
            useCase: 'ListPlans',
            input: {},
          });
          expect(() => result.unwrap()).not.toThrow();
          expect(result.unwrap()).toMatchSnapshot();
        });
      });
    });
  });
}
