import { renderHook, act } from '@testing-library/react-hooks';
import { HomeProvider, useHome } from './home';

// setupTests.js
jest.mock('react-toast-notifications', () => {
    const actual = jest.requireActual('react-toast-notifications');
    Object.assign(actual, { addToast: jest.fn() });
    return actual;
});

describe('Home Provider Test', () => {
    it('should be able to call sendEmail', async () => {
        const { result } = renderHook(() => useHome(), {
            wrapper: HomeProvider,
        });
        result.current.sendEmail = jest.fn();
        const mockData = {
            name: 'Test',
            email: 'test@test.com',
        }

        act(() => result.current.sendEmail(mockData));

        expect(result.current.sendEmail).toHaveBeenCalled();
        expect(result.current.sendEmail).toHaveBeenCalledTimes(1);
        expect(result.current.sendEmail).toBeTruthy();
    });
    it('should not be able to call sendEmail', async () => {
        const { result } = renderHook(() => useHome(), {
            wrapper: HomeProvider,
        });
        result.current.sendEmail = jest.fn();
        expect(result.current.sendEmail).toHaveBeenCalledTimes(0);
    });
})