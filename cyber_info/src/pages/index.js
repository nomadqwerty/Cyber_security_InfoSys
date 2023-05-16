import NavigationBar from "@/components/navigation";
import { Fragment } from "react";
export default function Home() {
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <NavigationBar />
      <div style={{ background: "blue", height: "300px" }}></div>
      <div style={{ background: "blue", height: "300px" }}></div>
      <div style={{ background: "green", height: "300px" }}></div>
      <div style={{ background: "blue", height: "300px" }}></div>
      <div style={{ background: "blue", height: "300px" }}></div>
      <div style={{ background: "blue", height: "300px" }}></div>
      <div style={{ background: "blue", height: "300px" }}></div>
    </div>
  );
}
