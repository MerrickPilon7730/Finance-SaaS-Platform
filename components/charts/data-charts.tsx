"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";

import { Chart, ChartLoading } from "@/components/charts/transactions-chart/chart";
import { SpendingPieChart, SpendingPieChartLoading } from "@/components/charts/category-chart/spending-pie-chart";

export const DataCharts = () => {
    const { data, isLoading } = useGetSummary();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                <div className="col-span-1 lg:col-span-3 xl:col-span-4">
                    <ChartLoading />
                </div>
                <div className="col-span-1 lg:col-span-3 xl:col-span-2">
                    <SpendingPieChartLoading/>
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <div className="col-span-1 lg:col-span-3 xl:col-span-4">
                <Chart data={data?.days}/>
            </div>
            <div className="col-span-1 lg:col-span-3 xl:col-span-2">
                <SpendingPieChart  data={data?.categories}/>
            </div>
        </div>
    );
};