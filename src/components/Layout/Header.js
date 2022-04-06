import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Switch>
        <Route path={'/'} />
        <Route path={'/map'} />
        <Route path={'/board'} />
        <Route path={'/faq'} />
        <Route path={'/notice'} />
      </Switch>
      <Link to='/' id='top_logo'></Link>
      <div id='main_top_menu'>
        <Link to='map' id='menu1'></Link>
        <Link to='board' id='menu2'></Link>
        <Link to='faq' id='menu3'></Link>
        <Link to='notice' id='menu4'></Link>
        {/* <Link to='board.bo?search='></Link>
        <Link to='faq.no?level=${dto.level}&search='></Link>
        <Link to='notice.no?level=${dto.level}&search='></Link> */}
        {/* <form action='searchList.map' name='search_text' method='post'> */}
        {/* <input type="text" id="search_text" name="word" placeholder="호텔을 검색하세요" > */}
        {/* </form> */}
        {/* <a href='' id='search_btn' onclick='fnSearch2(); return false'></a> */}
      </div>
    </>
  );
};

export default Header;
