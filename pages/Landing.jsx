import { AdjustmentsHorizontalIcon, Cog6ToothIcon, FireIcon, MapIcon, StarIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardBody, CardHeader, Chip, Divider, Progress, Tooltip } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="relative min-h-[60vh] flex items-center justify-center rounded-2xl bg-[var(--color-background)]">
      <div className="absolute inset-0 -z-10 bg-[var(--color-background)]" />
      <div className="absolute inset-0 -z-10 opacity-90 bg-[image:var(--gradient-primary-secondary)]" style={{background: 'var(--gradient-primary-secondary)'}} />
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[var(--color-accent)]/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--color-secondary)]/30 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
      <Chip variant="flat" className="rounded-full bg-[var(--color-background)]/30 text-[var(--color-text)]">AI-powered optimization</Chip>
      <Badge content={"New"} color="secondary">
      <div className="px-3 py-1 rounded-full bg-[var(--color-background)]/30">
      <span className="text-xs text-[var(--color-text)]">Release v1.0</span>
      </div>
      </Badge>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">
      Optimize multimodal logistics at scale
      </h1>
      <p className="mt-4 text-base md:text-lg text-[var(--color-text)]/90 max-w-3xl mx-auto">
      Plan, simulate, and operate rail and road freight networks with confidence. Reduce costs, increase throughput, and hit your sustainability goals.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link to="/dashboard">
      <Button size="md" className="rounded-full bg-[var(--color-background)] text-[var(--color-primary)] font-semibold px-8 py-2 shadow-primary hover:opacity-95 transition-all">
      <span className="text-[var(--color-primary)]">Open Dashboard</span>
      </Button>
      </Link>
      <Link to="/network-configuration">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] font-semibold px-8 py-2 hover:bg-[var(--color-background)]/10 transition-colors">
      <span className="text-[var(--color-text)]">Configure Network</span>
      </Button>
      </Link>
      </div>

      <div className="mt-10 flex items-center justify-center gap-6">
      <div className="flex items-center gap-2">
      <FireIcon className="w-5 h-5 text-[var(--color-accent)]" />
      <span className="text-sm text-[var(--color-text)]/80">Faster simulations</span>
      </div>
      <div className="flex items-center gap-2">
      <StarIcon className="w-5 h-5 text-[var(--color-accent)]" />
      <span className="text-sm text-[var(--color-text)]/80">Actionable insights</span>
      </div>
      </div>
      </div>
      </section>
  <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Feature cards */}
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
      <CardHeader className="flex items-center gap-3 p-5">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
      <MapIcon className="w-5 h-5 text-[var(--color-primary)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Network modeling</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <p className="text-sm text-[var(--color-text)]/80">Define nodes, vehicles, and constraints across rail and road for a unified operational model.</p>
      <div className="mt-4 flex items-center gap-2">
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Nodes</Chip>
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Vehicles</Chip>
      </div>
      <Divider className="my-4" />
      <Tooltip content={<span className="text-[var(--color-text)] text-xs">Open Network Configuration</span>}>
      <Button as={"a"} href="/network-configuration" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-4 py-2">Configure</Button>
      </Tooltip>
      </CardBody>
      </Card>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
      <CardHeader className="flex items-center gap-3 p-5">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/20 flex items-center justify-center">
      <AdjustmentsHorizontalIcon className="w-5 h-5 text-[var(--color-secondary)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Scenario planning</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <p className="text-sm text-[var(--color-text)]/80">Run what-if simulations to evaluate cost, throughput, and on-time performance trade-offs.</p>
      <div className="mt-4 space-y-3">
      <div>
      <div className="flex justify-between text-xs">
      <span className="text-[var(--color-text)]/70">Cost reduction potential</span>
      <span className="text-[var(--color-text)]/90">-12%</span>
      </div>
      <Progress value={68} aria-label="Cost reduction" classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <div>
      <div className="flex justify-between text-xs">
      <span className="text-[var(--color-text)]/70">On-time performance</span>
      <span className="text-[var(--color-text)]/90">+8%</span>
      </div>
      <Progress value={52} aria-label="On-time performance" classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
      </div>
      </div>
      <Divider className="my-4" />
      <Button as={"a"} href="/simulation" variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)] px-4 py-2">Try a run</Button>
      </CardBody>
      </Card>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
      <CardHeader className="flex items-center gap-3 p-5">
      <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
      <FireIcon className="w-5 h-5 text-[var(--color-accent)]" />
      </div>
      <h3 className="text-[var(--color-text)] font-semibold">Operational insights</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <p className="text-sm text-[var(--color-text)]/80">Surface bottlenecks and improvement opportunities from recent simulation runs.</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Throughput</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">+6.2%</p>
      </div>
      <div className="p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
      <p className="text-xs text-[var(--color-text)]/70">Dwell time</p>
      <p className="text-lg font-semibold text-[var(--color-text)]">-9.1%</p>
      </div>
      </div>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardBody className="p-5">
      <div className="flex items-center justify-between mb-3">
      <h3 className="text-base font-semibold text-[var(--color-text)]">Seamless integrations</h3>
      <Chip variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Popular</Chip>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
      {["Snowflake","Databricks","BigQuery","S3","Kinesis","Kafka","Supabase"].map((name) => (
      <div key={name} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)] shrink-0">
      <StarIcon className="w-4 h-4 text-[var(--color-accent)]" />
      <span className="text-sm text-[var(--color-text)]">{name}</span>
      <Badge content="beta" color="warning" />
      </div>
      ))}
      </div>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
