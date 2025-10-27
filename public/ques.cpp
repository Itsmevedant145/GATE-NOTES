#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <algorithm>
using namespace std;

class StringGrouping {
private:
    // Check if two character sets can be grouped
    static bool canGroup(const unordered_set<char>& set1, const unordered_set<char>& set2) {
        // Case 1: Exactly the same
        if (set1 == set2) {
            return true;
        }
        
        // Case 2: Differ by exactly one character
        const unordered_set<char>* larger;
        const unordered_set<char>* smaller;
        
        if (set1.size() > set2.size()) {
            larger = &set1;
            smaller = &set2;
        } else {
            larger = &set2;
            smaller = &set1;
        }
        
        // They can only differ by 1 if size difference is exactly 1
        if (larger->size() - smaller->size() != 1) {
            return false;
        }
        
        // Check if smaller is a subset of larger
        for (const char& c : *smaller) {
            if (larger->find(c) == larger->end()) {
                return false;
            }
        }
        return true;
    }
    
    // Convert string to character set
    static unordered_set<char> getCharSet(const string& s) {
        unordered_set<char> charSet;
        for (char c : s) {
            charSet.insert(c);
        }
        return charSet;
    }
    
    // DFS to find all connected strings in current component
    static int dfs(int current, const vector<vector<int>>& graph, vector<bool>& visited) {
        visited[current] = true;
        int componentSize = 1;
        
        // Visit all neighbors
        for (int neighbor : graph[current]) {
            if (!visited[neighbor]) {
                componentSize += dfs(neighbor, graph, visited);
            }
        }
        
        return componentSize;
    }
    
public:
    static int largestGroupSize(const vector<string>& strings) {
        int n = strings.size();
        if (n == 0) return 0;
        
        // Convert each string to a set of characters
        vector<unordered_set<char>> charSets(n);
        for (int i = 0; i < n; i++) {
            charSets[i] = getCharSet(strings[i]);
        }
        
        // Build adjacency list (graph)
        vector<vector<int>> graph(n);
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (canGroup(charSets[i], charSets[j])) {
                    graph[i].push_back(j);
                    graph[j].push_back(i);
                }
            }
        }
        
        // Use boolean array to track visited strings
        vector<bool> visited(n, false);
        int maxGroupSize = 0;
        
        // Find all connected components using DFS
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                int componentSize = dfs(i, graph, visited);
                maxGroupSize = max(maxGroupSize, componentSize);
            }
        }
        
        return maxGroupSize;
    }
    
    // Alternative BFS approach
    static int largestGroupSizeBFS(const vector<string>& strings) {
        int n = strings.size();
        if (n == 0) return 0;
        
        // Convert each string to a set of characters
        vector<unordered_set<char>> charSets(n);
        for (int i = 0; i < n; i++) {
            charSets[i] = getCharSet(strings[i]);
        }
        
        // Build adjacency list
        vector<vector<int>> graph(n);
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (canGroup(charSets[i], charSets[j])) {
                    graph[i].push_back(j);
                    graph[j].push_back(i);
                }
            }
        }
        
        // Use boolean array to track visited strings
        vector<bool> visited(n, false);
        int maxGroupSize = 0;
        
        // Find all connected components using BFS
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                // BFS for current component
                vector<int> queue;
                queue.push_back(i);
                visited[i] = true;
                int componentSize = 0;
                
                while (!queue.empty()) {
                    int current = queue.back();
                    queue.pop_back();
                    componentSize++;
                    
                    for (int neighbor : graph[current]) {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            queue.push_back(neighbor);
                        }
                    }
                }
                
                maxGroupSize = max(maxGroupSize, componentSize);
            }
        }
        
        return maxGroupSize;
    }
    
    // Helper method to show the grouping process with graph visualization
    static void analyzeGrouping(const vector<string>& strings) {
        cout << "Strings and their character sets:" << endl;
        for (int i = 0; i < strings.size(); i++) {
            unordered_set<char> charSet = getCharSet(strings[i]);
            cout << "Index " << i << ": " << strings[i] << " -> {";
            bool first = true;
            for (char c : charSet) {
                if (!first) cout << ", ";
                cout << c;
                first = false;
            }
            cout << "}" << endl;
        }
        
        cout << "\nGraph connections:" << endl;
        int n = strings.size();
        vector<unordered_set<char>> charSets(n);
        for (int i = 0; i < n; i++) {
            charSets[i] = getCharSet(strings[i]);
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (canGroup(charSets[i], charSets[j])) {
                    cout << strings[i] << " (index " << i << ") <-> " 
                         << strings[j] << " (index " << j << ")" << endl;
                }
            }
        }
        
        // Show DFS traversal
        cout << "\nDFS traversal and component sizes:" << endl;
        vector<bool> visited(n, false);
        int componentCount = 0;
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                componentCount++;
                cout << "Component " << componentCount << ": ";
                
                // Build graph for DFS
                vector<vector<int>> graph(n);
                for (int x = 0; x < n; x++) {
                    for (int y = x + 1; y < n; y++) {
                        if (canGroup(charSets[x], charSets[y])) {
                            graph[x].push_back(y);
                            graph[y].push_back(x);
                        }
                    }
                }
                
                // DFS to find component
                vector<int> component;
                vector<int> stack;
                stack.push_back(i);
                visited[i] = true;
                
                while (!stack.empty()) {
                    int current = stack.back();
                    stack.pop_back();
                    component.push_back(current);
                    
                    for (int neighbor : graph[current]) {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            stack.push_back(neighbor);
                        }
                    }
                }
                
                for (int idx : component) {
                    cout << strings[idx] << " ";
                }
                cout << "(size: " << component.size() << ")" << endl;
            }
        }
    }
};

int main() {
    // Test case 1: ["dzy", "acc", "abb", "dz"]
    vector<string> test1 = {"dzy", "acc", "abb", "dz"};
    cout << "Test 1 DFS result: " << StringGrouping::largestGroupSize(test1) << endl;
    cout << "Test 1 BFS result: " << StringGrouping::largestGroupSizeBFS(test1) << endl;
    
    // Test case 2: More complex example
    vector<string> test2 = {"abc", "ab", "a", "bc", "b", "c"};
    cout << "Test 2 DFS result: " << StringGrouping::largestGroupSize(test2) << endl;
    cout << "Test 2 BFS result: " << StringGrouping::largestGroupSizeBFS(test2) << endl;
    
    // Test case 3: All same characters
    vector<string> test3 = {"aaa", "aa", "a"};
    cout << "Test 3 DFS result: " << StringGrouping::largestGroupSize(test3) << endl;
    
    // Test case 4: No grouping possible
    vector<string> test4 = {"abc", "def", "ghi"};
    cout << "Test 4 DFS result: " << StringGrouping::largestGroupSize(test4) << endl;
    
    // Detailed explanation for test1
    cout << "\n" << string(50, '=') << endl;
    cout << "DETAILED ANALYSIS FOR TEST1:" << endl;
    cout << string(50, '=') << endl;
    StringGrouping::analyzeGrouping(test1);
    
    return 0;
}