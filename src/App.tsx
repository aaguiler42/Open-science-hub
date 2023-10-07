// import vis from "vis-network";
import "./App.css";
import { useState } from "react";
import { ClerkProvider, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route } from "wouter";

const clerk_pub_key = "pk_test_bWFqb3ItcGVnYXN1cy04My5jbGVyay5hY2NvdW50cy5kZXYk";

import { nodes, edges } from "./data/graph";
import Graph from "./components/Graph";
import { NodeData } from "./types";
import Onboarding from "./components/Onboarding";
import List from "./components/List";
import Nav from "./components/Nav";
import Filters from "./components/Filters";

function App() {
  const [selected, setSelected] = useState<NodeData | null>(null);

  return (
    <ClerkProvider
      publishableKey={clerk_pub_key}
    >
    <Route path="/onboarding">
      <Onboarding />
    </Route>
    <div style={{
      height: "100vh",
    }}>
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 5fr",
          overflow: "hidden",
          padding: "2rem",
          height: "96vh"
        }}
      >
        <List nodes={nodes} />
        <div style={{
          height: "90vh",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 10000
          }}><Filters /></div>
        <Graph height="90vh" nodes={nodes} edges={edges} />
        </div>
      </div>
      <SignInButton mode="modal">Login</SignInButton>
      <UserButton />
      </div>
    </ClerkProvider>
  );
}

export default App;
