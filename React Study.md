



============리액트 스터디=============





웹 성능 최적화: Lighthouse, Web Vitals 등을 활용해 성능 최적화 방법



AI API 활용: OpenAI, Google Cloud AI, AWS AI 서비스 등 AI API를 활용하는 방법



머신러닝 기본 이해: TensorFlow.js, Brain.js와 같은 JavaScript 기반 머신러닝 라이브러리를 학습



챗봇 개발: Dialogflow, Microsoft Bot Framework 등을 활용해 AI 기반 챗봇을 개발하는 방법



CI/CD: GitHub Actions, Jenkins 등을 활용해 지속적 통합/배포 파이프라인을 구축하는 방법



WebAssembly: 고성능 웹 애플리케이션 개발을 위해 WebAssembly를 학습하세요.



Edge Computing: 클라이언트 측에서 AI 모델을 실행하는 Edge AI 기술을 익히세요.



Web3: 블록체인과 분산형 애플리케이션(DApps)에 대한 이해를 높이세요











------설치 셋팅-------









빌드 : yarn start





변수 > html 꽂아 넣기 : 데이터바인딩





JSX문법

\- class > className 등으로 기입



\- style={ {color : 'blue', fontSize : '30px'} } 

font-size 처럼 속성명에 - 대쉬기호를 쓸 수 없습니다.

대쉬기호 대신 모든 단어를 붙여써야합니다. 붙여쓸 땐 앞글자를 대문자로 치환해야합니다. 











-------------리액트 기본 학습 방법----------------



1\. JavaScript 기초

React는 JavaScript 라이브러리이므로, ES6 문법을 먼저 확실하게 이해하는 것이 중요해요. 특히 const, let, 화살표 함수, map, filter, reduce, async/await 등의 개념에 익숙해지는 게 도움이 됩니다.



2\. React 개념 이해

Component: React는 컴포넌트 기반이에요. 컴포넌트를 만들어서 재사용하고, 각 컴포넌트는 독립적이고 재사용 가능한 코드 덩어리예요.

JSX: React에서 HTML과 유사하게 코드를 작성하는 방식입니다. JSX가 어떻게 JavaScript로 변환되는지 이해해야 해요.



&nbsp;	Props: 컴포넌트 간에 데이터를 전달할 때 사용하는 것이 props입니다.

&nbsp;	State: 컴포넌트의 상태를 관리하는 개념입니다. 동적인 UI를 만들 때 사용해요.



3\. React 기초

Functional Components vs Class Components: React 16.8 이후로는 함수형 컴포넌트가 주로 사용되고 있어요. 클래스 컴포넌트는 이제 많이 쓰이지 않지만, 이해해 두면 도움이 될 수 있어요.



&nbsp;	Hooks: 함수형 컴포넌트에서 상태를 관리하고, 라이프사이클 메서드를 대체하는 역할을 하는 useState, useEffect 같은 훅을 알아야 해요.

&nbsp;	Event Handling: React에서 이벤트를 처리하는 방법을 학습해요. 기본적인 클릭, 입력 처리와 같은 이벤트를 다루는 방식을 이해합니다.



4\. React 실습

간단한 프로젝트: 간단한 TODO 리스트나 카운터 앱을 만들어보세요. React의 주요 개념들을 실습하면서 감을 잡는 데 도움이 돼요.

Component 구조화: 컴포넌트를 나누고, props를 사용해 데이터를 전달하고 상태를 관리하는 연습을 해보세요.



5\. 고급 React



&nbsp;	React Router: 페이지 간 이동을 구현할 때 사용하는 라이브러리입니다.

&nbsp;	Context API: 전역 상태 관리를 위해 사용하는 기능입니다. 리덕스나 MobX 같은 상태 관리 라이브러리를 사용하기 전에 기본적인 전역 상태 관리를 배우는 데 유용해요.

&nbsp;	React의 최적화: 리렌더링을 방지하는 React.memo, useCallback, useMemo 등 성능 최적화에 관련된 기술을 학습해 보세요.



6\. 프로젝트 기반 학습



&nbsp;	API 연동: 외부 API를 가져와서 데이터를 처리하고 렌더링하는 방식(예: fetch 또는 axios 사용)을 익혀보세요.

