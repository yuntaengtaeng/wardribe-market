import React, { useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Button, { BUTTON_THEME } from '../Button/Button';
import Dropdown from './Dropdown';

import { VscSearch } from 'react-icons/vsc';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 400px;
  max-width: 400px;
`;

const Search = ({ latestList, setLatestList }) => {
  const [text, setText] = useState('');
  const [isShowingDropdown, setIsShowingDropdown] = useState(false);
  const wrapRef = useRef(null);

  const onChangeHandler = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const searchButtonPressed = useCallback(() => {
    if (!text) {
      return;
    }

    const latest = [...latestList];

    if (!latest.includes(text)) {
      if (latest.length === 10) {
        latest.shift();
      }

      latest.push(text);
      setLatestList(latest);
    }

    setText('');
  }, [latestList, setLatestList, text]);

  const onClickHandler = useCallback(() => {
    setIsShowingDropdown(true);
  }, []);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        (wrapRef.current !== null && !wrapRef.current.contains(e.target)) ||
        (wrapRef.current.contains(e.target) && e.target.nodeName === 'BUTTON')
      ) {
        setIsShowingDropdown(!isShowingDropdown);
      }
    };

    if (isShowingDropdown) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isShowingDropdown, setIsShowingDropdown]);

  return (
    <Wrap ref={wrapRef}>
      <Input value={text} onChange={onChangeHandler} onClick={onClickHandler} />
      <Button theme={BUTTON_THEME.LIGHT_GRAY} onClick={searchButtonPressed}>
        <VscSearch size={24} />
      </Button>
      {isShowingDropdown && (
        <Dropdown latestList={latestList} setLatestList={setLatestList} />
      )}
    </Wrap>
  );
};

export default Search;
