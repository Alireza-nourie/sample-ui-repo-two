import { Badge, Button, Card, CardBody, CardHeader, Chip, Progress, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@heroui/react";
import React, { useState } from "react";

export default function Simulation() {
    const [mode, setMode] = useState('planning');
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardBody className="p-5">
      <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-[var(--color-text)]">Simulation</h2>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">New configuration</Button>
      </div>
      <Tabs selectedKey={mode} onSelectionChange={setMode} classNames={{ tabList: "bg-[var(--color-background)]/60 rounded-xl p-1 border border-[var(--color-border)]", cursor: "bg-[var(--color-primary)] rounded-lg", tab: "rounded-lg text-[var(--color-text)]" }}>
      <Tab key="planning" title="Planning mode">
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Design and compare scenarios</Chip>
      </Tab>
      <Tab key="production" title="Production mode">
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">Monitor ongoing runs</Chip>
      </Tab>
      </Tabs>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="flex items-center justify-between p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Configurations</h3>
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">New</Button>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="Configurations table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
      <TableColumn className="text-[var(--color-text)]">MODE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {[{name:'Plan A', mode:'planning'}, {name:'Plan B', mode:'production'}].map((c, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{c.name}</TableCell>
      <TableCell><Chip size="sm" variant="flat" className={`rounded-xl ${c.mode === 'planning' ? 'bg-[var(--color-primary)]/15 text-[var(--color-primary)]' : 'bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]'}`}>{c.mode}</Chip></TableCell>
      <TableCell>
      <div className="flex gap-2">
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)]">Open</Button>
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Run</Button>
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
      <h3 className="text-[var(--color-text)] font-semibold">Recent runs</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="Recent runs table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">RUN</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {[{run:'#2451', status:'complete'}, {run:'#2450', status:'running'}, {run:'#2449', status:'failed'}].map((r, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{r.run}</TableCell>
      <TableCell>
      <Badge content={r.status} color={r.status === 'complete' ? 'success' : r.status === 'running' ? 'primary' : 'warning'} />
      </TableCell>
      <TableCell>
      <div className="flex gap-2">
      <Button size="sm" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)]">Details</Button>
      {r.status === 'running' ? (
      <Button size="sm" className="rounded-xl bg-[var(--color-accent)] text-[var(--color-text)]">Stop</Button>
      ) : (
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Start</Button>
      )}
      </div>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="flex items-center justify-between p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Results at a glance</h3>
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Last run</Chip>
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
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">View results</Button>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
