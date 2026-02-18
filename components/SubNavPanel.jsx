
        import React from "react";
import { Card, CardBody, Button, Divider } from "@heroui/react";
        export default function SubNavPanel({ items = [], activeKey, onSelect = () => {}, description }) {
        return (
            <Card className="rounded-2xl bg-[var(--color-surface)]/80 border border-[var(--color-border)]">
    <CardBody className="p-4">
    <div className="flex flex-wrap gap-2">
    {items.map((item) => (
    <Button key={item.key} size="sm" onPress={() => onSelect(item.key)}
    className={`rounded-xl px-3 py-1 ${activeKey === item.key ? 'bg-[var(--color-primary)] text-[var(--color-text)]' : 'bg-[var(--color-background)] text-[var(--color-text)] border border-[var(--color-border)]'}`}
    >
    <span className="text-sm text-[var(--color-text)]">{item.label}</span>
    </Button>
    ))}
    </div>
    {description ? (
    <>
    <Divider className="my-3" />
    <p className="text-xs text-[var(--color-text)]/70">{description}</p>
    </>
    ) : null}
    </CardBody>
    </Card>
        );
        }
