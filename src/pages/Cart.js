import {Table} from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux"
import {incr,sort,sub} from '../store/slice'

function Cart() { let a = useSelector(state => state);console.log(a)   
  let dp=useDispatch();  
    return (<>{a.ge.name}의 장바구니 {a.ge.count}<div className='right'><button  
    onClick={()=>{dp(sort())}}>수량기준정렬</button></div>
    <div style={{ float: 'left',width:"80%"}}><Table striped bordered hover size="sm">
<thead>
  <tr><th>NO.</th><th>ID</th><th>상품명</th><th>수량</th><th>변경</th>
  <th>삭제</th></tr>
</thead>
<tbody>
{a.ri.map((b,i)=><tr key={i}>
<td>{i+1}</td><td>{b.id}</td><td>{b.name}</td><td>{b.count}</td>
    <td><button onClick={()=>{dp(incr(i))}}>+</button></td>
    <td><button style={{ fontWeight: 'bold' }} onClick={()=>{dp(sub(i))}}>ㅡ</button></td>
  </tr>)}  
</tbody>
</Table></div></>
);
}

export default Cart;