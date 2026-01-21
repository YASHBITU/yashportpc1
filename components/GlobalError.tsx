'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Fix: Explicitly inheriting from Component with generic types for Props and State
export default class GlobalError extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Fix: Explicitly declaring state as a property to resolve "Property 'state' does not exist" error
  public state: ErrorBoundaryState = { 
    hasError: false 
  };

  // Fix: Explicitly declaring props as a property to resolve "Property 'props' does not exist" error (Line 57 fix)
  public props: ErrorBoundaryProps;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("CRITICAL_SYSTEM_ERROR:", error, errorInfo);
  }

  render() {
    // Fix: Accessing state via this.state (Line 34 fix)
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[100000] bg-black flex items-center justify-center p-6 text-center font-mono">
          <div className="max-w-md">
            <AlertTriangle size={64} className="text-red-600 mx-auto mb-6" />
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Kernel Panic</h1>
            <p className="text-zinc-500 text-sm mb-8">
              A critical exception occurred during runtime. Authority protocol has been triggered to prevent memory leaks.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all"
            >
              <RefreshCw size={16} />
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    // Fix: Accessing props via this.props (Line 57 fix)
    return this.props.children;
  }
}
