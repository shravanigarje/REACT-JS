export default function JSXFunc()
{
	const user={
		firstName:"Raghav",
		lastName:"sharma"
	}
	function fullName(user)
	{
		return user.firstName+""+user.lastName;
	}
	return <h1>Hello,{fullName(user)}</h1>
}