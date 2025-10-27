import React, { useState } from 'react';
import { Code, ChevronDown, ChevronRight, Layers, Binary, GitBranch, Grid, Hash, Cpu, Boxes, CheckCircle } from 'lucide-react';

const DSANotes = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedTopics, setCompletedTopics] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCompleted = (topic) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const topics = [
    {
      id: 'array',
      title: 'Arrays',
      icon: <Grid className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basic Concepts',
          points: [
            'Contiguous memory allocation',
            'Fixed size (static arrays)',
            'Index-based access: O(1)',
            'Address calculation: Base + (index × size_of_element)',
            '2D array row-major: Base + ((i × cols) + j) × size',
            '2D array column-major: Base + ((j × rows) + i) × size'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Access: O(1)',
            'Search (unsorted): O(n)',
            'Search (sorted, binary search): O(log n)',
            'Insert at end: O(1)',
            'Insert at position: O(n) - requires shifting',
            'Delete: O(n) - requires shifting',
            'Find min/max: O(n) unsorted, O(1) sorted'
          ]
        },
        {
          subtitle: 'Important Problems',
          points: [
            'Kadane\'s Algorithm: Maximum subarray sum - O(n)',
            'Dutch National Flag: Sort 0s, 1s, 2s - O(n)',
            'Two pointer technique for sorted arrays',
            'Sliding window for subarray problems'
          ]
        }
      ]
    },
    {
      id: 'linked-list',
      title: 'Linked Lists',
      icon: <Layers className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Types',
          points: [
            'Singly Linked List: Each node has data + next pointer',
            'Doubly Linked List: Each node has data + next + prev pointers',
            'Circular Linked List: Last node points to first node',
            'Header/Sentinel node: Dummy node to simplify operations'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Access: O(n) - must traverse from head',
            'Search: O(n)',
            'Insert at beginning: O(1)',
            'Insert at end: O(n) SLL, O(1) if tail pointer maintained',
            'Insert at position: O(n)',
            'Delete: O(1) if node pointer given, O(n) to search'
          ]
        },
        {
          subtitle: 'Important Algorithms',
          points: [
            'Reverse: Change all next pointers - O(n)',
            'Detect cycle: Floyd\'s cycle detection (slow-fast pointers) - O(n)',
            'Find middle: Slow-fast pointer technique - O(n)',
            'Merge two sorted lists: O(m+n)',
            'Remove nth node from end: Two pointer with gap of n'
          ]
        },
        {
          subtitle: 'Memory',
          points: [
            'Extra memory per node for pointer(s)',
            'SLL: data + 1 pointer',
            'DLL: data + 2 pointers (more memory but faster operations)',
            'No memory wastage unlike arrays',
            'Dynamic size - grows/shrinks as needed'
          ]
        }
      ]
    },
    {
      id: 'stack',
      title: 'Stack',
      icon: <Layers className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basics',
          points: [
            'LIFO: Last In First Out',
            'Operations: Push, Pop, Peek/Top, isEmpty',
            'Implementation: Array or Linked List',
            'Array: Fixed size, O(1) operations',
            'Linked List: Dynamic size, O(1) operations'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Push: O(1)',
            'Pop: O(1)',
            'Peek: O(1)',
            'Search: O(n)',
            'Space: O(n) for n elements'
          ]
        },
        {
          subtitle: 'Applications',
          points: [
            'Function call stack (recursion)',
            'Expression evaluation (infix to postfix)',
            'Balanced parentheses checking',
            'Backtracking problems',
            'Browser history (back button)',
            'Undo mechanism in editors',
            'DFS traversal uses stack'
          ]
        },
        {
          subtitle: 'Important Problems',
          points: [
            'Next Greater Element: Use stack - O(n)',
            'Stock Span Problem: Monotonic stack',
            'Largest Rectangle in Histogram',
            'Infix to Postfix conversion',
            'Evaluate postfix expression'
          ]
        }
      ]
    },
    {
      id: 'queue',
      title: 'Queue',
      icon: <Layers className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basics',
          points: [
            'FIFO: First In First Out',
            'Operations: Enqueue (rear), Dequeue (front), Front, isEmpty',
            'Linear Queue: May waste space after dequeues',
            'Circular Queue: front = (front + 1) % size, solves wastage',
            'Deque: Double-ended queue (insert/delete both ends)'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Enqueue: O(1)',
            'Dequeue: O(1)',
            'Front: O(1)',
            'Search: O(n)',
            'Space: O(n)'
          ]
        },
        {
          subtitle: 'Types',
          points: [
            'Simple Queue: Basic FIFO',
            'Circular Queue: Last position connects to first',
            'Priority Queue: Elements have priority (heap implementation)',
            'Deque: Insert/delete from both ends',
            'Input-restricted Deque: Insert only at one end',
            'Output-restricted Deque: Delete only at one end'
          ]
        },
        {
          subtitle: 'Applications',
          points: [
            'BFS traversal',
            'CPU scheduling',
            'Printer queue',
            'Call center systems',
            'Handling async requests',
            'Level order tree traversal'
          ]
        }
      ]
    },
    {
      id: 'tree',
      title: 'Trees',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basic Terminology',
          points: [
            'Root: Topmost node',
            'Leaf: Node with no children',
            'Height: Longest path from node to leaf',
            'Depth/Level: Distance from root',
            'Degree: Number of children',
            'Binary Tree: Max 2 children per node',
            'Height of tree with n nodes: Min = ⌈log₂(n+1)⌉-1, Max = n-1'
          ]
        },
        {
          subtitle: 'Binary Tree Types',
          points: [
            'Full Binary Tree: Every node has 0 or 2 children',
            'Complete Binary Tree: All levels filled except last (left-filled)',
            'Perfect Binary Tree: All internal nodes have 2 children, all leaves at same level',
            'Balanced Tree: Height difference of subtrees ≤ 1',
            'Degenerate Tree: Each parent has only one child (like linked list)'
          ]
        },
        {
          subtitle: 'Binary Tree Formulas',
          points: [
            'Max nodes at level i: 2^i',
            'Max nodes in tree of height h: 2^(h+1) - 1',
            'Min height for n nodes: ⌈log₂(n+1)⌉ - 1',
            'For n leaf nodes, total nodes = 2n - 1 (full binary tree)',
            'If tree has n₀ leaves and n₂ nodes with 2 children: n₀ = n₂ + 1'
          ]
        },
        {
          subtitle: 'Tree Traversals',
          points: [
            'Inorder (LNR): Left → Root → Right (gives sorted for BST)',
            'Preorder (NLR): Root → Left → Right (copy tree)',
            'Postorder (LRN): Left → Right → Root (delete tree)',
            'Level Order: BFS using queue',
            'All DFS traversals: O(n) time, O(h) space for recursion stack'
          ]
        }
      ]
    },
    {
      id: 'bst',
      title: 'Binary Search Tree',
      icon: <Binary className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Properties',
          points: [
            'Left subtree values < root value',
            'Right subtree values > root value',
            'Both left and right subtrees are also BSTs',
            'Inorder traversal gives sorted sequence',
            'No duplicate values (in standard BST)'
          ]
        },
        {
          subtitle: 'Operations & Complexity',
          points: [
            'Search: O(h) where h = height',
            'Insert: O(h) - similar to search',
            'Delete: O(h) - 3 cases (leaf, 1 child, 2 children)',
            'For 2 children: Replace with inorder successor/predecessor',
            'Best case (balanced): O(log n)',
            'Worst case (skewed): O(n)',
            'Average case: O(log n)'
          ]
        },
        {
          subtitle: 'Important Concepts',
          points: [
            'Inorder Successor: Smallest in right subtree (or ancestor)',
            'Inorder Predecessor: Largest in left subtree',
            'Min element: Leftmost node',
            'Max element: Rightmost node',
            'Check if BST: Ensure inorder gives sorted array'
          ]
        }
      ]
    },
    {
      id: 'avl',
      title: 'AVL Trees',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Properties',
          points: [
            'Self-balancing BST',
            'Balance Factor: |height(left) - height(right)| ≤ 1',
            'BF = height(left) - height(right) ∈ {-1, 0, 1}',
            'Height of AVL tree with n nodes: O(log n)',
            'Max height: 1.44 log₂(n)'
          ]
        },
        {
          subtitle: 'Rotations',
          points: [
            'LL Rotation: Right rotate when left-left case',
            'RR Rotation: Left rotate when right-right case',
            'LR Rotation: Left rotate on left child, then right rotate on root',
            'RL Rotation: Right rotate on right child, then left rotate on root',
            'Single rotation for LL/RR, double rotation for LR/RL'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Search: O(log n)',
            'Insert: O(log n) - may need rotations',
            'Delete: O(log n) - may need rotations',
            'Space: O(n) - extra space for height info in each node',
            'Rebalancing after insert: Max 1 rotation',
            'Rebalancing after delete: Max O(log n) rotations'
          ]
        }
      ]
    },
    {
      id: 'heap',
      title: 'Heap',
      icon: <Layers className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Properties',
          points: [
            'Complete Binary Tree',
            'Max Heap: Parent ≥ children',
            'Min Heap: Parent ≤ children',
            'Root is max/min element',
            'Array representation: Parent at i, left child at 2i+1, right child at 2i+2',
            'Parent of node at i: ⌊(i-1)/2⌋',
            'Height: O(log n)'
          ]
        },
        {
          subtitle: 'Operations',
          points: [
            'Insert: Add at end, heapify up - O(log n)',
            'Delete Max/Min: Replace root with last element, heapify down - O(log n)',
            'Get Max/Min: O(1) - just return root',
            'Build Heap: From array - O(n) using bottom-up approach',
            'Heapify: Fix heap property - O(log n)',
            'Heap Sort: O(n log n) time, O(1) space'
          ]
        },
        {
          subtitle: 'Applications',
          points: [
            'Priority Queue implementation',
            'Heap Sort algorithm',
            'Find kth largest/smallest element',
            'Median maintenance',
            'Dijkstra\'s shortest path',
            'Prim\'s MST algorithm',
            'Merge k sorted arrays'
          ]
        }
      ]
    },
    {
      id: 'hashing',
      title: 'Hashing',
      icon: <Hash className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Hash Function Properties',
          points: [
            'Deterministic: Same key always gives same hash',
            'Uniform distribution: Keys spread evenly',
            'Fast computation: O(1) hash calculation',
            'Division Method: h(k) = k mod m',
            'Multiplication Method: h(k) = ⌊m(kA mod 1)⌋',
            'Mid-Square Method: Square key, take middle digits'
          ]
        },
        {
          subtitle: 'Collision Resolution',
          points: [
            'Chaining: Each slot has linked list - O(1+α) where α = n/m',
            'Open Addressing: Find next empty slot',
            'Linear Probing: h(k,i) = (h(k) + i) mod m - primary clustering',
            'Quadratic Probing: h(k,i) = (h(k) + c₁i + c₂i²) mod m',
            'Double Hashing: h(k,i) = (h₁(k) + i×h₂(k)) mod m - best open addressing',
            'Load Factor α = n/m (n = keys, m = table size)'
          ]
        },
        {
          subtitle: 'Time Complexities',
          points: [
            'Average case: O(1) insert, search, delete',
            'Worst case: O(n) if all keys collide',
            'Chaining with good hash: O(1 + α)',
            'Open addressing: More sensitive to load factor',
            'Best performance when α < 0.7',
            'Space: O(n) for hash table'
          ]
        },
        {
          subtitle: 'Important Concepts',
          points: [
            'Universal Hashing: Random hash function selection',
            'Perfect Hashing: No collisions (static keys)',
            'Rehashing: Resize when load factor exceeds threshold',
            'Primary Clustering: Linear probing creates long chains',
            'Secondary Clustering: Quadratic probing creates patterns'
          ]
        }
      ]
    },
    {
      id: 'graph-basics',
      title: 'Graph Basics',
      icon: <Boxes className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Terminology',
          points: [
            'Vertex/Node: Point in graph',
            'Edge: Connection between vertices',
            'Directed Graph: Edges have direction',
            'Undirected Graph: Edges bidirectional',
            'Weighted Graph: Edges have weights',
            'Degree: Number of edges connected to vertex',
            'In-degree: Incoming edges (directed graph)',
            'Out-degree: Outgoing edges (directed graph)'
          ]
        },
        {
          subtitle: 'Graph Representations',
          points: [
            'Adjacency Matrix: 2D array, O(V²) space, O(1) edge check',
            'Adjacency List: Array of lists, O(V+E) space, O(degree) edge check',
            'Edge List: List of edges, O(E) space, O(E) edge check',
            'For sparse graphs: Adjacency list better',
            'For dense graphs: Adjacency matrix better'
          ]
        },
        {
          subtitle: 'Graph Types',
          points: [
            'Complete Graph: Every vertex connected to all others, E = V(V-1)/2',
            'Cyclic Graph: Contains at least one cycle',
            'Acyclic Graph: No cycles (DAG if directed)',
            'Connected Graph: Path exists between any two vertices',
            'Strongly Connected: Path in both directions (directed)',
            'Tree: Connected acyclic undirected graph with V-1 edges',
            'Forest: Collection of disjoint trees'
          ]
        }
      ]
    },
    {
      id: 'graph-traversal',
      title: 'Graph Traversal',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'BFS (Breadth First Search)',
          points: [
            'Uses Queue data structure',
            'Level by level traversal',
            'Time: O(V + E) with adjacency list',
            'Time: O(V²) with adjacency matrix',
            'Space: O(V) for queue',
            'Finds shortest path in unweighted graph',
            'Applications: Shortest path, level order, connected components'
          ]
        },
        {
          subtitle: 'DFS (Depth First Search)',
          points: [
            'Uses Stack (or recursion)',
            'Go deep before going wide',
            'Time: O(V + E) with adjacency list',
            'Time: O(V²) with adjacency matrix',
            'Space: O(V) for recursion stack',
            'Applications: Cycle detection, topological sort, strongly connected components',
            'Variants: Preorder, Inorder, Postorder (for trees)'
          ]
        },
        {
          subtitle: 'Topological Sorting',
          points: [
            'Linear ordering of vertices in DAG',
            'If u→v, then u appears before v',
            'DFS-based: O(V+E) - use finish times',
            'Kahn\'s Algorithm: BFS-based using in-degree - O(V+E)',
            'Used in task scheduling, build systems',
            'Only possible for DAG (Directed Acyclic Graph)'
          ]
        }
      ]
    },
    {
      id: 'mst',
      title: 'Minimum Spanning Tree',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'MST Properties',
          points: [
            'Spanning Tree: Connects all vertices with V-1 edges',
            'MST: Spanning tree with minimum total edge weight',
            'No cycles in spanning tree',
            'MST may not be unique',
            'Removing any edge disconnects the tree',
            'Total weight of MST: Sum of (V-1) edge weights'
          ]
        },
        {
          subtitle: 'Kruskal\'s Algorithm',
          points: [
            'Greedy approach: Sort edges by weight',
            'Add edge if it doesn\'t form cycle',
            'Use Union-Find (Disjoint Set) for cycle detection',
            'Time: O(E log E) or O(E log V) - sorting dominates',
            'Space: O(V) for Union-Find',
            'Works on disconnected graphs (gives forest)'
          ]
        },
        {
          subtitle: 'Prim\'s Algorithm',
          points: [
            'Greedy approach: Start from any vertex',
            'Always add minimum weight edge connecting to unvisited vertex',
            'Time: O(V²) with adjacency matrix',
            'Time: O((V+E) log V) with min-heap',
            'Space: O(V)',
            'Better for dense graphs',
            'Must be connected graph'
          ]
        }
      ]
    },
    {
      id: 'shortest-path',
      title: 'Shortest Path Algorithms',
      icon: <Cpu className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Dijkstra\'s Algorithm',
          points: [
            'Single source shortest path',
            'Works only with non-negative weights',
            'Greedy approach using min-heap/priority queue',
            'Time: O(V²) with array, O((V+E) log V) with min-heap',
            'Space: O(V)',
            'Similar to Prim\'s but finds shortest path, not MST',
            'Cannot handle negative weights'
          ]
        },
        {
          subtitle: 'Bellman-Ford Algorithm',
          points: [
            'Single source shortest path',
            'Handles negative weights',
            'Detects negative weight cycles',
            'Relaxes all edges V-1 times',
            'Time: O(VE)',
            'Space: O(V)',
            'Slower but more versatile than Dijkstra\'s'
          ]
        },
        {
          subtitle: 'Floyd-Warshall Algorithm',
          points: [
            'All pairs shortest path',
            'Dynamic Programming approach',
            'Time: O(V³)',
            'Space: O(V²) - distance matrix',
            'Handles negative weights but not negative cycles',
            'Can detect negative cycles',
            'Uses intermediate vertices to find shortest paths'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Data Structures Revision</h1>
              <p className="text-gray-600 mt-1">Complete Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-purple-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
              {/* Topic Header */}
              <div
                onClick={() => toggleSection(topic.id)}
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 hover:to-pink-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg text-white">
                    {topic.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{topic.title}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(topic.id);
                    }}
                    className={`p-2 rounded-lg transition-all ${
                      completedTopics[topic.id]
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  {expandedSections[topic.id] ? (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </div>

              {/* Topic Content */}
              {expandedSections[topic.id] && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  {topic.content.map((section, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-purple-600 mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">🎯 Pro Tip</p>
          <p className="mt-2 text-purple-100">Master time & space complexity analysis - it's crucial for GATE!</p>
        </div>
      </div>
    </div>
  );
};

export default DSANotes;