import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'react-native-paper';


import Weather from '../src/components/weather';

configure({adapter: new Adapter()});
describe('Testing react navigation', () => {
    let wrapper;
    test('clicking on one item takes you to the other screen', async () => {
        // wrapper = shallow(<Weather />);
        // const test = wrapper.find('[data-testid="all-cities-weather"]');
        // console.log(test);
        // console.log(wrapper.find({ testID: 'all-cities-weather' }).length);
        // wrapper.root.findByType(Button).simulate('click');
        // wrapper.find(Button).simulate('click');
        // wrapper.find('[testID="all-cities-weather"]').simulate('click');
        // wrapper.findWhere((node) => node.prop('testID') === 'all-cities-weather').simulate('click');
        // wrapper.find('[testID="all-cities-weather"]').first().props().onPress();
        // wrapper.find(Button).simulate('click');
        
      // const { findByText, getByTestId, getByLabelText } = render(component);
      // // const toClick = await getByTestId('all-cities-weather');
      // const toClick = await getByLabelText('Show weather for other cities');
      // console.log(toClick);
  
      // fireEvent(toClick, 'press');
    //   const newBody = await findByText('London');
  
    //   expect(newBody).toBeTruthy();
    });
  });