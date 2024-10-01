import ThemeToggle from '../util/theme-changer';
import { useNavigate } from 'react-router-dom';
import Hero from '../util/hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../util/Navbar';

function header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  
 
  return (
    <div className="relative -mt-2 h-[460px] bg-[url('../src/assets/wanderlustbg.webp')] bg-cover bg-fixed bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col px-8 py-8 text-slate-50 sm:px-16">
        <div className="flex w-full justify-between">
        <Navbar
          onOpenSidenav={() => setOpen(true)}
           brandText={currentRoute}
 
           />
            {/* <div>
              {loading ? (
                <Loader />
              ) : token ? (
                <div className="flex gap-2">
                  {user?.role === Role.Admin && (
                    <button
                      className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
                      onClick={() => {
                        navigate('/admin/blogs');
                      }}
                    >
                      Dashboard
                    </button>
                  )}
                  
                  <button
                    className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
                    onClick={() => {
                      navigate('/add-blog');
                    }}
                  >
                    Create post
                  </button>
                  <button
                    className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                  <button
                    className="px-2 py-2 hover:bg-slate-500/25 md:hidden"
                    onClick={() => {
                      navigate('/add-blog');
                    }}
                  >
                    <img className="h-10 w-10" src={AddIcon} alt="Add Icon" />
                  </button>
                  <button
                    className="py-2 hover:bg-slate-500/25 md:hidden md:px-2"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <img className="h-9 w-9" src={LogOutIcon} alt="Logout Icon" />
                  </button>
                </div>
              ) : (
                <div className="flex">
                  {' '}
                  <button
                    className="active:scale-click hidden rounded border border-slate-50 px-4 py-2 hover:bg-slate-500/25 md:inline-block"
                    onClick={() => {
                      navigate('/signin');
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="py-2 hover:bg-slate-500/25 md:hidden md:px-2"
                    onClick={() => {
                      navigate('/signin');
                    }}
                  >
                    <img className="h-9 w-9" src={LogInIcon} alt="Login Icon" />
                  </button> 
                </div>
              )}
            </div> */}
          </div>
        </div>
        <Hero />
      </div>
    
  );
}

export default header;
