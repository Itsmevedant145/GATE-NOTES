import React, { useState } from 'react';
import { Cpu, Zap, Binary, ChevronDown, ChevronRight } from 'lucide-react';

const GATEDigitalLogicNotes = () => {
  const [selectedSubject, setSelectedSubject] = useState('numberSystems');
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const subjects = {
  numberSystems: {
    name: 'Number Systems',
    icon: <Binary className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    topics: {
      basics: {
        title: 'Number Systems & Conversions',
        content: {
          systems: [
            'Binary (Base-2): 0, 1',
            'Octal (Base-8): 0-7',
            'Decimal (Base-10): 0-9',
            'Hexadecimal (Base-16): 0-9, A-F'
          ],
          
        
  conversions: [
    'Decimal to Binary: Divide by 2 repeatedly, collect remainders bottom-to-top',
    'Decimal to Octal: Divide by 8 repeatedly, collect remainders bottom-to-top',
    'Decimal to Hexadecimal: Divide by 16 repeatedly, collect remainders bottom-to-top',
    'Binary to Octal: Group bits in 3s from right, convert each group',
    'Binary to Hexadecimal: Group bits in 4s from right, convert each group',
    'Octal to Binary: Convert each digit to 3-bit binary',
    'Hexadecimal to Binary: Convert each digit to 4-bit binary'
  ],
  signed: [
    'Sign-Magnitude: MSB=sign, rest=magnitude',
    "1's Complement: Invert all bits. Two zeros exist",
    "2's Complement: Invert all bits + add 1. Most commonly used",
    "2's Complement advantages: Single zero, easy arithmetic",
    "Subtraction using 2\'s complement: A-B = A + 2\'s complement of B"
  ],
  codes: [
    'BCD: 4 bits per decimal digit. Example: (25)₁₀ = (0010 0101)BCD',
    'Gray Code: Adjacent numbers differ by 1 bit only',
    'Binary to Gray: G₀ = B₀, Gᵢ = Bᵢ XOR Bᵢ₋₁',
    'Gray to Binary: B₀ = G₀, Bᵢ = Bᵢ₋₁ XOR Gᵢ',
    'Parity: Even/Odd. Detects single-bit errors',
    'Hamming Code: 2^r >= m + r + 1. Corrects single-bit errors'
  ],
  examples: [
    'Example: (13)₁₀ = (1101)₂ = (15)₈ = (D)₁₆',
    "2's complement of 5 (0101) = 1011 (-5)"
  ],
  tips: [
    'Quick Binary → Decimal: Sum powers of 2 for bits set to 1',
    'Quick Octal → Decimal: Sum powers of 8 for each digit',
    'Quick Hex → Decimal: Sum powers of 16 for each digit',
    'Negative numbers in 2\'s complement: MSB=1, invert +1 to get magnitude'
  ]
}

        }
      }
    },
    boolean: {
      name: 'Boolean Algebra',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      topics: {
        laws: {
          title: 'Boolean Laws & Theorems',
          content: {
            basic: [
              'Identity: A+0=A, A·1=A',
              'Null: A+1=1, A·0=0',
              'Idempotent: A+A=A, A·A=A',
              "Complement: A+A'=1, A·A'=0",
              "Involution: (A')'=A",
              'Commutative: A+B=B+A, A·B=B·A',
              'Associative: (A+B)+C=A+(B+C)',
              'Distributive: A·(B+C)=A·B+A·C'
            ],
            theorems: [
              'Absorption: A+A·B=A, A·(A+B)=A',
              "A+A'·B=A+B, A·(A'+B)=A·B",
              "DeMorgan's: (A+B)'=A'·B', (A·B)'=A'+B'",
              "Consensus: A·B+A'·C+B·C=A·B+A'·C",
              'Duality: Swap + and ·, swap 0 and 1'
            ],
            forms: [
              "Minterm: Product with all variables (m₃=A'BC)",
              "Maxterm: Sum with all variables (M₅=A+B'+C)",
              'SOP: Sum of minterms F=Σm(1,3,5)',
              'POS: Product of maxterms F=ΠM(0,2,4)',
              'K-map: Graphical minimization, group powers of 2',
              "Don't Care (X): Use to minimize, shown as d"
            ],
            example: [
              "Simplify: AB+A'B=B(A+A')=B·1=B"
            ]
          }
        },
        gates: {
          title: 'Logic Gates',
          content: {
            basic: [
              'AND: Y=A·B (1 only if all 1)',
              'OR: Y=A+B (1 if any 1)',
              "NOT: Y=A' (invert)",
              "NAND: Y=(A·B)' (Universal gate)",
              "NOR: Y=(A+B)' (Universal gate)",
              "XOR: Y=A⊕B=A'B+AB' (1 if differ)",
              "XNOR: Y=AB+A'B' (1 if same)"
            ],
            universal: [
              'NAND Universal:',
              "NOT: A'=(A·A)'",
              "AND: A·B=[(A·B)']'",
              "OR: A+B=(A'·B')'",
              "XOR Properties: A⊕0=A, A⊕1=A', A⊕A=0, A⊕A'=1"
            ]
          }
        }
      }
    },
    combinational: {
      name: 'Combinational Circuits',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      topics: {
        adders: {
          title: 'Adders & Subtractors',
          content: {
            halfAdder: [
              'Half Adder: Adds 2 bits',
              'Inputs: A, B',
              'Sum: S = A⊕B',
              'Carry: C = A·B',
              'Gates: 1 XOR + 1 AND',
              'Cannot add carry from previous'
            ],
            fullAdder: [
              'Full Adder: Adds 3 bits (A, B, Cin)',
              'Sum: S = A⊕B⊕Cin',
              'Carry: Cout = AB + Cin(A⊕B) = AB + BCin + ACin',
              'Implementation: 2 Half Adders + 1 OR',
              'Ripple Carry: n FAs cascaded, delay=n×tp',
              'Carry Lookahead: Faster, parallel carry generation',
              'Generate: Gi=AiBi, Propagate: Pi=Ai⊕Bi',
              'Ci+1=Gi+PiCi'
            ],
            subtractor: [
              'Half Subtractor: A-B',
              "Diff: D=A⊕B, Borrow: Bout=A'B",
              'Full Subtractor: A-B-Bin',
              "D=A⊕B⊕Bin, Bout=A'B+Bin(A⊕B)'",
              "Using Adder: A-B = A + 2's complement(B)",
              'Invert B, set Cin=1'
            ],
            example: [
              'FA: A=1,B=1,Cin=1 → S=1, Cout=1 (binary 11)'
            ]
          }
        },
        mux: {
          title: 'Multiplexers & Demultiplexers',
          content: {
            multiplexer: [
              'Multiplexer: 2^n inputs, n selects, 1 output',
              "2:1 MUX: Y=S'I₀+SI₁",
              "4:1 MUX: Y=S₁'S₀'I₀+S₁'S₀I₁+S₁S₀'I₂+S₁S₀I₃",
              '8:1 MUX: 3 select lines',
              'Function Implementation: n-var function using 2^(n-1):1 MUX',
              'Use (n-1) vars as select, last var as inputs',
              'Applications: Data routing, parallel-to-serial'
            ],
            demux: [
              'Demultiplexer: 1 input, n selects, 2^n outputs',
              'Routes input to selected output',
              "1:4 DEMUX: Y₀=S₁'S₀'I, Y₁=S₁'S₀I, Y₂=S₁S₀'I, Y₃=S₁S₀I",
              'Inverse of MUX',
              'With enable: acts as decoder'
            ],
            example: [
              '4:1 MUX, S₁S₀=10 → Y=I₂'
            ]
          }
        },
        others: {
          title: 'Encoders & Decoders',
          content: {
            encoder: [
              'Encoder: 2^n inputs → n outputs',
              'Converts input line to binary',
              '4:2 Encoder: Y₀=I₁+I₃, Y₁=I₂+I₃',
              'Priority Encoder: Encodes highest priority active input'
            ],
            decoder: [
              'Decoder: n inputs → 2^n outputs',
              'Activates one output per input code',
              "2:4 Decoder: Y₀=A₁'A₀', Y₁=A₁'A₀, Y₂=A₁A₀', Y₃=A₁A₀",
              'Each output = minterm',
              'Used in memory address decoding'
            ],
            comparator: [
              'Comparator: Compares two n-bit numbers',
              "1-bit: A>B=AB', A=B=A⊙B, A<B=A'B",
              'n-bit: Compare MSB first'
            ]
          }
        }
      }
    },
    sequential: {
      name: 'Sequential Circuits',
      icon: <Cpu className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      topics: {
        flipflops: {
          title: 'Flip-Flops',
          content: {
            types: [
              'SR FF: S=1,R=0→Q=1; S=0,R=1→Q=0; S=R=0→Hold; S=R=1→Invalid',
              'D FF: Qn+1=D (data follows input)',
              'JK FF: J=K=0→Hold; J=1,K=0→Set; J=0,K=1→Reset; J=K=1→Toggle',
              "T FF: T=0→Hold; T=1→Toggle (Qn+1=Qn')",
              'Edge-triggered: Changes on clock edge (0→1 or 1→0)',
              'Level-triggered (Latch): Follows input when enabled'
            ],
            timing: [
              'Setup Time (ts): Data stable before clock',
              'Hold Time (th): Data stable after clock',
              'Propagation Delay (tpcq): Clock to output change',
              'fmax = 1/(tpcq + tp(logic) + ts)'
            ]
          }
        },
        counters: {
          title: 'Counters & Registers',
          content: {
            counters: [
              'Counter: Sequential circuit counting through states',
              'MOD-n: n states (n FFs → max 2^n states)',
              'Asynchronous (Ripple): Output clocks next FF. Simple but slow',
              'Synchronous: All FFs clocked together. Faster',
              'Up Counter: 0→1→2→...→n-1→0',
              'Down Counter: n-1→...→2→1→0',
              'Decade Counter: MOD-10 (0-9)'
            ],
            registers: [
              'Register: Group of FFs storing n-bit data',
              'SISO: Serial In Serial Out (n cycles)',
              'PIPO: Parallel In Parallel Out (1 cycle)',
              'Shift Register: Shifts data left/right'
            ]
          }
        }
      }
    }
  };

  const currentSubject = subjects[selectedSubject];

  const renderContent = (content) => {
    return (
      <div className="space-y-6">
        {Object.entries(content).map(([sectionKey, items]) => (
          <div key={sectionKey} className="bg-slate-900 rounded-lg p-5 border-l-4 border-purple-400">
            <h4 className="text-lg font-bold text-purple-300 mb-3 capitalize">
              {sectionKey.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <ul className="space-y-2">
              {Array.isArray(items) && items.map((item, idx) => (
                <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                  <span className="font-semibold text-blue-400">
                    {item.split(':')[0]}:
                  </span>
                  {item.split(':').slice(1).join(':')}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">GATE Digital Logic</h1>
          <p className="text-gray-300 text-lg">Concise Notes - Key Topics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {Object.entries(subjects).map(([key, subject]) => (
            <button
              key={key}
              onClick={() => setSelectedSubject(key)}
              className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                selectedSubject === key
                  ? `bg-gradient-to-r ${subject.color} shadow-2xl`
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-white">{subject.icon}</div>
                <h2 className="text-sm font-semibold text-white text-center">{subject.name}</h2>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8">
          <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentSubject.color} bg-clip-text text-transparent mb-6`}>
            {currentSubject.name}
          </h2>

          <div className="space-y-4">
            {Object.entries(currentSubject.topics).map(([key, topic]) => (
              <div key={key} className="bg-slate-700 rounded-xl overflow-hidden border border-slate-600">
                <button
                  onClick={() => toggleTopic(key)}
                  className="w-full p-4 flex items-center justify-between hover:bg-slate-600 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white">{topic.title}</h3>
                  {expandedTopics[key] ? (
                    <ChevronDown className="w-6 h-6 text-white flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />
                  )}
                </button>

                {expandedTopics[key] && (
                  <div className="p-6 bg-slate-750">
                    {renderContent(topic.content)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p className="text-sm">💾 Focused on key topics: Number Systems, Boolean Algebra, Adders/Subtractors, MUX/DEMUX</p>
        </div>
      </div>
    </div>
  );
};

export default GATEDigitalLogicNotes;