"use client";
import { Modal } from "../../../modal";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  getBezierPath,
  EdgeProps,
  BezierEdge,
  NodeProps,
  HandleProps,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Page = () => {
  const initialNodes = [
    {
      id: "1",
      data: { label: "Hello" },
      position: { x: 0, y: 0 },
      dragging: false,
      draggable: false,
      type: "Custom-Node",
    },
    {
      id: "2",
      data: { label: "World" },
      position: { x: 0, y: 100 },
      dragging: false,
      draggable: false,
      type: "Custom-Node",
    },
  ];

  const initialEdges = [
    { id: "1-2", source: "1", target: "2", type: "add-node", animated: true },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );
  const edgeTypes = {
    "add-node": AddNode,
  };

  const nodeTypes = {
    "Custom-Node": CustomNode,
  };

  return (
    <Modal>
      <div style={{ height: "40rem" }}>
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          fitView
          edgeTypes={edgeTypes}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </Modal>
  );
};

import {
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  useReactFlow,
} from "@xyflow/react";
import { ArrowBigDown, SquarePlus } from "lucide-react";

function AddNode(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;
  const { setEdges, getNode, setNodes } = useReactFlow();

  const [edgePath, labelX, labelY] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      {/* <BezierEdge {...props} /> */}
      <EdgeLabelRenderer>
        <button
          className={`pointer-events-auto absolute backdrop-blur-lg`}
          style={{
            top: labelY - 10,
            left: labelX - 8,
          }}
          onClick={() => {
            console.log("here in delete", id, getNode("1"));

            setNodes((nds) => [
              ...nds,
              {
                id: "3",
                data: { label: "Hello" },
                position: { x: 0, y: 200 },
                type: "input",
                dragging: false,
                draggable: false,
              },
            ]);
            setEdges((eds) => [
              ...eds,
              { id: "1-3", source: "1", target: "3", type: "step" },
            ]);
          }}
        >
          <SquarePlus className="h-4 w-4" />
        </button>
      </EdgeLabelRenderer>
    </>
  );
}

function CustomNode(props: NodeProps) {
  return (
    <div className="p-2 w-full min-w-40 flex justify-center items-center h-full bg-white shadow-md rounded-md">
      <p>{props?.data?.label as string}</p>
      <CustomHandle type="source" position={Position.Top} />
      <CustomHandle type="target" position={Position.Bottom} />
    </div>
  );
}

function CustomHandle(props: HandleProps) {
  return (
    <Handle
      className="shadow-md"
      style={{
        width: 20,
        height: 4,
        backgroundColor: "rgb(156 163 175 / var(--tw-bg-opacity))",
        borderRadius: 4,
      }}
      {...props}
    />
  );
}

export default Page;
