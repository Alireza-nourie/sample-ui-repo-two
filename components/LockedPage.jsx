import React from "react";
import { Card, CardBody, Button } from "@heroui/react";

export default function LockedPage() {
  const handleUpgrade = () => {
    // The parent component listens for this message and redirects to the subscription page
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(
        { 
          type: 'codalio-upgrade-request',
        },
        '*'
      );
      return;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center px-6 py-16">
      <Card className="max-w-md w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
        <CardBody className="p-8 text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-[var(--color-text)]">Page Locked</h1>
            <p className="text-[var(--color-text)]">
              This page is locked on the free plan. Upgrade to unlock all pages and access the full application.
            </p>
          </div>
          <Button
            size="lg"
            className="w-full bg-[var(--color-primary)] text-[var(--color-text)] font-semibold rounded-full"
            onPress={handleUpgrade}
          >
            Upgrade Now
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
