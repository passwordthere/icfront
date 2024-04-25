import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Link to="/">上海佰翊医疗科技有限公司</Link>
        </a>
      </div>
      <div className="flex-none">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/work">首页</Link>
            </li>
            <li>
              <Link to="/work2">就诊记录</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                src="https://pic.huitu.com/pic/20220616/2566575_20220616215232306070_0.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>登出</a>
            </li>
            <li>
              <a>关机</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