&nbsp;	스타일링: CSS, SCSS 또는 styled-components와 같은 스타일링 방식도 배워보면 좋아요.

















1\. 간단한 카운터 앱

목표: 버튼 클릭 시 카운트를 증가/감소하는 기능을 구현합니다.



import React, { useState } from 'react';



function Counter() {

&nbsp; const \[count, setCount] = useState(0);



&nbsp; return (

&nbsp;   <div>

&nbsp;     <h1>Count: {count}</h1>

&nbsp;     <button onClick={() => setCount(count + 1)}>Increase</button>

&nbsp;     <button onClick={() => setCount(count - 1)}>Decrease</button>

&nbsp;   </div>

&nbsp; );

}



export default Counter;













2\. TODO 리스트

목표: 사용자로부터 입력을 받아 할 일을 추가하고, 삭제할 수 있는 앱을 만듭니다.





import React, { useState } from 'react';



function TodoList() {

&nbsp; const \[todos, setTodos] = useState(\[]);

&nbsp; const \[inputValue, setInputValue] = useState('');



&nbsp; const addTodo = () => {

&nbsp;   setTodos(\[...todos, inputValue]);

&nbsp;   setInputValue('');

&nbsp; };



&nbsp; const removeTodo = (index) => {

&nbsp;   const newTodos = todos.filter((\_, i) => i !== index);

&nbsp;   setTodos(newTodos);

&nbsp; };



&nbsp; return (

&nbsp;   <div>

&nbsp;     <input

&nbsp;       type="text"

&nbsp;       value={inputValue}

&nbsp;       onChange={(e) => setInputValue(e.target.value)}

&nbsp;     />

&nbsp;     <button onClick={addTodo}>Add Todo</button>

&nbsp;     <ul>

&nbsp;       {todos.map((todo, index) => (

&nbsp;         <li key={index}>

&nbsp;           {todo} <button onClick={() => removeTodo(index)}>Remove</button>

&nbsp;         </li>

&nbsp;       ))}

&nbsp;     </ul>

&nbsp;   </div>

&nbsp; );

}



export default TodoList;













3\. API 데이터 가져오기

목표: 외부 API에서 데이터를 가져와서 화면에 표시합니다. (예: JSONPlaceholder 사용)



import React, { useEffect, useState } from 'react';



function UsersList() {

&nbsp; const \[users, setUsers] = useState(\[]);



&nbsp; useEffect(() => {

&nbsp;   fetch('https://jsonplaceholder.typicode.com/users')

&nbsp;     .then((response) => response.json())

&nbsp;     .then((data) => setUsers(data));

&nbsp; }, \[]);



&nbsp; return (

&nbsp;   <div>

&nbsp;     <h1>Users List</h1>

&nbsp;     <ul>

&nbsp;       {users.map((user) => (

&nbsp;         <li key={user.id}>{user.name}</li>

&nbsp;       ))}

&nbsp;     </ul>

&nbsp;   </div>

&nbsp; );

}



export default UsersList;













4\. 간단한 날씨 앱

목표: 사용자가 도시 이름을 입력하면 해당 도시의 날씨 정보를 표시합니다.



import React, { useState } from 'react';



