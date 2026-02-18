
        import React from "react";
import { Card, CardBody, Chip, Badge } from "@heroui/react";
        export default function IntegrationStatus({ integrations = [] }) {
        return (
            <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
    <CardBody className="p-5">
    <div className="flex flex-wrap gap-3">
    {integrations.map((it) => (
    <div key={it.name} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
    <Chip size="sm" variant="flat" className={`${it.connected ? 'bg-[var(--color-secondary)]/20 text-[var(--color-secondary)]' : 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'} rounded-xl`}>{it.name}</Chip>
    <Badge content={it.connected ? 'ok' : 'off'} color={it.connected ? 'success' : 'warning'} />
    </div>
    ))}
    </div>
    </CardBody>
    </Card>
        );
        }
