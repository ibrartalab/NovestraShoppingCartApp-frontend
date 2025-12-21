import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section>
        <div className="footer bg-black text-white px-20 py-10 flex justify-between items-center">
            <div className="left">
                <h2 className="text-2xl font-semibold">Novestra - NShopping</h2>
                <p className="text-sm mt-2">© 2025 Novestra. All rights reserved.</p>
            </div>
            <div className="right flex gap-6">
                <NavLink to="#" className="text-sm hover:underline">Privacy Policy</NavLink>
                <NavLink to="#" className="text-sm hover:underline">Terms of Service</NavLink>
                <NavLink to="#" className="text-sm hover:underline">Contact Us</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Footer