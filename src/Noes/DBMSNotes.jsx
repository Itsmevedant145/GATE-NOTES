import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, Database, Key, Table, GitBranch, Lock, Zap, FileText, CheckCircle } from 'lucide-react';

const DBMSNotes = () => {
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
      id: 'er-model',
      title: 'ER Model & Design',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Entity-Relationship Model',
          points: [
            'Entity: Real-world object with independent existence (Strong/Weak)',
            'Attributes: Simple, Composite, Multi-valued, Derived (age from DOB)',
            'Relationships: One-to-One, One-to-Many, Many-to-Many',
            'Participation: Total (double line) vs Partial (single line)',
            'Cardinality Ratios: 1:1, 1:N, M:N',
            'Weak Entity: Depends on strong entity, has partial key (double rectangle)',
            'Identifying Relationship: Connects weak entity to owner (double diamond)'
          ]
        },
        {
          subtitle: 'Key Formulas',
          points: [
            'Min tables for M:N = 3 (two entity tables + one relationship table)',
            'Min tables for 1:N = 2 (can merge relationship with N-side entity)',
            'Min tables for 1:1 = 1 (can merge all into single table)'
          ]
        }
      ]
    },
    {
      id: 'relational-model',
      title: 'Relational Model',
      icon: <Table className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basic Concepts',
          points: [
            'Relation: Table with rows (tuples) and columns (attributes)',
            'Schema: Structure definition (R = (A₁, A₂, ..., Aₙ))',
            'Instance: Actual data at a given time',
            'Domain: Set of allowed values for an attribute',
            'Degree: Number of attributes in relation',
            'Cardinality: Number of tuples in relation',
            'NULL: Represents unknown or inapplicable values'
          ]
        },
        {
          subtitle: 'Properties of Relations',
          points: [
            'No duplicate tuples (set property)',
            'Tuples are unordered',
            'Attributes are unordered',
            'Atomic values only (1NF requirement)',
            'Each attribute has distinct name'
          ]
        }
      ]
    },
    {
      id: 'keys',
      title: 'Keys & Constraints',
      icon: <Key className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Types of Keys',
          points: [
            'Super Key: Any set of attributes that uniquely identifies tuples',
            'Candidate Key: Minimal super key (no proper subset is a super key)',
            'Primary Key: Selected candidate key, cannot be NULL',
            'Alternate Key: Candidate keys not chosen as primary key',
            'Foreign Key: References primary key of another relation',
            'Composite Key: Key with multiple attributes',
            'Surrogate Key: Artificial key (like auto-increment ID)'
          ]
        },
        {
          subtitle: 'Integrity Constraints',
          points: [
            'Entity Integrity: Primary key cannot be NULL',
            'Referential Integrity: Foreign key must reference existing primary key or be NULL',
            'Domain Constraint: Values must be from attribute domain',
            'Key Constraint: No two tuples can have same key value'
          ]
        }
      ]
    },
    {
      id: 'normalization',
      title: 'Normalization',
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Normal Forms',
          points: [
            '1NF: No multi-valued or composite attributes (atomic values only)',
            '2NF: 1NF + No partial dependency (non-prime attributes fully depend on candidate key)',
            '3NF: 2NF + No transitive dependency (A→B, B→C where C is non-prime)',
            'BCNF: 3NF + For every FD X→Y, X must be a super key',
            '4NF: BCNF + No multi-valued dependencies',
            '5NF: 4NF + No join dependencies'
          ]
        },
        {
          subtitle: 'Key Concepts',
          points: [
            'Prime Attribute: Part of any candidate key',
            'Non-prime Attribute: Not part of any candidate key',
            'Partial Dependency: Non-prime depends on part of candidate key',
            'Transitive Dependency: A→B→C (indirect dependency)',
            'Lossless Join: Can reconstruct original relation',
            'Dependency Preservation: All FDs checkable without joins'
          ]
        },
        {
          subtitle: 'Important Notes',
          points: [
            'BCNF is stronger than 3NF (BCNF ⊂ 3NF)',
            'BCNF may not preserve dependencies, 3NF always does',
            'Every relation can be decomposed into BCNF with lossless join',
            'Every relation can be decomposed into 3NF with lossless join AND dependency preservation'
          ]
        }
      ]
    },
    {
      id: 'functional-dependencies',
      title: 'Functional Dependencies',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basics',
          points: [
            'FD: X→Y means X functionally determines Y',
            'Trivial FD: Y ⊆ X (e.g., AB→A)',
            'Non-trivial FD: Y ⊄ X',
            'Completely Non-trivial: X ∩ Y = ∅'
          ]
        },
        {
          subtitle: 'Armstrong\'s Axioms',
          points: [
            'Reflexivity: If Y ⊆ X, then X→Y (trivial)',
            'Augmentation: If X→Y, then XZ→YZ',
            'Transitivity: If X→Y and Y→Z, then X→Z',
            'Union: If X→Y and X→Z, then X→YZ',
            'Decomposition: If X→YZ, then X→Y and X→Z',
            'Pseudo-transitivity: If X→Y and WY→Z, then WX→Z'
          ]
        },
        {
          subtitle: 'Closure & Keys',
          points: [
            'Attribute Closure (X⁺): Set of all attributes determined by X',
            'X is super key if X⁺ contains all attributes',
            'Canonical Cover: Minimal set of FDs with same closure',
            'Extraneous Attribute: Can be removed without changing closure'
          ]
        }
      ]
    },
    {
      id: 'transactions',
      title: 'Transactions & ACID',
      icon: <Database className="w-5 h-5" />,
      content: [
        {
          subtitle: 'ACID Properties',
          points: [
            'Atomicity: All or nothing execution (commit or rollback)',
            'Consistency: DB moves from one valid state to another',
            'Isolation: Concurrent transactions don\'t interfere',
            'Durability: Committed changes persist even after failures'
          ]
        },
        {
          subtitle: 'Transaction States',
          points: [
            'Active: Initial state, transaction executing',
            'Partially Committed: After final statement executed',
            'Failed: Cannot proceed normally',
            'Aborted: Rolled back, DB restored',
            'Committed: Successfully completed'
          ]
        },
        {
          subtitle: 'Concurrency Problems',
          points: [
            'Dirty Read: Reading uncommitted data',
            'Non-repeatable Read: Different values in same transaction',
            'Phantom Read: New rows appear between reads',
            'Lost Update: Two transactions update same data, one is lost'
          ]
        }
      ]
    },
    {
      id: 'concurrency',
      title: 'Concurrency Control',
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Lock-Based Protocols',
          points: [
            'Shared Lock (S): Multiple transactions can read',
            'Exclusive Lock (X): Only one transaction can write',
            'Two-Phase Locking (2PL): Growing phase (acquire locks) + Shrinking phase (release locks)',
            'Strict 2PL: Hold all exclusive locks until commit/abort',
            'Rigorous 2PL: Hold all locks until commit/abort',
            'Deadlock: Circular wait for locks (Wait-Die, Wound-Wait schemes)'
          ]
        },
        {
          subtitle: 'Timestamp Ordering',
          points: [
            'Each transaction assigned unique timestamp',
            'TS(Ti) < TS(Tj) means Ti should execute before Tj',
            'Read-TS(X): Largest timestamp that read X',
            'Write-TS(X): Largest timestamp that wrote X',
            'If younger transaction already accessed, older transaction aborted'
          ]
        },
        {
          subtitle: 'Serializability',
          points: [
            'Serial Schedule: Transactions execute one after another',
            'Serializable: Equivalent to some serial schedule',
            'Conflict Serializable: Can be transformed to serial via conflict-equivalent swaps',
            'View Serializable: Produces same final result as serial schedule',
            'Precedence Graph: Cycle indicates non-conflict-serializable'
          ]
        }
      ]
    },
    {
      id: 'indexing',
      title: 'Indexing & B+ Trees',
      icon: <BookOpen className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Index Types',
          points: [
            'Primary Index: On ordering key field (one entry per block)',
            'Clustering Index: On non-key ordering field',
            'Secondary Index: On non-ordering field (one entry per record)',
            'Dense Index: Entry for every search key value',
            'Sparse Index: Entry for some search key values (only for ordered files)'
          ]
        },
        {
          subtitle: 'B+ Tree Properties',
          points: [
            'All data in leaf nodes, linked as linked list',
            'Internal nodes store only keys for routing',
            'Height balanced: All leaves at same level',
            'Order n: Max n pointers per node',
            'Min keys in node: ⌈n/2⌉ - 1 (except root)',
            'Max keys in node: n - 1',
            'Root: Min 1 key (2 children)',
            'Search: O(log n), Insert/Delete: O(log n)'
          ]
        },
        {
          subtitle: 'B+ Tree Formulas',
          points: [
            'Max records in tree of height h: n^h',
            'Min height: ⌈log₍ₙ/₂₎(N+1)/2⌉',
            'Leaf node keys: ⌈(n-1)/2⌉ to (n-1)',
            'Internal node pointers: ⌈n/2⌉ to n'
          ]
        }
      ]
    },
    {
      id: 'sql',
      title: 'SQL & Relational Algebra',
      icon: <Database className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Relational Algebra Operations',
          points: [
            'Selection (σ): Filters rows based on condition',
            'Projection (π): Selects specific columns',
            'Union (∪): Combines tuples from two relations (union compatible)',
            'Set Difference (-): Tuples in R1 but not in R2',
            'Cartesian Product (×): All combinations of tuples',
            'Join (⋈): Combines related tuples from two relations',
            'Natural Join: Join on common attributes',
            'Division (÷): Finds tuples in R that match all tuples in S'
          ]
        },
        {
          subtitle: 'SQL Key Concepts',
          points: [
            'JOIN: INNER, LEFT, RIGHT, FULL OUTER',
            'Aggregate: COUNT, SUM, AVG, MAX, MIN',
            'GROUP BY: Groups rows with same values',
            'HAVING: Filter groups (WHERE filters rows)',
            'Subquery: Query inside another query',
            'Correlated Subquery: References outer query',
            'EXISTS: Returns true if subquery returns rows',
            'UNION removes duplicates, UNION ALL keeps them'
          ]
        }
      ]
    },
    {
      id: 'recovery',
      title: 'Recovery & Logging',
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Log-Based Recovery',
          points: [
            'Write-Ahead Logging (WAL): Log written before DB update',
            'Log Records: <Ti start>, <Ti, X, old, new>, <Ti commit/abort>',
            'Undo: Restore old values for uncommitted transactions',
            'Redo: Reapply new values for committed transactions',
            'Checkpoint: Saves state, reduces recovery time'
          ]
        },
        {
          subtitle: 'Recovery Algorithms',
          points: [
            'Immediate Update: Update DB before commit',
            'Deferred Update: Update DB only after commit (no undo needed)',
            'Shadow Paging: Maintain two page tables (current & shadow)',
            'ARIES: Analysis, Redo, Undo phases'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 rounded-xl">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">DBMS Revision Notes</h1>
              <p className="text-gray-600 mt-1">Complete Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-indigo-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300"
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
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-lg text-white">
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
                      <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-indigo-600 mt-1.5 flex-shrink-0">•</span>
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
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">💡 Pro Tip</p>
          <p className="mt-2 text-blue-100">Practice previous GATE questions after each topic for better retention!</p>
        </div>
      </div>
    </div>
  );
};

export default DBMSNotes;