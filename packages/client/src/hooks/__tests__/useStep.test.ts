import useStep from '../useStep'

import { renderHook, act } from "@testing-library/react-hooks";

describe('useStep', () => {
    it('initializes to 0', () => {
        let { result } = renderHook(() => useStep())

        expect(result.current.step).toBe(0)
    })

    it('Increments by one when nextStep is called', () => {
        let { result } = renderHook(() => useStep())
        act(() => result.current.nextStep())

        expect(result.current.step).toBe(1)
    })

    it('Decrements by one when prevStep is called', () => {
        let { result } = renderHook(() => useStep(1))
        act(() => result.current.prevStep())

        expect(result.current.step).toBe(0)
    })

    it("Can't be initialied to a negative number", () => {
        let { result } = renderHook(() => useStep(-1))

        expect(result.error).toBeTruthy()
    })

    it("Can't decrement below 0", () => {
        let { result } = renderHook(() => useStep(0))
        act(() => result.current.prevStep())

        expect(result.current.step).toBeGreaterThanOrEqual(0)
    })
})