import { GanttConfig } from "@bryntum/gantt";

const ganttConfig: Partial<GanttConfig> = {
    columns: [{ type: "name", field: "name", width: 250 }],
    viewPreset: "weekAndDayLetter",
    barMargin: 10,

    project: {
        transport: {
            load: {
                url: "data.json",
            },
        },
        autoLoad: true,
    },
};

export { ganttConfig };
