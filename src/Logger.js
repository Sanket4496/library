import { log } from "./log";

export const Logger = ({ children }) => children(log);