import React, { useState } from 'react';
import { ShieldAlert, Lock, CheckCircle, Package, Users } from 'lucide-react';
import { products } from '../data/products';

export default function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-classic-bgGrey flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 border-t-4 border-classic-red shadow-2xl">
          <div className="text-center mb-8">
            <ShieldAlert className="h-12 w-12 text-classic-red mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-classic-navy">Restricted Access</h2>
            <p className="text-gray-500 text-sm mt-2">Please enter the administrator password.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-classic-bgGrey border border-classic-borderGrey focus:border-classic-red outline-none transition-colors" 
                  placeholder="Password"
                  autoFocus
                />
              </div>
              {error && <p className="text-classic-red text-xs mt-2 font-bold">Incorrect password.</p>}
            </div>
            <button type="submit" className="w-full bg-classic-red text-white font-bold py-3 hover:bg-classic-navy transition-colors uppercase tracking-widest text-sm">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-classic-bgGrey">
      {/* Admin Header */}
      <div className="bg-classic-navy text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="h-6 w-6 text-classic-red" />
          <h1 className="font-bold text-xl">D.M. VALVE <span className="text-classic-red">ADMIN</span></h1>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-sm text-gray-400 hover:text-white transition-colors">
          Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 border-l-4 border-classic-red shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">New Quotes</p>
              <h3 className="text-3xl font-extrabold text-classic-navy">14</h3>
            </div>
            <div className="bg-classic-bgGrey p-3 rounded-full">
              <i className="fa fa-envelope text-classic-red text-xl"></i>
            </div>
          </div>
          <div className="bg-white p-6 border-l-4 border-classic-navy shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Total Products</p>
              <h3 className="text-3xl font-extrabold text-classic-navy">{products.length}</h3>
            </div>
            <div className="bg-classic-bgGrey p-3 rounded-full">
              <Package className="h-6 w-6 text-classic-navy" />
            </div>
          </div>
          <div className="bg-white p-6 border-l-4 border-classic-navy shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase">Active Clients</p>
              <h3 className="text-3xl font-extrabold text-classic-navy">512</h3>
            </div>
            <div className="bg-classic-bgGrey p-3 rounded-full">
              <Users className="h-6 w-6 text-classic-navy" />
            </div>
          </div>
        </div>

        {/* Recent Quotes Table */}
        <div className="bg-white shadow-sm border border-classic-borderGrey">
          <div className="border-b border-classic-borderGrey px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-bold text-classic-navy">Recent Quote Requests</h3>
            <span className="bg-classic-red text-white text-xs font-bold px-2 py-1 rounded">Live Updates</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-classic-bgGrey text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-bold">Company</th>
                  <th className="px-6 py-4 font-bold">Contact</th>
                  <th className="px-6 py-4 font-bold">Product Requested</th>
                  <th className="px-6 py-4 font-bold">Status</th>
                  <th className="px-6 py-4 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-classic-borderGrey">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-classic-navy">Reliance Industries</td>
                  <td className="px-6 py-4 text-sm text-gray-500">purchase@ril.com<br/>+91 9988776655</td>
                  <td className="px-6 py-4 text-sm text-classic-navy">TC End 3 Way Ball Valve (x50)</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-classic-red hover:text-classic-navy text-sm font-bold">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-classic-navy">Larsen & Toubro</td>
                  <td className="px-6 py-4 text-sm text-gray-500">procurement@larsentoubro.com<br/>+91 9123456789</td>
                  <td className="px-6 py-4 text-sm text-classic-navy">Flush Bottom Tank Valve (x20)</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                      <CheckCircle className="h-3 w-3 mr-1" /> Quoted
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-classic-red hover:text-classic-navy text-sm font-bold">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
