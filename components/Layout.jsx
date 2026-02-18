
        import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Badge, Switch, Divider, Tooltip } from "@heroui/react";
import { 
  HomeIcon,
  MapIcon,
  FireIcon,
  BellIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  UserCircleIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";
        export default function Layout({ children }) {
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
  const root = document.documentElement;
  if (isLight) {
  root.setAttribute('data-theme', 'light');
  } else {
  root.removeAttribute('data-theme');
  }
  }, [isLight]);

  const toggleTheme = (val) => {
  setIsLight(val);
  };
        return (
            <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
    <div className="flex min-h-screen">
    {/* Sidebar */}
    <aside className="hidden md:flex md:flex-col md:w-72 border-r border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-md">
    <div className="px-6 py-5 border-b border-[var(--color-border)]">
    <Link to="/" className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
    <FireIcon className="w-5 h-5 text-[var(--color-primary)]" />
    </div>
    <span className="text-lg font-semibold text-[var(--color-text)]">EudaiMotors Logistics Optimization Platform</span>
    </Link>
    </div>
    <nav className="flex-1 p-4 space-y-1">
    <NavLink to="/" className="flex items-center gap-3 px-3 py-2 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors duration-200" activeClassName="bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
    <HomeIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-sm text-[var(--color-text)]">Landing</span>
    </NavLink>
    <NavLink to="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors duration-200" activeClassName="bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
    <Cog6ToothIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-sm text-[var(--color-text)]">Dashboard</span>
    </NavLink>
    <NavLink to="/network-configuration" className="flex items-center gap-3 px-3 py-2 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors duration-200" activeClassName="bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
    <MapIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-sm text-[var(--color-text)]">Network Configuration</span>
    </NavLink>
    <NavLink to="/simulation" className="flex items-center gap-3 px-3 py-2 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors duration-200" activeClassName="bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
    <FireIcon className="w-5 h-5 text-[var(--color-text)]" />
    <span className="text-sm text-[var(--color-text)]">Simulation</span>
    </NavLink>

    <div className="mt-6 p-3 rounded-xl bg-[var(--color-background)]/60 border border-[var(--color-border)]">
    <p className="text-xs font-semibold text-[var(--color-text)]">Tip</p>
    <p className="text-xs text-[var(--color-text)]/80 mt-1">Use the Simulation page to run scenarios and compare results quickly.</p>
    </div>
    </nav>
    <div className="p-4 border-t border-[var(--color-border)]">
    <div className="flex items-center gap-3">
    <Avatar name="EM" className="w-8 h-8" />
    <div className="flex flex-col">
    <span className="text-sm font-medium text-[var(--color-text)]">Ops Team</span>
    <span className="text-xs text-[var(--color-text)]/70">EudaiMotors</span>
    </div>
    </div>
    </div>
    </aside>

    {/* Main content */}
    <div className="flex-1 flex flex-col min-w-0">
    {/* Header Bar */}
    <Navbar maxWidth="xl" className="sticky top-0 z-40 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
    <NavbarContent justify="start" className="gap-2 md:hidden">
    <NavbarBrand>
    <Link to="/" className="flex items-center gap-2">
    <span className="text-sm font-semibold text-[var(--color-text)]">EudaiMotors</span>
    </Link>
    </NavbarBrand>
    </NavbarContent>
    <NavbarContent justify="start" className="max-w-xl flex-1">
    <Input
    value={search}
    onValueChange={setSearch}
    placeholder="Search..."
    aria-label="Global search"
    classNames={{
    base: "w-full",
    inputWrapper: "input-focus-primary bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl",
    input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/60"
    }}
    startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
    />
    </NavbarContent>

    <NavbarContent justify="end" className="items-center gap-3">
    <Tooltip content={<span className="text-[var(--color-text)] text-xs">Toggle theme</span>}>
    <div className="flex items-center gap-2">
    <Switch
    size="sm"
    isSelected={isLight}
    onValueChange={toggleTheme}
    className="text-[var(--color-text)]"
    />
    <span className="text-xs text-[var(--color-text)] hidden lg:inline">{isLight ? "Light" : "Dark"}</span>
    </div>
    </Tooltip>

    <Dropdown>
    <DropdownTrigger>
    <Button isIconOnly variant="light" className="rounded-xl">
    <Badge content="3" color="danger">
    <BellIcon className="w-6 h-6 text-[var(--color-text)]" />
    </Badge>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Notifications" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[260px]" }}>
    <DropdownItem key="n1" className="text-[var(--color-text)]">3 new simulation results</DropdownItem>
    <DropdownItem key="n2" className="text-[var(--color-text)]">2 integrations need attention</DropdownItem>
    <DropdownItem key="n3" className="text-[var(--color-text)]">Daily KPI summary ready</DropdownItem>
    </DropdownMenu>
    </Dropdown>

    <Dropdown>
    <DropdownTrigger>
    <Button variant="light" className="rounded-xl px-2">
    <div className="flex items-center gap-2">
    <Avatar name="EM" className="w-7 h-7" />
    <ChevronDownIcon className="w-4 h-4 text-[var(--color-text)]" />
    </div>
    </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="User Menu" classNames={{ base: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl min-w-[220px]" }}>
    <DropdownItem key="profile" className="text-[var(--color-text)]">Profile</DropdownItem>
    <DropdownItem key="settings" className="text-[var(--color-text)]">Settings</DropdownItem>
    <DropdownItem key="logout" className="text-[var(--color-text)]" color="danger">Logout</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </NavbarContent>
    </Navbar>

    <main className="flex-1 p-4 md:p-6">
    {children}
    </main>
    </div>
    </div>
    </div>
        );
        }
