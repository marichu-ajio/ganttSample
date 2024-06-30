import dynamic from 'next/dynamic';
import { ganttConfig } from "./GanttConfig";
import MuiXLicense from "./MuiXLicense.tsx";

const BryntumGantt = dynamic(() => import("@bryntum/gantt-react").then(mod => mod.BryntumGantt), { ssr: false });

function App() {
    return (
        <>
            <MuiXLicense /> {/* Ensure the license is set */}
            <BryntumGantt {...ganttConfig} />
        </>
    );
}

export default App;
