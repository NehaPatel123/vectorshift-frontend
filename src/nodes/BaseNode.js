import React from "react";
import { Handle, Position } from "reactflow";

const baseStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  background: "#fff",
  minWidth: "180px",
  fontSize: "14px",
};

const headerStyle = {
  fontWeight: "600",
  marginBottom: "8px",
  borderBottom: "1px solid #eee",
  paddingBottom: "4px",
};

export default function BaseNode({ title, inputs = [], outputs = [], children }) {
  return (
    <div style={baseStyle}>
      <div style={headerStyle}>{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={input}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={output}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      {children}
    </div>
  );
}
