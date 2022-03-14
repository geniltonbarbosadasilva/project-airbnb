import React from "react";
import { LogBox } from 'react-native';
import Routes from "./src/routes";

LogBox.ignoreAllLogs(true);

export default function App() {
  return <Routes />;
}
