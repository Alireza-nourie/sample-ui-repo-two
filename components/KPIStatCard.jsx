
        import React from "react";
import { Card, CardHeader, CardBody, Chip } from "@heroui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
        export default function KPIStatCard({ title, value, deltaLabel, deltaType = 'up', chipLabel, subtitle }) {
        return (
            <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
    <CardHeader className="flex items-center justify-between p-5">
    <h4 className="text-sm font-semibold text-[var(--color-text)]">{title}</h4>
    {chipLabel ? (
    <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{chipLabel}</Chip>
    ) : null}
    </CardHeader>
    <CardBody className="p-5 pt-0">
    <div className="flex items-end gap-3">
    <p className="text-2xl font-bold text-[var(--color-text)]">{value}</p>
    {deltaLabel ? (
    <div className="flex items-center gap-1">
    {deltaType === 'up' ? (
    <ArrowUpIcon className="w-4 h-4 text-[var(--color-secondary)]" />
    ) : (
    <ArrowDownIcon className="w-4 h-4 text-[var(--color-accent)]" />
    )}
    <span className="text-xs text-[var(--color-text)]/80">{deltaLabel}</span>
    </div>
    ) : null}
    </div>
    {subtitle ? <p className="text-xs text-[var(--color-text)]/70 mt-2">{subtitle}</p> : null}
    </CardBody>
    </Card>
        );
        }
