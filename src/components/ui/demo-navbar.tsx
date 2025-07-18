"use client";
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#top', icon: Home },
    { name: 'About', url: '#timeline', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Resume', url: '#resume', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 