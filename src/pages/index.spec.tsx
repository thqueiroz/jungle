import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme'
import Home from './index';

describe('Home Test Component', () => {
    it('should show Home', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toBeTruthy();
    });
    it('should shows the loading icon', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('fa fa-circle-o-notch fa-spin')).toBeTruthy();
    })
    it('should render first section title', () => {
        const { getByText } = render(<Home />);
        expect(getByText('Share your home,nanny and costs')).toBeTruthy();
    });
    it('should fire the button clik', () => {
        const { getByText } = render(<Home />);
        expect(fireEvent.click(getByText('Send'))).toBeTruthy();
    })
});
