// import { useEffect, useState, type ChangeEvent } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "../Slices/usersThunks";

// export default function UsersPage() {
//     const dispatch = useDispatch();
//     const users = useSelector(usersSelector);
//     const isLoading = useSelector(isLoadingSelector);
//     const error = useSelector(errorSelector);
//     const [searchValue, setSearchValue] = useState('');


//     useEffect(() => {
//         dispatch(fetchUsers(searchValue))
//     }, [searchValue]);

//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         setSearchValue(event.target.value)
//     }

//     return (
//         <>
//             <div>
//                 <input type="search" placeholder="search" onChange={handleChange} value={searchValue}/>
//             </div>
//             <ul>
//                 {isLoading && <h1>Loading...</h1>}
//                 {error &&  <h1>{error}</h1>}
//                 {users.map((user)=> <li key={user.id}>{user.username}</li>)}
//             </ul>
//         </>
//     )
// }