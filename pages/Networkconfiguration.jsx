import EntityCard from "../components/EntityCard";
import PageHeader from "../components/PageHeader";
import SubNavPanel from "../components/SubNavPanel";
import { Button, Card, CardBody, CardHeader, Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React, { useState } from "react";

export default function Networkconfiguration() {
    const [active, setActive] = useState('overview');
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <PageHeader 
      title="Network configuration"
      subtitle="Create and maintain your operational model"
      breadcrumbs={["Home", "Network configuration"]}
      chip="Workspace: Default"
      primaryActionLabel="New model"
      onPrimaryAction={() => {}}
      />
      </section>
  <section className="w-full">
      <div className="mb-4">
      <SubNavPanel 
      items={[{key:'overview', label:'Overview'}, {key:'nodes', label:'Nodes'}, {key:'vehicles', label:'Vehicles'}, {key:'routes', label:'Routes'}]}
      activeKey={active}
      onSelect={setActive}
      description={"Jump between entities to manage your network model."}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <EntityCard 
      title="Nodes"
      subtitle="Facilities and locations"
      description="Manage mines, mills, and transloads."
      tags={["mines","mills","transloads"]}
      chip="Configured: 12"
      onOpen={() => {}}
      />
      <EntityCard 
      title="Vehicles"
      subtitle="Trucks, locomotives, railcars"
      description="Catalog capacities, costs, and maintenance."
      tags={["types","costs","maintenance"]}
      chip="Active: 5"
      onOpen={() => {}}
      />
      <EntityCard 
      title="Routes"
      subtitle="Paths and constraints"
      description="Define corridors, distances, and restrictions."
      tags={["rail","road","constraints"]}
      chip="Defined: 18"
      onOpen={() => {}}
      />
      </div>
      </section>
  <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Recent changes</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="Recent changes table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ENTITY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTION</TableColumn>
      <TableColumn className="text-[var(--color-text)]">BY</TableColumn>
      <TableColumn className="text-[var(--color-text)]">TIME</TableColumn>
      </TableHeader>
      <TableBody>
      {[
      {entity:'Vehicle type', action:'updated', by:'Alex', time:'2h ago'},
      {entity:'Route', action:'created', by:'Sam', time:'5h ago'},
      {entity:'Node', action:'deleted', by:'Jordan', time:'1d ago'},
      ].map((r, i) => (
      <TableRow key={i}>
      <TableCell className="text-[var(--color-text)]">{r.entity}</TableCell>
      <TableCell><Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{r.action}</Chip></TableCell>
      <TableCell className="text-[var(--color-text)]">{r.by}</TableCell>
      <TableCell className="text-[var(--color-text)]">{r.time}</TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
