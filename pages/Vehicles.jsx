import VehiclesTable from "../components/VehiclesTable";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardHeader, Checkbox, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Progress, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React, { useState } from "react";

export default function Vehicles() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [filters] = useState(["electric","diesel","owned"]);
    const [maint] = useState([
      {id:1, asset:'Class 8 Truck', status:'ok', next:'2026-03-12'},
      {id:2, asset:'SD70ACe', status:'due', next:'2026-02-28'},
    ]);
    const [isOpen, setOpen] = useState(false);
    const [form, setForm] = useState({ name: '', type: '', active: true });
    const openEditor = (m) => { setForm({ name: m.asset, type: m.asset.includes('Truck') ? 'truck' : (m.asset.includes('Car') ? 'railcar' : 'locomotive'), active: m.status === 'ok' }); setOpen(true); };
    const save = () => { setOpen(false); };
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardBody className="p-5">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-end">
      <div className="flex-1">
      <Input
      label="Search vehicles"
      value={search}
      onValueChange={setSearch}
      labelPlacement="outside"
      placeholder="Search by name..."
      classNames={{
      inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60",
      label: "text-[var(--color-text)]"
      }}
      startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
      />
      </div>
      <div className="w-full md:w-64">
      <Select
      label="Type"
      selectedKeys={type ? [type] : []}
      onSelectionChange={(keys) => setType(Array.from(keys)[0] || "")}
      labelPlacement="outside"
      classNames={{
      trigger: "bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12",
      popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl",
      label: "text-[var(--color-text)]"
      }}
      >
      {['truck','locomotive','railcar'].map((k) => (
      <SelectItem key={k} className="text-[var(--color-text)] capitalize">{k}</SelectItem>
      ))}
      </Select>
      </div>
      <div className="flex md:justify-end">
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">
      <PlusIcon className="w-4 h-4 text-[var(--color-text)] mr-2" />
      <span className="text-[var(--color-text)]">Add type</span>
      </Button>
      </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
      {filters.map((f) => (
      <Chip key={f} size="sm" variant="flat" className="rounded-xl bg-[var(--color-background)]/60 text-[var(--color-text)] border border-[var(--color-border)]">{f}</Chip>
      ))}
      </div>
      </CardBody>
      </Card>
      </section>
  <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
      <VehiclesTable 
      rows={[
      {id:1, name:'Class 8 Truck', type:'truck', capacity:'22t', status:'active'},
      {id:2, name:'SD70ACe', type:'locomotive', capacity:'4300hp', status:'active'},
      {id:3, name:'Hopper Car', type:'railcar', capacity:'120t', status:'maintenance'}
      ]}
      onEdit={() => {}}
      onDelete={() => {}}
      />
      </div>

      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Cost summary</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0 space-y-4">
      <div>
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Fuel</span><span className="text-[var(--color-text)]/90">$1.2M</span></div>
      <Progress value={62} classNames={{ indicator: "bg-[var(--color-primary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <div>
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Maintenance</span><span className="text-[var(--color-text)]/90">$520k</span></div>
      <Progress value={38} classNames={{ indicator: "bg-[var(--color-secondary)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <div>
      <div className="flex justify-between text-xs"><span className="text-[var(--color-text)]/70">Leasing</span><span className="text-[var(--color-text)]/90">$320k</span></div>
      <Progress value={24} classNames={{ indicator: "bg-[var(--color-accent)]", track: "bg-[var(--color-border)]" }} />
      </div>
      <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">FY 2026 YTD</Chip>
      </CardBody>
      </Card>
      </div>
      </section>
  <section>
      <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
      <CardHeader className="p-5">
      <h3 className="text-[var(--color-text)] font-semibold">Maintenance snapshot</h3>
      </CardHeader>
      <CardBody className="p-5 pt-0">
      <Table aria-label="Maintenance table">
      <TableHeader>
      <TableColumn className="text-[var(--color-text)]">ASSET</TableColumn>
      <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
      <TableColumn className="text-[var(--color-text)]">NEXT SERVICE</TableColumn>
      <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
      {maint.map((m) => (
      <TableRow key={m.id}>
      <TableCell className="text-[var(--color-text)]">{m.asset}</TableCell>
      <TableCell>
      <Chip size="sm" variant="flat" className={`rounded-xl ${m.status === 'ok' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'}`}>{m.status}</Chip>
      </TableCell>
      <TableCell className="text-[var(--color-text)]">{m.next}</TableCell>
      <TableCell>
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={() => openEditor(m)}>Edit</Button>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)} classNames={{ base: 'bg-[var(--color-background)] text-[var(--color-text)] rounded-2xl' }}>
      <ModalContent>
      <ModalHeader>Edit vehicle</ModalHeader>
      <ModalBody className="space-y-3">
      <Input label="Name" value={form.name} onValueChange={(v) => setForm({ ...form, name: v })} classNames={{ inputWrapper: 'bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl', input: 'text-[var(--color-text)]', label: 'text-[var(--color-text)]' }} />
      <Select label="Type" selectedKeys={form.type ? [form.type] : []} onSelectionChange={(keys) => setForm({ ...form, type: Array.from(keys)[0] || '' })} classNames={{ trigger: 'bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl h-12', popoverContent: 'bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl', label: 'text-[var(--color-text)]' }}>
      {['truck','locomotive','railcar'].map((k) => (
      <SelectItem key={k} className="text-[var(--color-text)] capitalize">{k}</SelectItem>
      ))}
      </Select>
      <Checkbox isSelected={!!form.active} onValueChange={(v) => setForm({ ...form, active: v })}>
      <span className="text-[var(--color-text)]">Active</span>
      </Checkbox>
      </ModalBody>
      <ModalFooter>
      <Button variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)]" onPress={() => setOpen(false)}>Cancel</Button>
      <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onPress={save}>Save</Button>
      </ModalFooter>
      </ModalContent>
      </Modal>
      </section>
      </div>
    </div>
  );
}
