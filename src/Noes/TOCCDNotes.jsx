import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, GitBranch, Workflow, Code2, Braces, FileCode, Zap, CheckCircle } from 'lucide-react';

const TOCCDNotes = () => {
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
      id: 'automata-basics',
      title: 'Finite Automata Basics',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'DFA (Deterministic Finite Automaton)',
          points: [
            'For each state and input symbol, exactly one transition',
            'Tuple: (Q, Σ, δ, q₀, F) where Q=states, Σ=alphabet, δ=transition, q₀=start, F=final',
            'Every input string has exactly one path',
            'No ε-transitions allowed',
            'Accepts string if ends in final state',
            'Easier to implement but may need more states'
          ]
        },
        {
          subtitle: 'NFA (Non-deterministic Finite Automaton)',
          points: [
            'Can have multiple transitions for same input',
            'Can have ε-transitions (move without consuming input)',
            'Accepts string if ANY path leads to final state',
            'More flexible, fewer states needed',
            'Every NFA can be converted to equivalent DFA',
            'Subset construction: DFA states = power set of NFA states'
          ]
        },
        {
          subtitle: 'DFA vs NFA',
          points: [
            'DFA: One unique next state, NFA: Multiple possible next states',
            'DFA: No ε-moves, NFA: ε-moves allowed',
            'DFA: Faster execution, NFA: Easier to design',
            'Both have same computational power (recognize regular languages)',
            'NFA to DFA: May have exponential state increase (2^n states)',
            'DFA minimization: Unique minimal DFA for each language'
          ]
        },
        {
          subtitle: 'Important Properties',
          points: [
            'Regular languages are closed under: Union, Intersection, Complement, Concatenation, Kleene star',
            'DFA with n states: Min string length to distinguish states ≤ n-1',
            'Pumping Lemma for Regular: For infinite regular L, ∃ p such that strings can be pumped',
            'Myhill-Nerode Theorem: Language regular iff finite equivalence classes'
          ]
        }
      ]
    },
    {
      id: 'regular-expressions',
      title: 'Regular Expressions & Languages',
      icon: <Code2 className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Regular Expression Basics',
          points: [
            'ε (epsilon): Empty string',
            'a: Single character',
            'r₁ + r₂ or r₁|r₂: Union (either r₁ or r₂)',
            'r₁r₂: Concatenation (r₁ followed by r₂)',
            'r*: Kleene star (zero or more occurrences)',
            'r+: One or more occurrences (r+ = rr*)',
            'r?: Zero or one occurrence'
          ]
        },
        {
          subtitle: 'Important Identities',
          points: [
            'ε*  = ε',
            '∅* = ε',
            'r + ∅ = r',
            'r∅ = ∅',
            'rε = εr = r',
            'r + r = r (idempotent)',
            'r* = r*r* = (r*)*',
            'r** = r*',
            '(r*)* = r*'
          ]
        },
        {
          subtitle: 'Regular Language Properties',
          points: [
            'Every finite language is regular',
            'Regular languages recognized by: DFA, NFA, Regular Expression',
            'Closed under: Union, Intersection, Complement, Concatenation, Kleene star, Reversal',
            'NOT closed under: Not much - very robust!',
            'Decision properties: Membership, Emptiness, Finiteness (all decidable)'
          ]
        },
        {
          subtitle: 'Non-Regular Languages',
          points: [
            'L = {aⁿbⁿ | n ≥ 0}: Equal number of a\'s and b\'s',
            'L = {aⁿbⁿcⁿ | n ≥ 0}: Three symbols in equal count',
            'L = {ww | w ∈ Σ*}: String repeated twice',
            'L = {aⁿ | n is prime}: Prime number of a\'s',
            'Use Pumping Lemma to prove non-regularity'
          ]
        }
      ]
    },
    {
      id: 'cfg',
      title: 'Context-Free Grammar',
      icon: <Braces className="w-5 h-5" />,
      content: [
        {
          subtitle: 'CFG Basics',
          points: [
            'Tuple: G = (V, T, P, S) where V=variables, T=terminals, P=productions, S=start',
            'Production: A → α where A ∈ V, α ∈ (V ∪ T)*',
            'Derivation: Process of applying productions',
            'Leftmost derivation: Always replace leftmost variable',
            'Rightmost derivation: Always replace rightmost variable',
            'Parse tree: Graphical representation of derivation'
          ]
        },
        {
          subtitle: 'Ambiguity',
          points: [
            'Grammar is ambiguous if some string has multiple parse trees',
            'Equivalently: Multiple leftmost or rightmost derivations',
            'Example: E → E+E | E*E | id is ambiguous',
            'Some languages are inherently ambiguous',
            'Ambiguity is undecidable in general',
            'Solutions: Add precedence, associativity rules'
          ]
        },
        {
          subtitle: 'Chomsky Normal Form (CNF)',
          points: [
            'Productions: A → BC or A → a',
            'A, B, C are variables, a is terminal',
            'Every CFG can be converted to CNF',
            'Steps: Eliminate ε, unit productions, useless symbols',
            'Useful for: CYK parsing algorithm, proving pumping lemma'
          ]
        },
        {
          subtitle: 'Greibach Normal Form (GNF)',
          points: [
            'Productions: A → aα where a=terminal, α=string of variables',
            'Every production generates at least one terminal',
            'Every CFG can be converted to GNF',
            'Derivation length = string length',
            'Useful for converting to PDA'
          ]
        },
        {
          subtitle: 'CFG Properties',
          points: [
            'CFL closed under: Union, Concatenation, Kleene star, Reversal',
            'CFL NOT closed under: Intersection, Complement',
            'Intersection of CFL and Regular = CFL (closed)',
            'L₁ = {aⁿbⁿcⁿ} is NOT context-free (use pumping lemma)',
            'Decision: Membership (decidable), Emptiness (decidable), Finiteness (decidable)'
          ]
        }
      ]
    },
    {
      id: 'pda',
      title: 'Pushdown Automata',
      icon: <Workflow className="w-5 h-5" />,
      content: [
        {
          subtitle: 'PDA Basics',
          points: [
            'FA + Stack = PDA',
            'Tuple: (Q, Σ, Γ, δ, q₀, Z₀, F)',
            'Γ: Stack alphabet, Z₀: Initial stack symbol',
            'Transition: δ(q, a, X) = {(p, γ)} - state q, input a, pop X, push γ',
            'Two acceptance modes: Final state or Empty stack',
            'Both modes equivalent (can convert between them)'
          ]
        },
        {
          subtitle: 'DPDA vs NPDA',
          points: [
            'DPDA: Deterministic PDA (at most one choice)',
            'NPDA: Non-deterministic PDA (multiple choices)',
            'NPDA more powerful than DPDA',
            'NPDA recognizes all CFLs',
            'DPDA recognizes only deterministic CFLs',
            'Example: {wwᴿ | w ∈ Σ*} needs NPDA, {wcwᴿ} uses DPDA'
          ]
        },
        {
          subtitle: 'PDA and CFG Equivalence',
          points: [
            'Every CFG has equivalent PDA',
            'Every PDA has equivalent CFG',
            'PDA accepts ⟺ CFG generates',
            'Construction: CFG → PDA is straightforward',
            'Construction: PDA → CFG is complex but algorithmic'
          ]
        },
        {
          subtitle: 'Important Points',
          points: [
            'PDA can recognize {aⁿbⁿ | n ≥ 0} but not {aⁿbⁿcⁿ | n ≥ 0}',
            'Single stack sufficient for CFLs',
            'Two stacks = Turing Machine power',
            'PDA cannot count beyond one',
            'ε-transitions allowed in PDA'
          ]
        }
      ]
    },
    {
      id: 'turing-machine',
      title: 'Turing Machine',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'TM Basics',
          points: [
            'Infinite tape with read/write head',
            'Can move left, right, or stay',
            'Tuple: (Q, Σ, Γ, δ, q₀, B, F)',
            'δ: Q × Γ → Q × Γ × {L, R}',
            'B: Blank symbol, Γ: Tape alphabet (Σ ⊂ Γ)',
            'Most powerful computational model'
          ]
        },
        {
          subtitle: 'Church-Turing Thesis',
          points: [
            'Any algorithm can be implemented on TM',
            'TM defines what is computable',
            'Anything computable by any computer is computable by TM',
            'Not a theorem (cannot be proved)',
            'Universally accepted principle',
            'Basis of computability theory'
          ]
        },
        {
          subtitle: 'TM Variants (All Equivalent)',
          points: [
            'Multi-tape TM: Multiple tapes, same power',
            'Multi-head TM: Multiple heads, same power',
            'Non-deterministic TM: Multiple choices, same power',
            'Two-way infinite tape: Same as one-way',
            'All variants can simulate each other',
            'May differ in time complexity but not power'
          ]
        },
        {
          subtitle: 'Decidability',
          points: [
            'Decidable: TM halts on all inputs (always answers yes/no)',
            'Recognizable (RE): TM halts and accepts for strings in L',
            'Recursive = Decidable languages',
            'Recursively Enumerable (RE) = Turing-recognizable',
            'Decidable ⊂ RE',
            'Example decidable: DFA acceptance, CFG emptiness'
          ]
        },
        {
          subtitle: 'Undecidable Problems',
          points: [
            'Halting Problem: Does TM halt on given input? (Undecidable)',
            'TM acceptance problem: Undecidable',
            'Does CFG generate all strings? Undecidable',
            'Is CFG ambiguous? Undecidable',
            'Rice\'s Theorem: All non-trivial properties of RE languages undecidable',
            'Proving undecidability: Reduction from known undecidable problem'
          ]
        }
      ]
    },
    {
      id: 'chomsky-hierarchy',
      title: 'Chomsky Hierarchy',
      icon: <BookOpen className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Type 3: Regular Languages',
          points: [
            'Grammar: A → aB or A → a (right-linear)',
            'Recognized by: DFA, NFA',
            'Example: (a+b)*',
            'Most restrictive',
            'All properties decidable'
          ]
        },
        {
          subtitle: 'Type 2: Context-Free Languages',
          points: [
            'Grammar: A → α (left side = single variable)',
            'Recognized by: PDA',
            'Example: {aⁿbⁿ | n ≥ 0}',
            'Used in: Programming language syntax',
            'Some properties decidable'
          ]
        },
        {
          subtitle: 'Type 1: Context-Sensitive Languages',
          points: [
            'Grammar: αAβ → αγβ where |γ| ≥ |A|',
            'Non-contracting: Right side length ≥ left side',
            'Recognized by: Linear Bounded Automaton (LBA)',
            'Example: {aⁿbⁿcⁿ | n ≥ 0}',
            'Membership decidable but expensive'
          ]
        },
        {
          subtitle: 'Type 0: Recursively Enumerable',
          points: [
            'Grammar: α → β (no restrictions)',
            'Recognized by: Turing Machine',
            'Most powerful',
            'Includes all computable languages',
            'Many properties undecidable'
          ]
        },
        {
          subtitle: 'Hierarchy Relations',
          points: [
            'Regular ⊂ CFL ⊂ CSL ⊂ RE ⊂ All Languages',
            'Each level properly contains previous',
            'Closure properties decrease as we go up',
            'Decidability decreases as we go up',
            'Power increases as we go up'
          ]
        }
      ]
    },
    {
      id: 'lexical-analysis',
      title: 'Lexical Analysis',
      icon: <FileCode className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Lexical Analyzer (Scanner)',
          points: [
            'First phase of compiler',
            'Reads source code character by character',
            'Groups characters into tokens (lexemes)',
            'Removes whitespace and comments',
            'Detects lexical errors',
            'Symbol table operations'
          ]
        },
        {
          subtitle: 'Tokens',
          points: [
            'Token: Category (keyword, identifier, operator, literal)',
            'Lexeme: Actual string matching token',
            'Pattern: Rules describing lexemes',
            'Example: Token=identifier, Lexeme="count", Pattern=[a-zA-Z][a-zA-Z0-9]*',
            'Types: Keywords, Identifiers, Operators, Constants, Special symbols'
          ]
        },
        {
          subtitle: 'Implementation',
          points: [
            'Regular expressions describe tokens',
            'Convert RE to NFA',
            'Convert NFA to DFA',
            'Minimize DFA',
            'Longest match rule: Choose longest lexeme',
            'Priority rule: If tie, choose listed first'
          ]
        },
        {
          subtitle: 'Important Concepts',
          points: [
            'Lookahead: Peek at next character without consuming',
            'Buffer: Two-buffer scheme for efficiency',
            'Error recovery: Panic mode, delete/insert character',
            'Symbol table: Store identifier information',
            'Tools: Lex, Flex generate lexical analyzers'
          ]
        }
      ]
    },
    {
      id: 'syntax-analysis',
      title: 'Syntax Analysis (Parsing)',
      icon: <GitBranch className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Parser Basics',
          points: [
            'Takes tokens from lexer',
            'Builds parse tree or syntax tree',
            'Checks if input follows grammar rules',
            'Reports syntax errors',
            'Two types: Top-down and Bottom-up'
          ]
        },
        {
          subtitle: 'Top-Down Parsing',
          points: [
            'Start from start symbol, derive input string',
            'Leftmost derivation',
            'Types: Recursive descent, Predictive parsing',
            'LL(k): Left-to-right scan, Leftmost derivation, k lookahead',
            'Cannot handle left recursion',
            'Cannot handle ambiguous grammars'
          ]
        },
        {
          subtitle: 'Recursive Descent Parsing',
          points: [
            'Set of recursive procedures for each non-terminal',
            'Simple to implement',
            'May require backtracking',
            'Inefficient if backtracking needed',
            'Works well for simple grammars'
          ]
        },
        {
          subtitle: 'LL(1) Parsing',
          points: [
            'No backtracking needed',
            'Uses parsing table',
            'First set: First terminals that can start string',
            'Follow set: Terminals that can come after non-terminal',
            'Grammar must be LL(1): No left recursion, no ambiguity, no common prefixes',
            'Left factoring: Remove common prefixes'
          ]
        },
        {
          subtitle: 'Bottom-Up Parsing',
          points: [
            'Start from input, reduce to start symbol',
            'Rightmost derivation in reverse',
            'More powerful than top-down',
            'Types: LR(0), SLR, LALR, CLR',
            'LR(k): Left-to-right, Rightmost derivation, k lookahead',
            'Can handle more grammars than LL'
          ]
        },
        {
          subtitle: 'LR Parsing Variants',
          points: [
            'LR(0): Simplest, smallest class of grammars',
            'SLR: Simple LR, uses follow sets',
            'LALR: Look-Ahead LR, most commonly used (yacc, bison)',
            'CLR (Canonical LR): Most powerful, largest tables',
            'Power: LR(0) ⊂ SLR ⊂ LALR ⊂ CLR ⊂ All CFG',
            'All handle more grammars than LL(1)'
          ]
        }
      ]
    },
    {
      id: 'syntax-directed',
      title: 'Syntax Directed Translation',
      icon: <Workflow className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Attributes',
          points: [
            'Synthesized Attribute: Computed from children\'s attributes',
            'Inherited Attribute: Computed from parent/siblings\' attributes',
            'S-attributed: Only synthesized attributes (bottom-up)',
            'L-attributed: Limited inherited attributes (can be evaluated in one pass)',
            'Evaluation order matters'
          ]
        },
        {
          subtitle: 'Semantic Actions',
          points: [
            'Code attached to grammar productions',
            'Execute during parsing',
            'Build symbol table',
            'Type checking',
            'Generate intermediate code',
            'Can be embedded in productions'
          ]
        },
        {
          subtitle: 'Translation Schemes',
          points: [
            'Grammar + semantic actions',
            'Actions shown in braces {}',
            'Position indicates when action executes',
            'S-attributed: Actions at end of production',
            'L-attributed: Actions can be anywhere (with restrictions)'
          ]
        }
      ]
    },
    {
      id: 'intermediate-code',
      title: 'Intermediate Code Generation',
      icon: <Code2 className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Three-Address Code',
          points: [
            'At most three addresses per instruction',
            'Format: x = y op z',
            'Types: Assignment, Binary/Unary ops, Copy, Jumps, Procedure calls',
            'Example: t1 = a + b; t2 = t1 * c',
            'Easy to optimize and translate',
            'Implementation: Quadruples, Triples, Indirect triples'
          ]
        },
        {
          subtitle: 'Representations',
          points: [
            'Quadruples: (op, arg1, arg2, result)',
            'Triples: (op, arg1, arg2) - result position implicit',
            'Indirect Triples: Array of pointers to triples',
            'Syntax trees: Tree representation',
            'DAG: Directed Acyclic Graph (identifies common subexpressions)'
          ]
        },
        {
          subtitle: 'Translations',
          points: [
            'Expressions: Use postorder traversal',
            'Boolean expressions: Short-circuit evaluation',
            'Control flow: If-then-else, while, for',
            'Arrays: Address calculation',
            'Procedure calls: Parameter passing'
          ]
        }
      ]
    },
    {
      id: 'code-optimization',
      title: 'Code Optimization',
      icon: <Zap className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Basic Blocks',
          points: [
            'Sequence of consecutive statements',
            'Single entry point (first statement)',
            'Single exit point (last statement)',
            'No branches in or out except at entry/exit',
            'Leaders: First statement, target of jump, statement after jump',
            'Control Flow Graph: Graph of basic blocks'
          ]
        },
        {
          subtitle: 'Local Optimizations (Within Basic Block)',
          points: [
            'Common Subexpression Elimination: Reuse computed values',
            'Copy Propagation: Replace copied variable with original',
            'Dead Code Elimination: Remove unreachable/unused code',
            'Constant Folding: Evaluate constants at compile time',
            'Constant Propagation: Replace variables with constant values',
            'Algebraic Simplification: x + 0 = x, x * 1 = x, x * 0 = 0'
          ]
        },
        {
          subtitle: 'Global Optimizations (Across Basic Blocks)',
          points: [
            'Common subexpression elimination across blocks',
            'Code motion: Move loop-invariant code outside loop',
            'Induction variable elimination: Optimize loop counters',
            'Dead code elimination across program',
            'Requires data flow analysis',
            'More complex but more effective'
          ]
        },
        {
          subtitle: 'Loop Optimizations',
          points: [
            'Code Motion: Move invariant out of loop',
            'Induction Variables: x = x + 1 every iteration',
            'Strength Reduction: Replace expensive ops with cheaper',
            'Loop Unrolling: Replicate loop body',
            'Loop Fusion: Combine multiple loops',
            'Loop Interchange: Change nesting order'
          ]
        }
      ]
    },
    {
      id: 'runtime-environment',
      title: 'Runtime Environment',
      icon: <Braces className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Storage Organization',
          points: [
            'Static: Fixed addresses, entire program execution',
            'Stack: LIFO, activation records, local variables',
            'Heap: Dynamic allocation/deallocation, flexible size',
            'Code: Program instructions, read-only',
            'Static data: Global variables, constants'
          ]
        },
        {
          subtitle: 'Activation Record (Stack Frame)',
          points: [
            'Created when function called',
            'Contains: Return address, Parameters, Local variables, Saved registers',
            'Control link: Pointer to caller\'s activation record',
            'Access link: For nested functions (static scoping)',
            'Frame pointer: Points to fixed location in record',
            'Stack pointer: Points to top of stack'
          ]
        },
        {
          subtitle: 'Parameter Passing',
          points: [
            'Call by Value: Copy value to callee',
            'Call by Reference: Pass address of variable',
            'Call by Copy-Restore: Copy in, copy out',
            'Call by Name: Substitute text (macro expansion)',
            'Call by Need: Lazy evaluation'
          ]
        },
        {
          subtitle: 'Scope Rules',
          points: [
            'Static Scoping: Determined at compile time by structure',
            'Dynamic Scoping: Determined at runtime by call sequence',
            'Most languages use static scoping',
            'Access link: For accessing non-local variables in static scope',
            'Display: Array of frame pointers for each nesting level'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-4 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">TOC & Compiler Design</h1>
              <p className="text-gray-600 mt-1">Complete Theory Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-amber-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-amber-600 to-orange-600 h-3 rounded-full transition-all duration-300"
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
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-amber-50 hover:to-orange-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-amber-600 to-orange-600 p-3 rounded-lg text-white">
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
                      <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-amber-600 to-orange-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-amber-600 mt-1.5 flex-shrink-0">•</span>
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
        <div className="mt-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">📚 Pro Tip</p>
          <p className="mt-2 text-amber-100">Focus on Chomsky Hierarchy, Closure Properties, and Parser types - frequently asked in GATE!</p>
        </div>
      </div>
    </div>
  );
};

export default TOCCDNotes;