import { useParams,useNavigate } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import {Nav} from 'react-bootstrap';
import {Con} from './../App';import { useDispatch } from "react-redux"
import {order} from '../store/slice';
function Deta(p){ let {id} = useParams(); let navi = useNavigate()
let n= p.sh.findIndex(x => x.id == id);let  [ow, th] = useState(true);

  let watched = JSON.parse(localStorage.getItem('watched')) || [];
  if (!watched.includes(id) && watched.length < 5) { watched.push(id);
    localStorage.setItem('watched', JSON.stringify(watched))  };
let [탭, 변] = useState(0); let dp=useDispatch();
let [fe, de] = useState(''); let {재고}= useContext(Con);
setTimeout(()=>{ de('end') }, 300); 
setTimeout(()=>{ th(false);},5000);
  let [num, setNum] = useState('');
useEffect(()=>{ if (isNaN(num) == true){ alert('숫자만 입력하세요.')}}, [num]);
if (n == -1) { return (  <div>
      <h4 className='mt-5'>상품이 없습니다.</h4>
      <button className='mt-5' onClick={() => navi(-1)}>뒤로가기</button>
    </div>   ); };
return ( 
<div className={'container start ' + fe}>
{ ow && <div className="alert alert-warning">5초이내 구매 시 {재고[0]} % 할인</div>}
  <div className="row">
    <div className="col-md-6">
      <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">{p.sh[n].title}</h4><p>{p.sh[n].content}</p>
      <p>{p.sh[n].price.toLocaleString()}</p>
      <input onChange={e => setNum(e.target.value)} /><br/>
      <button className="btn btn-danger mt-3"onClick={()=>{
        dp(order({id :p.sh[n].id, name :p.sh[n].title, count : 1})) 
      navi(`/cart`)}}>주문하기</button>
    </div></div>
    <Nav variant="pills" defaultActiveKey="link0">
<Nav.Item><Nav.Link eventKey="link0" onClick={()=>{변(0)}}>Active</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="link1" onClick={()=>{변(1)}}>Option 2</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="link2" onClick={()=>{변(2)}}>Disabled</Nav.Link></Nav.Item></Nav>
<TabContent 탭={탭} p={p} n={n}/>
    </div> )}
 function TabContent({ 탭, p, n }){ let [fe1, de1] = useState('');let {재고}= useContext(Con);
 useEffect(()=>{ setTimeout(()=>{ de1('end1') }, 300); 
 return ()=>{ de1('') } }, [탭]);
 return <div className={"start1 "+fe1}> 
  {[ <p>{p.sh[n].title}{재고[2]}</p>,<p>{p.sh[n].price.toLocaleString()}</p>, 
  <p>{p.sh[n].content}</p> ][탭]}
   </div>
 } 
export default Deta