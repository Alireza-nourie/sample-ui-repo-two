import KPIStatCard from "../components/KPIStatCard";
import { Badge, Button, Card, CardBody, CardHeader, Chip, Divider, Progress, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@heroui/react";
import React, { useState } from "react";

export default function Dashboard() {
    const [tabKey, setTabKey] = useState('all');
    const allNotifications = [
      { msg: 'Run #2451 completed successfully', type: 'success' },
      { msg: '2 integrations require attention', type: 'warning' },
      { msg: 'New KPI summary available', type: 'info' }
    ];
    const alerts = [
      { msg: 'Run #2449 failed: capacity violation', severity: 'high' }
    ];
    const events = [
      { event: 'Plan A duplicated', time: '2h ago' },
      { event: 'Vehicle catalog updated', time: '6h ago' },
      { event: 'User invited to workspace', time: '1d ago' }
    ];
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <KPIStatCard title="On-time %" value="92.4%" deltaLabel="+1.2%" deltaType="up" chipLabel="7d" subtitle="vs last period" />
      <KPIStatCard title="Avg. dwell (hrs)" value="3.6" deltaLabel="-0.3" deltaType="down" chipLabel="7d" subtitle="vs last period" />
      <KPIStatCard title="Throughput" value="+6.2%" deltaLabel="+0.8%" deltaType="up" chipLabel="7d" subtitle="vs last period" />
      </div>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="flex items-center justify-between p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Trends</h3>
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Last 30 days</Chip>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Tabs
      classNames={{
      tabList: "bg-[var(--color-background)]/60 rounded-xl p-1 border border-[var(--color-border)]",
      cursor: "bg-[var(--color-primary)] rounded-lg",
      tab: "rounded-lg text-[var(--color-text)]",
      tabContent: "group-data-[selected=true]:text-[var(--color-text)]"
      }}
      >
      <Tab key="cost" title="Cost">
      <div className="space-y-3">
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Operations</span><span className="text-[var(--color-text)]/90">-12%</span></div>
      <Progress value={65} classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      </Tab>
      <Tab key="otp" title="On-time">
      <div className="space-y-3">
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">OTP</span><span className="text-[var(--color-text)]/90">+8%</span></div>
      <Progress value={52} classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
      </div>
      </Tab>
      <Tab key="throughput" title="Throughput">
      <div className="space-y-3">
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Tonnage</span><span className="text-[var(--color-text)]/90">+6.2%</span></div>
      <Progress value={58} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      </Tab>
      </Tabs>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="flex items-center justify-between p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Recent simulation runs</h3>
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)]">Filter</Button>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="Simulation runs" className="bg-transparent">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">RUN</TableColumn>
      <TableColumn className="text-[var(--color-text)]">CONFIG</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {[{id:1, run:"#2451", cfg:"Plan A", status:"complete"}, {id:2, run:"#2450", cfg:"Plan B", status:"running"}, {id:3, run:"#2449", cfg:"Plan A", status:"failed"}].map((r) => (
      <TableRow key={r.id}>
      <TableCell className="text-[var(--color-text)]">{r.run}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.cfg}</TableCell>
      <TableCell>
      <Chip size="sm" variant="flat" className={`rounded-xl ${r.status === 'complete' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : r.status === 'running' ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'}`}>{r.status}</Chip>
      </TableCell>
      <TableCell>
      <div className="flex gap-2">
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Inspect</Button>
      </div>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Recent results</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0 space-y-4">
      <div>
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Cost change</span><span className="text-[var(--color-text)]/90">-11.4%</span></div>
      <Progress value={64} classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <div>
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">On-time</span><span className="text-[var(--color-text)]/90">+7.1%</span></div>
      <Progress value={48} classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">View all results</Button>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Notifications</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Tabs selectedKey={tabKey} onSelectionChange={setTabKey} classNames={{ tabList: "bg-[var(--color-background)]/60 rounded-xl p-1 border border-[var(--color-border)]", cursor: "bg-[var(--color-primary)] rounded-lg", tab: "rounded-lg text-[var(--color-text)]" }}>
      <Tab key="all" title="All">
      <Table aria-label="Notifications table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">MESSAGE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">TYPE</TableColumn>
      </TableHeader>
      <TableBody>
      {allNotifications.map((n, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{n.msg}</TableCell>
      <TableCell>
      <Chip size="sm" variant="flat" className={`rounded-xl ${n.type === 'info' ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]' : n.type === 'warning' ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]' : 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]'}`}>{n.type}</Chip>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </Tab>
      <Tab key="alerts" title="Alerts">
      <Table aria-label="Alerts table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ALERT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">SEVERITY</TableColumn>
      </TableHeader>
      <TableBody>
      {alerts.map((n, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{n.msg}</TableCell>
      <TableCell>
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-accent)]/20 text-[var(--color-accent)]">{n.severity}</Chip>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </Tab>
      </Tabs>
      </CardBody>
      </Card>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">System events</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="System events table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">EVENT</TableColumn>
      <TableColumn className="text-[var(--color-text)]">TIME</TableColumn>
      </TableHeader>
      <TableBody>
      {events.map((e, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{e.event}</TableCell>
      <TableCell className="text-[var(--color-text)]">{e.time}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </section>
      </div>
    </div>
  );
}
