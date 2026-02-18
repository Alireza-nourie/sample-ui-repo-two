
        import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
        export default function Header() {
  const [search, setSearch] = useState("");
        return (
            <Navbar maxWidth="xl" className="bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)] rounded-none">
    <NavbarContent justify="start">
    <NavbarBrand>
    <Link to="/" className="text-[var(--color-text)] font-semibold">EudaiMotors</Link>
    </NavbarBrand>
    </NavbarContent>
    <NavbarContent justify="center" className="hidden md:flex">
    <NavbarItem>
    <Input
    value={search}
    onValueChange={setSearch}
    placeholder="Search..."
    classNames={{ inputWrapper: 'bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl', input: 'text-[var(--color-text)] placeholder:text-[var(--color-text)]/60' }}
    startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
    />
    </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
    <Button className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]">Action</Button>
    </NavbarContent>
    </Navbar>
        );
        }
