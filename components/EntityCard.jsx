
        import React from "react";
import { Card, CardHeader, CardBody, Button, Chip } from "@heroui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
        export default function EntityCard({ title, subtitle, description, tags = [], onOpen = () => {}, chip }) {
        return (
            <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)] hover:shadow-primary transition-all">
    <CardHeader className="flex items-center justify-between p-5">
    <div>
    <h4 className="text-sm font-semibold text-[var(--color-text)]">{title}</h4>
    {subtitle ? <p className="text-xs text-[var(--color-text)]/70">{subtitle}</p> : null}
    </div>
    {chip ? <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{chip}</Chip> : null}
    </CardHeader>
    <CardBody className="p-5 pt-0">
    <p className="text-sm text-[var(--color-text)]/80">{description}</p>
    <div className="mt-4 flex items-center justify-between">
    <div className="flex gap-2">
    {tags?.map((t) => (
    <Chip key={t} size="sm" variant="flat" className="rounded-xl bg-[var(--color-background)]/60 text-[var(--color-text)] border border-[var(--color-border)]">{t}</Chip>
    ))}
    </div>
    <Button size="sm" onPress={onOpen} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-3 py-1">
    <span className="text-[var(--color-text)]">Manage</span>
    <ChevronRightIcon className="w-4 h-4 text-[var(--color-text)] ml-1" />
    </Button>
    </div>
    </CardBody>
    </Card>
        );
        }