function WeatherApp() {

&nbsp; const \[city, setCity] = useState('');

&nbsp; const \[weather, setWeather] = useState(null);



&nbsp; const fetchWeather = () => {

&nbsp;   const apiKey = 'YOUR\_API\_KEY'; // OpenWeatherMap API 키 입력

&nbsp;   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}\&appid=${apiKey}\&units=metric`)

&nbsp;     .then((response) => response.json())

&nbsp;     .then((data) => setWeather(data));

&nbsp; };



&nbsp; return (

&nbsp;   <div>

&nbsp;     <input

&nbsp;       type="text"

&nbsp;       value={city}

&nbsp;       onChange={(e) => setCity(e.target.value)}

&nbsp;       placeholder="Enter city"

&nbsp;     />

&nbsp;     <button onClick={fetchWeather}>Get Weather</button>

&nbsp;     {weather \&\& (

&nbsp;       <div>

&nbsp;         <h2>{weather.name}</h2>

&nbsp;         <p>Temperature: {weather.main.temp} °C</p>

&nbsp;         <p>Weather: {weather.weather\[0].description}</p>

&nbsp;       </div>

&nbsp;     )}

&nbsp;   </div>

&nbsp; );

}



export default WeatherApp;













5\. 리액트 라우터 사용하기

목표: React Router를 사용하여 여러 페이지 간의 내비게이션을 구현합니다.



import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './Home';

import About from './About';



function App() {

&nbsp; return (

&nbsp;   <Router>

&nbsp;     <nav>

&nbsp;       <Link to="/">Home</Link>

&nbsp;       <Link to="/about">About</Link>

&nbsp;     </nav>

&nbsp;     <Switch>

&nbsp;       <Route path="/about">

&nbsp;         <About />

&nbsp;       </Route>

&nbsp;       <Route path="/">

&nbsp;         <Home />

&nbsp;       </Route>

&nbsp;     </Switch>

&nbsp;   </Router>

&nbsp; );

}



export default App;









----------------------------------------------------------------------------------------------------------------------











1\. 메서드 (Method)

정의: 메서드는 객체에 속한 함수입니다. 객체의 행동을 정의하며, 해당 객체의 속성에 접근할 수 있습니다.



const dog = {

&nbsp; name: 'Buddy',

&nbsp; bark: function() { // 메서드

&nbsp;   console.log(`${this.name} says woof!`);

&nbsp; }

};



dog.bark(); // 결과: Buddy says woof!

이 예시에서 bark는 dog 객체의 메서드로, this를 통해 객체의 속성 name에 접근합니다.











2\. 인자 (Argument)

정의: 함수를 호출할 때 전달하는 값을 인자라고 합니다. 함수의 입력으로 사용됩니다.



function add(x, y) { // x와 y는 파라미터

&nbsp; return x + y;

}



const result = add(5, 3); // 5와 3은 인자

console.log(result); // 결과: 8

이 예시에서 5와 3은 add 함수에 전달된 인자입니다.











3\. 인수 (Parameter)

정의: 함수 정의에서 사용되는 변수로, 함수가 호출될 때 인자가 할당되는 부분입니다. 함수의 입력을 정의합니다.



function multiply(a, b) { // a와 b는 인수

&nbsp; return a \* b;

}



const product = multiply(4, 5); // 4와 5는 인자

console.log(product); // 결과: 20

여기서 a와 b는 multiply 함수의 인수입니다.













4\. 인스턴스 (Instance)

정의: 클래스에서 생성된 구체적인 객체를 의미합니다. 인스턴스는 클래스의 속성과 메서드를 가질 수 있습니다.



class Car {

&nbsp; constructor(brand, model) {

&nbsp;   this.brand = brand; // 속성

&nbsp;   this.model = model; // 속성

&nbsp; }



&nbsp; drive() { // 메서드

&nbsp;   console.log(`Driving a ${this.brand} ${this.model}`);

&nbsp; }

}



// 인스턴스 생성

const myCar = new Car('Toyota', 'Corolla'); // myCar는 Car 클래스의 인스턴스



myCar.drive(); // 결과: Driving a Toyota Corolla

이 예시에서 myCar는 Car 클래스의 인스턴스입니다.



요약

메서드: 객체에 속한 함수.

인자: 함수를 호출할 때 전달하는 값.

인수: 함수 정의에서 사용되는 변수.

인스턴스: 클래스에서 생성된 실제 객체.

이 네 가지 개념은 JavaScript의 객체 지향 프로그래밍에서 중요한 역할을 하며, 함께 이해하면 프로그래밍을 보다 쉽게 할 수 있습니다.















--- 메서드 (행동) ---



1\. 정적 메서드 (Static Method)

정의: 정적 메서드는 클래스에 속하며, 클래스의 인스턴스 없이 호출할 수 있는 메서드입니다. 보통 static 키워드를 사용하여 정의합니다.

특징: 클래스 레벨에서 호출되며, 객체의 상태(인스턴스 변수)에 접근할 수 없습니다.

주로 유틸리티 함수나 클래스의 관련 작업을 수행하는 데 사용됩니다.



class MathUtil {

&nbsp; static add(x, y) {

&nbsp;   return x + y;

&nbsp; }

}



// 정적 메서드 호출

const result = MathUtil.add(5, 3); // 결과: 8





2\. 동적 메서드 (Instance Method)

정의: 동적 메서드는 클래스의 인스턴스에 속하며, 인스턴스를 생성한 후에 호출할 수 있는 메서드입니다.

특징: 인스턴스 레벨에서 호출되며, 인스턴스의 상태(인스턴스 변수)에 접근할 수 있습니다.

객체의 상태를 변경하거나, 객체에 관련된 작업을 수행하는 데 주로 사용됩니다.



class Calculator {

&nbsp; add(x, y) {

&nbsp;   return x + y;

&nbsp; }

}



// 인스턴스 생성

const calculator = new Calculator();

// 동적 메서드 호출

const result = calculator.add(5, 3); // 결과: 8



요약

정적 메서드는 클래스에 속하고, 인스턴스 없이 호출할 수 있으며, 객체의 상태에 접근할 수 없습니다.

동적 메서드는 인스턴스에 속하고, 인스턴스를 생성한 후에 호출할 수 있으며, 객체의 상태에 접근할 수 있습니다.























































===========스터디 메모============================



&nbsp;<React.StrictMode> 

React에서 제공하는 도구로, 애플리케이션에서 잠재적인 문제를 감지하고 경고해주는 역할을 합니다. 화면에 아무것도 렌더링하지 않지만, 하위 컴포넌트들에 대해 추가적인 검사와 경고를 활성화하여, 안전하지 않은 라이프사이클 메서드나 폐기 예정인 API 등을 식별하는 데 도움을 줍니다. 



>> 일반적으로 삭제







--- package.json ---



package.json 파일은 Node.js 및 React 프로젝트에서 중요한 설정 파일로, 프로젝트의 메타데이터와 의존성(패키지)을 관리합니다. 프로젝트의 이름, 버전, 스크립트, 그리고 프로젝트가 사용하는 라이브러리(패키지)의 정보가 포함되어 있습니다.



주요 항목:

name: 프로젝트의 이름.

version: 프로젝트 버전.

dependencies: 애플리케이션이 실행되기 위해 필요한 패키지들. 버전 번호와 함께 명시됩니다.





scripts: 자주 사용하는 명령어를 정의. 예를 들어, npm start, npm run build와 같은 명령어들이 여기에 정의됩니다.

json

코드 복사

"scripts": {

&nbsp; "start": "react-scripts start",

&nbsp; "build": "react-scripts build"

}





\*\*package.json\*\*은 프로젝트의 의존성과 메타데이터를 관리하는 파일.

\*\*package-lock.json\*\*은 의존성 트리의 정확한 버전 정보를 잠그고, 동일한 환경에서 패키지가 설치되도록 보장.



\- package.json과 package-lock.json을 Git에 커밋해야 할까?

&nbsp;   package.json ✅ 반드시 포함해야 함

&nbsp;   package-lock.json ✅ 팀 프로젝트라면 포함하는 것이 좋음

&nbsp;   (같은 패키지 버전을 유지하기 위해)









---서비스 워커(Service Worker)란?---

서비스 워커는 웹 애플리케이션에 오프라인 기능을 추가하거나 백그라운드 작업을 처리할 수 있게 하는 웹 기술입니다. 예를 들어, 캐시를 사용해 네트워크 연결이 없을 때도 웹 페이지를 제공하거나, 푸시 알림을 관리할 수 있습니다. 서비스 워커는 브라우저의 백그라운드에서 동작하며, 웹 페이지와 독립적으로 작동합니다.





manifest.json 파일은 웹 애플리케이션을 \*\*Progressive Web App (PWA)\*\*로 만들기 위한 핵심 구성 요소 중 하나입니다. 이 파일은 브라우저와 장치가 웹 애플리케이션을 어떻게 처리할지에 대한 메타데이터를 제공하는 구성 파일입니다. 주로 PWA에서 웹 애플리케이션을 네이티브 앱처럼 설치하거나 홈 화면에 추가할 때 사용됩니다.

&nbsp;

manifest.json 파일은 웹 애플리케이션(특히 PWA, Progressive Web App)에서 메타 정보를 정의하는 JSON 형식의 설정 파일입니다.

이 파일을 사용하면 웹앱이 모바일 앱처럼 설치 가능하고, 홈 화면에 아이콘 추가, 풀스크린 실행, 테마 색상 설정 등의 기능을 수행할 수 있습니다.



웹앱의 기본 정보 제공 → 앱 이름, 설명, 아이콘 등

홈 화면 추가 기능 → 웹앱을 설치하고 홈 화면에서 실행 가능

UI 스타일 지정 → 배경색, 테마 색상, 화면 표시 모드 등 설정

PWA 지원 → 웹앱을 네이티브 앱처럼 사용 가능









--- 리액트 구조의 이해 ---



public 폴더 > html, ico, 이미지, mainfest.json

&nbsp;- index.html  >> ID

&nbsp;

src 폴더 > index.js파일  1. react import

&nbsp;                             2. react-dom import

&nbsp;                             3. index.css import

&nbsp;                             4. App import : 태그로 사용 >>> render App.js

&nbsp;                             5. 각 컴포넌트 import

&nbsp;                             6. ReactDOM.render(<App />, document.getElementById("root"));  >>> ReactDOM.render()를 사용하여 <App /> 컴포넌트를 실제 브라우저의 #root 요소 안에 삽입하는 역할을 함.

&nbsp;                               react 18 이후 변경

&nbsp;                                  const root = ReactDOM.createRoot(document.getElementById("root"));

&nbsp;				   root.render(<App />);

&nbsp;                             7. serviceWorker.js는 Progressive Web App (PWA) 기능을 구현할 때 사용되는 서비스 워커(Service Worker) 스크립트

&nbsp;				   웹 애플리케이션 오프라인에서도 동작 가능하게 만들고, 백그라운드에서 푸시 알림, 캐싱, 네트워크 요청 가로채기 등의 기능을 수행

&nbsp;       



&nbsp;         > App.js 파일 1. react import

&nbsp;                           2. App.css import

&nbsp;                           3. 각 필요한 컴포넌트 import

&nbsp;                           4. fuction App 함수작성, 태그 적용, component 태그

&nbsp;                           5. export App



&nbsp;                    









--- 생명주기란? (LifeCycle) ---



react에서 생명주기란 component의 생성, 변경, 소멸 과정을 뜻함.



상태 관리: 클래스 컴포넌트를 사용할 때는 상태(state)를 관리하기 위해 this.state를 사용하고, 상태를 변경할 때는 this.setState() 메서드를 사용합니다.



생명주기 메서드: 클래스 컴포넌트는 여러 생명주기 메서드를 사용할 수 있어 컴포넌트의 생성, 업데이트, 제거 시점을 제어할 수 있습니다.













---생성자(constructor)---



constructor(props) {

&nbsp; super(props);

&nbsp; this.state = {};

&nbsp; console.log("1. constructor Call");

}





constructor(props):

클래스의 생성자입니다. React에서 컴포넌트를 생성할 때, 이 생성자가 가장 먼저 호출됩니다.

props를 인수로 받아, 부모 클래스인 Component의 생성자를 호출하기 위해 super(props)를 호출합니다. 이를 통해 컴포넌트의 props를 사용할 수 있습니다.



this.state = {};

컴포넌트의 초기 상태를 설정하는 부분입니다. 현재는 빈 객체로 설정되어 있습니다. 상태를 정의하고 관리할 준비가 되어 있습니다.





>> 생명주기 흐름

생성자 호출:

컴포넌트가 생성될 때 생성자가 호출됩니다. 이때 상태를 초기화하고, 필요한 props를 부모 클래스에 전달합니다.



렌더 메서드 호출:

생성자가 호출된 후, 렌더 메서드가 호출됩니다. 이때 컴포넌트의 UI가 결정됩니다.





추가적으로 컴포넌트의 생명주기 메서드(예: componentDidMount, componentDidUpdate, componentWillUnmount)를 구현하여 더욱 다양한 생명주기 이벤트를 다룰 수 있습니다.













----------Next.js-------------



React 기반의 SPA처럼 보일 수 있지만, 실제로는 더 강력한 기능을 갖춘 하이브리드 프레임워크

Next.js는 SPA(싱글 페이지 애플리케이션) 방식도 지원하지만, SSR(서버 사이드 렌더링)과 SSG(정적 사이트 생성)도 함께 제공하는 확장된 형태







React SPA는 기본적으로 CSR(클라이언트 사이드 렌더링) 만 가능하지만,

Next.js는 다음과 같은 다양한 렌더링 방식을 제공해.



✅ 1. CSR (Client-Side Rendering) → 기본적인 React 방식

✅ 2. SSR (Server-Side Rendering) → SEO \& 초기 로딩 속도 개선

✅ 3. SSG (Static Site Generation) → 빠른 페이지 로딩 \& 검색 최적화

✅ 4. ISR (Incremental Static Regeneration) → 일부 정적 페이지만 주기적으로 업데이트



💡 즉, Next.js를 사용하면 React의 CSR 방식도 사용할 수 있고, SEO가 필요한 페이지는 SSR/SSG로 최적화











-----간단한 리액트 예제------





import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



const Home = () => (

&nbsp; <div className="p-10 text-center">

&nbsp;   <h1 className="text-3xl font-bold">홈페이지</h1>

&nbsp;   <p className="text-lg text-gray-600">React로 만든 간단한 웹사이트</p>

&nbsp; </div>

);



const About = () => (

&nbsp; <div className="p-10 text-center">

&nbsp;   <h1 className="text-3xl font-bold">소개 페이지</h1>

&nbsp;   <p className="text-lg text-gray-600">이 웹사이트는 React와 Tailwind CSS로 만들어졌습니다.</p>

&nbsp; </div>

);



const Navbar = () => (

&nbsp; <nav className="bg-blue-600 p-4 text-white flex justify-center space-x-4">

&nbsp;   <Link to="/" className="hover:underline">홈</Link>

&nbsp;   <Link to="/about" className="hover:underline">소개</Link>

&nbsp; </nav>

);



const App = () => {

&nbsp; return (

&nbsp;   <Router>

&nbsp;     <Navbar />

&nbsp;     <Routes>

&nbsp;       <Route path="/" element={<Home />} />

&nbsp;       <Route path="/about" element={<About />} />

&nbsp;     </Routes>

&nbsp;   </Router>

&nbsp; );

};



export default App;













### Tailwind CSS



**1. Tailwind CSS의 핵심 개념**

유틸리티 우선 (Utility-First)	

.bg-blue-500, .p-4, .flex와 같이 \*\*작은 기능(유틸리티)\*\*을 가진 클래스들을 조합하여 스타일을 완성합니다. 별도의 CSS 파일을 만들 필요가 없습니다.



접두사 규칙 (Prefix)	

고정된 규칙에 따라 CSS 속성 이름이 짧은 접두사로 축약됩니다. (예: background-color → .bg-, padding → .p-) 이 접두사들은 Tailwind 내부에 이미 정의되어 있습니다.



디자인 토큰 (Design Tokens)

.bg-red-500처럼 클래스 이름에 폰트 크기, 색상, 간격 등의 \*\*값(Value)\*\*이 포함되어 있습니다.









**2. 필수 파일과 역할**

Tailwind 프로젝트를 구성하는 세 가지 핵심 파일의 역할입니다.



1\. tailwind.config.js (설계도)

역할: Tailwind CSS가 생성할 유틸리티 클래스들의 \*\*값(Value)\*\*을 정의하는 설정 파일입니다.



주요 설정: theme.extend.colors (새로운 색상 값 정의), content (사용된 클래스를 스캔할 파일 경로 지정).



주의: 여기에 CSS 코드({ 속성: 값; })를 직접 작성하지 않습니다.



tailwind.config.js 상단의 주석 (/\*\* @type {import('tailwindcss').Config} \*/)은 코드가 아닌 주석으로, IDE의 자동 완성 기능을 켜주는 역할을 합니다.





// tailwind.config.js

module.exports = {

&nbsp; theme: {

&nbsp;   extend: {

&nbsp;     colors: {

&nbsp;       'primary': '#0A55D7', // 💡 단 하나의 이름(primary) 정의

&nbsp;     },

&nbsp;   },

&nbsp; },

};









2\. 글로벌 CSS 파일 (예: index.css)

역할: Tailwind CSS가 실제 CSS 코드를 주입(Inject)할 위치를 지정하는 파일입니다.



필수 지시어:



@tailwind base: CSS 리셋 및 기본 HTML 태그 스타일 삽입.



@tailwind components: @apply로 만든 커스텀 컴포넌트 스타일 삽입.



@tailwind utilities: 가장 중요! .bg-red-500, .p-4 등 마크업에서 사용된 모든 유틸리티 클래스 코드를 삽입합니다.





/\* index.css \*/

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR\&display=swap');



@tailwind base;

/\* ... \*/

@tailwind utilities;



/\* 💡 순수한 CSS 코드는 여기에 작성 \*/

html, body {

&nbsp; /\* Tailwind가 제공하지 않는 CSS 속성을 직접 작성 \*/

&nbsp; scroll-behavior: smooth; 

}







3\. 컴포넌트 파일 (예: Button.jsx / .tsx)

역할: JSX 마크업의 className 속성에 Tailwind 유틸리티 클래스를 직접 나열하여 스타일을 적용합니다.



🧱 3. 빌드 및 작동 순서

클래스 작성: 개발자가 React 컴포넌트(Button.jsx)의 className에 Tailwind 클래스(bg-primary p-4)를 작성합니다.



엔진 작동: 프로젝트 빌드 시 PostCSS 환경에서 Tailwind 엔진이 실행됩니다.



규칙 확인: 엔진은 tailwind.config.js 파일을 참조하여 primary의 실제 Hex 값과 p-4의 간격 값을 확인합니다.



코드 생성 및 주입: 엔진은 사용된 클래스만 골라 실제 CSS 코드를 생성하고, 이 코드를 글로벌 CSS 파일의 @tailwind utilities 지시어 자리에 \*\*대체(삽입)\*\*하여 최종 CSS 파일을 만듭니다.













### TypeScript



**TypeScript의 핵심 개념**



정적 타입 (Static Types)	

코드 실행 전에 타입 오류를 미리 검사하여 예측 불가능한 런타임 오류를 줄여줍니다. JavaScript(동적 타입)와 달리, 변수나 함수에 : string, : number와 같은 타입을 명시해야 합니다.



JavaScript의 확장 (Superset)	

모든 유효한 JavaScript 코드는 유효한 TypeScript 코드입니다. 기존 JS 문법에 타입 시스템만 추가된 형태입니다.



컴파일 과정	

브라우저가 이해할 수 있도록 최종적으로는 \*\*JavaScript 코드로 트랜스파일(Transpile)\*\*되어 실행됩니다.



확장자	

React 컴포넌트에 TypeScript 문법(타입, 인터페이스)이 포함되면 파일 확장자는 .jsx 대신 \*\*.tsx\*\*를 사용해야 합니다.







**리액트 개발에 필수적인 타입 문법**



TypeScript를 리액트에서 사용할 때 가장 중요한 두 가지 영역(Props와 State)에서의 타입 정의 방법입니다.



1\. 인터페이스 (Interface)를 이용한 구조 정의

\*\*interface\*\*는 객체(Object)의 구조, 즉 속성 이름과 타입을 정의하는 데 사용됩니다. 리액트에서는 주로 Props와 복잡한 State의 모양을 정의할 때 필수적입니다.



예시:



TypeScript



interface UserProfileProps {

&nbsp; name: string;        // 필수 문자열

&nbsp; age: number;         // 필수 숫자

&nbsp; email?: string;      // 선택적(Optional) 속성

}









2\. 타입 주석 (Type Annotation)과 제네릭 (Generics)

타입 주석: 콜론(:)을 사용하여 변수, 매개변수 등에 타입을 직접 명시합니다.



const userEmail: string = "test@example.com";

함수 및 Props 적용: 컴포넌트 함수의 매개변수에 타입을 적용합니다.



const UserProfile = ({ name, age }: UserProfileProps) => { /\* ... \*/ };

useState와 제네릭: 상태 변수의 타입을 명시할 때 꺾쇠 괄호(< >) 안에 타입을 넣어줍니다. 특히 초기값이 null일 경우 타입을 명시해야 합니다.



// 상태는 UserData 객체이거나 null일 수 있음을 명시

const \[user, setUser] = useState<UserData | null>(null);











TypeScript는 개발자가 실수할 여지를 줄여주고 코드의 예측 가능성을 높여주기 때문에, 특히 대규모 프론트엔드 프로젝트에서 높은 생산성과 안정성을 제공하는 핵심 기술로 자리 잡았습니다.























