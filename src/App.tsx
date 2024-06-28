import { BryntumGantt } from "@bryntum/gantt-react";
import { ganttConfig } from "./GanttConfig";
import "./App.scss";
import MuiXLicense from "./MuiXLicense.tsx";

function App() {
    return (
        <>
            <MuiXLicense /> {/* Ensure the license is set */}
            <BryntumGantt {...ganttConfig} />
        </>
    );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/gantt/docs/guide/Gantt/integration/react/data-binding

export default App;
