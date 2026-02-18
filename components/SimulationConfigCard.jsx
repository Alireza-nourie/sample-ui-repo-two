
        import React from "react";
import { Card, CardHeader, CardBody, Button, Chip } from "@heroui/react";
import { PlayIcon, EyeIcon } from "@heroicons/react/24/outline";
        export default function SimulationConfigCard({ config, onOpen = () => {}, onRun = () => {} }) {
        return (
            <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
    <CardHeader className="flex items-center justify-between p-5">
    <div>
    <h4 className="text-sm font-semibold text-[var(--color-text)]">{config?.name || 'Untitled config'}</h4>
    <p className="text-xs text-[var(--color-text)]/70">Mode: {config?.mode || 'N/A'}</p>
    </div>
    {config?.status ? (
    <Chip size="sm" variant="flat" className={`rounded-xl ${config.status === 'ready' ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'}`}>{config.status}</Chip>
    ) : null}
    </CardHeader>
    <CardBody className="p-5 pt-0">
    <p className="text-sm text-[var(--color-text)]/80">{config?.description || 'No description provided.'}</p>
    <div className="mt-4 flex gap-2">
    <Button size="sm" onPress={() => onOpen(config)} variant="bordered" className="rounded-xl border-[var(--color-text)] text-[var(--color-text)] px-3 py-1">
    <EyeIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />
    <span className="text-[var(--color-text)]">Open</span>
    </Button>
    <Button size="sm" onPress={() => onRun(config)} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-3 py-1">
    <PlayIcon className="w-4 h-4 text-[var(--color-text)] mr-1" />
    <span className="text-[var(--color-text)]">Run</span>
    </Button>
    </div>
    </CardBody>
    </Card>
        );
        }
