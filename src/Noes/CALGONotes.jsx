import React, { useState } from 'react';
import { Code, ChevronDown, ChevronRight, Terminal, FileCode, Boxes, Zap, Timer, TrendingUp, MemoryStick, CheckCircle } from 'lucide-react';

const CAlgoNotes = () => {
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
      id: 'c-basics',
      title: 'C Language Basics',
      icon: <Code className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Data Types & Sizes',
          points: [
            'char: 1 byte (-128 to 127 or 0 to 255)',
            'int: Typically 4 bytes (-2³¹ to 2³¹-1)',
            'float: 4 bytes (6-7 decimal digits precision)',
            'double: 8 bytes (15-16 decimal digits precision)',
            'short: 2 bytes, long: 4 or 8 bytes',
            'Size depends on compiler and architecture',
            'sizeof(type) returns size in bytes',
            'unsigned types: Only non-negative values, double the positive range'
          ]
        },
        {
          subtitle: 'Operators & Precedence',
          points: [
            'Highest: () [] -> . (postfix)',
            'Unary: ! ~ ++ -- + - * & sizeof (right to left)',
            'Arithmetic: * / % then + -',
            'Shift: << >>',
            'Relational: < <= > >= then == !=',
            'Bitwise: & then ^ then |',
            'Logical: && then ||',
            'Lowest: = += -= etc (assignment, right to left)'
          ]
        },
        {
          subtitle: 'Type Conversions',
          points: [
            'Implicit: Lower to higher type automatically',
            'char → int → long → float → double',
            'Explicit: (type)expression - type casting',
            'Integer division: 5/2 = 2 (not 2.5)',
            'Float division: 5.0/2 = 2.5 or 5/2.0 = 2.5',
            'Mixed operations: Promoted to higher type'
          ]
        }
      ]
    },
    {
      id: 'pointers',
      title: 'Pointers & Arrays',
      icon: <MemoryStick className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Pointer Basics',
          points: [
            'Pointer: Variable storing memory address',
            'int *p: p is pointer to integer',
            '&var: Address of var',
            '*p: Value at address p (dereferencing)',
            'NULL pointer: Points to nothing (0 address)',
            'void *: Generic pointer, can point to any type',
            'Pointer arithmetic: p+1 moves by sizeof(type) bytes'
          ]
        },
        {
          subtitle: 'Arrays & Pointers',
          points: [
            'Array name is constant pointer to first element',
            'arr[i] equivalent to *(arr+i)',
            '&arr[i] equivalent to (arr+i)',
            'Array passed to function decays to pointer',
            'Cannot find array size in function using sizeof',
            'Multi-dimensional: arr[i][j] = *(*(arr+i)+j)'
          ]
        },
        {
          subtitle: 'Pointer to Pointer',
          points: [
            'int **p: Pointer to pointer to int',
            'Used for: 2D arrays, function returning pointer',
            '*p: Address of int, **p: Value of int',
            'Dynamic 2D array allocation uses pointer to pointer'
          ]
        },
        {
          subtitle: 'Function Pointers',
          points: [
            'Store address of function',
            'int (*fp)(int, int): fp is pointer to function',
            'Calling: (*fp)(a, b) or fp(a, b)',
            'Used in: Callbacks, qsort, dynamic dispatch',
            'Array of function pointers: int (*arr[])(int)'
          ]
        }
      ]
    },
    {
      id: 'memory',
      title: 'Memory Management',
      icon: <MemoryStick className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Memory Layout',
          points: [
            'Text/Code: Program instructions (read-only)',
            'Data: Initialized global/static variables',
            'BSS: Uninitialized global/static (initialized to 0)',
            'Heap: Dynamic allocation (malloc, grows upward)',
            'Stack: Local variables, function calls (grows downward)',
            'Stack: Automatic deallocation, Heap: Manual deallocation'
          ]
        },
        {
          subtitle: 'Dynamic Memory',
          points: [
            'malloc(size): Allocate size bytes, returns void*',
            'calloc(n, size): Allocate n elements, initialize to 0',
            'realloc(ptr, new_size): Resize allocated memory',
            'free(ptr): Deallocate memory',
            'Memory leak: Not freeing allocated memory',
            'Dangling pointer: Pointer to freed memory',
            'Always check if malloc returns NULL (allocation failed)'
          ]
        },
        {
          subtitle: 'Storage Classes',
          points: [
            'auto: Local variable (default), automatic storage',
            'static: Retains value between function calls, initialized once',
            'extern: Declares variable defined elsewhere',
            'register: Suggests storing in CPU register (rarely used)',
            'Static global: Visible only in same file',
            'Static local: Retains value, limited scope'
          ]
        }
      ]
    },
    {
      id: 'structures',
      title: 'Structures & Unions',
      icon: <Boxes className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Structures',
          points: [
            'Group variables of different types',
            'struct student { int id; char name[50]; };',
            'Access members: s.id or ptr->id',
            'Structure padding: Compiler adds padding for alignment',
            'Size may be > sum of member sizes',
            'Structure assignment: Copies all members',
            'Can be passed by value or reference (pointer)'
          ]
        },
        {
          subtitle: 'Structure Padding',
          points: [
            'Compiler aligns members to memory boundaries',
            'Padding added to align to largest member size',
            'Order of members affects size',
            'Use #pragma pack(1) to avoid padding',
            'Example: struct {char c; int i;} may be 8 bytes (4 padding)'
          ]
        },
        {
          subtitle: 'Unions',
          points: [
            'Similar to struct but members share same memory',
            'Size = size of largest member',
            'Only one member can hold value at a time',
            'Used for: Memory optimization, type punning',
            'Example: union data {int i; float f; char c[4];}'
          ]
        },
        {
          subtitle: 'Bit Fields',
          points: [
            'Allocate specific number of bits to member',
            'struct {unsigned int a:3; unsigned int b:5;};',
            'Used for: Memory optimization, hardware registers',
            'Cannot take address of bit field',
            'Implementation defined behavior'
          ]
        }
      ]
    },
    {
      id: 'strings',
      title: 'Strings & String Functions',
      icon: <FileCode className="w-5 h-5" />,
      content: [
        {
          subtitle: 'String Basics',
          points: [
            'String: Array of characters terminated by \\0',
            'char str[] = "hello": Size = 6 (includes \\0)',
            'char *str = "hello": String literal (read-only)',
            'String literals stored in read-only memory',
            'Modifying string literal: Undefined behavior'
          ]
        },
        {
          subtitle: 'Important Functions (string.h)',
          points: [
            'strlen(s): Length (excludes \\0)',
            'strcpy(dest, src): Copy string',
            'strncpy(dest, src, n): Copy n characters',
            'strcat(dest, src): Concatenate strings',
            'strcmp(s1, s2): Compare (returns 0 if equal)',
            'strchr(s, c): Find first occurrence of char',
            'strstr(s1, s2): Find substring'
          ]
        },
        {
          subtitle: 'Common Issues',
          points: [
            'Buffer overflow: Writing beyond array bounds',
            'Not null-terminating strings',
            'Using gets() - unsafe, use fgets()',
            'strcmp returns 0 for equal (not 1)',
            'strcpy needs destination size ≥ source size + 1'
          ]
        }
      ]
    },
    {
      id: 'preprocessor',
      title: 'Preprocessor & Macros',
      icon: <Terminal className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Preprocessor Directives',
          points: [
            '#include: Include header files',
            '#define: Define macros and constants',
            '#undef: Undefine macro',
            '#ifdef, #ifndef, #endif: Conditional compilation',
            '#if, #elif, #else: Conditional compilation',
            '#pragma: Compiler-specific directives',
            'Processed before compilation'
          ]
        },
        {
          subtitle: 'Macros',
          points: [
            '#define PI 3.14159: Constant',
            '#define MAX(a,b) ((a)>(b)?(a):(b)): Function-like',
            'No type checking in macros',
            'Macro expansion: Text substitution',
            'Use parentheses to avoid precedence issues',
            'No semicolon at end of #define',
            'Can cause side effects: MAX(a++, b++) evaluates a++ twice'
          ]
        },
        {
          subtitle: 'Conditional Compilation',
          points: [
            'Include code based on conditions',
            '#ifdef DEBUG ... #endif',
            'Useful for platform-specific code',
            'Debug vs Release builds',
            'Header guards: #ifndef HEADER_H prevents double inclusion'
          ]
        }
      ]
    },
    {
      id: 'file-handling',
      title: 'File Handling',
      icon: <FileCode className="w-5 h-5" />,
      content: [
        {
          subtitle: 'File Operations',
          points: [
            'FILE *fp: File pointer',
            'fopen(filename, mode): Open file',
            'Modes: "r" read, "w" write, "a" append, "r+" read/write',
            'fclose(fp): Close file',
            'Always check if fopen returns NULL',
            'feof(fp): Check end of file',
            'ferror(fp): Check for errors'
          ]
        },
        {
          subtitle: 'Reading & Writing',
          points: [
            'fgetc(fp): Read single character',
            'fputc(c, fp): Write single character',
            'fgets(str, n, fp): Read line (max n-1 chars)',
            'fputs(str, fp): Write string',
            'fscanf(fp, format, ...): Formatted input',
            'fprintf(fp, format, ...): Formatted output',
            'fread/fwrite: Binary read/write'
          ]
        },
        {
          subtitle: 'File Positioning',
          points: [
            'fseek(fp, offset, whence): Move file pointer',
            'whence: SEEK_SET (beginning), SEEK_CUR (current), SEEK_END',
            'ftell(fp): Get current position',
            'rewind(fp): Move to beginning (same as fseek(fp, 0, SEEK_SET))'
          ]
        }
      ]
    },
    {
      id: 'complexity',
      title: 'Algorithm Complexity Analysis',
      icon: <TrendingUp className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Asymptotic Notations',
          points: [
            'Big O (O): Upper bound - worst case',
            'Big Omega (Ω): Lower bound - best case',
            'Big Theta (Θ): Tight bound - average case',
            'Little o (o): Strict upper bound',
            'Little omega (ω): Strict lower bound',
            'Most common: Big O notation'
          ]
        },
        {
          subtitle: 'Common Time Complexities',
          points: [
            'O(1): Constant - array access, arithmetic ops',
            'O(log n): Logarithmic - binary search, balanced BST',
            'O(n): Linear - linear search, single loop',
            'O(n log n): Linearithmic - merge sort, heap sort',
            'O(n²): Quadratic - bubble sort, nested loops',
            'O(n³): Cubic - triple nested loops',
            'O(2ⁿ): Exponential - recursive fibonacci',
            'O(n!): Factorial - permutation generation'
          ]
        },
        {
          subtitle: 'Complexity Rules',
          points: [
            'Drop constants: O(3n) = O(n)',
            'Drop lower order terms: O(n² + n) = O(n²)',
            'Loops: Multiply complexities',
            'Consecutive statements: Add complexities',
            'if-else: Take worst case branch',
            'Recursion: Use recurrence relations or Master theorem'
          ]
        },
        {
          subtitle: 'Space Complexity',
          points: [
            'Auxiliary space: Extra space used by algorithm',
            'Total space: Input space + Auxiliary space',
            'Recursion: O(depth) for call stack',
            'Iterative: Usually O(1) auxiliary space',
            'Trade-off: Time vs Space'
          ]
        }
      ]
    },
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Bubble Sort',
          points: [
            'Compare adjacent elements, swap if wrong order',
            'Time: O(n²) all cases (O(n) if already sorted with optimization)',
            'Space: O(1)',
            'Stable: Yes',
            'In-place: Yes',
            'Simple but inefficient for large data'
          ]
        },
        {
          subtitle: 'Selection Sort',
          points: [
            'Find minimum, place at beginning, repeat',
            'Time: O(n²) all cases (always makes same comparisons)',
            'Space: O(1)',
            'Stable: No (can be made stable)',
            'In-place: Yes',
            'Minimum number of swaps: n-1'
          ]
        },
        {
          subtitle: 'Insertion Sort',
          points: [
            'Build sorted array one element at a time',
            'Time: Best O(n), Average/Worst O(n²)',
            'Space: O(1)',
            'Stable: Yes',
            'In-place: Yes',
            'Efficient for small or nearly sorted data',
            'Adaptive: Efficient on partially sorted data'
          ]
        },
        {
          subtitle: 'Merge Sort',
          points: [
            'Divide array, recursively sort, merge',
            'Time: O(n log n) all cases',
            'Space: O(n) for temporary arrays',
            'Stable: Yes',
            'Not in-place: Needs extra space',
            'Good for linked lists (O(1) space)',
            'Divide-and-conquer approach'
          ]
        },
        {
          subtitle: 'Quick Sort',
          points: [
            'Choose pivot, partition, recursively sort',
            'Time: Best/Avg O(n log n), Worst O(n²)',
            'Worst case: Already sorted with bad pivot',
            'Space: O(log n) for recursion stack',
            'Not stable (can be made stable)',
            'In-place: Yes',
            'Most practical sorting algorithm',
            'Randomized quick sort avoids worst case'
          ]
        },
        {
          subtitle: 'Heap Sort',
          points: [
            'Build max heap, extract max repeatedly',
            'Time: O(n log n) all cases',
            'Space: O(1)',
            'Not stable',
            'In-place: Yes',
            'Consistent performance, no worst case',
            'Used in priority queue'
          ]
        },
        {
          subtitle: 'Counting Sort',
          points: [
            'Count occurrences, place in order',
            'Time: O(n+k) where k = range',
            'Space: O(k)',
            'Stable: Yes',
            'Not comparison-based',
            'Efficient when range k is not too large',
            'Used as subroutine in radix sort'
          ]
        }
      ]
    },
    {
      id: 'searching',
      title: 'Searching Algorithms',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Linear Search',
          points: [
            'Check each element sequentially',
            'Time: Best O(1), Worst O(n), Average O(n)',
            'Space: O(1)',
            'Works on unsorted arrays',
            'Simple but slow for large arrays'
          ]
        },
        {
          subtitle: 'Binary Search',
          points: [
            'Divide sorted array in half repeatedly',
            'Time: O(log n)',
            'Space: O(1) iterative, O(log n) recursive',
            'Requires sorted array',
            'Much faster than linear for large data',
            'Middle = (low + high) / 2 or low + (high-low)/2 (avoids overflow)'
          ]
        },
        {
          subtitle: 'Interpolation Search',
          points: [
            'Like binary but uses value to predict position',
            'Time: Best O(log log n), Worst O(n)',
            'Works best for uniformly distributed sorted data',
            'Better than binary search for certain distributions'
          ]
        },
        {
          subtitle: 'Jump Search',
          points: [
            'Jump ahead by fixed steps, then linear search',
            'Time: O(√n)',
            'Space: O(1)',
            'Works on sorted array',
            'Optimal jump size: √n'
          ]
        }
      ]
    },
    {
      id: 'divide-conquer',
      title: 'Divide & Conquer',
      icon: <Boxes className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Principle',
          points: [
            'Divide: Break into smaller subproblems',
            'Conquer: Solve subproblems recursively',
            'Combine: Merge solutions',
            'Base case: Direct solution for small problem',
            'Examples: Merge sort, Quick sort, Binary search'
          ]
        },
        {
          subtitle: 'Master Theorem',
          points: [
            'For recurrence: T(n) = aT(n/b) + f(n)',
            'a: Number of subproblems',
            'n/b: Size of each subproblem',
            'f(n): Cost of divide and combine',
            'Case 1: If f(n) = O(n^c) where c < log_b(a), then T(n) = Θ(n^log_b(a))',
            'Case 2: If f(n) = Θ(n^c log^k(n)) where c = log_b(a), then T(n) = Θ(n^c log^(k+1)(n))',
            'Case 3: If f(n) = Ω(n^c) where c > log_b(a), then T(n) = Θ(f(n))'
          ]
        },
        {
          subtitle: 'Common Recurrences',
          points: [
            'T(n) = T(n/2) + O(1): Binary search - O(log n)',
            'T(n) = 2T(n/2) + O(n): Merge sort - O(n log n)',
            'T(n) = 2T(n/2) + O(1): Tree height - O(n)',
            'T(n) = T(n-1) + O(1): Linear - O(n)',
            'T(n) = T(n-1) + O(n): Quadratic - O(n²)'
          ]
        }
      ]
    },
    {
      id: 'dynamic-programming',
      title: 'Dynamic Programming',
      icon: <TrendingUp className="w-5 h-5" />,
      content: [
        {
          subtitle: 'DP Principles',
          points: [
            'Overlapping Subproblems: Same subproblems solved multiple times',
            'Optimal Substructure: Optimal solution contains optimal subsolutions',
            'Memoization: Top-down, store results of subproblems',
            'Tabulation: Bottom-up, fill table iteratively',
            'When to use: Optimization problems with repeated subproblems'
          ]
        },
        {
          subtitle: 'Classic Problems',
          points: [
            'Fibonacci: F(n) = F(n-1) + F(n-2), DP: O(n) vs Recursive: O(2ⁿ)',
            'Longest Common Subsequence (LCS): O(mn)',
            'Longest Increasing Subsequence (LIS): O(n²) or O(n log n)',
            '0/1 Knapsack: O(nW) where W = capacity',
            'Matrix Chain Multiplication: O(n³)',
            'Edit Distance: O(mn)',
            'Coin Change: O(nW)'
          ]
        },
        {
          subtitle: 'DP vs Divide & Conquer',
          points: [
            'DP: Subproblems overlap, Divide: Independent subproblems',
            'DP: Store results, Divide: Solve each time',
            'DP: Bottom-up or top-down, Divide: Top-down',
            'DP: Use when subproblems repeat'
          ]
        }
      ]
    },
    {
      id: 'greedy',
      title: 'Greedy Algorithms',
      icon: <Timer className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Greedy Approach',
          points: [
            'Make locally optimal choice at each step',
            'Hope for global optimal solution',
            'Not always correct (needs proof)',
            'Usually simple and efficient',
            'Greedy Choice Property: Local optimum leads to global',
            'Optimal Substructure: Needed like DP'
          ]
        },
        {
          subtitle: 'Classic Problems',
          points: [
            'Activity Selection: O(n log n) - sort by finish time',
            'Fractional Knapsack: O(n log n) - sort by value/weight',
            'Huffman Coding: O(n log n) - optimal prefix codes',
            'Dijkstra\'s Algorithm: O((V+E) log V) - shortest path',
            'Prim\'s Algorithm: O((V+E) log V) - MST',
            'Kruskal\'s Algorithm: O(E log E) - MST',
            'Job Sequencing: O(n² or n log n) - maximize profit'
          ]
        },
        {
          subtitle: 'Greedy vs DP',
          points: [
            'Greedy: Make choice, never reconsider',
            'DP: Examine all choices, choose best',
            'Greedy: Faster, simpler',
            'DP: Guarantees optimal solution',
            '0/1 Knapsack: DP only, Fractional: Greedy works'
          ]
        }
      ]
    },
    {
      id: 'backtracking',
      title: 'Backtracking',
      icon: <Boxes className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Backtracking Approach',
          points: [
            'Try all possibilities using recursion',
            'Abandon solution as soon as it fails',
            'Prune search space (avoid unnecessary exploration)',
            'Build solution incrementally',
            'Used for: Constraint satisfaction, optimization'
          ]
        },
        {
          subtitle: 'Classic Problems',
          points: [
            'N-Queens: Place N queens on N×N board',
            'Sudoku Solver: Fill 9×9 grid with constraints',
            'Rat in Maze: Find path from start to end',
            'Graph Coloring: Color vertices with minimum colors',
            'Hamiltonian Path: Visit each vertex exactly once',
            'Subset Sum: Find subset with given sum',
            'Permutations & Combinations: Generate all'
          ]
        },
        {
          subtitle: 'Optimization',
          points: [
            'Constraint propagation: Reduce search space',
            'Ordering: Choose variables/values wisely',
            'Pruning: Cut branches early',
            'Often exponential time complexity',
            'Better than brute force due to pruning'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-rose-600 to-pink-600 p-4 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">C Programming & Algorithms</h1>
              <p className="text-gray-600 mt-1">Complete Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-rose-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-rose-600 to-pink-600 h-3 rounded-full transition-all duration-300"
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
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-rose-50 hover:to-pink-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-rose-600 to-pink-600 p-3 rounded-lg text-white">
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
                      <h3 className="text-lg font-bold text-rose-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-rose-600 to-pink-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-rose-600 mt-1.5 flex-shrink-0">•</span>
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

        </div>
    </div>
  );
}
export default CAlgoNotes;