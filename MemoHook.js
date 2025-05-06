import {useState,useMemo} from "react";
export default function MemoHook()
{
	const [number,setNumber]=useState(1);
	const fact=(n)=>{
		let ans=1;
		for(let i=1;i<=n;i++)
		{
			ans=ans*i;
		}
		return ans;
	}


	const res=useMemo(()=>fact(number),[number]);

	return(
		<div>
		<h3>Factorail of {number} is {res} </h3>
		<input type="number" value={number} onChange={()=>setNumber(number+1)}/>
	</div>
		);


}