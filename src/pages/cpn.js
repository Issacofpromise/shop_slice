import { useNavigate} from 'react-router-dom';import {useState, useEffect} from 'react';
function Myl(s){let navi = useNavigate();let [fe, de] = useState('');    
useEffect(()=>{ setTimeout(()=>{ de('end') }, 300);return ()=>{ de('') } }, []);
return (
<div className={'col-md-4 start ' + fe}>  
<img onClick={()=>{ navi(`/detail/${s.c.id}`) }} style={{ cursor: 'pointer'}} 
src={`https://codingapple1.github.io/shop/shoes${s.c.id+1}.jpg`} width="80%" />
<h4>{s.c.title}</h4><p>{s.c.price.toLocaleString()}</p></div> 
 )};  
export default Myl;