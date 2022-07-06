import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PRIMARY, WHITE } from '../../constants/color';

const Wrap = styled.div`
  display: flex;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.25rem;
  box-shadow: 0 0.2rem ${({ isActive }) => (isActive ? PRIMARY : WHITE)};
`;

const TabMenu = ({ selectedIndex, menu, onMenuClickHandler }) => {
  return (
    <Wrap>
      {menu.map((v, index) => (
        <Menu
          key={v}
          onClick={
            onMenuClickHandler ? onMenuClickHandler.bind(this, index) : null
          }
          isActive={selectedIndex === index}
        >
          {v}
        </Menu>
      ))}
    </Wrap>
  );
};

TabMenu.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  menu: PropTypes.array.isRequired,
  onMenuClickHandler: PropTypes.func,
};

export default TabMenu;
