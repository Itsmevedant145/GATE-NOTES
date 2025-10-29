from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import base64
import numpy as np
import matplotlib
matplotlib.use('Agg')  # ✅ Use non-GUI backend
import matplotlib.pyplot as plt
import sympy as sp

app = Flask(__name__)
CORS(app)

@app.route('/plot', methods=['POST'])
def plot_custom_functions():
    data = request.json
    functions = data.get('functions', ['n'])
    n_max = data.get('n_max', 10)

    n = sp.Symbol('n', positive=True)
    x_vals = np.linspace(1, n_max, 200)

    # Create figure with better styling
    plt.figure(figsize=(10, 6))
    
    # Color palette for different functions
    colors = ['#4ade80', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

    for idx, func_str in enumerate(functions):
        try:
            expr_str = func_str.lower().replace('^', '**')

            # CRITICAL: Handle 2^log(n) and similar patterns FIRST before other replacements
            # This prevents 'logn' from being replaced before we handle exponentials
            import re
            
            # Handle patterns like: 2^logn, 3^logn, e^logn, etc.
            # Convert to: 2**(log(n)), 3**(log(n)), etc.
            expr_str = re.sub(r'(\d+)\*\*log\s*n', r'\1**(log(n))', expr_str)
            expr_str = re.sub(r'(\d+)\*\*logn', r'\1**(log(n))', expr_str)
            
            # Handle e^logn
            expr_str = re.sub(r'e\*\*log\s*n', r'exp(log(n))', expr_str)
            expr_str = re.sub(r'e\*\*logn', r'exp(log(n))', expr_str)
            
            # Handle patterns like: 2^(n*logn), 2^nlogn
            expr_str = re.sub(r'(\d+)\*\*\(?\s*n\s*\*?\s*log\s*n\s*\)?', r'\1**(n*log(n))', expr_str)
            expr_str = re.sub(r'(\d+)\*\*nlogn', r'\1**(n*log(n))', expr_str)

            # Now handle other standard replacements
            expr_str = expr_str.replace('nlogn', 'n*log(n)')
            expr_str = expr_str.replace('logn', 'log(n)')
            
            # Handle missing multiplications
            expr_str = expr_str.replace(')(', ')*(')
            expr_str = expr_str.replace(')n', ')*n')
            expr_str = expr_str.replace('n(', 'n*(')
            expr_str = expr_str.replace('nlog', 'n*log')
            
            # Handle coefficient patterns like 2n, 3n, etc.
            expr_str = re.sub(r'(\d+)n', r'\1*n', expr_str)

            print(f"📊 Parsing '{func_str}' → '{expr_str}'")  # Debug output

            expr = sp.sympify(expr_str, locals={'log': sp.log, 'sqrt': sp.sqrt, 'exp': sp.exp})
            f = sp.lambdify(n, expr, 'numpy')
            y_vals = f(x_vals)

            # Fix NaN and infinite values
            y_vals = np.nan_to_num(y_vals, nan=np.nan, posinf=np.nan, neginf=np.nan)

            # Use different colors and line styles
            color = colors[idx % len(colors)]
            plt.plot(x_vals, y_vals, label=f"O({func_str})", color=color, linewidth=2.5)
        except Exception as e:
            print(f"⚠️ Error parsing {func_str}: {e}")
            continue

    plt.xlabel('n', fontsize=12, fontweight='bold')
    plt.ylabel('Growth (log scale)', fontsize=12, fontweight='bold')
    plt.title('Algorithmic Complexity Comparison', fontsize=14, fontweight='bold', pad=20)
    plt.yscale('log')  # ✅ Use logarithmic scale for y-axis
    plt.legend(loc='best', fontsize=10, framealpha=0.9)
    plt.grid(True, alpha=0.3, which='both')  # Show grid for both major and minor ticks
    plt.tight_layout()

    buf = io.BytesIO()
    plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode('utf-8')
    plt.close()

    return jsonify({'image': img_base64})


if __name__ == '__main__':
    print("🚀 Flask server running at http://127.0.0.1:5000")
    app.run(debug=True)