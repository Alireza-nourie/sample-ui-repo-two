
        import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@heroui/react";
import { EnvelopeIcon, GlobeAltIcon, ShareIcon } from "@heroicons/react/24/outline";
        export default function Footer() {
        return (
            <footer className="backdrop-blur-md bg-[var(--color-background)]/90 text-[var(--color-text)] border-t border-[var(--color-border)] py-8 px-4 rounded-t-2xl">
    <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-xl p-4 bg-[var(--color-surface)]/50">
    <h4 className="text-[var(--color-text)] font-semibold mb-3">About</h4>
    <p className="text-[var(--color-text)]/80 text-sm">EudaiMotors Logistics Optimization Platform</p>
    </div>
    <div className="rounded-xl p-4 bg-[var(--color-surface)]/50">
    <h4 className="text-[var(--color-text)] font-semibold mb-3">Quick Links</h4>
    <ul className="space-y-2">
    <li><Link to="/" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
    <li><Link to="/dashboard" className="text-[var(--color-text)] text-sm hover:text-[var(--color-primary)] transition-colors">Dashboard</Link></li>
    </ul>
    </div>
    <div className="rounded-xl p-4 bg-[var(--color-surface)]/50">
    <h4 className="text-[var(--color-text)] font-semibold mb-3">Follow us</h4>
    <div className="flex items-center gap-4">
    <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)]" aria-label="Social"><ShareIcon className="w-6 h-6" /></a>
    <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)]" aria-label="Website"><GlobeAltIcon className="w-6 h-6" /></a>
    <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)]" aria-label="Email"><EnvelopeIcon className="w-6 h-6" /></a>
    </div>
    </div>
    </div>
    <Divider className="my-8" />
    <div className="text-center">
    <p className="text-[var(--color-text)]/80 text-sm">© 2026 EudaiMotors. All rights reserved.</p>
    </div>
    </div>
    </footer>
        );
        }
