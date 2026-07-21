import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
    type: 'input',
  },
  {
    id: 'n2',
    position: { x: 100, y: 100 },
    data: { label: 'Node 2' },
    type: 'output',
  },
];

export default function GraphPage () {
	return(
	  <div style={{ height: '100wv', width: '100vh' }}>
		<ReactFlow nodes={initalNodes}>
		< /ReactFlow>
	  </div>

	);
}

export default GraphPage()

