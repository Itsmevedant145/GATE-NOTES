import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';

const DiscreteMathNotes = () => {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const topics = [
    {
      id: 1,
      name: "Set Theory",
      category: "Mathematical Logic",
      priority: "high",
      notes: [
        "Set operations: Union (∪), Intersection (∩), Difference (-), Complement (A')",
        "De Morgan's Laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'",
        "Power set P(A) has 2^n elements if |A| = n",
        "Cartesian product: |A × B| = |A| × |B|"
      ],
      formulas: [
        "|A ∪ B| = |A| + |B| - |A ∩ B| (Inclusion-Exclusion Principle)",
        "|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |B ∩ C| - |A ∩ C| + |A ∩ B ∩ C|",
        "Number of subsets = 2^n, Number of proper subsets = 2^n - 1"
      ],
      tips: "Remember: Empty set ∅ is subset of every set. A set is subset of itself."
    },
    {
      id: 2,
      name: "Relations",
      category: "Mathematical Logic",
      priority: "high",
      notes: [
        "Reflexive: (a,a) ∈ R for all a ∈ A",
        "Symmetric: If (a,b) ∈ R then (b,a) ∈ R",
        "Transitive: If (a,b) ∈ R and (b,c) ∈ R then (a,c) ∈ R",
        "Anti-symmetric: If (a,b) ∈ R and (b,a) ∈ R then a = b",
        "Equivalence Relation: Reflexive + Symmetric + Transitive",
        "Partial Order: Reflexive + Anti-symmetric + Transitive"
      ],
      formulas: [
        "Number of relations on set A with n elements = 2^(n²)",
        "Number of reflexive relations = 2^(n²-n) = 2^(n(n-1))",
        "Number of symmetric relations = 2^(n(n+1)/2)",
        "Number of equivalence relations = Bell number B_n"
      ],
      tips: "RAST: Reflexive, Anti-symmetric, Symmetric, Transitive - remember which combinations form special relations."
    },
    {
      id: 3,
      name: "Functions",
      category: "Mathematical Logic",
      priority: "high",
      notes: [
        "One-to-One (Injective): Different inputs → Different outputs",
        "Onto (Surjective): Every element in codomain has pre-image",
        "Bijective: Both One-to-One and Onto",
        "Inverse exists only for bijective functions",
        "Composition: (g ∘ f)(x) = g(f(x))"
      ],
      formulas: [
        "Total functions from A to B: |B|^|A|",
        "Injective functions (|A|≤|B|): |B|!/(|B|-|A|)! = P(|B|,|A|)",
        "Surjective functions: Use Stirling numbers or inclusion-exclusion",
        "Bijective functions (|A|=|B|): |A|! = n!"
      ],
      tips: "Injective = 1-1, Surjective = Onto. For inverse to exist, function must be bijective."
    },
    {
      id: 4,
      name: "Propositional Logic",
      category: "Mathematical Logic",
      priority: "high",
      notes: [
        "Tautology: Always TRUE (e.g., p ∨ ¬p)",
        "Contradiction: Always FALSE (e.g., p ∧ ¬p)",
        "Contingency: Sometimes TRUE, sometimes FALSE",
        "Logical equivalences: p → q ≡ ¬p ∨ q",
        "Contrapositive: p → q ≡ ¬q → ¬p",
        "Converse: q → p (NOT equivalent to p → q)",
        "Inverse: ¬p → ¬q (NOT equivalent to p → q)"
      ],
      formulas: [
        "De Morgan's: ¬(p ∧ q) ≡ ¬p ∨ ¬q and ¬(p ∨ q) ≡ ¬p ∧ ¬q",
        "Implication: p → q ≡ ¬p ∨ q",
        "Biconditional: p ↔ q ≡ (p → q) ∧ (q → p)",
        "Distributive: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)"
      ],
      tips: "p → q is FALSE only when p is TRUE and q is FALSE. Contrapositive is always equivalent to original."
    },
    {
      id: 5,
      name: "Predicate Logic",
      category: "Mathematical Logic",
      priority: "medium",
      notes: [
        "Universal Quantifier (∀): 'For all'",
        "Existential Quantifier (∃): 'There exists'",
        "Negation rules: ¬(∀x P(x)) ≡ ∃x ¬P(x)",
        "¬(∃x P(x)) ≡ ∀x ¬P(x)",
        "Order of quantifiers matters: ∀x ∃y ≠ ∃y ∀x"
      ],
      formulas: [
        "¬(∀x P(x)) ≡ ∃x (¬P(x))",
        "¬(∃x P(x)) ≡ ∀x (¬P(x))",
        "∀x (P(x) ∧ Q(x)) ≡ (∀x P(x)) ∧ (∀x Q(x))",
        "∃x (P(x) ∨ Q(x)) ≡ (∃x P(x)) ∨ (∃x Q(x))"
      ],
      tips: "Negation flips quantifiers: ∀ becomes ∃ and vice versa."
    },
    {
      id: 6,
      name: "Combinatorics - Basic Counting",
      category: "Combinatorics",
      priority: "high",
      notes: [
        "Addition Principle: If tasks are mutually exclusive, add",
        "Multiplication Principle: If tasks are sequential, multiply",
        "Permutation: Arrangement where order matters",
        "Combination: Selection where order doesn't matter",
        "P(n,r) = n!/(n-r)!, C(n,r) = n!/[r!(n-r)!]"
      ],
      formulas: [
        "P(n,r) = n!/(n-r)! (Permutations)",
        "C(n,r) = n!/[r!(n-r)!] = nCr (Combinations)",
        "C(n,r) = C(n,n-r) (Symmetry property)",
        "C(n,r) = C(n-1,r-1) + C(n-1,r) (Pascal's Identity)",
        "Circular permutations of n objects = (n-1)!"
      ],
      tips: "Use P for 'Position matters', C for 'Choice/Collection'. Remember: nCr = nC(n-r)"
    },
    {
      id: 7,
      name: "Pigeonhole Principle",
      category: "Combinatorics",
      priority: "medium",
      notes: [
        "If n+1 pigeons in n holes, at least one hole has ≥2 pigeons",
        "Generalized: If n pigeons in k holes, at least one hole has ≥⌈n/k⌉ pigeons",
        "Used to prove existence without construction",
        "Common in proving minimum conditions"
      ],
      formulas: [
        "Basic: n items in m containers, m < n → at least ⌈n/m⌉ in one container",
        "Strong form: At least one container has ≥⌈n/m⌉ items"
      ],
      tips: "Look for 'at least' statements in problems. Identify pigeons and pigeonholes clearly."
    },
    {
      id: 8,
      name: "Binomial Theorem",
      category: "Combinatorics",
      priority: "high",
      notes: [
        "(x+y)^n = Σ C(n,r) × x^(n-r) × y^r for r=0 to n",
        "Sum of binomial coefficients: 2^n = Σ C(n,r)",
        "Alternating sum: 0 = Σ (-1)^r × C(n,r)",
        "Middle term has maximum coefficient"
      ],
      formulas: [
        "(x+y)^n = Σ(r=0 to n) C(n,r) × x^(n-r) × y^r",
        "Σ C(n,r) = 2^n (put x=y=1)",
        "Σ (-1)^r × C(n,r) = 0 (put x=1, y=-1)",
        "Σ r × C(n,r) = n × 2^(n-1)"
      ],
      tips: "C(n,0) + C(n,1) + ... + C(n,n) = 2^n. Use substitution x=y=1 for useful identities."
    },
    {
      id: 9,
      name: "Generating Functions",
      category: "Combinatorics",
      priority: "medium",
      notes: [
        "Encode sequence as coefficients of power series",
        "G(x) = a₀ + a₁x + a₂x² + ...",
        "Useful for solving recurrence relations",
        "Product of generating functions → convolution of sequences"
      ],
      formulas: [
        "1/(1-x) = 1 + x + x² + x³ + ... (geometric series)",
        "e^x = Σ x^n/n! (exponential generating function)",
        "(1+x)^n = Σ C(n,r) × x^r"
      ],
      tips: "Ordinary GF: G(x) = Σ aₙxⁿ. Exponential GF: G(x) = Σ aₙxⁿ/n!"
    },
    {
      id: 10,
      name: "Recurrence Relations",
      category: "Combinatorics",
      priority: "high",
      notes: [
        "Linear Homogeneous: aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ...",
        "Solve using characteristic equation",
        "Non-homogeneous: Add particular solution to homogeneous solution",
        "Famous: Fibonacci (Fₙ = Fₙ₋₁ + Fₙ₋₂), Tower of Hanoi (Tₙ = 2Tₙ₋₁ + 1)"
      ],
      formulas: [
        "For aₙ = c₁aₙ₋₁ + c₂aₙ₋₂, solve r² - c₁r - c₂ = 0",
        "If roots r₁, r₂ distinct: aₙ = A×r₁ⁿ + B×r₂ⁿ",
        "If roots equal (r): aₙ = (A + Bn)×rⁿ",
        "Fibonacci closed form: Fₙ = [φⁿ - ψⁿ]/√5 where φ = (1+√5)/2"
      ],
      tips: "Master theorem for divide-and-conquer: T(n) = aT(n/b) + f(n). Compare f(n) with n^(log_b(a))."
    },
    {
      id: 11,
      name: "Graph Theory - Basics",
      category: "Graph Theory",
      priority: "high",
      notes: [
        "Graph G = (V, E) where V = vertices, E = edges",
        "Simple graph: No loops, no multiple edges",
        "Degree of vertex = number of edges incident to it",
        "Handshaking Lemma: Σ deg(v) = 2|E|",
        "Complete graph Kₙ: Every pair connected, |E| = n(n-1)/2",
        "Bipartite: Vertices in 2 sets, edges only between sets"
      ],
      formulas: [
        "Handshaking Lemma: Σ deg(v) = 2|E|",
        "Complete graph Kₙ: |E| = C(n,2) = n(n-1)/2",
        "Complete bipartite K(m,n): |E| = m×n",
        "Tree with n vertices: |E| = n-1",
        "Number of odd-degree vertices is always even"
      ],
      tips: "In any graph, number of vertices with odd degree must be even (from handshaking lemma)."
    },
    {
      id: 12,
      name: "Graph Connectivity",
      category: "Graph Theory",
      priority: "high",
      notes: [
        "Connected: Path exists between every pair of vertices",
        "Strongly connected (directed): Path in both directions",
        "Weakly connected: Underlying undirected graph is connected",
        "Cut vertex: Removal increases connected components",
        "Bridge: Edge whose removal increases connected components",
        "K-connected: Remains connected after removing k-1 vertices"
      ],
      formulas: [
        "For connected graph: |E| ≥ |V| - 1",
        "Maximum edges in disconnected graph: C(n-1,2) + 1 = (n-1)(n-2)/2 + 1",
        "Minimum edges for connected graph with n vertices: n-1"
      ],
      tips: "Tree ↔ Connected + Acyclic + |E| = |V|-1. Any two conditions imply the third."
    },
    {
      id: 13,
      name: "Trees",
      category: "Graph Theory",
      priority: "high",
      notes: [
        "Tree: Connected acyclic graph",
        "Properties: |E| = |V| - 1, unique path between any two vertices",
        "Binary tree: Each node has ≤2 children",
        "Full binary tree: Each node has 0 or 2 children",
        "Complete binary tree: All levels filled except possibly last",
        "Height h, max nodes = 2^(h+1) - 1"
      ],
      formulas: [
        "Tree: |E| = |V| - 1",
        "Binary tree with n nodes: height ≥ ⌈log₂(n+1)⌉ - 1",
        "Complete binary tree: height = ⌊log₂(n)⌋",
        "Number of spanning trees in Kₙ = n^(n-2) (Cayley's formula)",
        "Full binary tree: |leaves| = |internal| + 1"
      ],
      tips: "Tree ≡ Connected + |E|=|V|-1 ≡ Acyclic + |E|=|V|-1 ≡ Connected + Acyclic"
    },
    {
      id: 14,
      name: "Eulerian & Hamiltonian Paths",
      category: "Graph Theory",
      priority: "high",
      notes: [
        "Eulerian Path: Visits every EDGE exactly once",
        "Eulerian Circuit: Eulerian path that starts and ends at same vertex",
        "Condition: 0 or 2 vertices of odd degree → Eulerian path exists",
        "All vertices even degree → Eulerian circuit exists",
        "Hamiltonian Path: Visits every VERTEX exactly once",
        "Hamiltonian Circuit: Hamiltonian path forming a cycle",
        "No simple condition for Hamiltonian (NP-complete)"
      ],
      formulas: [
        "Eulerian circuit: All vertices have even degree",
        "Eulerian path (not circuit): Exactly 2 vertices have odd degree",
        "Dirac's theorem (Hamiltonian): If deg(v) ≥ n/2 for all v, then Hamiltonian circuit exists",
        "Ore's theorem: If deg(u) + deg(v) ≥ n for all non-adjacent u,v, then Hamiltonian"
      ],
      tips: "Eulerian = EDGES, Hamiltonian = VERTICES. Eulerian has simple test, Hamiltonian is hard."
    },
    {
      id: 15,
      name: "Graph Coloring",
      category: "Graph Theory",
      priority: "medium",
      notes: [
        "Chromatic number χ(G): Minimum colors needed for vertex coloring",
        "No two adjacent vertices same color",
        "χ(Kₙ) = n, χ(cycle Cₙ) = 2 if n even, 3 if n odd",
        "χ(bipartite) = 2",
        "Planar graphs: χ(G) ≤ 4 (Four Color Theorem)",
        "Greedy coloring: O(n) but not always optimal"
      ],
      formulas: [
        "χ(G) ≤ Δ(G) + 1 where Δ = maximum degree (Brook's theorem)",
        "χ(Kₙ) = n",
        "χ(Tree) = 2 (for n≥2)",
        "χ(Cycle Cₙ) = 2 if n even, 3 if n odd",
        "χ(Bipartite graph) = 2"
      ],
      tips: "Bipartite ↔ 2-colorable ↔ No odd cycles. Planar graphs need at most 4 colors."
    },
    {
      id: 16,
      name: "Planar Graphs",
      category: "Graph Theory",
      priority: "medium",
      notes: [
        "Planar: Can be drawn without edge crossings",
        "Euler's formula: V - E + F = 2 (connected planar graph)",
        "K₅ and K₃,₃ are NOT planar",
        "Kuratowski's theorem: G is planar ↔ no K₅ or K₃,₃ subdivision",
        "For simple planar: E ≤ 3V - 6",
        "If no triangles: E ≤ 2V - 4"
      ],
      formulas: [
        "Euler's formula: V - E + F = 2 (connected planar)",
        "Simple planar: E ≤ 3V - 6 (for V ≥ 3)",
        "No triangles: E ≤ 2V - 4",
        "Average degree in planar: < 6 (since 2E ≤ 6V - 12)"
      ],
      tips: "Check planarity: Verify E ≤ 3V-6 first (necessary but not sufficient). K₅, K₃,₃ non-planar."
    },
    {
      id: 17,
      name: "Shortest Path Algorithms",
      category: "Graph Theory",
      priority: "medium",
      notes: [
        "Dijkstra: Single source, non-negative weights, O(V²) or O(E log V)",
        "Bellman-Ford: Single source, handles negative weights, O(VE)",
        "Floyd-Warshall: All pairs, O(V³)",
        "BFS: Unweighted graphs, O(V+E)",
        "Negative cycles detectable by Bellman-Ford"
      ],
      formulas: [
        "Dijkstra: O((V+E) log V) with priority queue",
        "Bellman-Ford: O(V×E)",
        "Floyd-Warshall: O(V³)",
        "BFS for shortest path: O(V+E)"
      ],
      tips: "Dijkstra fails with negative weights. Bellman-Ford works but slower. Use BFS for unweighted."
    },
    {
      id: 18,
      name: "Minimum Spanning Tree",
      category: "Graph Theory",
      priority: "medium",
      notes: [
        "MST: Connects all vertices with minimum total edge weight",
        "Prim's: Greedy, grows tree from arbitrary vertex, O(E log V)",
        "Kruskal's: Greedy, sorts edges, uses Union-Find, O(E log E)",
        "Cut property: Minimum weight edge crossing cut is in some MST",
        "Cycle property: Maximum weight edge in cycle not in MST",
        "For n vertices: MST has exactly n-1 edges"
      ],
      formulas: [
        "Prim's: O(E log V) with binary heap",
        "Kruskal's: O(E log E) ≈ O(E log V)",
        "Number of spanning trees in Kₙ: n^(n-2) (Cayley's formula)"
      ],
      tips: "Both Prim and Kruskal give correct MST. Kruskal better for sparse graphs, Prim for dense."
    },
    {
      id: 19,
      name: "Mathematical Induction",
      category: "Proof Techniques",
      priority: "high",
      notes: [
        "Base case: Prove P(n₀) is true",
        "Inductive hypothesis: Assume P(k) is true",
        "Inductive step: Prove P(k+1) is true using P(k)",
        "Strong induction: Assume P(n₀), P(n₀+1), ..., P(k) all true",
        "Structural induction: For recursive structures"
      ],
      formulas: [
        "1 + 2 + ... + n = n(n+1)/2",
        "1² + 2² + ... + n² = n(n+1)(2n+1)/6",
        "1³ + 2³ + ... + n³ = [n(n+1)/2]²",
        "2⁰ + 2¹ + ... + 2ⁿ = 2^(n+1) - 1"
      ],
      tips: "Always clearly state: Base case, IH (Inductive Hypothesis), Inductive step. Don't assume what you're proving!"
    },
  {
  id: 20,
  name: "Group Theory Basics",
  category: "Algebra",
  priority: "medium",
  notes: [
    "A group (G, ∗) is a set G with a binary operation ∗ satisfying four axioms: Closure, Associativity, Identity, and Inverses.",
    "Closure: For all a, b ∈ G, the result of a ∗ b is also in G.",
    "Associativity: For all a, b, c ∈ G, (a ∗ b) ∗ c = a ∗ (b ∗ c).",
    "Identity element e ∈ G satisfies a ∗ e = e ∗ a = a for all a ∈ G.",
    "Inverse element: For each a ∈ G, there exists a⁻¹ ∈ G such that a ∗ a⁻¹ = a⁻¹ ∗ a = e.",
    "Abelian (commutative) group: a ∗ b = b ∗ a for all a, b ∈ G.",
    "Order of a group |G| is the number of its elements.",
    "Order of an element a is the smallest positive integer n such that aⁿ = e.",
    "Subgroup H ≤ G: A subset of G that forms a group under the same operation.",
    "Lagrange’s Theorem: The order of any subgroup H divides the order of G.",
    "Cyclic group: A group generated by a single element; all elements are powers of that generator."
  ],
  formulas: [
    "Lagrange’s Theorem: |G| = |H| × [G : H], where [G : H] is the index of H in G.",
    "Order of an element divides the order of the group.",
    "A cyclic group of order n has φ(n) generators, where φ(n) is Euler’s totient function.",
    "If a ∈ G has order n, then aᵏ = e ⇔ n divides k."
  ],
  tips: "Use CAII to verify if a set with an operation is a group: Closure, Associativity, Identity, Inverse. For Abelian groups, also check commutativity. When finding element orders or subgroup sizes, apply Lagrange’s Theorem and divisibility rules."
},

    {
  id: 21,
  name: "Lattices & Boolean Algebra",
  category: "Algebra",
  priority: "medium",
  notes: [
    "Lattice: A poset where every pair of elements has a join (∨, LUB) and meet (∧, GLB).",
    "LUB (Least Upper Bound) = smallest element ≥ both; GLB (Greatest Lower Bound) = largest element ≤ both.",
    "Bounded lattice: Has least (0) and greatest (1) elements.",
    "Complemented lattice: For every a, ∃ a' such that a∨a' = 1 and a∧a' = 0.",
    "Boolean algebra: A bounded, complemented, distributive lattice.",
    "Main properties: Idempotent, Commutative, Associative, Distributive.",
    "De Morgan’s Laws: (a∨b)' = a'∧b', (a∧b)' = a'∨b'.",
    "Complement Laws: a∨a' = 1, a∧a' = 0."
  ],
  formulas: [
    "Identity: a∨0 = a, a∧1 = a",
    "Domination: a∨1 = 1, a∧0 = 0",
    "Idempotent: a∨a = a, a∧a = a",
    "Absorption: a∨(a∧b) = a, a∧(a∨b) = a",
    "De Morgan: (a∨b)' = a'∧b', (a∧b)' = a'∨b'"
  ],
  tips: "Remember: ∨ → OR, ∧ → AND, ' → NOT. Boolean algebra = base for logic circuits and switching functions."
},

    {
      id: 22,
      name: "Number Theory - Basics",
      category: "Number Theory",
      priority: "medium",
      notes: [
        "GCD(a,b): Greatest Common Divisor, use Euclidean algorithm",
        "LCM(a,b) × GCD(a,b) = a × b",
        "Prime: Only divisors 1 and itself",
        "Coprime/Relatively prime: GCD(a,b) = 1",
        "Fundamental theorem: Every integer > 1 has unique prime factorization"
      ],
      formulas: [
        "Euclidean algorithm: GCD(a,b) = GCD(b, a mod b)",
        "LCM(a,b) = (a×b)/GCD(a,b)",
        "Number of divisors of n = p₁^a₁ × p₂^a₂ × ... : (a₁+1)(a₂+1)...",
        "Sum of divisors: [(p₁^(a₁+1)-1)/(p₁-1)] × [(p₂^(a₂+1)-1)/(p₂-1)] × ..."
      ],
      tips: "Euclidean algorithm is efficient: O(log min(a,b)). Remember LCM×GCD = product formula."
    },
    {
      id: 23,
      name: "Modular Arithmetic",
      category: "Number Theory",
      priority: "high",
      notes: [
        "a ≡ b (mod m) means m | (a-b)",
        "Properties: Can add, subtract, multiply both sides",
        "Modular inverse: a × a⁻¹ ≡ 1 (mod m), exists if GCD(a,m) = 1",
        "Chinese Remainder Theorem: System of congruences has unique solution mod M",
        "Fermat's Little Theorem: aᵖ⁻¹ ≡ 1 (mod p) for prime p, GCD(a,p) = 1"
      ],
      formulas: [
        "Fermat's Little Theorem: aᵖ⁻¹ ≡ 1 (mod p) if p prime, p∤a",
        "Euler's theorem: a^φ(n) ≡ 1 (mod n) if GCD(a,n) = 1",
        "φ(n) = n × (1-1/p₁) × (1-1/p₂) × ... (Euler's totient)",
        "φ(pᵏ) = pᵏ - pᵏ⁻¹ = pᵏ(1-1/p) for prime p",
        "CRT: If m₁, m₂, ..., mₖ coprime, solution unique mod M = ∏mᵢ"
      ],
      tips: "Use Fermat/Euler for computing large powers mod n. Modular inverse exists iff GCD(a,m)=1."
    }
  ];

  const toggleTopic = (id) => {
    setExpandedTopics(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = () => {
    const allExpanded = Object.keys(expandedTopics).length === topics.length && 
                        Object.values(expandedTopics).every(v => v);
    const newState = {};
    topics.forEach(topic => {
      newState[topic.id] = !allExpanded;
    });
    setExpandedTopics(newState);
  };

  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.notes.some(note => note.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              GATE Discrete Mathematics Quick Revision
            </h1>
          </div>
          <p className="text-gray-600 mb-4">
            Comprehensive notes with formulas, theorems, and tips for GATE preparation
          </p>
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search topics, formulas, or concepts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          
          {/* Controls */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={toggleAll}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              {Object.values(expandedTopics).every(v => v) ? 'Collapse All' : 'Expand All'}
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-red-600" />
              <span className="font-semibold">High Priority</span>
              <span className="mx-2">|</span>
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="font-semibold">Medium Priority</span>
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Topic Header */}
              <div
                onClick={() => toggleTopic(topic.id)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Star 
                    className={`w-5 h-5 ${topic.priority === 'high' ? 'text-red-600 fill-red-600' : topic.priority === 'medium' ? 'text-yellow-600 fill-yellow-600' : 'text-green-600 fill-green-600'}`}
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{topic.name}</h2>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(topic.priority)}`}>
                      {topic.category}
                    </span>
                  </div>
                </div>
                {expandedTopics[topic.id] ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </div>

              {/* Topic Content */}
              {expandedTopics[topic.id] && (
                <div className="p-6 pt-2 border-t border-gray-200 space-y-4">
                  {/* Notes Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                      📝 Key Concepts
                    </h3>
                    <ul className="space-y-2">
                      {topic.notes.map((note, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span className="text-gray-700">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Formulas Section */}
                  {topic.formulas && (
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        🔢 Important Formulas
                      </h3>
                      <div className="bg-green-50 rounded-lg p-4 space-y-2">
                        {topic.formulas.map((formula, idx) => (
                          <div key={idx} className="font-mono text-sm text-gray-800 border-l-4 border-green-500 pl-3">
                            {formula}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tips Section */}
                  {topic.tips && (
                    <div>
                      <h3 className="text-lg font-semibold text-amber-700 mb-2">
                        💡 Pro Tips
                      </h3>
                      <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                        <p className="text-gray-700 italic">{topic.tips}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        {filteredTopics.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">No topics found matching your search.</p>
          </div>
        )}

        <div className="mt-8 bg-indigo-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-2">Quick Revision Tips for GATE</h3>
          <ul className="space-y-2">
            <li>• Focus on high-priority topics first - they appear most frequently</li>
            <li>• Practice problems immediately after reviewing formulas</li>
            <li>• Create flashcards for important theorems and formulas</li>
            <li>• Solve previous year GATE questions topic-wise</li>
            <li>• Time yourself while solving - speed matters in GATE</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DiscreteMathNotes;