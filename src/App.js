import './App.css';

function App(){

  var tlSmall = 'tl_s';
  let post = '강남 우동 맛집';

  return (
    <div className="App">

      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <div className={ tlSmall }>
        { post }        
        <p style={ {color : 'blue', fontSize : '12px'} }>인라인 스타일</p>
      </div>

      <footer>
        footer
      </footer>

    </div>
  )
}

export default App;
