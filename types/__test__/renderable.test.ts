import { isRenderable } from '../renderable'

describe('isRenderable', () => {
  test('should be truthy with object with render function', () => {
    class HasRenderFunction {
      public render(): void {
        //
      }
    }
    expect(isRenderable(new HasRenderFunction())).toBeTruthy()
    expect(isRenderable({ render: () => ({}) })).toBeTruthy()
  })

  test('should be falsy with object without render function', () => {
    expect(isRenderable({})).toBeFalsy()
  })

  test('should be falsy if render is not function', () => {
    expect(isRenderable({ render: 'sss' })).toBeFalsy()
  })
})
