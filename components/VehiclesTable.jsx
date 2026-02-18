
        import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button } from "@heroui/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
        export default function VehiclesTable({ rows = [], onEdit = () => {}, onDelete = () => {} }) {
        return (
            <Table aria-label="Vehicles table" className="bg-[var(--color-surface)]/80 rounded-2xl border border-[var(--color-border)]">
    <TableHeader>
    <TableColumn className="text-[var(--color-text)]">NAME</TableColumn>
    <TableColumn className="text-[var(--color-text)]">TYPE</TableColumn>
    <TableColumn className="text-[var(--color-text)]">CAPACITY</TableColumn>
    <TableColumn className="text-[var(--color-text)]">STATUS</TableColumn>
    <TableColumn className="text-[var(--color-text)]">ACTIONS</TableColumn>
    </TableHeader>
    <TableBody>
    {rows.map((r) => (
    <TableRow key={r.id}>
    <TableCell className="text-[var(--color-text)]">{r.name}</TableCell>
    <TableCell className="text-[var(--color-text)]">{r.type}</TableCell>
    <TableCell className="text-[var(--color-text)]">{r.capacity}</TableCell>
    <TableCell>
    <Chip size="sm" variant="flat" className={`rounded-xl ${r.status === 'active' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'}`}>{r.status}</Chip>
    </TableCell>
    <TableCell>
    <div className="flex gap-2">
    <Button size="sm" onPress={() => onEdit(r)} variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)] px-3 py-1">
    <PencilIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />
    <span className="text-[var(--color-text)]">Edit</span>
    </Button>
    <Button size="sm" onPress={() => onDelete(r)} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-3 py-1">
    <TrashIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />
    <span className="text-[var(--color-text)]">Delete</span>
    </Button>
    </div>
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
        );
        }
