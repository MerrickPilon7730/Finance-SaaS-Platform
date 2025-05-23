
import { FileSearch, Loader2, PieChart, Radar, Target } from "lucide-react";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { PieVariant } from "@/components/charts/category-chart/pie-variant";
import { RadarVariant } from "@/components/charts/category-chart/radar-variant";
import { RadialVariant } from "@/components/charts/category-chart/radial-variant";



type Props = {
    data?: {
        name: string;
        value: number;
    }[];
}

export const SpendingPieChart = ({ data = [] }: Props) => {
    const [chartType, setChartType] = useState("pie");

    const onTypeChange = (type: string) => {
        setChartType(type);
    };

    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Categories
                </CardTitle>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Select a chart type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pie">
                            <div className="flex items-center">
                                <PieChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Pie Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="radar">
                            <div className="flex items-center">
                                <Radar className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Radar Chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value="radial">
                            <div className="flex items-center">
                                <Target className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Radial Chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="text-muted-foreground size 6" />
                        <p className="text-sm text-muted-foreground">
                            No data for this period
                        </p>
                    </div>
                ) : (
                    <>
                        {chartType ==="pie" && <PieVariant data={data} />}
                        {chartType ==="radar" && <RadarVariant data={data} />}
                        {chartType ==="radial" && <RadialVariant data={data} />}
                    </>

                )}
            </CardContent>
        </Card>
    );
};

export const SpendingPieChartLoading = () => {
    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-8 lg:w-[120px] w-full" />
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center h-[350px] w-full">
                    <Loader2 className="size-6 text-slate-300 animate-spin" />
                </div>
            </CardContent>
        </Card>
    );
};