import React, { useState } from 'react';
import { Timer, MemoryStick, TrendingUp, Zap, Search, Database } from 'lucide-react';

const ComplexityTable = () => {
  const [activeTab, setActiveTab] = useState('sorting');

  const sortingAlgorithms = [
    { name: 'Bubble Sort', best: 'O(n)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, notes: 'Simple but inefficient for large datasets' },
    { name: 'Selection Sort', best: 'O(n²)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, notes: 'Minimizes swaps: n-1 maximum' },
    { name: 'Insertion Sort', best: 'O(n)', average: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, notes: 'Excellent for small or nearly sorted data' },
    { name: 'Merge Sort', best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, notes: 'Consistent performance, requires extra space' },
    { name: 'Quick Sort', best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)', stable: false, notes: 'Fast in practice, in-place sorting' },
    { name: 'Heap Sort', best: 'O(n log n)', average: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)', stable: false, notes: 'In-place with consistent performance' },
    { name: 'Counting Sort', best: 'O(n+k)', average: 'O(n+k)', worst: 'O(n+k)', space: 'O(k)', stable: true, notes: 'k = range of input values' },
    { name: 'Radix Sort', best: 'O(d(n+k))', average: 'O(d(n+k))', worst: 'O(d(n+k))', space: 'O(n+k)', stable: true, notes: 'd = number of digits' },
    { name: 'Bucket Sort', best: 'O(n+k)', average: 'O(n+k)', worst: 'O(n²)', space: 'O(n+k)', stable: true, notes: 'k = number of buckets' },
  ];

  const searchingAlgorithms = [
    { name: 'Linear Search', best: 'O(1)', average: 'O(n)', worst: 'O(n)', space: 'O(1)', notes: 'Works on unsorted data' },
    { name: 'Binary Search', best: 'O(1)', average: 'O(log n)', worst: 'O(log n)', space: 'O(1)', notes: 'Requires sorted array' },
    { name: 'Jump Search', best: 'O(1)', average: 'O(√n)', worst: 'O(√n)', space: 'O(1)', notes: 'Sorted array, optimal jump = √n' },
    { name: 'Interpolation Search', best: 'O(1)', average: 'O(log log n)', worst: 'O(n)', space: 'O(1)', notes: 'Best for uniformly distributed data' },
  ];

  const dataStructures = [
    { name: 'Array', access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)', space: 'O(n)', notes: 'Fixed size, contiguous memory' },
    { name: 'Linked List', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'Insert/Delete at known position' },
    { name: 'Stack', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'LIFO: Push/Pop operations only' },
    { name: 'Queue', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'FIFO: Enqueue/Dequeue operations' },
    { name: 'Hash Table', access: 'N/A', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*', space: 'O(n)', notes: '*Average case; O(n) worst case' },
    { name: 'Binary Search Tree', access: 'O(log n)*', search: 'O(log n)*', insert: 'O(log n)*', delete: 'O(log n)*', space: 'O(n)', notes: '*Average case when balanced' },
    { name: 'BST (Unbalanced)', access: 'O(n)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)', space: 'O(n)', notes: 'Degrades to linked list when skewed' },
    { name: 'AVL Tree', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)', space: 'O(n)', notes: 'Self-balancing BST' },
    { name: 'Binary Heap', access: 'O(n)', search: 'O(n)', insert: 'O(log n)', delete: 'O(log n)', space: 'O(n)', notes: 'Get min/max in O(1)' },
    { name: 'B+ Tree', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)', space: 'O(n)', notes: 'Optimized for disk storage, databases' },
  ];

  const graphAlgorithms = [
    { name: 'BFS (Adjacency List)', time: 'O(V + E)', space: 'O(V)', notes: 'Shortest path in unweighted graphs' },
    { name: 'BFS (Adjacency Matrix)', time: 'O(V²)', space: 'O(V)', notes: 'Better for dense graphs' },
    { name: 'DFS (Adjacency List)', time: 'O(V + E)', space: 'O(V)', notes: 'Cycle detection, topological sort' },
    { name: 'DFS (Adjacency Matrix)', time: 'O(V²)', space: 'O(V)', notes: 'Uses recursion stack space' },
    { name: 'Dijkstra (Min Heap)', time: 'O((V+E) log V)', space: 'O(V)', notes: 'Single source, non-negative weights' },
    { name: 'Bellman-Ford', time: 'O(VE)', space: 'O(V)', notes: 'Handles negative weights, detects cycles' },
    { name: 'Floyd-Warshall', time: 'O(V³)', space: 'O(V²)', notes: 'All pairs shortest paths' },
    { name: "Prim's Algorithm", time: 'O((V+E) log V)', space: 'O(V)', notes: 'Minimum Spanning Tree (MST)' },
    { name: "Kruskal's Algorithm", time: 'O(E log E)', space: 'O(V)', notes: 'MST using Union-Find' },
    { name: 'Topological Sort', time: 'O(V + E)', space: 'O(V)', notes: 'Directed Acyclic Graphs (DAG) only' },
  ];

  const commonComplexities = [
    { notation: 'O(1)', name: 'Constant', example: 'Array access, Hash lookup', color: 'from-emerald-500 to-emerald-600', width: 8 },
    { notation: 'O(log n)', name: 'Logarithmic', example: 'Binary search, Balanced trees', color: 'from-green-500 to-green-600', width: 16 },
    { notation: 'O(n)', name: 'Linear', example: 'Linear search, Single loop', color: 'from-blue-500 to-blue-600', width: 32 },
    { notation: 'O(n log n)', name: 'Linearithmic', example: 'Merge sort, Heap sort', color: 'from-yellow-500 to-yellow-600', width: 48 },
    { notation: 'O(n²)', name: 'Quadratic', example: 'Bubble sort, Nested loops', color: 'from-orange-500 to-orange-600', width: 72 },
    { notation: 'O(n³)', name: 'Cubic', example: 'Triple nested loops', color: 'from-red-500 to-red-600', width: 96 },
    { notation: 'O(2ⁿ)', name: 'Exponential', example: 'Recursive Fibonacci, Subsets', color: 'from-pink-500 to-pink-600', width: 128 },
    { notation: 'O(n!)', name: 'Factorial', example: 'Permutations, TSP brute force', color: 'from-rose-500 to-rose-600', width: 160 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <header className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-xl shadow-lg">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Algorithm Complexity Reference</h1>
              <p className="text-slate-600 mt-2 text-lg">Complete time and space complexity cheatsheet</p>
            </div>
          </div>
        </header>

        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-7 h-7 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800">Big O Complexity Classes</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b-2 border-slate-300">
                  <th className="text-left py-4 px-6 font-bold text-slate-700 text-sm uppercase tracking-wide">Notation</th>
                  <th className="text-left py-4 px-6 font-bold text-slate-700 text-sm uppercase tracking-wide">Name</th>
                  <th className="text-left py-4 px-6 font-bold text-slate-700 text-sm uppercase tracking-wide">Common Examples</th>
                  <th className="text-left py-4 px-6 font-bold text-slate-700 text-sm uppercase tracking-wide">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                {commonComplexities.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-200 hover:bg-blue-50 transition-colors duration-150">
                    <td className="py-4 px-6">
                      <code className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-mono text-base font-bold inline-block border border-slate-300">
                        {item.notation}
                      </code>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-slate-800 text-base">{item.name}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-slate-600 text-base">{item.example}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div
                        className={`h-6 bg-gradient-to-r ${item.color} rounded-lg shadow-sm`}
                        style={{ width: `${item.width}px`, maxWidth: '160px' }}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-slate-700 text-base leading-relaxed">
              <span className="font-bold text-blue-700">Performance Tip:</span> Aim for O(1), O(log n), or O(n) when possible.
              Avoid O(2ⁿ) and O(n!) for large inputs as they scale poorly.
            </p>
          </div>
        </section>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          <nav className="flex border-b border-slate-200 bg-slate-50">
            {[
              { id: 'sorting', icon: Timer, label: 'Sorting' },
              { id: 'searching', icon: Search, label: 'Searching' },
              { id: 'ds', icon: Database, label: 'Data Structures' },
              { id: 'graph', icon: TrendingUp, label: 'Graph' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-5 px-6 font-bold transition-all duration-200 text-base ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <tab.icon className="w-5 h-5 inline-block mr-2 mb-1" />
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="p-8">
            {activeTab === 'sorting' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-300">
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide w-40">Algorithm</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Best</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Average</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Worst</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Space</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide w-20">Stable</th>
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortingAlgorithms.map((algo, idx) => (
                      <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                        <td className="py-4 px-5">
                          <span className="font-bold text-slate-800 text-base">{algo.name}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-emerald-300">{algo.best}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-amber-300">{algo.average}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-rose-300">{algo.worst}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-sky-300">{algo.space}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                            algo.stable ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-400' : 'bg-slate-200 text-slate-500 border-2 border-slate-400'
                          }`}>
                            {algo.stable ? '✓' : '✗'}
                          </span>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-slate-600 text-base leading-relaxed">{algo.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'searching' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-300">
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide w-48">Algorithm</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Best</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Average</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Worst</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Space</th>
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchingAlgorithms.map((algo, idx) => (
                      <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                        <td className="py-4 px-5">
                          <span className="font-bold text-slate-800 text-base">{algo.name}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-emerald-300">{algo.best}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-amber-300">{algo.average}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-rose-300">{algo.worst}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-sky-300">{algo.space}</code>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-slate-600 text-base leading-relaxed">{algo.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'ds' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-300">
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide w-44">Data Structure</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Access</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Search</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Insert</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Delete</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Space</th>
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataStructures.map((ds, idx) => (
                      <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                        <td className="py-4 px-5">
                          <span className="font-bold text-slate-800 text-base">{ds.name}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-indigo-300">{ds.access}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-indigo-300">{ds.search}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-indigo-300">{ds.insert}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-indigo-300">{ds.delete}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-sky-300">{ds.space}</code>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-slate-600 text-base leading-relaxed">{ds.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'graph' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b-2 border-slate-300">
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide w-52">Algorithm</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Time</th>
                      <th className="text-center py-4 px-4 font-bold text-slate-700 text-sm uppercase tracking-wide">Space</th>
                      <th className="text-left py-4 px-5 font-bold text-slate-700 text-sm uppercase tracking-wide">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphAlgorithms.map((algo, idx) => (
                      <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                        <td className="py-4 px-5">
                          <span className="font-bold text-slate-800 text-base">{algo.name}</span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-orange-300">{algo.time}</code>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <code className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-md text-sm font-semibold inline-block border border-sky-300">{algo.space}</code>
                        </td>
                        <td className="py-4 px-5">
                          <span className="text-slate-600 text-base leading-relaxed">{algo.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Complexity Color Legend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <code className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-md text-sm font-bold border border-emerald-300">Best</code>
              <span className="text-slate-700 font-medium">Best case scenario</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <code className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-md text-sm font-bold border border-amber-300">Avg</code>
              <span className="text-slate-700 font-medium">Average case</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-lg border border-rose-200">
              <code className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-md text-sm font-bold border border-rose-300">Worst</code>
              <span className="text-slate-700 font-medium">Worst case scenario</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-lg border border-sky-200">
              <code className="bg-sky-100 text-sky-800 px-3 py-1.5 rounded-md text-sm font-bold border border-sky-300">Space</code>
              <span className="text-slate-700 font-medium">Space complexity</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <code className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-md text-sm font-bold border border-orange-300">Time</code>
              <span className="text-slate-700 font-medium">Time complexity</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <code className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-md text-sm font-bold border border-indigo-300">Ops</code>
              <span className="text-slate-700 font-medium">Operations</span>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl border border-blue-700">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="w-6 h-6" />
            <p className="text-xl font-bold">Study Tip</p>
          </div>
          <p className="text-lg text-blue-50 leading-relaxed max-w-3xl mx-auto">
            Master these complexities for technical interviews. Focus on understanding trade-offs between time and space,
            and when to use each algorithm or data structure.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ComplexityTable;
