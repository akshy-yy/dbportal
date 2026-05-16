import type { ReactNode } from "react";

interface EmptyStateProps {
  children: ReactNode;
  onRetry?: () => void;
}

export default function EmptyState({ children, onRetry }: EmptyStateProps) {
  return (
    <div className="empty-state">
      {children}
      {onRetry && (
        <button
          className="retry-btn"
          onClick={onRetry}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1.5rem",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid currentColor",
            background: "transparent",
            fontSize: "0.9rem",
          }}
        >
          🔄 Retry
        </button>
      )}
    </div>
  );
}