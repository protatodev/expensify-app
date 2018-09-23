import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';

test('should set up snapshot for ExpensesSummary component', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={0}/>);
  expect(wrapper).toMatchSnapshot();
})