/**
 * AI Assistant Component
 * Provides AI-powered code assistance and suggestions
 */

import React, { useState, useRef, useEffect } from 'react';
import './AIAssistant.css';

const AIAssistant = ({ onClose, currentCode, onCodeUpdate }) => {
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: 'Hello! I\'m your AI coding assistant. I can help you with code analysis, suggestions, debugging, and more. What would you like to work on?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeCode = (code) => {
    const lines = code.split('\n');
    const analysis = {
      lineCount: lines.length,
      hasComments: lines.some(line => line.trim().startsWith('//')),
      hasFunctions: /function\s+\w+|=>\s*{|\w+\s*\(.*\)\s*{/.test(code),
      hasConsoleLog: /console\.log/.test(code),
      complexity: lines.length > 50 ? 'high' : lines.length > 20 ? 'medium' : 'low',
    };
    return analysis;
  };

  const generateResponse = async (userMessage) => {
    setIsThinking(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerMessage = userMessage.toLowerCase();
    let response = '';

    if (lowerMessage.includes('analyze') || lowerMessage.includes('review')) {
      const analysis = analyzeCode(currentCode);
      response = `I've analyzed your code:

📊 **Code Analysis:**
- Lines of code: ${analysis.lineCount}
- Has comments: ${analysis.hasComments ? '✅ Yes' : '❌ No'}
- Has functions: ${analysis.hasFunctions ? '✅ Yes' : '❌ No'}
- Complexity: ${analysis.complexity}

💡 **Suggestions:**
${!analysis.hasComments ? '• Add more comments to explain your code\n' : ''}
${analysis.hasConsoleLog ? '• Consider removing console.log statements for production\n' : ''}
${analysis.complexity === 'high' ? '• Consider breaking down complex functions\n' : ''}
• Follow consistent naming conventions
• Add error handling where appropriate`;

    } else if (lowerMessage.includes('optimize') || lowerMessage.includes('improve')) {
      response = `Here are some optimization suggestions for your code:

🚀 **Performance Optimizations:**
• Use const/let instead of var for better scoping
• Implement error handling with try-catch blocks
• Consider using async/await for better readability
• Add type checking or TypeScript for better reliability

🔧 **Code Quality:**
• Follow consistent indentation (2 or 4 spaces)
• Use meaningful variable and function names
• Break large functions into smaller, focused ones
• Add JSDoc comments for better documentation`;

    } else if (lowerMessage.includes('error') || lowerMessage.includes('debug') || lowerMessage.includes('bug')) {
      response = `Let me help you debug your code:

🐛 **Common Debugging Steps:**
1. Check the browser console for error messages
2. Verify variable names and types
3. Ensure all brackets and parentheses are properly closed
4. Check for undefined variables or functions

🔍 **Debugging Tools:**
• Use console.log() to trace variable values
• Set breakpoints in your browser's dev tools
• Use the React Developer Tools extension
• Add error boundaries for React components

Would you like me to review a specific error message?`;

    } else if (lowerMessage.includes('react') || lowerMessage.includes('component')) {
      response = `React development tips:

⚛️ **React Best Practices:**
• Use functional components with hooks
• Implement proper state management
• Use useEffect for side effects
• Optimize with useMemo and useCallback when needed

🎨 **Component Structure:**
• Keep components small and focused
• Use proper prop types or TypeScript
• Implement proper error boundaries
• Follow the single responsibility principle`;

    } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
      response = `AI/ML Integration suggestions:

🤖 **AI Development:**
• Consider TensorFlow.js for client-side ML
• Use OpenAI API for natural language processing
• Implement proper data preprocessing
• Use appropriate model architectures

📊 **Data Handling:**
• Ensure proper data validation
• Implement data privacy measures
• Use appropriate data structures
• Consider performance implications`;

    } else if (lowerMessage.includes('blockchain') || lowerMessage.includes('ethereum')) {
      response = `Blockchain development guidance:

⛓️ **Blockchain Integration:**
• Use Web3.js or Ethers.js for Ethereum interaction
• Implement proper wallet connection
• Handle transaction errors gracefully
• Consider gas optimization

🔐 **Security Considerations:**
• Never expose private keys in code
• Validate all inputs
• Use established libraries and patterns
• Implement proper access controls`;

    } else if (lowerMessage.includes('generate') || lowerMessage.includes('create')) {
      const codeSnippet = `// AI-generated code suggestion
function enhanceYourCode() {
  try {
    // Add your implementation here
    console.log('Enhanced functionality');
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, error };
  }
}`;
      
      response = `Here's a code snippet I generated for you:

\`\`\`javascript
${codeSnippet}
\`\`\`

Would you like me to add this to your current file?`;

    } else {
      response = `I'm here to help with your coding needs! I can assist with:

🛠️ **Available Services:**
• Code analysis and review
• Debugging and error resolution
• Performance optimization
• React development guidance
• AI/ML integration tips
• Blockchain development
• Code generation and suggestions
• Best practices and patterns

Just ask me about any specific aspect you'd like help with!`;
    }

    setIsThinking(false);
    return response;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    const response = await generateResponse(inputValue);
    
    const assistantMessage = {
      type: 'assistant',
      content: response,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMessage]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { label: '📊 Analyze Code', action: 'analyze my code' },
    { label: '🚀 Optimize Code', action: 'optimize my code' },
    { label: '🐛 Debug Help', action: 'help me debug' },
    { label: '⚛️ React Tips', action: 'react best practices' },
  ];

  return (
    <div className="ai-assistant">
      <div className="assistant-header">
        <h3>🤖 AI Assistant</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-content">
              <pre>{message.content}</pre>
            </div>
            <div className="message-time">
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        ))}
        
        {isThinking && (
          <div className="message assistant thinking">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
              AI is thinking...
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="quick-actions">
        {quickActions.map((action, index) => (
          <button
            key={index}
            className="quick-action"
            onClick={() => setInputValue(action.action)}
          >
            {action.label}
          </button>
        ))}
      </div>

      <div className="input-container">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about your code..."
          rows={3}
        />
        <button 
          className="send-btn" 
          onClick={handleSendMessage}
          disabled={isThinking || !inputValue.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;