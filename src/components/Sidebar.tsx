import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { navLinks, socialLinks } from "@/constants"
import { useState } from "react"


export const Sidebar = () => {

  const [active, setActive] = useState('#hero')

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <MenuIcon size={30} />
          </Button>
        </SheetTrigger>
      </Sheet>
    </>
  )
}