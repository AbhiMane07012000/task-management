// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { getUserFromToken } from "@/lib/getUser";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

// export default function Navbar() {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const u = getUserFromToken();
//     setUser(u);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <nav className="border-b px-6 py-3 flex items-center justify-between">
//       {/* LEFT */}
//       <div className="flex items-center gap-6">
//         <Link href="/" className="font-bold text-lg">
//           TaskApp
//         </Link>

//         <Link href="/">Home</Link>

//         {user && <Link href="/dashboard">Dashboard</Link>}

//         {user?.role === "ADMIN" && (
//           <Link href="/admin">Admin Panel</Link>
//         )}
//       </div>

//       {/* RIGHT */}
//       <div>
//         {!user ? (
//           <div className="flex gap-2">
//             <Link href="/login">
//               <Button variant="outline">Login</Button>
//             </Link>
//             <Link href="/register">
//               <Button>Register</Button>
//             </Link>
//           </div>
//         ) : (
//           <DropdownMenu>
//             <DropdownMenuTrigger>
//               <Avatar>
//                 <AvatarFallback>
//                   {user?.email?.[0]?.toUpperCase()}
//                 </AvatarFallback>
//               </Avatar>
//             </DropdownMenuTrigger>

//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 {user.email}
//               </DropdownMenuItem>

//               <DropdownMenuItem>
//                 Role: {user.role}
//               </DropdownMenuItem>

//               <DropdownMenuItem onClick={handleLogout}>
//                 Logout
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         )}
//       </div>
//     </nav>
//   );
// }