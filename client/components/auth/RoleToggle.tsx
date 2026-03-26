"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function RoleToggle({ role, setRole }: any) {
  return (
    <ToggleGroup
      type="single"
      value={role}
      onValueChange={(val) => val && setRole(val)}
      className="grid grid-cols-2 w-full outline outline-1 outline-black rounded-lg"
    >
      <ToggleGroupItem value="USER">User</ToggleGroupItem>
      <ToggleGroupItem value="ADMIN">Admin</ToggleGroupItem>
    </ToggleGroup>
  );
}