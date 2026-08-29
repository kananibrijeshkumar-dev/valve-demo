import React, { useState } from 'react';
import { ShieldCheck, Lock, CheckCircle, Package, Users, LogOut } from 'lucide-react';
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
      <div className="min-h-screen bg-minimal-bg flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-minimal-border">
          <div className="text-center mb-10">
            <div className="bg-minimal-bg h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-minimal-text" />
            </div>
            <h2 className="text-2xl font-light text-minimal-text tracking-tight">Admin <span className="font-bold">Portal</span></h2>
            <p className="text-minimal-textLight text-sm mt-2 font-light">Please authenticate to continue.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-5 py-4 rounded-xl bg-minimal-bg border ${error ? 'border-red-300 focus:border-red-500' : 'border-transparent focus:border-minimal-border'} focus:bg-white outline-none transition-all shadow-sm text-center tracking-widest`} 
                  placeholder="Enter Password"
                  autoFocus
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-minimal-text text-white font-medium py-4 rounded-full hover:bg-minimal-accent transition-all duration-300 shadow-md">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-minimal-bg">
      {/* Admin Header */}
      <div className="bg-white border-b border-minimal-border px-8 py-5 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="h-6 w-6 text-minimal-text" />
          <h1 className="font-light text-xl text-minimal-text tracking-tight">Portal <span className="font-bold">Dashboard</span></h1>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="flex items-center text-sm font-medium text-minimal-textLight hover:text-minimal-text transition-colors">
          <LogOut className="h-4 w-4 mr-2" /> Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-minimal-border shadow-sm flex items-center justify-between group hover:border-minimal-accent transition-colors">
            <div>
              <p className="text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2">New Quotes</p>
              <h3 className="text-4xl font-light text-minimal-text">14</h3>
            </div>
            <div className="bg-minimal-bg p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
              <i className="fa fa-envelope text-minimal-accent text-2xl"></i>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-minimal-border shadow-sm flex items-center justify-between group hover:border-minimal-accent transition-colors">
            <div>
              <p className="text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2">Total Products</p>
              <h3 className="text-4xl font-light text-minimal-text">{products.length}</h3>
            </div>
            <div className="bg-minimal-bg p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
              <Package className="h-7 w-7 text-minimal-accent" />
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-minimal-border shadow-sm flex items-center justify-between group hover:border-minimal-accent transition-colors">
            <div>
              <p className="text-xs font-semibold text-minimal-textLight uppercase tracking-widest mb-2">Active Clients</p>
              <h3 className="text-4xl font-light text-minimal-text">512</h3>
            </div>
            <div className="bg-minimal-bg p-4 rounded-2xl group-hover:bg-blue-50 transition-colors">
              <Users className="h-7 w-7 text-minimal-accent" />
            </div>
          </div>
        </div>

        {/* Recent Quotes Table */}
        <div className="bg-white rounded-3xl border border-minimal-border shadow-sm overflow-hidden">
          <div className="border-b border-minimal-border px-8 py-6 flex justify-between items-center bg-white">
            <h3 className="text-lg font-semibold text-minimal-text">Recent Requests</h3>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span> Live
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-minimal-bg text-minimal-textLight text-xs font-semibold uppercase tracking-widest">
                  <th className="px-8 py-5">Company</th>
                  <th className="px-8 py-5">Contact</th>
                  <th className="px-8 py-5">Product</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-minimal-border">
                <tr className="hover:bg-minimal-bg/50 transition-colors">
                  <td className="px-8 py-5 text-sm font-medium text-minimal-text">Reliance Industries</td>
                  <td className="px-8 py-5 text-sm text-minimal-textLight font-light">purchase@ril.com<br/>+91 9988776655</td>
                  <td className="px-8 py-5 text-sm text-minimal-text font-light">TC End 3 Way Ball Valve</td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center text-xs font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                      Pending
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-minimal-accent hover:text-minimal-text text-sm font-medium transition-colors">Review</button>
                  </td>
                </tr>
                <tr className="hover:bg-minimal-bg/50 transition-colors">
                  <td className="px-8 py-5 text-sm font-medium text-minimal-text">Larsen & Toubro</td>
                  <td className="px-8 py-5 text-sm text-minimal-textLight font-light">procurement@lnt.com<br/>+91 9123456789</td>
                  <td className="px-8 py-5 text-sm text-minimal-text font-light">Flush Bottom Tank Valve</td>
                  <td className="px-8 py-5">
                    <span className="inline-flex items-center text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" /> Quoted
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-minimal-accent hover:text-minimal-text text-sm font-medium transition-colors">Review</button>
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
