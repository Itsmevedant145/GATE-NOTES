import React, { useState } from 'react';
import { Cpu, ChevronDown, ChevronRight, HardDrive, Lock, Zap, RefreshCw, Layers, MemoryStick, FileText, Gauge, CheckCircle } from 'lucide-react';

const OSNotes = () => {
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
      id: 'intro',
      title: 'OS Basics & System Calls',
      icon: <Cpu className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Operating System Functions',
          points: [
            'Process Management: Creation, scheduling, termination',
            'Memory Management: Allocation, paging, segmentation',
            'File Management: Creation, deletion, organization',
            'I/O Management: Device drivers, buffering',
            'Security & Protection: Authentication, access control',
            'User Interface: CLI, GUI'
          ]
        },
        {
          subtitle: 'System Calls',
          points: [
            'Process Control: fork(), exec(), wait(), exit()',
            'File Management: open(), read(), write(), close()',
            'Device Management: ioctl(), read(), write()',
            'Information Maintenance: getpid(), alarm(), sleep()',
            'Communication: pipe(), shmget(), msgget()',
            'Mode: User mode → Kernel mode transition via system call'
          ]
        },
        {
          subtitle: 'OS Types',
          points: [
            'Batch OS: Groups jobs, no interaction',
            'Time-Sharing OS: Multiple users, time slicing',
            'Real-Time OS: Strict time constraints (hard/soft)',
            'Distributed OS: Multiple systems work together',
            'Network OS: Systems connected via network',
            'Embedded OS: Dedicated for specific devices'
          ]
        }
      ]
    },
    {
      id: 'process',
      title: 'Process Management',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Process States',
          points: [
            'New: Process being created',
            'Ready: Waiting for CPU allocation',
            'Running: Instructions being executed',
            'Waiting/Blocked: Waiting for I/O or event',
            'Terminated: Finished execution',
            'Suspended: Moved to secondary storage'
          ]
        },
        {
          subtitle: 'Process Control Block (PCB)',
          points: [
            'Process ID (PID)',
            'Process State: New, Ready, Running, Waiting, Terminated',
            'Program Counter: Address of next instruction',
            'CPU Registers: Accumulator, index registers, stack pointers',
            'Memory Management Info: Page tables, segment tables',
            'Accounting Info: CPU time, time limits',
            'I/O Status: Allocated devices, open files'
          ]
        },
        {
          subtitle: 'Context Switching',
          points: [
            'Save state of current process in PCB',
            'Load state of next process from PCB',
            'Pure overhead - no useful work done',
            'Time depends on hardware support',
            'Frequent switching reduces throughput',
            'Context switch time: 1-1000 microseconds'
          ]
        },
        {
          subtitle: 'Process vs Thread',
          points: [
            'Process: Independent, separate address space, heavy',
            'Thread: Lightweight, shares address space, faster context switch',
            'Process creation time > Thread creation time',
            'Inter-process communication slower than inter-thread',
            'Process crash doesn\'t affect others, thread crash can affect all',
            'Threads share: Code, Data, Files; Have separate: Stack, Registers, PC'
          ]
        }
      ]
    },
    {
      id: 'cpu-scheduling',
      title: 'CPU Scheduling',
      icon: <Gauge className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Scheduling Criteria',
          points: [
            'CPU Utilization: Keep CPU as busy as possible',
            'Throughput: Number of processes completed per time unit',
            'Turnaround Time: Total time from submission to completion',
            'Waiting Time: Time spent in ready queue',
            'Response Time: Time from submission to first response',
            'TAT = BT + WT (Burst Time + Waiting Time)'
          ]
        },
        {
          subtitle: 'FCFS (First Come First Serve)',
          points: [
            'Non-preemptive scheduling',
            'Simple queue (FIFO)',
            'Convoy Effect: Short processes wait for long ones',
            'Average WT can be high',
            'No starvation',
            'Poor for time-sharing systems'
          ]
        },
        {
          subtitle: 'SJF (Shortest Job First)',
          points: [
            'Non-preemptive: Select shortest burst time',
            'Optimal: Minimum average waiting time',
            'Problem: Cannot know future burst time (prediction used)',
            'Starvation possible for long processes',
            'SRTF (Shortest Remaining Time First): Preemptive version',
            'SRTF gives minimum average WT among all algorithms'
          ]
        },
        {
          subtitle: 'Priority Scheduling',
          points: [
            'Each process has priority number',
            'CPU allocated to highest priority process',
            'Can be preemptive or non-preemptive',
            'Problem: Starvation of low-priority processes',
            'Solution: Aging - gradually increase priority',
            'SJF is priority scheduling where priority = 1/burst_time'
          ]
        },
        {
          subtitle: 'Round Robin (RR)',
          points: [
            'Preemptive, time quantum/time slice',
            'Each process gets small time quantum (10-100 ms)',
            'After quantum expires, process preempted',
            'If quantum too large: Becomes FCFS',
            'If quantum too small: Too many context switches',
            'Good response time, fair CPU allocation',
            'Performance depends on quantum size'
          ]
        },
        {
          subtitle: 'Multilevel Queue',
          points: [
            'Ready queue divided into separate queues',
            'Each queue has own scheduling algorithm',
            'Processes permanently assigned to one queue',
            'Common: Foreground (RR), Background (FCFS)',
            'Starvation possible for lower queues',
            'Multilevel Feedback Queue: Processes can move between queues'
          ]
        }
      ]
    },
    {
      id: 'synchronization',
      title: 'Process Synchronization',
      icon: <RefreshCw className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Critical Section Problem',
          points: [
            'Critical Section: Code accessing shared resources',
            'Mutual Exclusion: Only one process in CS at a time',
            'Progress: Selection cannot be postponed indefinitely',
            'Bounded Waiting: Limit on times others enter CS before a process',
            'Race Condition: Output depends on execution sequence'
          ]
        },
        {
          subtitle: 'Peterson\'s Solution',
          points: [
            'Software solution for 2 processes',
            'Uses two variables: flag[] and turn',
            'flag[i] = true: Process i wants to enter CS',
            'turn: Whose turn to enter CS',
            'Satisfies all three requirements',
            'May not work on modern architectures (instruction reordering)'
          ]
        },
        {
          subtitle: 'Semaphores',
          points: [
            'Integer variable for synchronization',
            'Two atomic operations: wait(S) or P(S), signal(S) or V(S)',
            'wait(S): while(S<=0); S--;',
            'signal(S): S++;',
            'Binary Semaphore: Value 0 or 1 (mutex lock)',
            'Counting Semaphore: Value can be any integer',
            'Used for: Mutual exclusion, synchronization, resource allocation'
          ]
        },
        {
          subtitle: 'Classic Problems',
          points: [
            'Producer-Consumer: Bounded buffer, use 3 semaphores (mutex, empty, full)',
            'Readers-Writers: Multiple readers OR single writer',
            'Dining Philosophers: 5 philosophers, 5 chopsticks, avoid deadlock',
            'Sleeping Barber: Barber shop with waiting room'
          ]
        },
        {
          subtitle: 'Monitors',
          points: [
            'High-level synchronization construct',
            'Only one process active in monitor at a time',
            'Condition variables: wait() and signal()',
            'Easier to use than semaphores',
            'Compiler enforces mutual exclusion',
            'Used in Java (synchronized keyword)'
          ]
        }
      ]
    },
    {
      id: 'deadlock',
      title: 'Deadlocks',
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Necessary Conditions (All 4 must hold)',
          points: [
            'Mutual Exclusion: Resources cannot be shared',
            'Hold and Wait: Process holding resources can request more',
            'No Preemption: Resources cannot be forcibly taken',
            'Circular Wait: Circular chain of processes waiting',
            'Breaking any one condition prevents deadlock'
          ]
        },
        {
          subtitle: 'Deadlock Prevention',
          points: [
            'Mutual Exclusion: Make resources shareable (not always possible)',
            'Hold and Wait: Allocate all resources at once, or release before requesting',
            'No Preemption: Allow resource preemption',
            'Circular Wait: Impose ordering on resource types',
            'Prevention: Ensure at least one condition never holds',
            'May lead to low resource utilization'
          ]
        },
        {
          subtitle: 'Deadlock Avoidance',
          points: [
            'Require additional information about resource requests',
            'Safe State: System can allocate resources without deadlock',
            'Unsafe State: May lead to deadlock',
            'Banker\'s Algorithm: For multiple resource types',
            'Check if request leads to safe state before granting',
            'Resource Allocation Graph: For single instance resources'
          ]
        },
        {
          subtitle: 'Banker\'s Algorithm',
          points: [
            'Uses: Available, Max, Allocation, Need matrices',
            'Need = Max - Allocation',
            'Safety Algorithm: Find sequence where all can finish',
            'Resource Request Algorithm: Check if granting keeps system safe',
            'Time complexity: O(m × n²) where m=resources, n=processes',
            'Drawback: Requires advance knowledge of max needs'
          ]
        },
        {
          subtitle: 'Deadlock Detection & Recovery',
          points: [
            'Allow deadlock to occur, then detect and recover',
            'Detection: Run algorithm periodically',
            'Wait-for graph for single instance',
            'Detection algorithm for multiple instances',
            'Recovery: Process termination (all or one at a time)',
            'Recovery: Resource preemption with rollback',
            'Most OS use this approach (or ignore deadlock)'
          ]
        }
      ]
    },
    {
      id: 'memory-management',
      title: 'Memory Management',
      icon: <MemoryStick className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Memory Allocation Techniques',
          points: [
            'Contiguous Allocation: Process occupies continuous memory',
            'Fixed Partitioning: Memory divided into fixed partitions',
            'Variable Partitioning: Partitions created dynamically',
            'Internal Fragmentation: Unused space within partition',
            'External Fragmentation: Unused space between partitions',
            'Compaction: Shuffle processes to remove external fragmentation'
          ]
        },
        {
          subtitle: 'Placement Algorithms',
          points: [
            'First Fit: Allocate first hole big enough',
            'Best Fit: Allocate smallest hole big enough',
            'Worst Fit: Allocate largest hole',
            'Next Fit: Like first fit but start from last allocation',
            'First Fit and Best Fit: Better than Worst Fit',
            'First Fit: Generally faster than Best Fit'
          ]
        },
        {
          subtitle: 'Logical vs Physical Address',
          points: [
            'Logical Address: Generated by CPU (virtual address)',
            'Physical Address: Actual RAM address',
            'MMU (Memory Management Unit): Maps logical to physical',
            'Relocation Register: Base address for address translation',
            'Physical Address = Logical Address + Base Register'
          ]
        }
      ]
    },
    {
      id: 'paging',
      title: 'Paging',
      icon: <Layers className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Paging Basics',
          points: [
            'Divide physical memory into fixed-size blocks (frames)',
            'Divide logical memory into same-size blocks (pages)',
            'No external fragmentation',
            'Internal fragmentation: Last page may not be fully used',
            'Average internal fragmentation: Page size / 2',
            'Page Table: Maps page number to frame number'
          ]
        },
        {
          subtitle: 'Address Translation',
          points: [
            'Logical Address = (Page Number, Page Offset)',
            'Page Number: Index into page table',
            'Page Offset: Offset within page/frame',
            'Physical Address = (Frame Number, Page Offset)',
            'If page size = 2^k bytes, last k bits = offset',
            'Number of pages = Logical address space / Page size'
          ]
        },
        {
          subtitle: 'Page Table Structure',
          points: [
            'Simple Page Table: One entry per page',
            'Hierarchical Paging: Multi-level page tables (saves space)',
            'Two-level paging common in 32-bit systems',
            'Hashed Page Tables: For large address spaces',
            'Inverted Page Table: One entry per frame (saves space)',
            'Page Table Entry: Frame number, valid bit, protection bits, dirty bit'
          ]
        },
        {
          subtitle: 'TLB (Translation Lookaside Buffer)',
          points: [
            'Fast cache for page table entries',
            'Associative memory - parallel search',
            'TLB Hit: Page table entry found in TLB',
            'TLB Miss: Must access page table in memory',
            'Effective Access Time = Hit% × (TLB time + Memory) + Miss% × (TLB + 2×Memory)',
            'Typical TLB: 64-1024 entries, 80-98% hit rate'
          ]
        },
        {
          subtitle: 'Formulas',
          points: [
            'Page size = 2^k bytes (k = bits for offset)',
            'Number of pages = Process size / Page size',
            'Page table size = Number of pages × Entry size',
            'Frame number = Physical address / Frame size',
            'Offset = Physical address % Frame size'
          ]
        }
      ]
    },
    {
      id: 'virtual-memory',
      title: 'Virtual Memory',
      icon: <HardDrive className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Virtual Memory Basics',
          points: [
            'Separation of logical and physical memory',
            'Allows execution of processes not fully in memory',
            'Program size can exceed physical memory',
            'More processes in memory (higher multiprogramming)',
            'Implemented via: Demand Paging or Demand Segmentation',
            'Pages loaded only when demanded (page fault)'
          ]
        },
        {
          subtitle: 'Demand Paging',
          points: [
            'Load pages only when needed',
            'Page Fault: Reference to page not in memory',
            'Valid/Invalid bit: Shows if page is in memory',
            'Page Fault Handling: Trap to OS → Load page → Update table → Restart',
            'Pure demand paging: Start with no pages in memory',
            'Effective Access Time = (1-p)×Memory + p×Page_Fault_Time'
          ]
        },
        {
          subtitle: 'Page Replacement Algorithms',
          points: [
            'When memory full and page fault occurs',
            'Select victim page to replace',
            'If victim page modified (dirty bit = 1), write back to disk',
            'Goal: Minimize page fault rate'
          ]
        },
        {
          subtitle: 'FIFO (First In First Out)',
          points: [
            'Replace oldest page in memory',
            'Simple to implement (queue)',
            'May replace heavily used page',
            'Belady\'s Anomaly: More frames → more page faults (possible)',
            'Not optimal, poor performance'
          ]
        },
        {
          subtitle: 'Optimal Page Replacement',
          points: [
            'Replace page not used for longest time in future',
            'Lowest page fault rate',
            'Not practical: Cannot predict future',
            'Used as benchmark for other algorithms',
            'No Belady\'s Anomaly'
          ]
        },
        {
          subtitle: 'LRU (Least Recently Used)',
          points: [
            'Replace page not used for longest time in past',
            'Approximates optimal algorithm',
            'No Belady\'s Anomaly (stack algorithm)',
            'Implementation: Counter or Stack',
            'Expensive to implement fully',
            'Good performance in practice'
          ]
        },
        {
          subtitle: 'Other Algorithms',
          points: [
            'LFU (Least Frequently Used): Replace least frequently used',
            'MFU (Most Frequently Used): Replace most frequently used',
            'Second Chance (Clock): FIFO with reference bit',
            'Enhanced Second Chance: Uses reference and modify bits',
            'Counting-based: Track reference count'
          ]
        },
        {
          subtitle: 'Thrashing',
          points: [
            'Process spends more time paging than executing',
            'CPU utilization drops',
            'Caused by: Too many processes, insufficient frames',
            'Working Set Model: Set of pages actively used',
            'Page Fault Frequency: Monitor page fault rate',
            'Solution: Reduce multiprogramming degree, increase memory'
          ]
        }
      ]
    },
    {
      id: 'disk-scheduling',
      title: 'Disk Scheduling',
      icon: <HardDrive className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Disk Structure',
          points: [
            'Platter: Circular disk surface',
            'Track: Concentric circle on platter',
            'Sector: Smallest unit of transfer (arc of track)',
            'Cylinder: Set of tracks at same arm position',
            'Read/Write Head: Moves to position',
            'Seek Time: Time to move arm to cylinder',
            'Rotational Latency: Time for sector to rotate under head',
            'Transfer Time: Time to transfer data'
          ]
        },
        {
          subtitle: 'FCFS (First Come First Serve)',
          points: [
            'Process requests in order of arrival',
            'Simple, fair',
            'No optimization of seek time',
            'Can have large head movement',
            'Wild swings across disk'
          ]
        },
        {
          subtitle: 'SSTF (Shortest Seek Time First)',
          points: [
            'Select request with minimum seek time from current position',
            'Reduces total seek time',
            'May cause starvation',
            'Not optimal (SCAN variants better)',
            'Like SJF but for disk'
          ]
        },
        {
          subtitle: 'SCAN (Elevator Algorithm)',
          points: [
            'Arm moves in one direction, services requests',
            'At end, reverses direction',
            'No starvation',
            'Lower variance than SSTF',
            'Requests at middle wait less',
            'Better for heavy load'
          ]
        },
        {
          subtitle: 'C-SCAN (Circular SCAN)',
          points: [
            'Like SCAN but only in one direction',
            'At end, jumps to beginning (no servicing)',
            'More uniform wait time',
            'Treats cylinders as circular list',
            'Better than SCAN for uniformity'
          ]
        },
        {
          subtitle: 'LOOK and C-LOOK',
          points: [
            'Like SCAN/C-SCAN but arm goes only to last request',
            'Doesn\'t go to end of disk',
            'LOOK: Bidirectional',
            'C-LOOK: Unidirectional',
            'Better performance than SCAN/C-SCAN',
            'Most commonly used in practice'
          ]
        }
      ]
    },
    {
      id: 'file-system',
      title: 'File Systems',
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: 'File Concepts',
          points: [
            'File: Named collection of related information',
            'File Attributes: Name, type, location, size, protection, time',
            'File Operations: Create, open, read, write, delete, close',
            'File Types: Regular, directory, special (devices)',
            'Access Methods: Sequential, direct, indexed',
            'File Descriptor: Data structure with file info'
          ]
        },
        {
          subtitle: 'Directory Structure',
          points: [
            'Single-Level: All files in one directory',
            'Two-Level: Separate directory for each user',
            'Tree-Structured: Hierarchical directory',
            'Acyclic-Graph: Allows shared subdirectories/files',
            'General Graph: Allows cycles (hard to traverse)',
            'Path: Absolute path, Relative path'
          ]
        },
        {
          subtitle: 'File Allocation Methods',
          points: [
            'Contiguous: Sequential blocks, fast access, external fragmentation',
            'Linked: Scattered blocks with pointers, no external frag, slow random access',
            'Indexed: Index block with pointers, supports direct access, overhead of index'
          ]
        },
        {
          subtitle: 'Contiguous Allocation',
          points: [
            'File occupies contiguous blocks',
            'Directory: Starting block and length',
            'Advantages: Simple, fast access (sequential and direct)',
            'Disadvantages: External fragmentation, file size changes difficult',
            'Example: CD-ROM'
          ]
        },
        {
          subtitle: 'Linked Allocation',
          points: [
            'Each block points to next block',
            'Directory: Pointer to first block',
            'Advantages: No external fragmentation, easy to grow',
            'Disadvantages: Slow random access, pointer overhead, reliability',
            'FAT (File Allocation Table): Variation with table of links'
          ]
        },
        {
          subtitle: 'Indexed Allocation',
          points: [
            'Index block contains pointers to all blocks',
            'Directory: Pointer to index block',
            'Advantages: Direct access, no external fragmentation',
            'Disadvantages: Index block overhead, size limitation',
            'Multi-level Index: For large files',
            'Unix i-node: Combined scheme (direct, single, double, triple indirect)'
          ]
        },
        {
          subtitle: 'Free Space Management',
          points: [
            'Bit Vector/Bitmap: One bit per block (0=free, 1=allocated)',
            'Linked List: Free blocks linked together',
            'Grouping: Store addresses of n free blocks in first free block',
            'Counting: Store address and count of contiguous free blocks'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-cyan-600 to-teal-600 p-4 rounded-xl">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Operating System Revision</h1>
              <p className="text-gray-600 mt-1">Complete Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-cyan-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-cyan-600 to-teal-600 h-3 rounded-full transition-all duration-300"
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
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-cyan-50 hover:to-teal-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-teal-600 p-3 rounded-lg text-white">
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
                      <h3 className="text-lg font-bold text-cyan-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-600 to-teal-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-cyan-600 mt-1.5 flex-shrink-0">•</span>
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
        <div className="mt-8 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">⚡ Pro Tip</p>
          <p className="mt-2 text-cyan-100">Focus on numerical problems for CPU scheduling, paging calculations, and disk scheduling!</p>
        </div>
      </div>
    </div>
  );
};

export default OSNotes;