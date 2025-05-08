'use client'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, XAxis } from 'recharts';
import { salePlatforms, sales } from '../../data/sales';
import { SaleTable } from '@/components/sale-table';

const barChartConfig = {
  sale: {
    label: 'Sale',
    color: '#2563eb',
  }
} satisfies ChartConfig;

const pieChartConfig = {
  count: {
    label: 'Count',
  },
  online: {
    label: 'Online',
    color: '#2563eb',
  },
  store: {
    label: 'Store',
    color: '#EF4444',
  },
  others: {
    label: 'Others',
    color: '#FACC15',
  },
} satisfies ChartConfig;

export default function Home() {

  return (
    <div className={`space-y-10`}>
      <div className={`px-2 py-1 text-white bg-blue-500`}>
        <p className={`text-lg font-bold`}>Hi, Huy Hoang Nguyen</p>
        <p className={`text-xs`}>Welcome Back to Admin Dashboard!</p>
      </div>
      <div className={`space-y-5`}>
        <div className={`flex gap-5 overflow-x-auto`}>
          <div className={`w-60 space-y-3 px-3 py-2 bg-zinc-200 rounded-md`}>
            <p className={`text-sm`}>Total Earning</p>
            <div>
              <p className={`text-xl font-bold`}>$121.500.100</p>
              <p className={`text-xs text-green-500`}>+12% from last month</p>
            </div>
          </div>
          <div className={`w-60 space-y-3 px-3 py-2 bg-zinc-200 rounded-md`}>
            <p className={`text-sm`}>Total Spending</p>
            <div>
              <p className={`text-xl font-bold`}>$203.500.100</p>
              <p className={`text-xs text-green-500`}>+23% from last month</p>
            </div>
          </div>
          <div className={`w-60 space-y-3 px-3 py-2 bg-zinc-200 rounded-md`}>
            <p className={`text-sm`}>Sales</p>
            <div>
              <p className={`text-xl font-bold`}>1232</p>
              <p className={`text-xs text-green-500`}>+10% from last month</p>
            </div>
          </div>
          <div className={`w-60 space-y-3 px-3 py-2 bg-zinc-200 rounded-md`}>
            <p className={`text-sm`}>Active Now</p>
            <div>
              <p className={`text-xl font-bold`}>322</p>
              <p className={`text-xs text-red-400`}>-10% from last hour</p>
            </div>
          </div>
        </div>
        <div className={`flex gap-5`}>
          <div className={`w-96 px-4 py-2 bg-zinc-200 rounded-md`}>
            <p>Overview</p>
            <ChartContainer config={barChartConfig}>
              <BarChart accessibilityLayer data={sales} margin={{ top: 20 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey={`month`} tickLine={false} tickMargin={10} tickFormatter={value => value.toLocaleString('vi-VN')} />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey={`sale`} fill={`#2563eb`}>
                  <LabelList position={`top`} className={'fill-foreground'} fontSize={12} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
          <div className={`w-96 px-4 py-2 bg-zinc-200 rounded-md`}>
            <p>Sale Platforms</p>
            <ChartContainer config={pieChartConfig}>
              <PieChart>
                <Pie data={salePlatforms} dataKey={'count'}>
                  <LabelList position={`top`} className={'fill-foreground'} fontSize={12} />
                </Pie>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent nameKey={'name'} />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
        <SaleTable />
      </div>
    </div>
  );
}
