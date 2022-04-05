import './App.css';

function App() {
  return (
    <div className='background_img'>
      <div className='main'>
        <div className='navbar navbar-fixed-left visible-lg-block' id='sidebar'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div id='menu_drop'>
            <a href='#side_collapse' data-toggle='collapse' aria-expanded='false' />
            {/* 놀러 가 보실까! <span class="caret"></span></a>
						<div class="collapse" id="side_collapse" role="menu">
							<a href="map.do">놀러가기</a><br/>
							<a href="board.bo?search=">수다떨기</a><br>
							<a href="faq.no?level=${dto.level}&search=">물어보기</a><br>
							<a href="notice.no?level=${dto.level}&search=">소개보기</a><br>
						</div><br>
						<a href="index.do">홈으로</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
