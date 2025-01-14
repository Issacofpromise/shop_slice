import './App.css';import { Navbar,Nav,Container,Accordion } from 'react-bootstrap';
import {lazy, Suspense, useState, useEffect, useDeferredValue, memo, createContext } from 'react';
import dt from './pages/data';import Lmy from './pages/cpn';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios';import {useQuery} from '@tanstack/react-query';
const Tail = lazy( () => import('./pages/det') )
const Cart = lazy( () => import('./pages/Cart') )
export let Con=createContext(); 
function About(){ return (  <div className='sus'>
    <h4>about페이지임</h4> <Outlet></Outlet> </div> )}
function App() {  
  let [sh, setSh] = useState(dt);  let navi = useNavigate(); 
  let [ou, setOu] = useState(1); let [is, ng] = useState(false);
  let [pg, di] = useState(false);  let [재고, 재고변경] = useState([10,11,12]);
  useEffect(() => {
    console.log('앱 초기화 실행');
      localStorage.removeItem('watched'); // 최근 본 상품 초기화
      localStorage.setItem('initialized', 'true'); // 초기화 완료 표시
      }, []);
  let watched = JSON.parse(localStorage.getItem('watched')) || [];
watched = watched.map(x => parseInt(x)); console.log(watched);
let ult = useQuery(['작명'], ()=>
axios.get('https://codingapple1.github.io/userdata.json')
.then(a=>{  console.log('요청됨.'); return a.data }),{staleTime:20000});
let a = new Array(1000).fill(0);
let [name, setName] = useState('');let state1 = useDeferredValue(name);
let [count, setCount] = useState(0);let [age, setAge] = useState(37);
useEffect(()=>{if( count != 0 && count<3) {setAge(age+1)}}, [count])
  return ( 
    <div className="App">
     <Navbar bg="light" data-bs-theme="light">
        <Container>
<Navbar.Brand className='pit' onClick={(e)=>{ navi('/');e.preventDefault()}}>Home</Navbar.Brand>
          <Nav className="me-auto">
 <Nav.Link onClick={()=>{ navi('/cart') }}>Cart</Nav.Link>
 <Nav.Link onClick={(e)=>{navi('/about/member');e.preventDefault()}}>Member</Nav.Link>
 <Nav.Link onClick={(e)=>{ navi('/about/location');e.preventDefault()}}>location</Nav.Link>
</Nav><Nav className="ms-auto">{ult.isLoading?'loading':ult.data.name}</Nav> 
</Container></Navbar> 
    <Accordion defaultActiveKey="1" className='acc'>
      <Accordion.Item eventKey="0">
<Accordion.Header>최근 본 상품</Accordion.Header>
        <Accordion.Body>
{watched.map((h,i) =>{  let item = sh.find(x => x.id === h);return(<div key={i}> 
<img src={`https://codingapple1.github.io/shop/shoes${h+1}.jpg`} width="90%" />
<h6>{item ? item.title : null}</h6> </div>)})}
        </Accordion.Body>
      </Accordion.Item></Accordion>
 <Suspense fallback={ <div>로딩중...</div> }><Routes><Route path="/" element={
   <> <div className="main-bg"/>  
 <div className="container"> <div className="row">
 {sh.map((c,i)=>{ return ( <Lmy c={c} key={i}/> )})} </div>
 {ou >= 3 && <h5>더는 상품이 없습니다.</h5>}
 {pg && <h5>Fail to load Page.</h5>}
  <button className='mt-2' onClick={()=>{ setOu(ou + 1);   if (ou == 1) {ng(true); 
     fetch("https://codingapple1.github.io/shop/data2.json")
     .then(res => res.json())
 .then(data => {let copy = [...sh, ...data];setSh(copy);ng(false)})
     .catch(()=>{di(true);ng(false)})
}; }}>{is ? '로딩중...' : '상품 더보기'}</button></div> </> } />    
<Route path="/detail/:id" element={ <Con.Provider value={{재고}}><Tail sh={sh} /></Con.Provider> } />
   <Route path="/about" element={ <About/> } > 
   <Route path="/about/member" element={ <div><p>{count} 안녕하십니까 전 {age}</p>
      <button onClick={() => {setCount(count+1); }}>누르면한살먹기</button></div> } />
<Route path="/about/location" element={ <div><input onChange={ e=>{ setName(e.target.value) }}/>
      { a.map((a,i)=>{ return <div key={i}>{state1}</div>})}</div> } /> </Route>
<Route path="/cart" element={ <Cart/> } /> 
<Route path="*" element={ <div className='mt-5'>404 Not Found.</div> } />
   </Routes> </Suspense>   
    </div> )};

export default App;
