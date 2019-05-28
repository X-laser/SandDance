// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
export const strings = {
    appName: "SandDance",
    bingsearch: "Bing",
    buttonClose: "Close",
    buttonSelect: "Search & Select",
    buttonColorSchemeMap: "Map color scheme to filtered data",
    buttonColorSchemeRemap: "Remap color to filtered data",
    buttonColorSchemeKeep: "Keep same color scheme",
    buttonCopyToClipboard: "Copy to clipboard",
    buttonExclude: "Exclude",
    buttonIsolate: "Isolate",
    buttonReset: "Stop filtering",
    buttonDeselect: "Clear selection",
    buttonToolbarFloat: "Float toolbar",
    buttonToolbarDock: "Dock toolbar",
    buttonToolbarHide: "Hide toolbar",
    buttonToolbarShow: "Show toolbar",
    buttonNextDataItem: "Next data item",
    buttonPrevDataItem: "Previous data item",
    buttonCreateSnapshot: "Create snapshot",
    buttonAddExpression: "add expression",
    buttonAddExpressionGroup: "add group",
    buttonDeleteExpression: "delete",
    buttonDeleteExpressionGroup: "delete group",
    buttonDeleteSnapshot: "delete snapshot",
    buttonShowVegaSpec: "Show Vega spec",
    buttonLaunchVegaEditor: "Open Vega Editor",
    buttonCameraHome: "Center chart in window",
    chartTypeScatterPlot: "Scatter plot",
    chartTypeDensity: "Density",
    chartTypeBarChart: "Bar chart",
    chartTypeTreeMap: "Tree map",
    chartTypeStacks: "Stacks",
    labelChartSettings: "Chart settings",
    labelDataBrowser: "Data browser",
    labelTools: "Tools",
    labelVegaSpec: "Vega specification",
    labelColor: "Chart color",
    labelError: "Error",
    labelSnapshots: "Snapshots",
    labelSearch: "Select by search",
    labelChart: "Chart",
    labelChartCanvas: "Chart canvas",
    labelColumnMapping: "Column Mapping",
    labelChartTypeOptions: "Chart options",
    labelColorBin: "Color binning",
    labelColorBinExplanation: "For numeric columns",
    labelColorBinNone: "None (continuous)",
    labelColorBinQuantize: "Quantize",
    labelColorBinQuantile: "Quantile",
    labelColorFilter: "Note: Colors will be re-mapped to the filter when viewing this snapshot.",
    labelColorScheme: "Scheme",
    labelColumnColor: "Color by",
    labelColumnFacet: "Facet by",
    labelColumnSort: "Sort by",
    labelColumnX: "X Axis",
    labelColumnY: "Y Axis",
    labelColumnZ: "Z Axis",
    labelColumnSize: "Size by",
    labelColumnGroup: "Group by",
    labelDataItemIsFiltered: "Item is filtered from view",
    labelShowLegend: "Show legend",
    labelShowAxes: "Show axes",
    labelSnapshotDescription: "Description",
    labelTransitionDurations: "Transition durations",
    labelTransitionCamera: "2D / 3D view",
    labelTransitionColor: "Color",
    labelTransitionPosition: "Position",
    labelTransitionSize: "Size",
    labelVegaSpecData: "Data reference",
    labelVegaSpecNotes: "Note: You may need to change the color scheme to make this visible in Vega.",
    loading: "Loading...",
    schemeCategorical: "Categorical",
    schemeDiverging: "Diverging",
    schemeDual: "Dual",
    schemeSequentialMultiHue: "Sequential Multi Hue",
    schemeSequentialSingleHue: "Sequential Single Hue",
    selectDataSpanAll: "All rows",
    selectDataSpanFilter: "Filtered",
    selectDataSpanSelection: "Selected",
    selectVegaSpecDataNone: "None",
    selectVegaSpecDataInline: "Inline - WARNING this may use substantial browser/clipboard memory for large data sets.",
    selectVegaSpecDataUrl: "URL",
    record: (current, total) => `${current} of ${total}`,
    searchEQ: "=",
    searchNEQ: "<>",
    searchGT: ">",
    searchGTE: ">=",
    searchLT: "<",
    searchLTE: "<=",
    searchNULL: "is null or empty",
    searchIN: "contains",
    searchSW: "starts with",
    searchWHERE: "Where",
    searchAND: "and",
    searchOR: "or",
    selectAny: "-- any --",
    selectNone: "-- none --",
    selectNumeric: "Numeric",
    selectNumericWithBinning: "Numeric (with binning)",
    selectNonNumeric: "Categorical",
    tooltipSearch: (column, value) => `Click to search in '${column}' for "${value}"`,
    labelRequired: "required",
    lavelViewType2d: "View in 2D",
    labelViewType3d: "View in 3D",
    labelDataNullAll: "Loading data...",
    labelDataNullFiltered: "You can filter by first making a selection, then choosing <b>Isolate</b> or <b>Exclude</b> in the top bar.",
    labelDataNullSelection: "You can select by: <ul><li>clicking the chart axes</li><li>clicking in the legend</li><li>searching</li</ul>",
    labelZeroAll: "Dataset contains zero rows.",
    labelZeroSearchResults: "No rows matched your search.",
    signalGroups: [
        { prefix: "Chart", label: "Chart options" },
        { prefix: "RoleColor", label: "Color options" },
        { prefix: "RoleFacet", label: "Facet options" },
        { prefix: "RoleSort", label: "Sort options" },
        { prefix: "RoleX", label: "X axis options" },
        { prefix: "RoleY", label: "Y axis options" },
        { prefix: "RoleZ", label: "Z axis options" },
        { prefix: "Text", label: "Text options" },
        { prefix: "*", label: "Options" }
    ]
};
