import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
    const found = new Set();
    let match;

    while ((match = regex.exec(currText)) !== null) {
      found.add(match[1]);
    }

    setVariables(Array.from(found));
  }, [currText]);

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>Text</span>
      </div>

      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>

      {variables.map((v, i) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          style={{ top: 40 + i * 18 }}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
