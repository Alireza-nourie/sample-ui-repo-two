
        import React from "react";
import { Breadcrumbs, BreadcrumbItem, Button, Chip } from "@heroui/react";
        export default function PageHeader({ title, subtitle, breadcrumbs = [], chip, primaryActionLabel, onPrimaryAction = () => {} }) {
        return (
            <div className="w-full flex flex-col gap-3">
    <Breadcrumbs>
    {breadcrumbs?.map((bc, idx) => (
    <BreadcrumbItem key={idx} className="text-[var(--color-text)]">{bc}</BreadcrumbItem>
    ))}
    </Breadcrumbs>
    <div className="flex items-center justify-between">
    <div>
    <h2 className="text-xl font-semibold text-[var(--color-text)]">{title}</h2>
    {subtitle ? <p className="text-sm text-[var(--color-text)]/70">{subtitle}</p> : null}
    </div>
    <div className="flex items-center gap-2">
    {chip ? <Chip size="sm" variant="flat" className="rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)]">{chip}</Chip> : null}
    {primaryActionLabel ? (
    <Button onPress={onPrimaryAction} className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)] px-4 py-2">
    <span className="text-[var(--color-text)]">{primaryActionLabel}</span>
    </Button>
    ) : null}
    </div>
    </div>
    </div>
        );
        }
