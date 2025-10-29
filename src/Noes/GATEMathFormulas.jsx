import React, { useState } from 'react';
import { BookOpen, Calculator, TrendingUp, ChevronDown, ChevronRight, Download } from 'lucide-react';

const GATEMathNotes = () => {
  const [selectedSubject, setSelectedSubject] = useState('calculus');
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleTopic = (topic) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const subjects = {
    linearAlgebra: {
      name: 'Linear Algebra',
      icon: <Calculator className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      topics: {
        matrices: {
          title: 'Matrix & Determinants',
          content: {
            definitions: [
              'Matrix: Rectangular array of numbers arranged in rows and columns',
              'Square Matrix: m = n (equal rows and columns)',
              'Diagonal Matrix: aᵢⱼ = 0 for i ≠ j',
              'Identity Matrix: I, where aᵢᵢ = 1 and aᵢⱼ = 0 for i ≠ j',
              'Symmetric Matrix: A = Aᵀ',
              'Skew-Symmetric: A = -Aᵀ',
              'Orthogonal Matrix: AAᵀ = AᵀA = I',
              'Singular Matrix: |A| = 0',
              'Non-Singular Matrix: |A| ≠ 0'
            ],
            properties: [
              '(AB)ᵀ = BᵀAᵀ',
              '(ABC)ᵀ = CᵀBᵀAᵀ',
              '|AB| = |A||B|',
              '|kA| = kⁿ|A| for n×n matrix',
              '|Aᵀ| = |A|',
              '|A⁻¹| = 1/|A|',
              'Rank(AB) ≤ min(Rank(A), Rank(B))',
              'Rank(A + B) ≤ Rank(A) + Rank(B)',
              'For orthogonal matrix: |A| = ±1'
            ],
            formulas: [
              '**Determinant 2×2:** |A| = ad - bc',
              '**Determinant 3×3:** Expand along any row/column',
              '**Cofactor:** Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ',
              '**Adjoint:** adj(A) = [Cᵢⱼ]ᵀ',
              '**Inverse:** A⁻¹ = adj(A)/|A|',
              '**Rank:** Number of non-zero rows in row echelon form',
              'A⁻¹A = AA⁻¹ = I',
              '(AB)⁻¹ = B⁻¹A⁻¹'
            ]
          }
        },
        systems: {
          title: 'System of Linear Equations',
          content: {
            theories: [
              '**Consistent System:** Has at least one solution',
              '**Inconsistent System:** No solution exists',
              '**Homogeneous System:** Ax = 0 (always consistent)',
              '**Non-homogeneous System:** Ax = b, b ≠ 0'
            ],
            conditions: [
              '**Unique Solution:** Rank(A) = Rank(A|b) = n (number of variables)',
              '**Infinite Solutions:** Rank(A) = Rank(A|b) < n',
              '**No Solution:** Rank(A) ≠ Rank(A|b)',
              '**Trivial Solution:** x = 0 (for homogeneous)',
              '**Non-trivial Solution:** For Ax=0, exists when |A| = 0'
            ],
            methods: [
              '**Cramer\'s Rule:** xᵢ = |Aᵢ|/|A| (when |A| ≠ 0)',
              '**Gaussian Elimination:** Convert to row echelon form',
              '**Gauss-Jordan:** Convert to reduced row echelon form',
              '**Matrix Inversion:** x = A⁻¹b (when A is invertible)'
            ],
            example: 'System: 2x+y=5, x+3y=8 → |A|=5 → x=|[5,1],[8,3]|/5=1, y=|[2,5],[1,8]|/5=2'
          }
        },
        eigenvalues: {
          title: 'Eigenvalues & Eigenvectors',
          content: {
            definitions: [
              '**Eigenvalue:** λ such that Av = λv for some v ≠ 0',
              '**Eigenvector:** Non-zero vector v satisfying Av = λv',
              '**Characteristic Equation:** |A - λI| = 0',
              '**Algebraic Multiplicity:** Number of times λ appears as root',
              '**Geometric Multiplicity:** Dimension of eigenspace',
              '**Eigenspace:** Null space of (A - λI)'
            ],
            properties: [
              'Sum of eigenvalues = Trace(A) = Σaᵢᵢ',
              'Product of eigenvalues = |A|',
              'Eigenvalues of Aᵀ = Eigenvalues of A',
              'Eigenvalues of A⁻¹ = 1/λᵢ',
              'Eigenvalues of Aⁿ = λᵢⁿ',
              'Eigenvalues of kA = kλᵢ',
              'For symmetric matrix: all eigenvalues are real',
              'For orthogonal matrix: |λ| = 1',
              'For positive definite: all λ > 0'
            ],
            theorems: [
              '**Cayley-Hamilton Theorem:** Every matrix satisfies its own characteristic equation',
              '**Spectral Theorem:** Real symmetric matrix can be diagonalized by orthogonal matrix',
              'Eigenvectors corresponding to distinct eigenvalues are linearly independent',
              'n×n matrix with n distinct eigenvalues is diagonalizable'
            ],
            diagonalization: [
              'A = PDP⁻¹ where D is diagonal matrix of eigenvalues',
              'P is matrix with eigenvectors as columns',
              'Condition: A must have n linearly independent eigenvectors'
            ],
            example: 'A=[[3,1],[0,2]] → |A-λI|=(3-λ)(2-λ)=0 → λ₁=3, λ₂=2 → Trace=5✓, |A|=6✓'
          }
        },
        lu: {
          title: 'LU Decomposition',
          content: {
            definition: [
              'A = LU where L is lower triangular, U is upper triangular',
              'Used for solving Ax = b efficiently',
              'L has 1s on diagonal (Doolittle method)'
            ],
            algorithm: [
              '**Step 1:** Decompose A into L and U using Gaussian elimination',
              '**Step 2:** Solve Ly = b (forward substitution)',
              '**Step 3:** Solve Ux = y (backward substitution)',
              'Computational complexity: O(n³) for decomposition, O(n²) per solve'
            ],
            advantages: [
              'Efficient for multiple systems with same A',
              'Numerically stable',
              'Easy to compute determinant: |A| = Π uᵢᵢ'
            ],
            conditions: [
              'All leading principal minors must be non-zero',
              'If A is symmetric positive definite: LU decomposition always exists',
              'Pivoting may be required for numerical stability'
            ]
          }
        }
      }
    },
    calculus: {
      name: 'Calculus',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      topics: {
        limits: {
          title: 'Limits',
          content: {
            definition: [
              'lim(x→a) f(x) = L if f(x) approaches L as x approaches a',
              '**Left Hand Limit (LHL):** lim(x→a⁻) f(x)',
              '**Right Hand Limit (RHL):** lim(x→a⁺) f(x)',
              '**Limit exists:** LHL = RHL = L'
            ],
            standardLimits: [
              'lim(x→0) sin(x)/x = 1',
              'lim(x→0) tan(x)/x = 1',
              'lim(x→0) (1-cos(x))/x = 0',
              'lim(x→0) (1-cos(x))/x² = 1/2',
              'lim(x→0) (eˣ-1)/x = 1',
              'lim(x→0) (aˣ-1)/x = ln(a)',
              'lim(x→0) (1+x)^(1/x) = e',
              'lim(x→∞) (1+1/x)ˣ = e',
              'lim(x→0) ln(1+x)/x = 1'
            ],
            properties: [
              'lim[f(x) ± g(x)] = lim f(x) ± lim g(x)',
              'lim[f(x)·g(x)] = lim f(x) · lim g(x)',
              'lim[f(x)/g(x)] = lim f(x) / lim g(x), if lim g(x) ≠ 0',
              'lim[k·f(x)] = k · lim f(x)',
              'If f(x) ≤ g(x), then lim f(x) ≤ lim g(x)'
            ],
            indeterminate: [
              '**L\'Hôpital\'s Rule:** For 0/0 or ∞/∞: lim f/g = lim f\'/g\'',
              'Forms: 0/0, ∞/∞, 0·∞, ∞-∞, 0⁰, 1^∞, ∞⁰',
              'Convert to 0/0 or ∞/∞ form before applying L\'Hôpital'
            ],
            example: 'lim(x→0)(sin2x)/(3x) = lim(x→0)(2sin2x)/(2·3x) = (2/3)·1 = 2/3'
          }
        },
        continuity: {
          title: 'Continuity & Differentiability',
          content: {
            continuity: [
              '**Continuous at x=a:** lim(x→a) f(x) = f(a)',
              'Three conditions: f(a) exists, lim exists, both are equal',
              'LHL = RHL = f(a) for continuity',
              '**Removable Discontinuity:** Limit exists but ≠ f(a)',
              '**Jump Discontinuity:** LHL ≠ RHL',
              '**Infinite Discontinuity:** Limit is ∞'
            ],
            properties: [
              'Sum, difference, product of continuous functions is continuous',
              'Quotient continuous if denominator ≠ 0',
              'Composition of continuous functions is continuous',
              'All polynomials are continuous everywhere',
              'Rational functions continuous except where denominator = 0',
              'Trigonometric, exponential, logarithmic functions continuous in domain'
            ],
            differentiability: [
              '**Differentiable at x=a:** f\'(a) = lim(h→0)[f(a+h)-f(a)]/h exists',
              '**Left Hand Derivative:** LHD = lim(h→0⁻)[f(a+h)-f(a)]/h',
              '**Right Hand Derivative:** RHD = lim(h→0⁺)[f(a+h)-f(a)]/h',
              'f differentiable at a ⟺ LHD = RHD',
              '**Differentiable ⟹ Continuous** (converse not true)',
              'Continuous ⟹̸ Differentiable (e.g., |x| at x=0)'
            ],
            piecewiseCheck: [
              '**For piecewise functions f(x) = {g(x) if x<a, h(x) if x≥a}:**',
              '1. Check lim(x→a⁻)g(x) = lim(x→a⁺)h(x) = f(a) for continuity',
              '2. Check lim(x→a⁻)g\'(x) = lim(x→a⁺)h\'(x) for differentiability',
              '3. Always check at boundary points',
              '4. Common mistake: not checking derivative at junction'
            ],
            derivativeFormulas: [
              'd/dx(xⁿ) = nxⁿ⁻¹',
              'd/dx(sin x) = cos x',
              'd/dx(cos x) = -sin x',
              'd/dx(tan x) = sec²x',
              'd/dx(eˣ) = eˣ',
              'd/dx(aˣ) = aˣ ln(a)',
              'd/dx(ln x) = 1/x',
              'd/dx(logₐx) = 1/(x ln a)'
            ],
            rules: [
              '**Product Rule:** (uv)\' = u\'v + uv\'',
              '**Quotient Rule:** (u/v)\' = (u\'v - uv\')/v²',
              '**Chain Rule:** (f∘g)\' = f\'(g(x))·g\'(x)',
              '**Parametric:** dy/dx = (dy/dt)/(dx/dt)'
            ],
            example: 'f(x)={x² x<1, 2x-1 x≥1}: At x=1, LHL=1, RHL=1, f(1)=1✓ LHD=2, RHD=2✓ ∴ Continuous & Differentiable'
          }
        },
        maxmin: {
          title: 'Maxima & Minima',
          content: {
            criticalPoints: [
              '**Critical Point:** Where f\'(c) = 0 or f\'(c) does not exist',
              'All local extrema occur at critical points',
              'Not all critical points are extrema (e.g., inflection points)',
              '**Stationary Point:** f\'(c) = 0'
            ],
            firstDerivativeTest: [
              '**Local Maximum:** f\' changes from + to - at c',
              '**Local Minimum:** f\' changes from - to + at c',
              '**Not Extremum:** f\' does not change sign',
              'Check sign of f\' in intervals around c'
            ],
            secondDerivativeTest: [
              'If f\'(c) = 0:',
              '• f\'\'(c) > 0 → Local Minimum (concave up)',
              '• f\'\'(c) < 0 → Local Maximum (concave down)',
              '• f\'\'(c) = 0 → Test inconclusive (use first derivative test)',
              'Fails when second derivative = 0 or undefined'
            ],
            globalExtrema: [
              '**On Closed Interval [a,b]:**',
              '1. Find all critical points in (a,b)',
              '2. Evaluate f at critical points and endpoints',
              '3. Largest value = global max, smallest = global min',
              '**On Open Interval:** May not have global extrema'
            ],
            applicationSteps: [
              '1. Define variable and function to optimize',
              '2. Find derivative f\'(x)',
              '3. Set f\'(x) = 0 and solve for critical points',
              '4. Apply second derivative test or first derivative test',
              '5. Check boundary values if applicable',
              '6. State final answer with units'
            ],
            example: 'f(x)=x³-6x²+9x+1: f\'=3x²-12x+9=0 → x=1,3. f\'\'(1)=-6<0→Max, f\'\'(3)=6>0→Min'
          }
        },
        mvt: {
          title: 'Mean Value Theorems',
          content: {
            rolles: [
              '**Rolle\'s Theorem:**',
              'If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b),',
              'Then ∃c∈(a,b) such that f\'(c) = 0',
              '**Geometric:** Horizontal tangent exists between equal endpoints',
              '**Applications:** Finding roots, proving identities'
            ],
            lagrange: [
              '**Lagrange\'s Mean Value Theorem (LMVT):**',
              'If f is continuous on [a,b] and differentiable on (a,b),',
              'Then ∃c∈(a,b): f\'(c) = [f(b)-f(a)]/(b-a)',
              '**Geometric:** Tangent parallel to chord exists',
              '**Special Case:** Rolle\'s theorem when f(a)=f(b)',
              'Slope at c = Average slope on [a,b]'
            ],
            cauchy: [
              '**Cauchy\'s Mean Value Theorem:**',
              'If f,g continuous on [a,b], differentiable on (a,b), g\'(x)≠0,',
              'Then ∃c∈(a,b): [f(b)-f(a)]/[g(b)-g(a)] = f\'(c)/g\'(c)',
              '**Generalization:** LMVT with g(x)=x gives Lagrange',
              'Used in proving L\'Hôpital\'s rule'
            ],
            applications: [
              'Proving inequalities',
              'Establishing uniqueness of solutions',
              'Deriving error bounds',
              'Rate of change problems',
              'Monotonicity tests'
            ],
            example: 'f(x)=x² on [1,3]: f\'(c)=(9-1)/(3-1)=4 → 2c=4 → c=2∈(1,3)✓'
          }
        },
        integration: {
          title: 'Integration',
          content: {
            basicFormulas: [
              '∫xⁿdx = xⁿ⁺¹/(n+1) + C, n≠-1',
              '∫(1/x)dx = ln|x| + C',
              '∫eˣdx = eˣ + C',
              '∫aˣdx = aˣ/ln(a) + C',
              '∫sin(x)dx = -cos(x) + C',
              '∫cos(x)dx = sin(x) + C',
              '∫sec²(x)dx = tan(x) + C',
              '∫cosec²(x)dx = -cot(x) + C',
              '∫sec(x)tan(x)dx = sec(x) + C',
              '∫1/(1+x²)dx = tan⁻¹(x) + C',
              '∫1/√(1-x²)dx = sin⁻¹(x) + C'
            ],
            properties: [
              '∫[f(x)+g(x)]dx = ∫f(x)dx + ∫g(x)dx',
              '∫k·f(x)dx = k∫f(x)dx',
              '∫f\'(x)dx = f(x) + C',
              'd/dx[∫f(x)dx] = f(x)'
            ],
            methods: [
              '**Substitution:** ∫f(g(x))g\'(x)dx, let u=g(x)',
              '**By Parts:** ∫udv = uv - ∫vdu (ILATE: Inverse, Log, Algebraic, Trig, Exp)',
              '**Partial Fractions:** Decompose rational functions',
              '**Trigonometric Substitution:** For √(a²-x²), √(x²+a²), √(x²-a²)'
            ],
            definiteIntegration: [
              '∫ₐᵇf(x)dx = F(b) - F(a) where F\'=f',
              '**Fundamental Theorem:** d/dx[∫ₐˣf(t)dt] = f(x)',
              '∫ₐᵇf(x)dx = -∫ᵇₐf(x)dx',
              '∫ₐᵃf(x)dx = 0',
              '∫ₐᵇf(x)dx = ∫ₐᶜf(x)dx + ∫ᶜᵇf(x)dx',
              'If f is even: ∫₋ₐᵃf(x)dx = 2∫₀ᵃf(x)dx',
              'If f is odd: ∫₋ₐᵃf(x)dx = 0'
            ],
            applications: [
              'Area under curve: A = ∫ₐᵇf(x)dx',
              'Area between curves: A = ∫ₐᵇ|f(x)-g(x)|dx',
              'Volume of revolution: V = π∫ₐᵇ[f(x)]²dx'
            ],
            example: '∫x·eˣdx: u=x,dv=eˣdx → uv-∫vdu = x·eˣ-∫eˣdx = eˣ(x-1)+C'
          }
        }
      }
    },
    probability: {
      name: 'Probability & Statistics',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      topics: {
        basicProb: {
          title: 'Basic Probability',
          content: {
            fundamentals: [
              '**Sample Space (S):** Set of all possible outcomes',
              '**Event (E):** Subset of sample space',
              '**Probability:** P(E) = n(E)/n(S), where 0 ≤ P(E) ≤ 1',
              'P(S) = 1, P(∅) = 0',
              'P(not E) = P(E\') = 1 - P(E)'
            ],
            axioms: [
              '**Axiom 1:** P(E) ≥ 0 for any event E',
              '**Axiom 2:** P(S) = 1',
              '**Axiom 3:** For mutually exclusive events: P(E₁∪E₂) = P(E₁)+P(E₂)'
            ],
            additionRules: [
              '**General:** P(A∪B) = P(A) + P(B) - P(A∩B)',
              '**Mutually Exclusive:** P(A∪B) = P(A) + P(B)',
              '**Three Events:** P(A∪B∪C) = P(A)+P(B)+P(C)-P(A∩B)-P(B∩C)-P(A∩C)+P(A∩B∩C)'
            ],
            multiplicationRules: [
              '**Independent:** P(A∩B) = P(A)·P(B)',
              '**Dependent:** P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)',
              'Events A,B independent ⟺ P(A∩B) = P(A)P(B)'
            ],
            conditional: [
              '**Conditional Probability:** P(A|B) = P(A∩B)/P(B), P(B)>0',
              'P(A∩B) = P(B)·P(A|B) = P(A)·P(B|A)',
              'If A,B independent: P(A|B) = P(A)',
              '**Multiplication Theorem:** P(A₁∩A₂∩...∩Aₙ) = P(A₁)·P(A₂|A₁)·P(A₃|A₁∩A₂)...'
            ],
            bayes: [
              '**Bayes\' Theorem:** P(A|B) = [P(B|A)·P(A)]/P(B)',
              '**Law of Total Probability:** P(B) = ΣP(B|Aᵢ)·P(Aᵢ)',
              '**Extended Form:** P(Aᵢ|B) = [P(B|Aᵢ)·P(Aᵢ)]/[ΣP(B|Aⱼ)·P(Aⱼ)]'
            ],
            example: 'Two dice: P(sum=7)=6/36=1/6. P(sum>8|one die=5)=P({5,4},{5,5},{5,6})/P(one=5)=3/11'
          }
        },
        distributions: {
          title: 'Probability Distributions',
          content: {
            discrete: [
              '**Random Variable:** Function from S to ℝ',
              '**PMF:** P(X=x) for discrete RV, ΣP(X=xᵢ) = 1',
              '**CDF:** F(x) = P(X≤x)',
              '**Expected Value:** E(X) = Σxᵢ·P(X=xᵢ)',
              '**Variance:** Var(X) = E(X²) - [E(X)]²',
              'E(aX+b) = aE(X) + b',
              'Var(aX+b) = a²Var(X)'
            ],
            binomial: [
              '**Binomial Distribution:** n trials, p success probability',
              'P(X=k) = C(n,k)·pᵏ·(1-p)ⁿ⁻ᵏ',
              'E(X) = np',
              'Var(X) = np(1-p)',
              'Properties: Fixed n, independent trials, two outcomes',
              'Notation: X ~ B(n,p)'
            ],
            poisson: [
              '**Poisson Distribution:** Rate λ per interval',
              'P(X=k) = (λᵏ·e⁻ᵏ)/k!',
              'E(X) = λ',
              'Var(X) = λ',
              'Approximates binomial when n large, p small, np=λ',
              'Used for rare events',
              'Notation: X ~ Poisson(λ)'
            ],
            geometric: [
              '**Geometric Distribution:** First success on kth trial',
              'P(X=k) = (1-p)ᵏ⁻¹·p',
              'E(X) = 1/p',
              'Var(X) = (1-p)/p²',
              'Memoryless property'
            ],
            continuous: [
              '**PDF:** f(x), where ∫₋∞^∞f(x)dx = 1',
              'P(a<X<b) = ∫ₐᵇf(x)dx',
              'P(X=a) = 0 for continuous RV',
              '**CDF:** F(x) = P(X≤x) = ∫₋∞ˣf(t)dt',
              'f(x) = dF(x)/dx'
            ],
            normal: [
              '**Normal Distribution:** X ~ N(μ,σ²)',
              'f(x) = (1/σ√(2π))·e^(-(x-μ)²/(2σ²))',
              'E(X) = μ, Var(X) = σ²',
              '**Standard Normal:** Z ~ N(0,1)',
              'Z = (X-μ)/σ',
              '68-95-99.7 Rule: P(μ-σ<X<μ+σ)≈0.68',
              'P(μ-2σ<X<μ+2σ)≈0.95, P(μ-3σ<X<μ+3σ)≈0.997'
            ],
            exponential: [
              '**Exponential Distribution:** λ rate parameter',
              'f(x) = λe⁻ᵏˣ, x≥0',
              'E(X) = 1/λ',
              'Var(X) = 1/λ²',
              'Memoryless property',
              'Models waiting times'
            ],
            example: 'Coin tossed 5 times, P(3 heads) = C(5,3)(0.5)³(0.5)² = 10/32 = 5/16'
          }
        },
        statistics: {
          title: 'Statistics',
          content: {
            centralTendency: [
              '**Mean (μ or x̄):** Σxᵢ/n',
              'For grouped data: Σfᵢxᵢ/Σfᵢ',
              '**Median:** Middle value when ordered',
              'For even n: average of two middle values',
              '**Mode:** Most frequent value',
              'Can have multiple modes or no mode'
            ],
            dispersion: [
              '**Range:** Max - Min',
              '**Variance (σ²):** Σ(xᵢ-μ)²/n or [Σxᵢ² - nμ²]/n',
              '**Sample Variance:** Σ(xᵢ-x̄)²/(n-1)',
              '**Standard Deviation (σ):** √(Variance)',
              '**Coefficient of Variation:** (σ/μ)×100%',
              'Properties: Var(X+a) = Var(X), Var(aX) = a²Var(X)'
            ],
            moments: [
              '**rth Moment about origin:** μᵣ\' = E(Xʳ)',
              '**rth Central Moment:** μᵣ = E[(X-μ)ʳ]',
              'μ₁ = E(X) = Mean',
              'μ₂ = Variance',
              '**Skewness:** β₁ = μ₃²/μ₂³ (measures asymmetry)',
              '**Kurtosis:** β₂ = μ₄/μ₂² (measures peakedness)',
              'For normal distribution: β₁=0, β₂=3'
            ],
            covariance: [
              '**Covariance:** Cov(X,Y) = E[(X-μₓ)(Y-μᵧ)]',
              'Cov(X,Y) = E(XY) - E(X)E(Y)',
              'Cov(X,X) = Var(X)',
              'Cov(X,Y) = Cov(Y,X)',
              'Cov(aX,bY) = ab·Cov(X,Y)',
              'If X,Y independent: Cov(X,Y) = 0',
              'Converse not always true'
            ],
            correlation: [
              '**Correlation Coefficient:** ρ = Cov(X,Y)/(σₓσᵧ)',
              '-1 ≤ ρ ≤ 1',
              'ρ = 1: Perfect positive correlation',
              'ρ = -1: Perfect negative correlation',
              'ρ = 0: No linear correlation',
              'Independent ⟹ ρ=0, but ρ=0 ⟹̸ Independent'
            ],
            regression: [
              '**Regression Line Y on X:** y - ȳ = bᵧₓ(x - x̄)',
              'bᵧₓ = Cov(X,Y)/Var(X) = r·(σᵧ/σₓ)',
              '**Regression Line X on Y:** x - x̄ = bₓᵧ(y - ȳ)',
              'bₓᵧ = Cov(X,Y)/Var(Y) = r·(σₓ/σᵧ)',
              'r² = bᵧₓ·bₓᵧ (coefficient of determination)',
              'Both lines pass through (x̄,ȳ)'
            ],
            sampling: [
              '**Population Mean:** μ = ΣX/N',
              '**Sample Mean:** x̄ = Σx/n',
              'E(x̄) = μ',
              'Var(x̄) = σ²/n',
              '**Standard Error:** SE = σ/√n',
              '**Central Limit Theorem:** x̄ ~ N(μ, σ²/n) for large n'
            ],
            estimation: [
              '**Point Estimate:** Single value estimate',
              '**Interval Estimate:** Range with confidence level',
              '**Confidence Interval for μ:** x̄ ± z(σ/√n)',
              'z=1.96 for 95% CI, z=2.58 for 99% CI',
              '**Unbiased Estimator:** E(θ̂) = θ',
              '**Consistent Estimator:** θ̂ → θ as n → ∞'
            ],
            hypothesis: [
              '**Null Hypothesis (H₀):** Assumption to be tested',
              '**Alternative Hypothesis (H₁):** Competing claim',
              '**Type I Error (α):** Reject H₀ when true',
              '**Type II Error (β):** Accept H₀ when false',
              '**Power:** 1-β = P(reject H₀ | H₀ false)',
              '**p-value:** Probability of observing data if H₀ true',
              'Reject H₀ if p-value < α'
            ],
            example: 'Data: [2,4,6,8]. Mean=(2+4+6+8)/4=5, Var=[(2-5)²+(4-5)²+(6-5)²+(8-5)²]/4=5, SD=√5≈2.24'
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
            {(Array.isArray(items) ? items : [items]).map((item, idx) => (
              <li key={idx} className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-slate-700">
                {typeof item === 'string' && item.includes('**') ? (
                  <span dangerouslySetInnerHTML={{
                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-400">$1</strong>')
                  }} />
                ) : item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">GATE Mathematics</h1>
          <p className="text-gray-300 text-lg">Complete Short Notes - All Topics Covered</p>
          <p className="text-gray-400 text-sm mt-2">Properties • Theorems • Formulas • Examples</p>
        </div>

        {/* Subject Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {Object.entries(subjects).map(([key, subject]) => (
            <button
              key={key}
              onClick={() => setSelectedSubject(key)}
              className={`p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                selectedSubject === key
                  ? `bg-gradient-to-r ${subject.color} shadow-2xl`
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="text-white">{subject.icon}</div>
                <h2 className="text-xl font-semibold text-white">{subject.name}</h2>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentSubject.color} bg-clip-text text-transparent`}>
              {currentSubject.name}
            </h2>
            <div className="text-gray-400 text-sm">
              {Object.keys(currentSubject.topics).length} Topics
            </div>
          </div>

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

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400 space-y-2">
          <p className="text-sm">📚 Click on any topic to expand and view complete notes</p>
          <p className="text-xs">Includes all important properties, theorems, formulas, and solved examples</p>
        </div>
      </div>
    </div>
  );
};

export default GATEMathNotes;