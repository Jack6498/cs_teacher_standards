import Link from "next/link"
//page handels user login 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex w-1/3 h-fit rounded-3xl border justify-center flex-col'>
        <p className='text-center m-5 text-3xl font-semibold text-white'>Login</p>
        <form className=''>
          <label className="block p-5">
            <span className="block text-sm font-medium text-slate-700">Username</span>
              <input type="text" placeholder="username" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-slate-950 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             invalid:border-pink-500 invalid:text-pink-600
             focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
          </label>
          <label className="block p-5">
            <span className="block text-sm font-medium text-slate-700">Password</span>
              <input type="text" placeholder="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 text-slate-950 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
             invalid:border-pink-500 invalid:text-pink-600
             focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
          </label>
        </form>
       
          <Link href={"/PlanView"} className="text-white text-lg border w-24 rounded-2xl m-4 text-center hover:bg-slate-300 hover:text-slate-950 hover:scale-125 ">Submit</Link>
        

      </div>
    </main>
  )
}


